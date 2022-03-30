import { Wrapper, Text, Code, Pre, Block } from 'components/Globals';
import { ListArray, Box, Index, ItemArray } from './styles';

const arr = [-3, -2, -1, 0, 1, 2, '...', 10, 11, 12];

export const PopArray = () => <Block>
  <Text>Usando o metodo pop</Text>
  <Pre>
    <Code>
      {
        `
          nunbers.pop()
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
      <ItemArray type="remove">
        <Box type="remove">13</Box>
        <Index>[16]</Index>
      </ItemArray>
    </ListArray>
  </Wrapper>
</Block>;
