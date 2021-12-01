import React, { Component } from 'react';
import ChatRight from './ChatRight';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

export default class Layouts extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Sidebar/>
        <ChatRight/>
      </div>
    );
  }
}

