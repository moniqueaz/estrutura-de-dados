import { Wrapper, Text, Block } from 'components/Globals';
import { ListArray, Box, Index, ItemArray } from './styles';
import { Code } from 'helper';

const listInit = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

const content = (newList: number[]) => `
  // [${listInit.map(item => item).join(',')}];

  nunbers.pop();

  // [${newList.map((item: number | undefined) => item).join(',')}];

`;

export const PopArray = () => {
  const newList = [...listInit];
  newList.pop();
  return <Block>
    <Text>Usando o metodo pop</Text>
    <Code content={content(newList)} language="javascript"/>
    <Wrapper vertical={30}>
      <ListArray>
        {
          listInit.map((item, index) => <ItemArray key={item} type={newList.length > index ? 'none' : 'remove'}>
            <Box type={newList.length > index ? 'none' : 'remove'}>{item}</Box>
            <Index>[{index}]</Index>
          </ItemArray>)
        }
      </ListArray>
    </Wrapper>
  </Block>;
};
