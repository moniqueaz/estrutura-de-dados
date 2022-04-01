import { Wrapper, Title, Block } from 'components/Globals';
import { ListArray, Box, Index, ItemArray } from './styles';
import { Code } from 'helper';

const listInit = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const content = `
  let numbers = [${listInit.map(item => item).join(',')}];

`;

export const InitArray = () => <Block>
  <Title>Array</Title>
  <Code content={content} language="javascript"/>
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
