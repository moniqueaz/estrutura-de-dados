import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

type StyleProps = {
  gap?: number
  vertical?: number
  horizontal?: number
  direction?: string
}

export const Container = styled.main`
  margin: 0 auto;
  max-width: 1024px;
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
    padding: 30px 0;
    text-align: center;
    font-size: ${theme.font.sizes.xxlarge};
  `}
`;

export const SubTitle = styled.h2`
  ${( { theme } ) => css`
    padding: 20px 0;
    text-align: center;
    font-size: ${theme.font.sizes.medium};
  `}
`;

export const Text = styled.p<StyleProps>`
  ${( { theme, direction } ) => css`
      padding: 10px 0;
      font-size: ${theme.font.sizes.small};
      text-align: ${direction};
    `}
  `;

export const Span = styled.span<StyleProps>`
  ${( { theme } ) => css`
    font-size: ${theme.font.sizes.xxsmall};
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

export const Code = styled.code`
  /* ${( { theme } ) => css`
      font-size: ${theme.font.sizes.xxxsmall};
      line-height: ${theme.font.sizes.medium};
      font-style: italic;

      & .comment {
        color: ${theme.colors.gray};
      }
    `} */
  `;

export const Pre = styled.pre`
  /* ${( { theme } ) => css`
    border-left: 2px solid ${theme.colors.secondaryDark};
    background-color: ${theme.colors.pre};
  `} */

`;

export const Block = styled.div`
  /* ${( { theme } ) => css`
    border-bottom: 1px dotted ${theme.colors.black};
    margin-bottom: ${theme.spacings.medium};
  `} */
`;
