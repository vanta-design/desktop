import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@/components/atom/button';
import { TextInput } from '@/components/atom/input';
import { useOverlay } from '@/components/features/overlay';
import { Column } from '@/components/layout/column';
import { Container } from '@/components/layout/container';
import { Row } from '@/components/layout/row';
import {
  AlertDialog,
  ConfirmDialog,
  DefaultDialog,
  Dialog,
} from '@/components/molecule/dialog';
import { InputField } from '@/components/molecule/input-field';

const meta: Meta = {
  title: 'UI/Molecule/Dialog',
};

export default meta;

export const Default: StoryObj = {
  render: () => {
    const DefaultDialogOverlay = useOverlay(DefaultDialog);

    return (
      <Container>
        <Row>
          <Button.Large onClick={DefaultDialogOverlay.show}>
            Open Dialog
          </Button.Large>
        </Row>
        <DefaultDialogOverlay.Render
          title='Add new task'
          content={
            <Column gap={16}>
              <InputField label='Title'>
                <TextInput placeholder='Summary of task' />
              </InputField>
              <InputField label='Description'>
                <TextInput placeholder='Describe the task' />
              </InputField>
            </Column>
          }
          footer={
            <Button.Medium onClick={DefaultDialogOverlay.hide}>
              Add
            </Button.Medium>
          }
        />
      </Container>
    );
  },
};

export const Compound: StoryObj = {
  render: () => {
    const CustomDialog = useOverlay(Dialog);

    return (
      <Container>
        <Row>
          <Button.Large onClick={CustomDialog.show}>
            Open Compound Dialog
          </Button.Large>
        </Row>
        <CustomDialog.Render maxWidth={560}>
          <Dialog.Header title='Compound dialog' />
          <Dialog.Body>
            <Column gap={16}>
              <InputField label='Title'>
                <TextInput placeholder='Summary of task' />
              </InputField>
              <InputField label='Description'>
                <TextInput placeholder='Describe the task' />
              </InputField>
            </Column>
          </Dialog.Body>
          <Dialog.Footer outline>
            <Button.Medium onClick={CustomDialog.hide}>Close</Button.Medium>
          </Dialog.Footer>
        </CustomDialog.Render>
      </Container>
    );
  },
};

export const Alert: StoryObj = {
  render: () => {
    const AlertDialogOverlay = useOverlay(AlertDialog);

    return (
      <Container>
        <Row>
          <Button.Large onClick={AlertDialogOverlay.show}>
            Open Alert Dialog
          </Button.Large>
        </Row>
        <AlertDialogOverlay.Render
          title='Action complete'
          description='Task was completed successfully.'
        />
      </Container>
    );
  },
};

export const Confirm: StoryObj = {
  render: () => {
    const ConfirmDialogOverlay = useOverlay(ConfirmDialog);
    const DeleteConfirmDialogOverlay = useOverlay(ConfirmDialog);

    return (
      <Container>
        <Row gap={16}>
          <Button.Large onClick={ConfirmDialogOverlay.show}>
            Open Confirm Dialog
          </Button.Large>
          <Button.Large onClick={DeleteConfirmDialogOverlay.show}>
            Open Delete Confirm Dialog
          </Button.Large>
        </Row>
        <ConfirmDialogOverlay.Render
          title='Are you sure?'
          description='This action cannot be undone.'
          onConfirm={() => console.log('Confirmed')}
        />
        <DeleteConfirmDialogOverlay.Render
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
