import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title="My Portfolio" scroll>
            <Navigation>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About Me</NavLink>
                <NavLink to="/resume">Resumé</NavLink>
                <NavLink to="/projects">Projects</NavLink>
                <NavLink to="/contact">Contact Me</NavLink>
            </Navigation>
        </Header>
        <Drawer title="My Portfolio">
            <Navigation>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About Me</NavLink>
                <NavLink to="/resume">Resumé</NavLink>
                <NavLink to="/projects">Projects</NavLink>
                <NavLink to="/contact">Contact Me</NavLink>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main />
        </Content>
    </Layout>
</div>
      </div>
    );
  }
}

export default App;
