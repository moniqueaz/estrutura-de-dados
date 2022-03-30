import { Wrapper, Text, SubTitle, Code, Pre, Block } from 'components/Globals';
import { ListArray, Box, Index, ItemArray } from './styles';

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export const InsertArray = () => <Block>
  <SubTitle>Inserindo um elemento no final do array</SubTitle>
  <Text>Acrescentando elementos</Text>
  <Pre>
    <Code>
      {
        `
          numbers[numbers.length] = 10;
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
      <ItemArray red={true}>
        <Box red={true}>10</Box>
        <Index>[9]</Index>
      </ItemArray>
    </ListArray>
  </Wrapper>
</Block>;
