import { Wrapper, Text, SubTitle, Code, Pre, Block } from 'components/Globals';
import { ListArray, Box, Index, ItemArray } from './styles';

const listInit: (number | undefined)[] = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

export const RemoveArray = () => {
  const newList: (number | undefined)[] = [...listInit];
  const len = newList.length;
  newList[len - 1] = undefined;

  return <Block>
    <SubTitle>Removendo um elemento do final do array</SubTitle>
    <Text>Removendo elementos</Text>
    <Pre>
      <Code>
        <div className="comment">
          {`
          // [${listInit.map(item => item).join(',')}]`}
        </div>
        {
          `
          numbers[numbers.length - 1] = undefined;`
        }
        <div className="comment">
          {`
          // [${newList.map((item: number | undefined) => item).join(',')}]
          `}
        </div>
      </Code>
    </Pre>
    <Wrapper vertical={30}>
      <ListArray>
        {
          newList.map((item, index) => <ItemArray key={item}>
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
