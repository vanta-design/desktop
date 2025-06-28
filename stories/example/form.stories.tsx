import type { Meta, StoryObj } from '@storybook/react';
import { Control } from '@/components/atom/control';
import { Input } from '@/components/atom/input';
import { Typo } from '@/components/atom/typography';
import { Container } from '@/components/layout/container';
import { Row } from '@/components/layout/row';
import { ControlGroup } from '@/components/molecule/control-group';
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
        <InputField label='성별' essential>
          <ControlGroup name='gender'>
            <Control.Radio>남성</Control.Radio>
            <Control.Radio>여성</Control.Radio>
            <Control.Radio>기타</Control.Radio>
          </ControlGroup>
        </InputField>
        <InputField label='관심분야'>
          <ControlGroup direction='column' name='interest'>
            <Control.Checkbox>프론트엔드</Control.Checkbox>
            <Control.Checkbox>백엔드</Control.Checkbox>
            <Control.Checkbox>모바일 앱</Control.Checkbox>
            <Control.Checkbox>데브옵스</Control.Checkbox>
          </ControlGroup>
        </InputField>
      </form>
    </Row>
  ),
};
