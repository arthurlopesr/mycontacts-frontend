import { Link } from 'react-router-dom';
import {
  Container, Header, ListContainer, Card, InputSeachContainer,
} from './styles';
import arrow from '../../assets/images/arrow.svg';
import edit from '../../assets/images/edit.svg';
import trash from '../../assets/images/trash.svg';

export function Home() {
  return (
    <Container>

      <InputSeachContainer>
        <input type="text" placeholder="Pesquisar contato..." />
      </InputSeachContainer>

      <Header>
        <strong>3 contatos</strong>
        <Link to="/new">Novo Contato</Link>
      </Header>

      <ListContainer>
        <header>
          <button type="button" className="sort-button">
            <span>Nome</span>
            <img src={arrow} alt="Flecha de ordenação" />
          </button>
        </header>

        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Arthur Lopes</strong>
              <small>Intagram</small>
            </div>

            <span>arthurlopr@gmail.com</span>
            <span>(37) 99999-9999</span>
          </div>

          <div className="actions">
            <Link to="/edit/123">
              <img src={edit} alt="Editar" />
            </Link>
            <button type="button">
              <img src={trash} alt="Lixeira" />
            </button>
          </div>
        </Card>

      </ListContainer>
    </Container>
  );
}
