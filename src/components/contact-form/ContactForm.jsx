import PropTypes from 'prop-types';
import { useState } from 'react';
import { FormGroup } from '../form-group/FormGroup';
import { Form, ButtonContainer } from './styles';
import Input from '../input';
import Select from '../select';
import Button from '../button';

export function ContactForm({ buttonLabel }) {
  const [name, setName] = useState('');
  return (
    <Form>

      <FormGroup>
        <Input
          value={name}
          placeholder="Nome"
          onChange={(event) => setName(event.target.value)}
        />
      </FormGroup>

      <FormGroup
        error="O formato do e-mail é inválido."
      >
        <Input placeholder="E-mail" error />
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
