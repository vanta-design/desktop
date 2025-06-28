import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@/components/atom/button';
import { Control } from '@/components/atom/control';
import { Divider } from '@/components/atom/divider';
import { Input } from '@/components/atom/input';
import { Typo } from '@/components/atom/typography';
import { Column } from '@/components/layout/column';
import { Container } from '@/components/layout/container';
import { Row } from '@/components/layout/row';
import { ControlGroup } from '@/components/molecule/control-group';
import { InputField } from '@/components/molecule/input-field';
import { spacing } from '@/tokens/attribute.css';

const meta: Meta = {
  title: 'Example/Form',
};

export default meta;

export const UserRegistrationForm: StoryObj = {
  name: 'User Registration Form',
  render: () => (
    <Row>
      <form style={{ width: 600 }}>
        <Container vertical='wide'>
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
        <Divider />
        <Container vertical='wide'>
          <Column gap={spacing[8]}>
            <Control.Checkbox>이용약관에 동의합니다</Control.Checkbox>
            <Control.Checkbox defaultStatus='checked'>
              홍보성 메일를 구독합니다
            </Control.Checkbox>
          </Column>
        </Container>
        <Container>
          <Button.Large type='submit' fill>
            가입
          </Button.Large>
        </Container>
      </form>
    </Row>
  ),
};
