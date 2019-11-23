import React from "react";
import { Layout, Menu, Icon } from "antd";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./Home";
import Resume from "./Resume";
import Dots_And_Boxes from "./Dots_And_Boxes_Game_Src_Code/Dots_And_Boxes"

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class App extends React.Component {
  state = {
    collapsed: false
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  menuIcon(type, name, keyValue) {
    return (
      <Menu.Item key={keyValue}>
        <Icon type={type} />
        <span>{name}</span>
        <Link to={"/" + name} />
      </Menu.Item>
    );
  }

  render() {
    return (
      <Router>
        <Layout style={{ minHeight: "100vh" }}>
          <Sider
            collapsible
            collapsed={this.state.collapsed}
            onCollapse={this.onCollapse}
          >
            <div className="logo" />
            <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
              {this.menuIcon("home", "Home", "1")}
              {this.menuIcon("file", "Resume", "2")}
              <SubMenu
                key="sub1"
                title={
                  <span>
                    <Icon type="project" />
                    <span>Projects</span>
                  </span>
                }
              >
                {this.menuIcon("file-search", "Chrome Project", "3")}
                {this.menuIcon("line", "Snake", "4")}
                {this.menuIcon("line", "Game", "5")}
              </SubMenu>
              {this.menuIcon("rocket", "Writings", "6")}
            </Menu>
          </Sider>
          <Layout>
            <Content style={{ margin: "0 16px" }}>
              <div>
                <Route exact path="/Home" component={Home} />
                <Route exact path="/Resume" component={Resume} />
                <Route exact path="/Chrome Project" component={Home} />
                <Route exact path="/Snake" component={Home} />
                <Route exact path="/Writings" component={Home} />
                <Route exact path="/Game" component={Dots_And_Boxes} />
              </div>
            </Content>
            <Footer style={{ textAlign: "center" }}>
              Ant Design ©2018 Created by Ant UED
            </Footer>
          </Layout>
        </Layout>
      </Router>
    );
  }
}
export default App;
