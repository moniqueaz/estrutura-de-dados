import { Wrapper, Text, Code, Pre, Block } from 'components/Globals';
import { ListArray, Box, Index, ItemArray } from './styles';

const arr = [0, 1, 2, 3, 4, '...', 12, 13, 14];

export const UnshiftArray = () => <Block>
  <Text>Usando o metodo unshift</Text>
  <Pre>
    <Code>
      {
        `
        numbers.unshift(-1);
        numbers.unshift(-3, -2);
      `
      }
    </Code>
  </Pre>
  <Wrapper vertical={30}>
    <ListArray>
      <ItemArray red={true}>
        <Box red={true}>-1</Box>
        <Index>[0]</Index>
      </ItemArray>
      {
        arr.map((item, index) => <ItemArray key={item}>
          <Box>{item}</Box>
          <Index>[{typeof item === 'number' ? item + 1 : item}]</Index>
        </ItemArray>)
      }
    </ListArray>
  </Wrapper>
  <Wrapper vertical={30}>
    <ListArray>
      <ItemArray red={true}>
        <Box red={true}>-3</Box>
        <Index>[0]</Index>
      </ItemArray>
      <ItemArray red={true}>
        <Box red={true}>-2</Box>
        <Index>[1]</Index>
      </ItemArray>
      {
        [-1, ...arr].map((item, index) => <ItemArray key={item}>
          <Box>{item}</Box>
          <Index>[{typeof item === 'number' ? item + 3 : item}]</Index>
        </ItemArray>)
      }
    </ListArray>
  </Wrapper>
</Block>;
