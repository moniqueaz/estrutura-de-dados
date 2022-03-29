import styled, { css } from 'styled-components';
import { Wrapper, Title, List, ItemList, Text, SubTitle, Code } from 'components/Globals';

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

type StyleProps = {
  red?: boolean
}

const Array = () =>
  <>
    <Title>Array</Title>
    <Wrapper vertical={30}>
      <ListArray>
        {
          arr.map((item, index) => <ItemArray key={item}>
            <Box>{item}</Box>
            <Index>[{index}]</Index>
          </ItemArray>)
        }
        <ItemArray>
          <Box>...</Box>
          <Index>[n]</Index>
        </ItemArray>
      </ListArray>
    </Wrapper>
    <SubTitle>Inserindo um elemento no final do array</SubTitle>
    <Text>Acrescentando elementos</Text>
    <Code>
      let numbers = [1,2,3,4,5,6,7,8,9];
      <br />
      numbers[numbers.length] = 10;
    </Code>
    <ListArray>
      {
        arr.map((item, index) => <ItemArray key={item}>
          <Box>{item}</Box>
          <Index>[{index}]</Index>
        </ItemArray>)
      }
      <ItemArray red={true}>
        <Box red={true}>10</Box>
        <Index>[9]</Index>
      </ItemArray>
    </ListArray>
  </>;

export default Array;

const ListArray = styled(List)`
  ${( { theme } ) => css`
    color: ${theme.colors.white};
    display: grid;
    gap: 10px;
    grid-auto-flow: column;
    width: 100%;
    max-width: 620px;
    margin: 0 auto;
  `}
`;

const ItemArray = styled(ItemList)<StyleProps>`
  ${( { theme, red } ) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    ${red && css`
      animation: start 5s linear infinite;
      opacity: 0;
      @keyframes start {
        0% {opacity: 0}
        50% {opacity: 1}
        100% {opacity: 1}
      }
    `}
  `};
`;

const Box = styled.div<StyleProps>`
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

const Index = styled.span`
  ${( { theme } ) => css`
    color: ${theme.colors.black};
    font-size: ${theme.font.sizes.xxsmall};
    margin-top: 10px;
  `}
`;
