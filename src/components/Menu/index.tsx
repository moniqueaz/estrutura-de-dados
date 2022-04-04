import styled, { css } from 'styled-components';
import list from './menu';
import { Nav, List, ItemList } from 'components/Globals';

const Menu = () => <Main>
  <List>
    {
      list.map((item, index) => <ItemList key={`${item.name}-${index}`}>
        <Nav to={item.url}>
          {item.name}
        </Nav>
      </ItemList>)
    }

  </List>
</Main>;

export default Menu;

const Main = styled.div`
  ${( { theme } ) => css`
    background-color: ${theme.colors.primaryDark};
    height: 100%;
    width: 30rem;
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.white};
    padding: ${theme.spacings.small};
  `}
`;

// const List = styled.ul``;

// const Item = styled.li``;
