import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '@/components/atom/input';
import { Typo } from '@/components/atom/typography';
import { Container } from '@/components/layout/container';
import { Row } from '@/components/layout/row';
import { InputField } from '@/components/molecule/input-field';

const meta: Meta = {
  title: 'Example/Form',
};

export default meta;

export const UserRegistrationForm: StoryObj = {
  name: 'User Registration Form',
  render: () => (
    <Row>
      <form style={{ width: 600 }}>
        <Container>
          <Typo.Headline weight='strong'>회원가입</Typo.Headline>
        </Container>
        <InputField label='이름' essential>
          <Input />
        </InputField>
        <InputField label='이메일' essential>
          <Input type='email' />
        </InputField>
      </form>
    </Row>
  ),
};
