import React, { Component } from "react";
import axios from "axios";
import { Drawer, Form, Button, Col, Row, InputNumber, Select} from 'antd';
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
        console.log('Merged values:', keys.map(key => names[key]));
      }
    });
  };

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showNewBet}>
           New Bet
        </Button>
        <Drawer
          title="Create a new bet!"
          width={350}
          className="new-bet"
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <Form layout="vertical" hideRequiredMark>

            {/* START MATCH PICKER */}
            <Row type="flex">
              <Col span={24}>
                <MatchPicker form={this.props.form}/>
              </Col>
            </Row>
            {/* END MATCH PICKER */}

            {/* START TEAM PICKER */}
            <Row type="flex">
              <Col span={24}>
                  <TeamPicker form={this.props.form}/>
              </Col>
            </Row>
            {/* END TEAM PICKER */}

            {/* START STAKES INPUT */}
            <Row type="flex">
              <Col span={24}>
                <Form.Item label="Place your bet">
                  <InputNumber
                    defaultValue={0}
                    formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    parser={value => value.replace(/\$\s?|(,*)/g, '')}
                  />
                </Form.Item>
              </Col>
            </Row>
            {/* END STAKES INPUT  */}
            
            {/* START INVITE FRIENDS */}
            <Row type="flex">
              <Col span={24}>
                <InviteFriends/>
              </Col>
            </Row>
            {/* END INVITE FRIENDS */}
            
            <div className="new-bet__actions">
              <Button onClick={this.onClose} style={{ marginRight: 8 }}>
                Cancel
              </Button>
              <Button onClick={this.handleSubmit} type="primary">
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
