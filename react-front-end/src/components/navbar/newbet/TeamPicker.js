import React, { Component } from "react";
import { Form, Select } from 'antd';

const { Option } = Select;

class TeamPicker extends Component {
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form.Item label="Select your team">
        {getFieldDecorator('team', {
          rules: [{ required: true }],
        })(
        <Select placeholder='Please select your team'>
          <Option value="CLG">Counter Logic Gaming</Option>
          <Option value="C9">Cloud 9</Option>
        </Select>,
        )}
      </Form.Item>
    );
  }
}

export default TeamPicker;