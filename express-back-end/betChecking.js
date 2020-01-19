const axios = require('axios');
const models = require('./models');
const Bet = models.Bet;
const UserBet = models.User_Bet;
const Op = require('sequelize').Op;
require('dotenv').config()

checkWinner = async (matchId) => {
  return await axios.get(`https://api.pandascore.co/matches/${matchId}?token=${process.env.TOKEN}`);
}

checkWinnerAndUpdateWinStatus = () => {

  return Bet.findAll({
    where: { bet_status: 'active' },
    attributes: ['id', 'matchId'],
  }).then((bets) => {
    bets.forEach((bet) => {
      checkWinner(bet.dataValues.matchId).then(async (rez) => {
        if (rez.data.winner) {

          // decide if team1 or team2 is winner
          const teamz = rez.data.name.split(' vs ');
          const winner = teamz[0] === rez.data.winner.acronym ? 'Team1' : 'Team2';

          let totalStakes = 0;
          let totalWinners = 0;
          let winners = [];

          // update bet status
          await Bet.findOne({
            where: {
              id: bet.dataValues.id,
              matchId: bet.dataValues.matchId
            }
          }).then((thisBet) => {
            this.totalStakes = totalStakes;
            totalStakes = parseInt(thisBet.dataValues.participants) * thisBet.dataValues.stakes;
            return thisBet.update({ bet_status: 'completed' });
          });

          // update all user bets
          await UserBet.findAll({
            where: {
              bet_id: bet.dataValues.id
            }
          }).then((allUserBet) => {

            allUserBet.forEach((userBet) => {
              let winnerCheck = userBet.dataValues.teamSelect === winner;

              // bind this.totalWinners to the one outside of the scope
              this.totalWinners = totalWinners;
              winnerCheck && totalWinners++;

              // bind this.winners to the one outside of the scope
              this.winners = winners;
              winnerCheck && winners.push(userBet.dataValues.user_id);

              userBet.update({
                userWinStatus: winnerCheck ? true : false,
                notificationType: winnerCheck ? 'win' : 'loss',
                notificationRead: false
              });
            });

            this.totalWinners = totalWinners;
            this.winners = winners;
            let avgStakes = totalWinners ? (totalStakes / totalWinners) : 0;

            // update earnOrLost for each user
            allUserBet.forEach((userBet) => {
              if (userBet.dataValues.userWinStatus) {
                userBet.update({
                  earnOrLost: avgStakes - userBet.dataValues.earnOrLost
                });
              }
            });

          }).then(() => {
            let avgStakes = totalWinners ? (totalStakes / totalWinners) : 0;

            // update winner bank
            winners.forEach((winner) => {
              models.User.findOne({ where: { id: winner } }).then((thisUser) => {
                thisUser.update({ bank: thisUser.dataValues.bank + avgStakes });
              })
            })
          })
        }
      }).catch((err) => {
        console.log(err);
      });
    });
  });
}

checkPendingBetsAndStartTime = () => {
  return Bet.findAll({
    where: {
      bet_status: 'pending',
      start_time: {
        [Op.lte]: new Date()
      }
    },
    include: [{ model: models.User, as: 'users' }]
  }).then((bets) => {
    bets.forEach((bet) => {
      bet.update(
        {
          bet_status: 'cancelled'
        },
        {
          returning: true,
          plain: true
        }).then((rez) => {
          rez.dataValues.users.forEach((user) => {
            if (user.dataValues.User_Bet.notificationType === 'inProgress') {
              user.update({ bank: user.dataValues.bank + bet.dataValues.stakes })
            }
          });
        })
    })
  })
}

module.exports = { checkWinnerAndUpdateWinStatus, checkPendingBetsAndStartTime }