import { PageHeader } from '../../components/page-header/PageHeader';
import { ContactForm } from '../../components/contact-form/ContactForm';

export function Edit() {
  return (
    <>
      <PageHeader
        title="Editar Arthur Lopes"
      />

      <ContactForm
        buttonLabel="Salvar alterações"
      />
    </>

  );
}
