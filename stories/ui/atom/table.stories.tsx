import type { Meta, StoryObj } from '@storybook/react';
import { Table } from '@/components/atom/table';
import { Container } from '@/components/layout/container';

const meta: Meta = {
  title: 'UI/Atom/Table',
};

export default meta;

export const Showcase: StoryObj = {
  render: () => (
    <Container>
      <Table.Root>
        <thead>
          <tr>
            <Table.HeaderCell width={50}>#</Table.HeaderCell>
            <Table.HeaderCell>Header 1</Table.HeaderCell>
            <Table.HeaderCell>Header 2</Table.HeaderCell>
            <Table.HeaderCell>Header 3</Table.HeaderCell>
          </tr>
        </thead>
        <tbody>
          <Table.Body.Row>
            <Table.Body.Cell>1</Table.Body.Cell>
            <Table.Body.Cell>Data 1</Table.Body.Cell>
            <Table.Body.Cell>Data 2</Table.Body.Cell>
            <Table.Body.Cell>Data 3</Table.Body.Cell>
          </Table.Body.Row>
          <Table.Body.Row>
            <Table.Body.Cell>2</Table.Body.Cell>
            <Table.Body.Cell>Data 1</Table.Body.Cell>
            <Table.Body.Cell>Data 2</Table.Body.Cell>
            <Table.Body.Cell>Data 3</Table.Body.Cell>
          </Table.Body.Row>
          <Table.Body.Row>
            <Table.Body.Cell>3</Table.Body.Cell>
            <Table.Body.Cell>Data 1</Table.Body.Cell>
            <Table.Body.Cell>Data 2</Table.Body.Cell>
            <Table.Body.Cell>Data 3</Table.Body.Cell>
          </Table.Body.Row>
          <Table.Body.Row>
            <Table.Body.Cell>4</Table.Body.Cell>
            <Table.Body.Cell>Data 1</Table.Body.Cell>
            <Table.Body.Cell>Data 2</Table.Body.Cell>
            <Table.Body.Cell>Data 3</Table.Body.Cell>
          </Table.Body.Row>
        </tbody>
      </Table.Root>
    </Container>
  ),
};
