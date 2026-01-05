import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

import {MdPerson, MdEmail, MdLock} from "react-icons/md"
import Button from "../../components/Button";
import Header from "../../components/Header";
import Input from "../../components/Input";

import { Wrapper, Container, Column, Row, StrongText, LoginText, Title, TitleLogin, SubtitleLogin} from "./styles";
import { useNavigate } from "react-router-dom";

const schema = yup.object({
  name: yup.string().min(3, 'No mínimo 3 caracteres').required('Campo obrigatório'),
  email: yup.string().email('Email não é válido').required('Campo obrigatório'),
  password: yup.string().min(6, 'No mínimo 6 caracteres').required('Campo obrigatório'),
}).required();

const SignIn = () => {

    const navigate = useNavigate();

    const { control, handleSubmit, formState: {errors, isValid} } = useForm({
      resolver: yupResolver(schema),
      mode: 'onChange',
      defaultValues: {
        name: '',
        email: '',
        password: ''
      }
    });
    
    const onSubmit = (data) => console.log(data);

    const handleClickFeed = () =>{
      if(isValid) navigate('/feed');
    }

    const handleClickLogin = () =>{
      navigate('/login');
    }

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
            <TitleLogin>Comece agora grátis</TitleLogin>
            <SubtitleLogin>Crie sua conta e make the change</SubtitleLogin>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input name="name" errorMessage={errors?.name?.message} control={control} placeholder="Nome Completo" type="text" leftIcon={<MdPerson />} />
              <Input name="email" errorMessage={errors?.email?.message} control={control} placeholder="E-mail" type="email" leftIcon={<MdEmail />} />
              <Input name="password"  errorMessage={errors?.password?.message} control={control} placeholder="Senha" type="password" leftIcon={<MdLock />} />
              <Button title="Entrar" $variant="secondary" type="submit" onClick={handleClickFeed} />
            </form>
            <Column>
              <SubtitleLogin>Ao clicar em "criar minha conta", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</SubtitleLogin>
              <Row>
                <StrongText>Já tenho conta.</StrongText>  
                <LoginText onClick={handleClickLogin}>Fazer Login</LoginText>
              </Row>
            </Column>
          </Wrapper>
        </Column>
      </Container>
    </>
  )
}

export default SignIn;