import { Container, List, ItemList, Nav, Block } from 'components/Globals';

type ListType = {
  [key: string]: string
}

const dataStructureList: ListType = {
  array: 'array', pilha: 'pilha', fila: 'fila', lista: 'lista', conjunto: 'conjunto', dicionario: 'dicionário', recursao: 'recursão', arvore: 'árvore', heap: 'heap', grafos: 'grafos',
};

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
    </Container>
  </Block>;

export default Home;
