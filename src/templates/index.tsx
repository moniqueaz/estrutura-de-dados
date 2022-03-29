import { Container } from 'components/Globals';

type TemplateProps = {
  children?: React.ReactChild
}
const Template = ( { children }: TemplateProps) => {
  return (
    <Container>
      {children}
    </Container>
  );
};

export default Template;
