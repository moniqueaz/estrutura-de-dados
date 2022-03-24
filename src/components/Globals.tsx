import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.main`
  margin: 0 auto;
  max-width: 1240px;
  width: 100%;
`;

export const List = styled.ul`
  list-style: none;
`;

export const ItemList = styled.li`
  text-transform: capitalize;
  padding: 5px 0;
`;

export const Text = styled.p``;

export const Nav = styled(Link)`
  text-decoration: none;
  color: inherit;
`;
