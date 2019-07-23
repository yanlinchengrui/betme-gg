import React, { Component } from "react";
import { Form, Select } from 'antd';

const { Option } = Select;

class MatchPicker extends Component {
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form.Item label="Select a match">
        {getFieldDecorator('match', {
          rules: [{ required: true }],
        })(
        <Select>
          <Option value="CLG vs C9">Counter Logic Gaming vs Cloud 9</Option>
          <Option value="VT vs FM">Vacouver Titans vs Florida Mayhem</Option>
          <Option value="MIBR vs REN">MIBR vs Renegades</Option>
          <Option value="CDC vs EG">Digital Chaos vs Evil Geniuses</Option>
        </Select>,
        )}
      </Form.Item>
    );
  }
}

export default MatchPicker;