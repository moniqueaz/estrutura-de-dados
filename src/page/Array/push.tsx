import { Wrapper, Text, Code, Pre, Block } from 'components/Globals';
import { ListArray, Box, Index, ItemArray } from './styles';

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export const PushArray = () => <Block>
  <Text>Usando o metodo push</Text>
  <Pre>
    <Code>
      <div className="comment">
        {`
          // [1,2,3,4,5,6,7,8,9,10]`}
      </div>
      {
        `
          numbers.push(11);
          numbers.push(12, 13);`
      }
      <div className="comment">
        {`
          // [1,2,3,4,5,6,7,8,9,10,11,12,13]
        `}
      </div>
    </Code>
  </Pre>
  <Wrapper vertical={30}>
    <ListArray>
      {
        [...arr, 10].map((item, index) => <ItemArray key={item}>
          <Box>{item}</Box>
          <Index>[{index}]</Index>
        </ItemArray>)
      }
      <ItemArray type="include">
        <Box type="include">11</Box>
        <Index>[10]</Index>
      </ItemArray>
    </ListArray>
  </Wrapper>
  <Wrapper vertical={30}>
    <ListArray>
      {
        [...arr, 10, 11].map((item, index) => <ItemArray key={item}>
          <Box>{item}</Box>
          <Index>[{index}]</Index>
        </ItemArray>)
      }
      <ItemArray type="include">
        <Box type="include">12</Box>
        <Index>[13]</Index>
      </ItemArray>
    </ListArray>
  </Wrapper>
</Block>;
