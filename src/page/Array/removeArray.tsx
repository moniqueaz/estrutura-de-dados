import { Wrapper, Text, SubTitle, Code, Pre, Block } from 'components/Globals';
import { ListArray, Box, Index, ItemArray } from './styles';

const arr = [-3, -2, -1, 0, 1, 2, '...', 11, 12, 13];

export const RemoveArray = () => <Block>
  <SubTitle>Removendo um elemento do final do array</SubTitle>
  <Text>Removendo elementos</Text>
  <Pre>
    <Code>
      {
        `
          numbers[numbers.length] = undefined;
        `
      }
    </Code>
  </Pre>
  <Wrapper vertical={30}>
    <ListArray>
      {
        arr.map(item => <ItemArray key={item}>
          <Box>{item}</Box>
          <Index>[{typeof item === 'number' ? item + 3 : item}]</Index>
        </ItemArray>)
      }
      <ItemArray>
        <Box yellow={true} small={true} width={100}>undefined</Box>
        <Index>[17]</Index>
      </ItemArray>
    </ListArray>
  </Wrapper>
</Block>;
