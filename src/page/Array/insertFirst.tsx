import { Wrapper, Text, Code, Pre, Block, Span } from 'components/Globals';
import { ListArray, Box, Index, ItemArray } from './styles';

const arr = [1, 2, 3, 4, '...', 12, 13, 14];

const ListOne = () => <ListArray>
  {
    arr.map(item => <ItemArray key={item} moveRight={true}>
      <Box>{item}</Box>
      <Index>[{typeof item === 'number' ? item - 1 : item}]</Index>
    </ItemArray>)
  }
  <ItemArray>
    <Box yellow={true}>...</Box>
    <Index>[14]</Index>
  </ItemArray>
</ListArray>;
const ListTwo = () => <ListArray>
  <ItemArray>
    <Box yellow={true}></Box>
    <Index>[0]</Index>
  </ItemArray>
  {
    arr.map(item => <ItemArray key={item}>
      <Box>{item}</Box>
      <Index>[{item}]</Index>
    </ItemArray>)
  }
</ListArray>;
const ListTree = () => <ListArray>
  <ItemArray red={true}>
    <Box red={true}>0</Box>
    <Index>[0]</Index>
  </ItemArray>
  {
    arr.map(item => <ItemArray key={item}>
      <Box>{item}</Box>
      <Index>[{item}]</Index>
    </ItemArray>)
  }
</ListArray>;

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
    <ListOne />
    <Text direction="right">
      <Span>
        [length = 14]
      </Span>
    </Text>
  </Wrapper>
  <Wrapper vertical={30}>
    <ListTwo />
    <Text direction="right">
      <Span>
        [length = 15]
      </Span>
    </Text>
  </Wrapper>
  <Wrapper vertical={30}>
    <ListTree />
    <Text direction="right">
      <Span>
        [length = 15]
      </Span>
    </Text>
  </Wrapper>
</Block>;
