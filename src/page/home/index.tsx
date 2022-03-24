import { Container, List, ItemList, Nav } from '../../components/Globals';

export const dataStructureList = [
  'array', 'pilha', 'fila', 'lista', 'conjunto', 'dicionário', 'recursão', 'árvore', 'heap', 'grafos',
];

const Home = () => <Container>
  <List>
    {dataStructureList.map(item => <ItemList key={item}>
      <Nav to={item}>
        {item}
      </Nav>
    </ItemList>)}
  </List>
</Container>;

export default Home;
