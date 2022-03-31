import { Wrapper, Text, SubTitle, Code, Pre, Block } from 'components/Globals';
import { ListArray, Box, Index, ItemArray } from './styles';
import { insert } from './utils';

const listInit = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export const InsertArray = () => <Block>
  <SubTitle>Inserindo um elemento no final do array</SubTitle>
  <Text>Acrescentando elementos</Text>
  <Pre>
    <Code>
      <div className="comment">
        {`
          // [${listInit.map(item => item).join(',')}]`}
      </div>
      {`
          numbers[numbers.length] = 10;`
      }
      <div className="comment">
        {`
          // [${insert(listInit, 10).join(',')}]
        `}
      </div>
    </Code>
  </Pre>
  <Wrapper vertical={30}>
    <ListArray>
      {
        listInit.map((item, index) => <ItemArray key={item}>
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
