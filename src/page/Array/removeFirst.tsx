import { Wrapper, Text, SubTitle, Block } from 'components/Globals';
import { ListArray, Box, Index, ItemArray } from './styles';
import { removeFirst } from './utils';
import { Code } from 'helper';

const listInit = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

const content = (newList: number[]) => `
  // [${listInit.map(item => item).join(',')}];

  for(let i == 0; i < numbers.length; i++) {
    numbers[i] = numbers[i + 1];
  }

  // [${newList.map((item: number) => typeof item !== 'undefined' ? item : 'undefined').join(',')}];

`;

export const RemoveFirstArray = () => {
  const newList = removeFirst(listInit);
  return <Block>
    <SubTitle>Removendo um elemento do inicio do array</SubTitle>
    <Text>Removendo elementos</Text>
    <Code content={content(newList)} language="javascript"/>
    <Wrapper vertical={30}>
      <ListArray>
        {
          listInit.map((item, index) => <ItemArray key={`${item}-${index}`} moveLeft={true}>
            <Box type={index === 0 ? 'warn' : 'none'}>{item}</Box>
            <Index>[{index}]</Index>
          </ItemArray>)
        }
      </ListArray>
    </Wrapper>
    <Wrapper vertical={30}>
      <ListArray>
        {
          newList.map((item, index) => <ItemArray key={`${item}-${index}`}>
            {
              typeof item !== 'undefined' ? <Box>{item}</Box> : <Box type="warn" small={true} width={100}>undefined</Box>
            }
            <Index>[{index}]</Index>
          </ItemArray>)
        }
      </ListArray>
    </Wrapper>
  </Block>;
};
