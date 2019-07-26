import React, { Component } from 'react';
import { Form, Input, Icon, Button } from 'antd';

let id = 0;

class InviteFriends extends Component {
  remove = k => {
    const { form } = this.props;
    // can use data-binding to get
    const keys = form.getFieldValue('keys');
    // We need at least one email
    if (keys.length === 1) {
      return;
    }

    // can use data-binding to set
    form.setFieldsValue({
      keys: keys.filter(key => key !== k),
    });
  };

  add = () => {
    const { form } = this.props;
    // can use data-binding to get
    const keys = form.getFieldValue('keys');
    const nextKeys = keys.concat(id++);
    // can use data-binding to set
    // important! notify form to detect changes
    form.setFieldsValue({
      keys: nextKeys,
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
    const { getFieldDecorator, getFieldValue } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 4 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 20 },
      },
    };
    const formItemLayoutWithOutLabel = {
      wrapperCol: {
        xs: { span: 24, offset: 0 },
        sm: { span: 20, offset: 4 },
      },
    };
    const formBtn = {
      wrapperCol: {
        xs: { span: 24, offset: 0 },
        sm: { span: 24, offset: 0 },
      },
    };
    getFieldDecorator('keys', { initialValue: [] });
    const keys = getFieldValue('keys');
    const formItems = keys.map((k, index) => (
      <Form.Item
        {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
        label={index === 0 ? 'Email' : ''}
        required={true}
        key={k}
      >
        {getFieldDecorator(`emails[${k}]`, {
          validateTrigger: ['onChange', 'onBlur'],
          rules: [
            {
              required: true,
              whitespace: true,
              message: 'Add your friend\'s emails!',
            },
          ],
        })(<Input 
          prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
          style={{ width: '90%', marginRight: '8px' }}
        />)}
        {keys.length > 1 ? (
          <Icon
            className='dynamic-delete-button'
            type='minus-circle-o'
            onClick={() => this.remove(k)}
          />
        ) : null}
      </Form.Item>
    ));
    return (
      <div>
        {formItems}
        <Form.Item {...formBtn}>
          <Button type="dashed" className='email-field__btn' onClick={this.add}>
            Invite your friends!
          </Button>
        </Form.Item>
      </div>
    );
  }
}

export default Form.create({ name: 'invite_friends' })(InviteFriends);
