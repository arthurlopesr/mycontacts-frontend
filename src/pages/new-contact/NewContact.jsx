import Input from '../../components/input';
import { PageHeader } from '../../components/page-header/PageHeader';
import Select from '../../components/select';

export function NewContact() {
  return (
    <>
      <PageHeader
        title="Novo contato"
      />

      <Input
        type="text"
        placeholder="Nome"
      />

      <Select>
        <option value="123">Instagram</option>
        <option value="123">Instagram</option>
        <option value="123">Instagram</option>
        <option value="123">Instagram</option>
      </Select>

    </>
  );
}
