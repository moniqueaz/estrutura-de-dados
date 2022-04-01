import { Container, List, ItemList, Nav, Block } from 'components/Globals';
import { Code } from 'helper';

type ListType = {
  [key: string]: string
}

const dataStructureList: ListType = {
  array: 'array', pilha: 'pilha', fila: 'fila', lista: 'lista', conjunto: 'conjunto', dicionario: 'dicionário', recursao: 'recursão', arvore: 'árvore', heap: 'heap', grafos: 'grafos',
};

const content = `
Array.prototype.reIndex = function(myArray) {
  const newArray = [];
  for(let i = 0; i < myArray.length; i++){
    if(myArray[i] !== undefined){
      newArray.push(myArray[i];)
    }
  };
  return newArray;
};`;

const Home = () =>
  <Block>

    <Container>
      <List>
        {Object.keys(dataStructureList).map(item => <ItemList key={item}>
          <Nav to={item}>
            {dataStructureList[item]}
          </Nav>
        </ItemList>)}
      </List>
      <Code content={content} language="javascript"/>
    </Container>
  </Block>;

export default Home;
