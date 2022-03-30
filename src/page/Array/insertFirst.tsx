import { Wrapper, Text, Code, Pre, Block, Span } from 'components/Globals';
import { ListArray, Box, Index, ItemArray } from './styles';

const arr = [1, 2, 3, 4, '...', 11, 12, 13, '...'];

export const InsertFirstArray = () => <Block>
  <Text>Inserindo um elemento na primeira posição</Text>
  <Pre>
    <Code>
      {
        `
        Array.proptype.insertFirstPosition = function(value) {
          for(let i = this.leght; i >= 0; i++){
            this[i] = this[i - 1];
          };
          this[0] = value;
        };
        nunbers.insertFirstPositions(-1);
      `
      }
    </Code>
  </Pre>
  <Wrapper vertical={30}>
    <ListArray>
      {
        arr.map(item => <ItemArray key={item} moveRight={true}>
          <Box>{item}</Box>
          <Index>[{typeof item === 'number' ? item - 1 : item}]</Index>
        </ItemArray>)
      }
    </ListArray>
    <Text direction="right">
      <Span>
        [length = 14]
      </Span>
    </Text>
  </Wrapper>
  <Wrapper vertical={30}>
    <ListArray>
      <ItemArray red={true}>
        <Box red={true}>-1</Box>
        <Index>[0]</Index>
      </ItemArray>
      {
        arr.map((item, index) => <ItemArray key={item}>
          <Box>{item}</Box>
          <Index>[{index}]</Index>
        </ItemArray>)
      }
    </ListArray>
  </Wrapper>
</Block>;
