import React, { Component } from 'react';
import './Cinemamenu.css';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import palette from '../../../lib/styles/palette';

class Cinemamenu extends Component {
  constructor(props) {
    //render 보다 먼저 초기화 하고 싶은것이 있을떄 이안에서 한다.
    super(props);
    this.state = {
      contents: [
        { id: 1, title: 'CGV' },
        { id: 2, title: '메가박스' },
        { id: 3, title: '롯데시네마' },
      ],
    };
  }

  render() {
    var lists = [];
    var data = this.state.contents;
    var i = 0;
    while (i < this.state.contents.length) {
      lists.push(
        <li key={data[i].id}>
          <Link
            href={'/'}
            data-id={data[i].id}
            onClick={function (e) {
              e.preventDefault();
              this.props.onChangePage(e.target.dataset.id);
            }.bind(this)}
          >
            {data[i].title}
          </Link>
        </li>,
      );
      i += 1;
    }
    return (
        <div className="Cinemamenu">
          <nav>
            <ul>{lists}</ul>
          </nav>
        </div>
    );
  }
}

export default Cinemamenu;
