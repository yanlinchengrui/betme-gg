# Betme.gg

A betting application allowing users to watch, see upcoming, and bet against their friends on Esport matches using a proprietary currency called GG coins. It sources upcoming match data and results from PandaScore API. Twitch integration allows users to watch the matches and offers chatting with other viewers by WebSocket. The server will be responsible for not only determining winners and losers by the result provided by PandaScore, but also cancelling the bets if there are insufficient users in the bet when the match has started.

## Screenshots

!["Dashboard"](https://github.com/yanlinchengrui/betme-gg/blob/master/docs/dashboard.png)

!["Notification"](https://github.com/yanlinchengrui/betme-gg/blob/master/docs/notification.png)

!["CreatingBets"](https://github.com/yanlinchengrui/betme-gg/blob/master/docs/createBets.png)

!["StreamAndChat"](https://github.com/yanlinchengrui/betme-gg/blob/master/docs/streamAndChat.png)

!["Profile"](https://github.com/yanlinchengrui/betme-gg/blob/master/docs/profile.png)


## Stacks:

Frontend: 
- React
- React router
- Ant Design

Backend: 
- Node
- Express
- Sequelize
- WebSocket

Database:
- PostgreSQL


## Getting Started

1. Install dependencies using the `npm install` command for both react-front-end and express-back-end folders.
2. Start the client-side app and server using the `npm start` command. The client-side app will be served at <http://localhost:3000/> and server will be served at <http://localhost:8080/>
3. Need to register for PandaScore API and paste the token in the .env files in both folders.
4. Make sure connect to your own database and migrate tables and seeds.
5. Go to <http://localhost:3000/> in your browser.

## Authors

* **Peter Yan** - [yanlinchengrui](https://github.com/yanlinchengrui)
* **Nick Jenvey** - [nickjenvey](https://github.com/nickjenvey)
* **Govind Sandhu** - [govsandhu](https://github.com/govsandhu)