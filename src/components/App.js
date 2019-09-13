import React from 'react';
import 'antd/dist/antd.css';
import './styles/logo.css';
import { mainComponents } from '../data/static/MainComponent'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import Ficha from './StudentInformation/Ficha'
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;


/*import './App.css';
/*
import ButtonAppBar from './components/Menu'
import General from './components/StudentInformation/General'
import HomePage from './components/HomePage'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PageNotFound from "./PageNotFound";*/
class App extends React.Component {
  constructor() {
    super();
   this.state = {
      currentMainComponent:''
   }
   this.changeCurrentMainComponent = this.changeCurrentMainComponent.bind(this);
  }
  
  changeCurrentMainComponent(currentComponent) {
     return (
       <div> 
          {mainComponents[currentComponent]}
       </div>
     )
  }
  render() {
  return (
    <Layout>
    <Header className="header">
      <div className="logo" />
      <h2 style={{color:'white'}}> ABCD </h2>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
      >

      </Menu>
    </Header>
    <Layout>
      <Sider width={200} style={{ background: '#fff' }}>
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          <SubMenu
            key="matricula"
            title={
              <span>
                <Icon type="schedule" />
                Matricula
              </span>
            }
          >
            <Menu.Item key="1"><Icon type="unordered-list" />List</Menu.Item>
            <Menu.Item key="nueva_matricula"><Icon type="file-add" />Nueva matricula</Menu.Item>
            <Menu.Item key="3"><Icon type="file-add" />Nueva Ficha</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <Icon type="laptop" />
                subnav 2
              </span>
            }
          >
            <Menu.Item key="5">option5</Menu.Item>
            <Menu.Item key="6">option6</Menu.Item>
            <Menu.Item key="7">option7</Menu.Item>
            <Menu.Item key="8">option8</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub3"
            title={
              <span>
               <Icon type="notification" /> 
                subnav 3
              </span>
            }
          >
            <Menu.Item key="9">option9</Menu.Item>
            <Menu.Item key="10">option10</Menu.Item>
            <Menu.Item key="11">option11</Menu.Item>
            <Menu.Item key="12">option12</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          
         
        </Breadcrumb>
        <Content
          style={{
            background: '#fff',
            padding: 24,
            margin: 0,
            minHeight: 500,
          }}
        >
         <Ficha/>
        </Content>
      </Layout>
    </Layout>
  </Layout>
  
  );
}
}

export default App;
