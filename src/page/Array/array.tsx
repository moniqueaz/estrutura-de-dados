import { Wrapper, Title, Block, Pre, Code } from 'components/Globals';
import { ListArray, Box, Index, ItemArray } from './styles';

const listInit = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export const InitArray = () => <Block>
  <Title>Array</Title>
  <Pre>
    <Code>
      {
        `
          let numbers = [${listInit.map(item => item).join(',')}];`
      }
    </Code>
  </Pre>
  <Wrapper vertical={30}>
    <ListArray>
      {
        listInit.map((item, index) => <ItemArray key={item}>
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
