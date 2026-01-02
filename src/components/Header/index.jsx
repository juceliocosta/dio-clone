import logo from "../../assets/logo-dio.png";
import Button from "../Button";

import {
    BuscarImputContainer,
    Column,
    HeaderContainer,
    Input,
    Menu,
    MenuRight,
    Row,
    UserPicture,
    Wrapper
} from "./styles";

const Header = () => {
  return (
    <Wrapper>
        <HeaderContainer>
            <Row>
                <img src={logo} alt="Logo da Dio"/>
                <BuscarImputContainer>
                    <Input type="text" placeholder="Buscar..." />
                </BuscarImputContainer>
                <Menu>Live Code</Menu>
                <Menu>Global</Menu>
            </Row>
            <Row>
                <MenuRight href="#">Home</MenuRight>
                <Button title="Entrar" />
                <Button title="Cadastrar" />
            </Row>
        </HeaderContainer>
    </Wrapper>
  )
}

export default Header