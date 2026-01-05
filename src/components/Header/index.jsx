import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo-dio.png";
import Button from "../Button";

import {
    BuscarImputContainer,
    HeaderContainer,
    Input,
    Menu,
    MenuRight,
    Row,
    UserPicture,
    Wrapper
} from "./styles";

const Header = ({autenticado}) => {

  const navigate = useNavigate();

  const handleClickHome = () =>{
    navigate('/')
  }
  
  const handleClickLogin = () =>{
    navigate('/login')
  }

  const handleClickSignIn = () =>{
    navigate('/signin')
  }

  return (
    <Wrapper>
        <HeaderContainer>
            <Row>
                <img src={logo} alt="Logo da Dio" />
                {autenticado ? (
                    <>
                        <BuscarImputContainer>
                            <Input type="text" placeholder="Buscar..." />
                        </BuscarImputContainer>
                        <Menu>Live Code</Menu>
                        <Menu>Global</Menu>
                    </>
                ) : null}
            </Row>
            <Row>
                {autenticado ? (
                    <UserPicture src="https://avatars.githubusercontent.com/u/104917285?v=4" />
                ) : (
                    <>
                        <MenuRight onClick={handleClickHome} >Home</MenuRight>
                        <Button title="Entrar" onClick={handleClickLogin} />
                        <Button title="Cadastrar" onClick={handleClickSignIn} />
                    </>
                )}
            </Row>
        </HeaderContainer>
    </Wrapper>
  )
}

export default Header