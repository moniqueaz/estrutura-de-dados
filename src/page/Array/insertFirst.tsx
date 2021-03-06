import { Wrapper, Text, Block, Span } from 'components/Globals';
import { ListArray, Box, Index, ItemArray } from './styles';
import { getLength, insertFirst } from './utils';
import { Code } from 'helper';

const listInit = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

type ListType = {
  newList: number[]
}

const content = (newList: number[]) => `
  // [${listInit.map(item => item).join(',')}]

  Array.proptype.insertFirstPosition = function(value) {
    for(let i = this.length; i >= 0; i--){
      this[i] = this[i - 1];
    };
    this[0] = value;
  };
  nunbers.insertFirstPositions(0);

  // [${newList.map(item => item).join(',')}];

`;

export const InsertFirstArray = () => {
  const newList = insertFirst(listInit, 0);

  return <Block>
    <Text>Inserindo um elemento na primeira posição</Text>
    <Code content={content(newList)} language="javascript"/>
    <Wrapper vertical={60}>
      <ListOne />
      <Text direction="right">
        <Span>
          {
            getLength(listInit)
          }
        </Span>
      </Text>
    </Wrapper>
    <Wrapper vertical={30}>
      <ListTwo />
      <Text direction="right">
        <Span>
          {
            getLength(newList)
          }
        </Span>
      </Text>
    </Wrapper>
    <Wrapper vertical={30}>
      <ListTree newList={newList} />
      <Text direction="right">
        <Span>
          {
            getLength(newList)
          }
        </Span>
      </Text>
    </Wrapper>
  </Block>;
};

const ListOne = () => <ListArray>
  {
    listInit.map((item, index) => <ItemArray key={item} moveRight={true}>
      <Box>{item}</Box>
      <Index>[{index}]</Index>
    </ItemArray>)
  }
  <ItemArray>
    <Box type="warn">...</Box>
    <Index>[13]</Index>
  </ItemArray>
</ListArray>;
const ListTwo = () => <ListArray>
  <ItemArray>
    <Box type="warn"></Box>
    <Index>[0]</Index>
  </ItemArray>
  {
    listInit.map((item, index) => <ItemArray key={item}>
      <Box>{item}</Box>
      <Index>[{index + 1}]</Index>
    </ItemArray>)
  }
</ListArray>;
const ListTree = ( { newList }:ListType) => <ListArray>
  {
    newList.map((item, index) => <ItemArray key={item} type={ index === 0 ? 'include': 'none'}>
      <Box type={ index === 0 ? 'include': 'none'}>{item}</Box>
      <Index>[{index}]</Index>
    </ItemArray>)
  }
</ListArray>;
