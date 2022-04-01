import { Wrapper, Text, Block } from 'components/Globals';
import { ListArray, Box, Index, ItemArray } from './styles';
import { Code } from 'helper';

const listInit= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const content = (listPushTwo: number[]) => `
    // [${listInit.map(item => item).join(',')}];

    numbers.push(11);
    numbers.push(12, 13);

    // [${listPushTwo.map((item: number) => item).join(',')}];
`;

export const PushArray = () => {
  const listPushOne = [...listInit];
  listPushOne.push(11);
  const listPushTwo= [...listPushOne];
  listPushOne.push(12, 13);

  return <Block>
    <Text>Usando o metodo push</Text>
    <Code content={content(listPushTwo)} language="javascript"/>
    <Wrapper vertical={30}>
      <ListArray>
        {
          listPushOne.map((item: number, index: number) => <ItemArray key={item} type={index > 9 ? 'include' : 'none'}>
            <Box type={index > 9 ? 'include' : 'none'}>{item}</Box>
            <Index>[{index}]</Index>
          </ItemArray>)
        }
      </ListArray>
    </Wrapper>
    <Wrapper vertical={30}>
      <ListArray>
        {
          listPushTwo.map((item: number, index: number) => <ItemArray key={item} type={index > 9 ? 'include' : 'none'}>
            <Box type={index > 9 ? 'include' : 'none'}>{item}</Box>
            <Index>[{index}]</Index>
          </ItemArray>)
        }
      </ListArray>
    </Wrapper>
  </Block>;
};
