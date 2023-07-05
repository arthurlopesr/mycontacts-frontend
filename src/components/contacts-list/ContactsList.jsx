import {
  Container, Header, ListContainer, Card,
} from './styles';
import arrow from '../../assets/images/arrow.svg';
import edit from '../../assets/images/edit.svg';
import trash from '../../assets/images/trash.svg';

export function ContactsList() {
  return (
    <Container>

      <Header>
        <strong>3 contatos</strong>
        <a href="/">Novo Contato</a>
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
            <span>(37) 99987-5176</span>
          </div>

          <div className="actions">
            <a href="/">
              <img src={edit} alt="Editar" />
            </a>
            <button type="button">
              <img src={trash} alt="Lixeira" />
            </button>
          </div>
        </Card>

        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Arthur Lopes</strong>
              <small>Intagram</small>
            </div>

            <span>arthurlopr@gmail.com</span>
            <span>(37) 99987-5176</span>
          </div>

          <div className="actions">
            <a href="/">
              <img src={edit} alt="Editar" />
            </a>
            <button type="button">
              <img src={trash} alt="Lixeira" />
            </button>
          </div>
        </Card>

        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Arthur Lopes</strong>
              <small>Intagram</small>
            </div>

            <span>arthurlopr@gmail.com</span>
            <span>(37) 99987-5176</span>
          </div>

          <div className="actions">
            <a href="/">
              <img src={edit} alt="Editar" />
            </a>
            <button type="button">
              <img src={trash} alt="Lixeira" />
            </button>
          </div>
        </Card>

      </ListContainer>
    </Container>
  );
}
