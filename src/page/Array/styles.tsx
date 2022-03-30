import styled, { css } from 'styled-components';
import { List, ItemList } from 'components/Globals';

type StyleProps = {
  red?: boolean
  moveLeft?: boolean
  moveRight?: boolean
}

export const ListArray = styled(List)`
  ${( { theme } ) => css`
    color: ${theme.colors.white};
    display: grid;
    gap: 10px;
    grid-auto-flow: column;
    margin: 0 auto;
    justify-content: center;
  `}
`;

export const ItemArray = styled(ItemList)<StyleProps>`
  ${( { theme, red, moveLeft, moveRight } ) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;

    ${red && css`
      animation: start 5s linear infinite;
      opacity: 0;
      @keyframes start {
        0% {opacity: 0}
        50% {opacity: 1}
        100% {opacity: 1}
      }
    `}
    ${ moveRight && css`
      & + li{

        &:before{
          content: '';
          position: absolute;
          top: -30%;
          right: 31px;
          border-radius: 50%;
          border-top: 1px solid ${theme.colors.black};
          width: 50px;
          height: 40px;
        }
        &:after{
          content: '';
          position: absolute;
          width: 10px;
          height: 10px;
          border-top: 1px solid ${theme.colors.black};
          border-right: 1px solid ${theme.colors.black};
          right: 29px;
          transform: rotate(105deg);
          top: calc(-30% + 8px);
        }
      }
    `}
    ${ moveLeft && css`
      & + li{

        &:before{
          content: '';
          position: absolute;
          top: -30%;
          right: 29px;
          border-radius: 50%;
          border-top: 1px solid ${theme.colors.black};
          width: 50px;
          height: 40px;
        }
        &:after{
          content: '';
          position: absolute;
          width: 10px;
          height: 10px;
          border-bottom: 1px solid ${theme.colors.black};
          border-left: 1px solid ${theme.colors.black};
          left: -30px;
          transform: rotate(-5deg);
          top: calc(-30% + 8px);
        }
      }
    `}
  `};
`;

export const Box = styled.div<StyleProps>`
    ${( { theme, red } ) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border: 2px solid ${theme.colors.secondaryDark};
    background-color: ${theme.colors.secondary};
    ${red && css`
      border: 2px dashed ${theme.colors.primaryDark};
      background-color: ${theme.colors.primary};
    `}
  `}
`;

export const Index = styled.span`
  ${( { theme } ) => css`
    color: ${theme.colors.black};
    font-size: ${theme.font.sizes.xxsmall};
    margin-top: 10px;
  `}
`;
