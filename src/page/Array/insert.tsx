import { Wrapper, Text, SubTitle, Code, Pre, Block } from 'components/Globals';
import { ListArray, Box, Index, ItemArray } from './styles';

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export const InsertArray = () => <Block>
  <SubTitle>Inserindo um elemento no final do array</SubTitle>
  <Text>Acrescentando elementos</Text>
  <Pre>
    <Code>
      <div className="comment">
        {`
          // [1,2,3,4,5,6,7,8,9]`}
      </div>
      {`
          numbers[numbers.length] = 10;`
      }
      <div className="comment">
        {`
          // [1,2,3,4,5,6,7,8,9,10]
        `}
      </div>
    </Code>
  </Pre>
  <Wrapper vertical={30}>
    <ListArray>
      {
        arr.map((item, index) => <ItemArray key={item}>
          <Box>{item}</Box>
          <Index>[{index}]</Index>
        </ItemArray>)
      }
      <ItemArray type="include">
        <Box type="include">10</Box>
        <Index>[9]</Index>
      </ItemArray>
    </ListArray>
  </Wrapper>
</Block>;
