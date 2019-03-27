import React, { Component } from 'react';

import './App.css';

import PageOneComponent from './containers/PageOne';
import PageTwoComponent from './containers/PageTwo';

import { Layout, Menu, Icon } from 'antd';
import { Route, NavLink } from 'react-router-dom';

import appLogo from './logo.svg';

const { Header, Content, Footer } = Layout;


class App extends Component {
  render() {
      return (
              <div>
                  <Layout style={{ minHeight: '100vh' }}>
                      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                      <div className="logo"><img src={appLogo} alt=""/>G68 APP</div>
                          <Menu
                              theme="dark"
                              mode="horizontal"
                              defaultSelectedKeys={[this.props.match.path.split("/").slice(-1).pop()]}
                              style={{ lineHeight: '64px' }}
                          >
                              <Menu.Item key="one">
                                  <NavLink to="/one"><Icon type="ant-design" />Nav 1</NavLink>
                              </Menu.Item>
                              <Menu.Item key="two">
                                  <NavLink to="/two"><Icon type="ant-design" />Nav 2</NavLink>
                              </Menu.Item>
                          </Menu>
                      </Header>
                      <Content style={{ padding: '0 50px', marginTop: 104 }}>
                          <div style={{ background: '#fff', padding: 24 }}>
                              <Route path="/one" component={PageOneComponent} />
                              <Route path="/two" component={PageTwoComponent} />
                          </div>
                      </Content>
                      <Footer style={{ textAlign: 'center' }}>
                          G68APP ©2019 Owned by foojamfung
                      </Footer>
                  </Layout>
              </div>
      );
  }
}

export default App;
