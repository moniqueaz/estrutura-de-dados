import { Wrapper, Text, Code, Pre, Block } from 'components/Globals';
import { ListArray, Box, Index, ItemArray } from './styles';

const listInit= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export const PushArray = () => {
  const listPushOne = [...listInit];
  listPushOne.push(11);
  const listPushTwo= [...listPushOne];
  listPushOne.push(12, 13);

  return <Block>
    <Text>Usando o metodo push</Text>
    <Pre>
      <Code>
        <div className="comment">
          {`
          // [${listInit.map(item => item).join(',')}]`}
        </div>
        {
          `
          numbers.push(11);
          numbers.push(12, 13);`
        }
        <div className="comment">
          {`
          // [${listPushTwo.map((item: number) => item).join(',')}]
          `}
        </div>
      </Code>
    </Pre>
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
