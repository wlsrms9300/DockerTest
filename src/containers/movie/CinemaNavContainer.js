import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CinemaNav from '../../components/movie/CinemaNav';
import Responsive from '../../components/common/Responsive';
import styled from 'styled-components';
import { getListByCinema } from '../../modules/cinema';
import { crawlUpdate } from '../../modules/update';

const Wrapper = styled(Responsive)`
  align-items: center;
  background: white;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
`;

const CinemaNavContainer = () => {
  //필터선택
  const [ option, setOption ] = useState({
    option:'select',
  });

  const dispatch = useDispatch();
  const { cinema, user, selectedCinema } = useSelector(({ DBlists,user }) => ({
    cinema: DBlists.cinema,
    user: user.user,
    error: DBlists.error,
    selectedCinema: DBlists.selectedCinema,
  }));

  //영화관(cgv,megabox..) 선택
  const onClick = (cinema) => {
    console.log(cinema);
    dispatch(getListByCinema({cinema})); //filter없으면 undefind
  };
  //update버튼
  const onUpdate = () => {
    console.log('update호출');
    dispatch(crawlUpdate());
  };
  //filter적용 && slectbox값변경
  const onChange = (filter) => {
    setOption({option:filter}); //selectbox값
    let cinema = selectedCinema;
    dispatch(getListByCinema({cinema, filter}));
  };

  return (
    <Wrapper>
      <CinemaNav
        onClick={onClick}
        onChange={onChange} //필터이벤트
        items={cinema}
        onUpdate={onUpdate}
        user={user}
        option={option.option} //selectbox값
      />
    </Wrapper>
  );
};

export default withRouter(CinemaNavContainer);
