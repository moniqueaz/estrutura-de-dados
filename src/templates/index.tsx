import styled from 'styled-components';
import { Container } from 'components/Globals';
import Menu from 'components/Menu';

type TemplateProps = {
  children?: React.ReactChild
}
const Template = ( { children }: TemplateProps) => {
  return (
    <Main>
      <Menu/>
      <Container>
        {children}
      </Container>
    </Main>
  );
};

export default Template;

const Main = styled.main`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  height: 100vh;
  width: 100vw;
`;
