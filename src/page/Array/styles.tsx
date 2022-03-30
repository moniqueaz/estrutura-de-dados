import styled, { css } from 'styled-components';
import { List, ItemList } from 'components/Globals';

type StyleProps = {
  type?: 'include' | 'warn' | 'remove' | 'none'
  moveLeft?: boolean
  moveRight?: boolean
  small?: boolean
  width?: number
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

const animation = {
  include: css`
    opacity: 0;
    animation: include 5s linear infinite;
    `,
  remove: css`
    opacity: 1;
    animation: remove 5s linear infinite;
  `,
  warn: '',
  none: '',
};

export const ItemArray = styled(ItemList)<StyleProps>`
  ${( { theme, type = 'none', moveLeft, moveRight } ) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;

    ${animation[type]};

    @keyframes include {
      0% {opacity: 0}
      50% {opacity: 1}
      100% {opacity: 1}
    }
    @keyframes remove {
      0% {opacity: 1}
      50% {opacity: 1}
      100% {opacity: 0}
    }

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
    ${( { theme, type = 'none', small, width = 50 } ) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${width}px;
    height: 50px;
    border: 2px solid ${theme.colors.primaryDark};
    background-color: ${theme.colors.primary};
    ${type === 'include' && css`
      border: 2px dashed ${theme.colors.secondaryDark};
      background-color: ${theme.colors.secondary};
    `}

    ${type === 'warn' && css`
      border: 2px dashed ${theme.colors.ternaryDark};
      background-color: ${theme.colors.ternary};
    `}

    ${type === 'remove' && css`
      border: 2px dashed ${theme.colors.quartenaryDark};
      background-color: ${theme.colors.quartenary};
    `}

    ${small && css`
      font-size: ${theme.font.sizes.xxxsmall}
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
