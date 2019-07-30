import React, { Component } from 'react';
import { Form, Select } from 'antd';
import TeamPicker from './TeamPicker'

const { Option } = Select;

class MatchPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chosenTeam: ''
    }
  }

  handleChange = (value) => {
    this.setState({
      chosenTeam: value
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Form.Item label='Select a match'>
          {getFieldDecorator('match', {
            rules: [{ required: true }],
          })(
            <Select placeholder='Please select the match' onChange={this.handleChange}>
              {console.log(this.props.upcomingMatches)}
              {this.props.upcomingMatches.map((match) => {
                return (<Option key={match.id} value={match.name}>{match.name}</Option>);
              })}
            </Select>
          )}
        </Form.Item>
        <TeamPicker form={this.props.form} chosenTeam={this.state.chosenTeam} />
      </div>
    );
  }
}

export default MatchPicker;