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
  
  const handleClickSignIn = () =>{
    navigate('/')
  }
  return (
    <Wrapper>
        <HeaderContainer>
            <Row>
                <img src={logo} alt="Logo da Dio" onClick={handleClickSignIn} />
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
                        <MenuRight href="#">Home</MenuRight>
                        <Button title="Entrar" />
                        <Button title="Cadastrar" />
                    </>
                )}
            </Row>
        </HeaderContainer>
    </Wrapper>
  )
}

export default Header