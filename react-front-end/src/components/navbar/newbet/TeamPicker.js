import React, { Component } from 'react';
import { Form, Select } from 'antd';

const { Option } = Select;

class TeamPicker extends Component {
  render() {
    const { getFieldDecorator } = this.props.form;
    { console.log(this.props.chosenTeam) }
    const teams = this.props.chosenTeam && this.props.chosenTeam.split(" vs ");
    return (
      <Form.Item label='Select your team'>
        {getFieldDecorator('team', {
          rules: [{ required: true }],
        })(
          <Select placeholder='Please select your team'>
            {this.props.chosenTeam && teams[0] && <Option value="Team1">{teams[0]}</Option>}
            {this.props.chosenTeam && teams[1] && <Option value="Team2">{teams[1]}</Option>}
          </Select>
        )}
      </Form.Item>
    );
  }
}

export default TeamPicker;