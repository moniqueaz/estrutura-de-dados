import { Wrapper, Text, Block } from 'components/Globals';
import { ListArray, Box, Index, ItemArray } from './styles';
import { Code } from 'helper';

const listInit = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

const content = (listUnshiftTwo: number[]) =>`
  // [${listInit.map(item => item).join(',')}];

  numbers.unshift(-1);
  numbers.unshift(-3, -2);

  // [${listUnshiftTwo.map((item: number) => item).join(',')}];

`;

export const UnshiftArray = () => {
  const listUnshiftOne = [...listInit];
  listUnshiftOne.unshift(-1);
  const listUnshiftTwo = [...listUnshiftOne];
  listUnshiftTwo.unshift(-3, -2);
  return <Block>
    <Text>Usando o metodo unshift</Text>
    <Code content={content(listUnshiftTwo)} language="javascript"/>
    <Wrapper vertical={30}>
      <ListArray>
        {
          listUnshiftOne.map((item, index) => <ItemArray key={item} type={index === 0 ? 'include' : 'none'}>
            <Box type={index === 0 ? 'include' : 'none'}>{item}</Box>
            <Index>[{index}]</Index>
          </ItemArray>)
        }
      </ListArray>
    </Wrapper>
    <Wrapper vertical={30}>
      <ListArray>
        {
          listUnshiftTwo.map((item, index) => <ItemArray key={item} type={index <= 1 ? 'include' : 'none'}>
            <Box type={index <= 1 ? 'include' : 'none'}>{item}</Box>
            <Index>[{index}]</Index>
          </ItemArray>)
        }
      </ListArray>
    </Wrapper>
  </Block>;
};
