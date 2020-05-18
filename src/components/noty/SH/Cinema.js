import React, { Component } from 'react';
import './Cinema.css';

class Cinema extends Component {
  constructor(props){ //render 보다 먼저 초기화 하고 싶은것이 있을떄 이안에서 한다.
    super(props);
    this.state = {
      loc:[
        {id:1, desc:[1,2,3,4,5,6,7,8,9]},
        {id:2, desc:[11,12,13,14,15,16,17,18,19]},
        {id:3, desc:[21,22,23,24,25,26,27,28,29]}
      ]
    }
  }

  render() {
    var listrow = [];
    var list = [];
    let i = 0;
    let locLen = this.state.loc.length;
    let k = 0;
    while(i < locLen){
      if(this.props.locnum === this.state.loc[i].id){
        for(let j = 0; j < Math.ceil(this.state.loc[i].desc.length/4); j++){
          while(k < this.state.loc[i].desc.length){
            list.push(<td>{this.state.loc[i].desc[k]}</td>);
            k += 1;
            if(k % 4 === 0)
              break;
          }
          listrow.push(<tr>{list}</tr>);
          list = [];
        }
        break;
      }
      i += 1;
    }

    return (
      <div className="Cinema">
        <table>
          <tr>
            <td className="c0" colSpan = '4'>영화관 선택</td>
          </tr>
          <div  className="c1">
            {listrow}
          </div>
        </table>
      </div>
    );
  }
}

export default Cinema;