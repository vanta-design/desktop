import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@/components/atom/button';
import { TextInput } from '@/components/atom/input';
import { useOverlay } from '@/components/features/overlay';
import { Column } from '@/components/layout/column';
import { Container } from '@/components/layout/container';
import { Row } from '@/components/layout/row';
import { Dialog } from '@/components/molecule/dialog';
import { InputField } from '@/components/molecule/input-field';

const meta: Meta = {
  title: 'UI/Molecule/Dialog',
};

export default meta;

export const Default: StoryObj = {
  render: () => {
    const DefaultDialog = useOverlay(Dialog.Default);

    return (
      <Container>
        <Row>
          <Button.Large onClick={DefaultDialog.show}>Open Dialog</Button.Large>
        </Row>
        <DefaultDialog.Render
          title='Add new task'
          content={
            <Column gap={16}>
              <InputField label='Title' essential>
                <TextInput placeholder='Summary of task' />
              </InputField>
              <InputField label='Description' essential>
                <TextInput placeholder='Describe the task' />
              </InputField>
            </Column>
          }
          footer={
            <Button.Medium onClick={DefaultDialog.hide}>Add</Button.Medium>
          }
        />
      </Container>
    );
  },
};

export const Alert: StoryObj = {
  render: () => {
    const AlertDialog = useOverlay(Dialog.Alert);

    return (
      <Container>
        <Row>
          <Button.Large onClick={AlertDialog.show}>
            Open Alert Dialog
          </Button.Large>
        </Row>
        <AlertDialog.Render
          title='Action complete'
          description='Task was completed successfully.'
        />
      </Container>
    );
  },
};

export const Confirm: StoryObj = {
  render: () => {
    const ConfirmDialog = useOverlay(Dialog.Confirm);
    const DeleteConfirmDialog = useOverlay(Dialog.Confirm);

    return (
      <Container>
        <Row gap={16}>
          <Button.Large onClick={ConfirmDialog.show}>
            Open Confirm Dialog
          </Button.Large>
          <Button.Large onClick={DeleteConfirmDialog.show}>
            Open Delete Confirm Dialog
          </Button.Large>
        </Row>
        <ConfirmDialog.Render
          title='Are you sure?'
          description='This action cannot be undone.'
          onConfirm={() => console.log('Confirmed')}
        />
        <DeleteConfirmDialog.Render
          title='Are you sure you want to delete this item?'
          description='This action cannot be undone. It requires a few seconds to complete.'
          confirmLabel='Delete'
          onConfirm={() => wait(2000)}
        />
      </Container>
    );
  },
};

function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
