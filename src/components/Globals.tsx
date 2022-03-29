import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

type StyleProps = {
  gap?: number
  vertical?: number
  horizontal?: number
}

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

export const Title = styled.h1`
  ${( { theme } ) => css`
    padding: 10px 0;
    text-align: center;
    font-size: ${theme.font.sizes.xxlarge};
  `}
`;

export const SubTitle = styled.h2`
  ${( { theme } ) => css`
    padding: 10px 0;
    text-align: center;
    font-size: ${theme.font.sizes.medium};
  `}
`;

export const Text = styled.p`
  ${( { theme } ) => css`
    padding: 10px 0;
    font-size: ${theme.font.sizes.small};
  `}
`;

export const Nav = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export const Wrapper = styled.div<StyleProps>`
  ${( { gap, vertical, horizontal } ) => css`
    ${!!gap && css`padding: ${gap}px`};
    ${!!vertical && css`padding: ${vertical}px 0`};
    ${!!horizontal && css`padding: 0 ${horizontal}px`};
  `}
`;

export const Code = styled.div`
  ${( { theme } ) => css`
    font-size: ${theme.font.sizes.xxxsmall};
    line-height: ${theme.font.sizes.medium};
    border-left: 2px solid ${theme.colors.secondaryDark};
    padding-left: 5px;
    font-style: italic;
  `}
`;
