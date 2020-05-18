import React, { useState, useCallback } from 'react';
import styled, { css } from 'styled-components';
import Button from '../common/Button';
import Responsive from '../common/Responsive';
import palette from '../../lib/styles/palette';

const NavBlock = styled.div`
  margin-top: 1rem;
  button + button {
    margin-left: 0.5rem;
  }
`;
const StyledButton = styled(Button)`
  height: 2.125rem;
  & + & {
    margin-left: 0.5rem;
  }
`;
const CinemaListBlock = styled(Responsive)`
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
`;
const CinemaItemBlock = styled.div`
  width: calc(100% / 4);
  margin-bottom: 1rem;
  color: ${palette.gray[8]};
  font-weight: bold;
  border: none;
  background-color: white;
  cursor: pointer;
  &:hover {
    color: ${palette.cyan[7]};
  }
  img {
    width: 80%;
  }
  p {
    width: 80%;
    height: 21.6px;
  }
`;
const FilterBlock = styled.div`
  float: right;
  margin-right: 30px;
`;

//filter
const CinemaFilter = ({ onChange, option }) => {
  return (
    <>
      <select value={option} onChange={(e) => {
        onChange(e.target.value);
      }} className="cinemafilter">
        <option value="select" >Select an Option</option>
        <option value="date" >날짜순</option>
        <option value="name" >이름순</option>
      </select>
    </>
  )
}

const CiemaItem = ({ item }) => {
  const { movies, days, img, link } = item;
  return (
    <>
      {movies && (
        <CinemaItemBlock>
          <p>{movies}</p>
          <p>{days}</p>
          <a href={link} target="_blank">
            <img src={img} />
          </a>
        </CinemaItemBlock>
      )}
    </>
  );
};
//FilterBlock 필터추가
const CinemaNav = ({ onClick, items, onUpdate, onChange, user, option}) => { //props추가
  let _id = '';
  return (
    <>
      <NavBlock>

        <FilterBlock> 
        {items &&
          <CinemaFilter onChange={onChange} option={option}/>}
        </FilterBlock>

        <StyledButton
          onClick={(e) => {
            onClick(e.target.value);
          }}
          value="cgv"
        >
          CGV
        </StyledButton>
        <StyledButton
          onClick={(e) => {
            onClick(e.target.value);
          }}
          value="megabox"
        >
          MEGABOX
        </StyledButton>
        <StyledButton
          onClick={(e) => {
            onClick(e.target.value);
          }}
          value="lotte"
        >
          LOTTE
        </StyledButton>
        {user ? (
          user._id === '5eba3ae482aaf43850856071' &&
          <StyledButton onClick={onUpdate} cyan>
            UPDATE
          </StyledButton>
        ) : (
          ''
        )}
      </NavBlock>
      <CinemaListBlock>     
        {items &&
          items.map((item, index) => <CiemaItem item={item} key={index} />)}
      </CinemaListBlock>
    </>
  );
};

export default CinemaNav;
