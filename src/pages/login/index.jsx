import {MdEmail, MdLock} from "react-icons/md"
import Button from "../../components/Button";
import Header from "../../components/Header";
import Input from "../../components/Input";

import { Wrapper, Container, Column, Row,  CriarText, EsqueciText, Title, TitleLogin, SubtitleLogin, FormContainer} from "./styles";

const Login = () => {
  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas desejadas.
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleLogin>Faça seu cadastro</TitleLogin>
            <SubtitleLogin>Faça seu login e make the change</SubtitleLogin>
            <FormContainer>
              <Input placeholder="E-mail" type="email" leftIcon={<MdEmail />} />
              <Input placeholder="Senha" type="password" leftIcon={<MdLock />} />
              <Button title="Entrar" variant="secondary" />
            </FormContainer>
            <Row>
              <EsqueciText>Esqueci minha senha</EsqueciText>
              <CriarText>Criar Conta</CriarText>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  )
}

export default Login;