import React, { useState } from 'react';
import './MovieList.css';
const MovieList = () => {
  const [movielist, setMovielist] = useState([
    { id: 1, name: '라라랜드', state: 0 },
    { id: 2, name: '어벤져스', state: 0 },
    { id: 3, name: '저 산 너머', state: 0 },
    { id: 4, name: '1917', state: 0 },
    { id: 5, name: '라라걸', state: 0 },
    { id: 6, name: '주디', state: 1 },
    { id: 7, name: '너의 이름은', state: 0 },
    { id: 8, name: '인셉션', state: 0 },
    { id: 9, name: '유령선', state: 1 },
    { id: 10, name: '바이올렛 에버가든', state: 0 },
    { id: 11, name: '어벤져스:인피니티 워', state: 0 },
    { id: 12, name: '헌트', state: 0 },
    { id: 13, name: '울트라맨', state: 0 },
  ]);

  // const BoardItem = movielist.map(list => <td key={list.id}>{list.name}</td>);

  let size = movielist.length / 3 + 1;
  let rows = [];
  for (var i = 0; i < size; i++) {
    let cell = [];
    let cellSize = 3 + 3 * i;
    for (let z = 0 + 3 * i; z < cellSize; z++) {
      if (z < movielist.length) {
        if (movielist[z].state === 0) {
          cell.push(<td key={movielist[z].id}>{movielist[z].name}</td>);
        } else {
          cell.push(
            <td key={movielist[z].id} className="preparing-movie">
              {movielist[z].name}
              <input type="button" className="notice-bt" value="알림"></input>
            </td>,
          );
        }
      } else {
        break;
      }
    }
    rows.push(<tr key={i}>{cell}</tr>);
  }

  return (
    <div className="list-table">
      <table>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
};

export default MovieList;
