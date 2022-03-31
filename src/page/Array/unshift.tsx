import { Wrapper, Text, Code, Pre, Block } from 'components/Globals';
import { ListArray, Box, Index, ItemArray } from './styles';

const listInit = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

export const UnshiftArray = () => {
  const listUnshiftOne = [...listInit];
  listUnshiftOne.unshift(-1);
  const listUnshiftTwo = [...listUnshiftOne];
  listUnshiftTwo.unshift(-3, -2);
  return <Block>
    <Text>Usando o metodo unshift</Text>
    <Pre>
      <Code>
        <div className="comment">
          {`
          // [${listInit.map(item => item).join(',')}]`}
        </div>
        {
          `
        numbers.unshift(-1);
        numbers.unshift(-3, -2);`
        }
        <div className="comment">
          {`
          // [${listUnshiftTwo.map((item: number) => item).join(',')}]
          `}
        </div>
      </Code>
    </Pre>
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
