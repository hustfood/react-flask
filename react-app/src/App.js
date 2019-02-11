import React, { Component } from 'react';
import './App.css';

import { Layout, Menu, Icon } from 'antd';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
const { Header, Content, Footer } = Layout;

import PageOneComponent from './containers/PageOne';
import PageTwoComponent from './containers/PageTwo';

class App extends Component {
  render() {
      return (
              <div>
                  <Layout>
                      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                          <div className="logo">G68 APP</div>
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
                          Ant Design ©2018 Created by Ant UED
                      </Footer>
                  </Layout>
              </div>
      );
  }
}

export default App;
