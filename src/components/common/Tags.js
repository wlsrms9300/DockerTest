import React from 'react';
import palette from '../../lib/styles/palette';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import Button from '../common/Button';
import { Link } from 'react-router-dom';

const TagsBlock = styled.div`
  margin-top: 0.5rem;
  .tag {
    display: inline-block;
    color: ${palette.cyan[7]};
    text-decoration: none;
    margin-right: 0.5rem;
    &:hover {
      color: ${palette.cyan[6]};
    }
  }
`;
const Tags = ({tags}) => {
  return (
    <TagsBlock>
        {tags.map(tag=>(
            <Link className='tag' to={`/?tag=${tag}`} key={tag}>
                #{tag}
            </Link>
        ))}
    </TagsBlock>
  );
};
export default Tags;
