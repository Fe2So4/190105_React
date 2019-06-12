import React from 'react'
import './login.less'
import logo from './images/logo.png'
/*
  登入路由组件
*/
export default class Login extends React.Component{
    render() {
        return (
            <div className='login'>
                <header className='login-header'>
                    <img src={logo} alt="logo"/>
                    <h1>后台管理系统</h1>
                </header>
                <section className='login-content'>
                    <h2>用户登入</h2>
                    <div>Form表单组件</div>
                </section>
            </div>
        )
    }
}