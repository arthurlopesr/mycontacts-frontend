import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {
  Container, Header, ListContainer, Card, InputSeachContainer,
} from './styles';
import arrow from '../../assets/images/arrow.svg';
import edit from '../../assets/images/edit.svg';
import trash from '../../assets/images/trash.svg';

export function Home() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/contacts')
      .then(async (response) => {
        const json = await response.json();
        setContacts(json);
      })
      .catch((error) => {
        console.log('erro', error);
      });
  }, []);

  console.log(contacts);

  return (
    <Container>
      <InputSeachContainer>
        <input type="text" placeholder="Pesquisar contato..." />
      </InputSeachContainer>

      <Header>
        <strong>
          {contacts.length}
          {contacts.length === 1 ? ' contato' : ' contatos'}
        </strong>
        <Link to="/new">Novo Contato</Link>
      </Header>

      <ListHeader>
        <header>
          <button type="button" className="sort-button">
            <span>Nome</span>
            <img src={arrow} alt="Flecha de ordenação" />
          </button>
        </header>
      </ListHeader>

      {contacts.map((contact) => (
        <Card key={contact.id}>
          <div className="info">
            <div className="contact-name">
              <strong>{contact.name}</strong>
              {contact.category_name && (
                <small>{contact.category_name}</small>
              )}
            </div>

            <span>{contact.email}</span>
            <span>{contact.phone}</span>
          </div>

          <div className="actions">
            <Link to={`/edit/${contact.id}`}>
              <img src={edit} alt="Editar" />
            </Link>
            <button type="button">
              <img src={trash} alt="Lixeira" />
            </button>
          </div>
        </Card>
      ))}
    </Container>
  );
}
