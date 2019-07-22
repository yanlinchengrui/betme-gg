import React, { Component } from "react";
import axios from "axios";
import { Drawer, Form, Button, Col, Row, Input, Select, DatePicker, Icon } from 'antd';
import WrappedDynamicFieldSet from './addEmail'

const { Option } = Select;

class CreateBet extends Component {
  state = { visible: false };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Button type="primary" onClick={this.showDrawer}>
           Create Bet
        </Button>
        <Drawer
          title="Create a new bet"
          width={720}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <Form layout="vertical" hideRequiredMark>
            
          <Row gutter={16}>
              <Col span={16}>
                <Form.Item label="Select a match">
                  {getFieldDecorator('match', {
                    rules: [{ required: true, message: 'Please select a match' }],
                  })(
                    <Select placeholder="Please select a match">
                      <Option value="xiao"> SKTT1 vs. C9 </Option>
                      <Option value="mao"> Vancouver Titans vs. Florida Mayhem</Option>
                    </Select>,
                  )}
                </Form.Item>
              </Col>
              </Row>

              <Row gutter={16}>
              <Col span={16}>
                <Form.Item label="Select your team">
                  {getFieldDecorator('owner', {
                    rules: [{ required: true, message: 'Please select a team' }],
                  })(
                    <Select placeholder="Please select a team">
                      <Option value="xiao"> SKTT1 </Option>
                      <Option value="mao"> C9 </Option>
                    </Select>,
                  )}
                </Form.Item>
              </Col>
              </Row>

          
            <Row gutter={16}>
              <Col span={24}>
                <Form.Item label="Description">
                  {getFieldDecorator('description', {
                    rules: [
                      {
                        required: true,
                        message: 'please enter url description',
                      },
                    ],
                  })(<Input.TextArea rows={4} placeholder="please enter url description" />)}
                </Form.Item>
              </Col>
            </Row>

            <WrappedDynamicFieldSet/> 
          </Form>
          <div
            style={{
              position: 'absolute',
              left: 0,
              bottom: 0,
              width: '100%',
              borderTop: '1px solid #e9e9e9',
              padding: '10px 16px',
              background: '#fff',
              textAlign: 'right',
            }}
          >
            <Button onClick={this.onClose} style={{ marginRight: 8 }}>
              Cancel
            </Button>
            <Button onClick={this.onClose} type="primary">
              Create Bet!
            </Button>
          </div>
        </Drawer>
      </div>
    );
  }
}

export default Form.create()(CreateBet);
