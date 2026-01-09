import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

import {MdEmail, MdLock} from "react-icons/md"
import Button from "../../components/Button";
import Header from "../../components/Header";
import Input from "../../components/Input";

import { Wrapper, Container, Column, Row,  CriarText, EsqueciText, Title, TitleLogin, SubtitleLogin} from "./styles";
import { useNavigate } from "react-router-dom";
import { IFormData } from "./types";

const schema = yup.object({
  email: yup.string().email('Email não é válido').required('Campo obrigatório'),
  password: yup.string().min(6, 'No mínimo 6 caracteres').required('Campo obrigatório'),
}).required();

const Login = () => {

    const navigate = useNavigate();

    const { control, handleSubmit, formState: {errors, isValid} } = useForm<IFormData>({
      resolver: yupResolver(schema),
      mode: 'onChange',
      defaultValues: {
        email: '',
        password: ''
      }
    });
    
    const onSubmit = (data: any) => console.log(data);

    const handleClickFeed = () =>{
      if(isValid) navigate('/feed');
    }

    const handleClickSignIn = () =>{
      navigate('/signin');
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
            <TitleLogin>Faça seu login</TitleLogin>
            <SubtitleLogin>Faça seu login e make the change</SubtitleLogin>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input name="email" errorMessage={errors?.email?.message} control={control} placeholder="E-mail" type="email" leftIcon={<MdEmail />} />
              <Input name="password"  errorMessage={errors?.password?.message} control={control} placeholder="Senha" type="password" leftIcon={<MdLock />} />
              <Button title="Entrar" $variant="secondary" type="submit" onClick={handleClickFeed} />
            </form>
            <Row>
              <EsqueciText>Esqueci minha senha</EsqueciText>
              <CriarText onClick={handleClickSignIn}>Criar Conta</CriarText>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  )
}

export default Login;