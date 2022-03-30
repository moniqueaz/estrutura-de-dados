import { Wrapper, Text, SubTitle, Code, Pre, Block } from 'components/Globals';
import { ListArray, Box, Index, ItemArray } from './styles';

const arr = [-3, -2, -1, 0, 1, 2, '...', 10, 11, 12];

export const RemoveFirstArray = () => <Block>
  <SubTitle>Removendo um elemento do inicio do array</SubTitle>
  <Text>Removendo elementos</Text>
  <Pre>
    <Code>
      {
        `
          for(let i == 0; i < numbers.lenght; i++) {
            numbers[i] = nunbers[i + 1];
          }
        `
      }
    </Code>
  </Pre>
  <Wrapper vertical={30}>
    <ListArray>
      <ItemArray moveLeft={true}>
        <Box type="warn">-4</Box>
        <Index>[0]</Index>
      </ItemArray>
      {
        arr.map((item, index) => <ItemArray key={item} moveLeft={true}>
          <Box>{item}</Box>
          <Index>[{typeof item === 'number' ? item + 4 : item}]</Index>
        </ItemArray>)
      }
    </ListArray>
  </Wrapper>
  <Wrapper vertical={30}>
    <ListArray>
      {
        arr.map((item, index) => <ItemArray key={item}>
          <Box>{item}</Box>
          <Index>[{typeof item === 'number' ? item + 3 : item}]</Index>
        </ItemArray>)
      }
      <ItemArray>
        <Box type="warn" small={true} width={100}>undefined</Box>
        <Index>[16]</Index>
      </ItemArray>
    </ListArray>
  </Wrapper>
</Block>;
