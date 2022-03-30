import { Wrapper, Title, Block, Pre, Code } from 'components/Globals';
import { ListArray, Box, Index, ItemArray } from './styles';

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export const InitArray = () => <Block>
  <Title>Array</Title>
  <Pre>
    <Code>
      {
        `
          let numbers = [1,2,3,4,5,6,7,8,9];
        `
      }
    </Code>
  </Pre>
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
</Block>;
