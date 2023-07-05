import { ContactForm } from '../../components/contact-form/ContactForm';
import { PageHeader } from '../../components/page-header/PageHeader';

export function NewContact() {
  return (
    <>
      <PageHeader
        title="Novo contato"
      />
      <ContactForm
        buttonLabel="Cadastrar"
      />
    </>
  );
}
