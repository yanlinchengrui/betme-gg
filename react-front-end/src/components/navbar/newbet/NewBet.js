import React, { Component } from 'react';
import axios from 'axios';
import { Drawer, Form, Button, Col, Row, InputNumber, Select } from 'antd';
import MatchPicker from './MatchPicker'
import TeamPicker from './TeamPicker'
import InviteFriends from './InviteFriends'

const { Option } = Select;

class NewBet extends Component {
  state = { visible: false };

  showNewBet = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const { keys, names } = values;
        console.log('Received values of form: ', values);
        //console.log('Merged values:', keys.map(key => names[key]));
        // values.owner = 'FAKER';
        // values.userid = 1;
        axios.post('http://localhost:8080/bets', values, { withCredentials: true })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Button type='primary' onClick={this.showNewBet}>
          New Bet
        </Button>
        <Drawer
          title='Create a new bet!'
          width={350}
          className='new-bet'
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <Form layout='vertical' hideRequiredMark>
            <Row type='flex'>
              <Col span={24}>
                <MatchPicker form={this.props.form} />
              </Col>
            </Row>
            <Row type='flex'>
              <Col span={24}>
                <TeamPicker form={this.props.form} />
              </Col>
            </Row>
            <Row type='flex'>
              <Col span={24}>
                <Form.Item label='Place your bet'>
                  {getFieldDecorator('stakes', { initialValue: 0 })(
                    <InputNumber
                      formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                      parser={value => value.replace(/\$\s?|(,*)/g, '')}
                    />
                  )}
                </Form.Item>
              </Col>
            </Row>
            <Row type='flex'>
              <Col span={24}>
                <InviteFriends form={this.props.form} />
              </Col>
            </Row>
            <div className='new-bet__actions'>
              <Button onClick={this.handleSubmit} type='primary'>
                Create Bet!
              </Button>
            </div>
          </Form>
        </Drawer>
      </div>
    );
  }
}

export default Form.create()(NewBet);
