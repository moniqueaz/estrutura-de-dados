import { Wrapper, Text, Code, Pre, Block } from 'components/Globals';
import { ListArray, Box, Index, ItemArray } from './styles';

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export const PushArray = () => <Block>
  <Text>Usando o metodo push</Text>
  <Pre>
    <Code>
      {
        `
        numbers.push(11);
        numbers.push(12, 13);
      `
      }
    </Code>
  </Pre>
  <Wrapper vertical={30}>
    <ListArray>
      {
        [...arr, 10].map((item, index) => <ItemArray key={item}>
          <Box>{item}</Box>
          <Index>[{index}]</Index>
        </ItemArray>)
      }
      <ItemArray red={true}>
        <Box red={true}>11</Box>
        <Index>[10]</Index>
      </ItemArray>
      <ItemArray red={true}>
        <Box red={true}>12</Box>
        <Index>[11]</Index>
      </ItemArray>
      <ItemArray red={true}>
        <Box red={true}>13</Box>
        <Index>[12]</Index>
      </ItemArray>
    </ListArray>
  </Wrapper>
</Block>;
