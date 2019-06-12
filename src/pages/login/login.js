import React from 'react'
import {Icon,Input,Form,Button} from "antd";

import './login.less'
import logo from './images/logo.png'
const FormItem = Form.Item;
/*
  登入路由组件
*/
class Login extends React.Component{
    handleSubmit = (event) => {
        event.preventDefault();
        const form = this.props.form;
        console.log(form);
    };
    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <div className='login'>
                <header className='login-header'>
                    <img src={logo} alt="logo"/>
                    <h1>后台管理系统</h1>
                </header>
                <section className='login-content'>
                    <h2>用户登入</h2>
                    <Form className='login-form' onSubmit={this.handleSubmit}>
                        <FormItem>
                            {getFieldDecorator('username',{
                                rules: [{required: true, message: '请输入用户名'}],

                            })(
                                <Input  placeholder='Name' prefix={<Icon type='user' style={{color:'rgba(0,0,0,.25)'}}/>}/>
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('password',{
                                rules: [{required: true,message: '请输入密码'}]
                            })(
                                <Input type='password' placeholder='PassWord' prefix={<Icon type='lock' style={{color:'rgba(0,0,0,.25)'}}/>}/>
                            )}
                        </FormItem>
                        <FormItem>
                            <Button type='primary' htmlType='submit' className='login-form-button'>登入</Button>
                        </FormItem>
                    </Form>
                </section>
            </div>
        )
    }
}

export default Form.create()(Login);