import PropTypes from 'prop-types';
import { FormGroup } from '../form-group/FormGroup';
import { Form, ButtonContainer } from './styles';
import Input from '../input';
import Select from '../select';
import Button from '../button';

export function ContactForm({ buttonLabel }) {
  return (
    <Form>

      <FormGroup>
        <Input placeholder="Nome" />
      </FormGroup>

      <FormGroup>
        <Input placeholder="E-mail" />
      </FormGroup>

      <FormGroup>
        <Input placeholder="Telefone" />
      </FormGroup>

      <FormGroup>
        <Select>
          <option value="Instagram">Intagram</option>
        </Select>
      </FormGroup>

      <ButtonContainer>
        <Button type="submit">
          {buttonLabel}
        </Button>
      </ButtonContainer>
    </Form>
  );
}

ContactForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
};
