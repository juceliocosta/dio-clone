import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo-dio.png";
import Button from "../Button";
import BurgerMenu from "../BurgerMenu";

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

import { useState, useEffect } from "react";
import { IHeader } from "./types";

const Header = ({autenticado}: IHeader) => {
  function useIsMobile () {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

    useEffect(() => {
      const resize = () => setIsMobile(window.innerWidth <= 600);

      window.addEventListener("resize", resize);
      return () => window.removeEventListener("resize", resize);
    }, []);

    return isMobile;
  }
  const isMobile = useIsMobile();

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
                {autenticado && !isMobile &&
                    <>
                        <BuscarImputContainer>
                            <Input type="text" placeholder="Buscar..." />
                        </BuscarImputContainer>                                
                        <Menu>Live Code</Menu>
                        <Menu>Global</Menu>
                    </>
                }
            </Row>
            <Row>
                {autenticado ? (<>
                    <UserPicture src="https://avatars.githubusercontent.com/u/104917285?v=4" />
                    {isMobile && (
                        <BurgerMenu>
                            <BuscarImputContainer>
                                <Input type="text" placeholder="Buscar..." />
                            </BuscarImputContainer>                                
                            <Menu>Live Code</Menu>
                            <Menu>Global</Menu>
                        </BurgerMenu>
                    )}                    
                </>
                ) : (<>
                        {isMobile ?
                            <BurgerMenu>
                                <MenuRight onClick={handleClickHome} >Home</MenuRight>
                                <MenuRight onClick={handleClickLogin} >Entrar</MenuRight>
                                <MenuRight onClick={handleClickSignIn} >Cadastrar</MenuRight>
                            </BurgerMenu>
                        :
                            <>
                                <MenuRight onClick={handleClickHome} >Home</MenuRight>
                                <Button title="Entrar" onClick={handleClickLogin} />
                                <Button title="Cadastrar" onClick={handleClickSignIn} />
                            </>
                        }
                    </>)
                }
            </Row>
        </HeaderContainer>
    </Wrapper>
  )
}

export default Header