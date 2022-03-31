import { Wrapper, Text, Code, Pre, Block } from 'components/Globals';
import { ListArray, Box, Index, ItemArray } from './styles';

const listInit = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

export const PopArray = () => {
  const newList = [...listInit];
  newList.pop();
  return <Block>
    <Text>Usando o metodo pop</Text>
    <Pre>
      <Code>
        <div className="comment">
          {`
          // [${listInit.map(item => item).join(',')}]`}
        </div>
        {
          `
          nunbers.pop()`
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
          listInit.map((item, index) => <ItemArray key={item} type={newList.length > index ? 'none' : 'remove'}>
            <Box type={newList.length > index ? 'none' : 'remove'}>{item}</Box>
            <Index>[{index}]</Index>
          </ItemArray>)
        }
      </ListArray>
    </Wrapper>
  </Block>;
};
