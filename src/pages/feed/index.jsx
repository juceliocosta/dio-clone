import Header from "../../components/Header";

import { Column, Title, Container, TitleHighlight} from "./styles";
import Card from "../../components/Card";
import UserInfo from "../../components/UserInfo";

const Feed = () => {
  return (
    <>
      <Header autenticado={true}/>
      <Container>
        <Column $flex={3}>
          <Title>Feed</Title>
          <Card />
          <Card />
          <Card />
          <Card />
        </Column>
        <Column $flex={1} $shrink={0}>
          <TitleHighlight># RANK TOP 5 DA SEMANA</TitleHighlight>
          <UserInfo percentual={95} nome="Jucélio Costa" image="https://avatars.githubusercontent.com/u/104917285?v=4" />
          <UserInfo percentual={76} nome="Jucélio Costa" image="https://avatars.githubusercontent.com/u/104917285?v=4" />
          <UserInfo percentual={53} nome="Jucélio Costa" image="https://avatars.githubusercontent.com/u/104917285?v=4" />
          <UserInfo percentual={50} nome="Jucélio Costa" image="https://avatars.githubusercontent.com/u/104917285?v=4" />
          <UserInfo percentual={15} nome="Jucélio Costa" image="https://avatars.githubusercontent.com/u/104917285?v=4" />
        </Column>
      </Container>
    </>
  )
}

export default Feed;