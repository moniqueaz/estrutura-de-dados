import { Wrapper, Text, SubTitle, Block } from 'components/Globals';
import { ListArray, Box, Index, ItemArray } from './styles';
import { insert } from './utils';
import { Code } from 'helper';

const listInit = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const content = `
    // [${listInit.map(item => item).join(',')}];

    numbers[numbers.length] = 10;

    // [${insert(listInit, 10).join(',')}];

`;

export const InsertArray = () => <Block>
  <SubTitle>Inserindo um elemento no final do array</SubTitle>
  <Text>Acrescentando elementos</Text>
  <Code content={content} language="javascript"/>
  <Wrapper vertical={30}>
    <ListArray>
      {
        listInit.map((item, index) => <ItemArray key={item}>
          <Box>{item}</Box>
          <Index>[{index}]</Index>
        </ItemArray>)
      }
      <ItemArray type="include">
        <Box type="include">10</Box>
        <Index>[9]</Index>
      </ItemArray>
    </ListArray>
  </Wrapper>
</Block>;

export default InsertArray;
