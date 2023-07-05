import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../../styles/global';
import defaultTheme from '../../styles/themes/default';
import { Container } from './styles';
import { Header } from '../header/Header';
import { ContactsList } from '../contacts-list/ContactsList';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Container>
        <Header />
        <ContactsList />
      </Container>
    </ThemeProvider>
  );
}
