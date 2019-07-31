import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link, BrowserRouter, Route } from 'react-router-dom';
import Status from '../../pages/status';
import Usuario from '../../pages/usuario';

import "./styles.css";

const { Header, Sider, Content } = Layout;


export default class Main extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  
  render() {
    
    return (      
      <BrowserRouter>
      <Layout>
        <Sider collapsible collapsed={this.state.collapsed}>
          <div className="logo">
            <div className="logo-menu">
              <img
                width="50" 
                height="50"
                src="https://omnes-pay.s3-sa-east-1.amazonaws.com/logo+yellow.png"
              />               
            </div>            
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>                
              <Menu.Item key="1">
                <Icon type="home" />
                <span>Home</span>
                <Link to={"/"}/>   
              </Menu.Item>
              <Menu.Item key="2">
                <Icon type="bar-chart" />
                <span>Gráficos</span>
              </Menu.Item>
              <Menu.Item key="3">
                <Icon type="user" />
                <span>Usuário</span>  
                <Link to={"/usuario"}/>      
              </Menu.Item>
              <Menu.Item key="4">
                <Icon type="logout" />
                <span>Sair</span>
              </Menu.Item>
            </Menu>      
          </div>      
        </Sider>
      <Layout>
      <Header style={{ background: '#fff', padding: 0 }}>
        <Icon
          className="trigger"
          type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={this.toggle}
        />
      </Header>
      <Content 
        style={{
          margin: '24px 16px',
          padding: 24,
          background: '#fff',
          minHeight: 800,
          }}
      >
        <Route exact path="/" component={Status} />
        <Route path="/usuario" component={Usuario} />
      </Content>
      </Layout>
      </Layout>
      </BrowserRouter>
    );
  }
}

