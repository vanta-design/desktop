import type { Meta, StoryObj } from '@storybook/react';
import { Typo } from '@/components/atom/typography';
import { Container } from '@/components/layout/container';
import { DataTable } from '@/components/molecule/data-table';
import { text } from '@/tokens/color.css';

const meta: Meta = {
  title: 'UI/Molecule/Data Table',
};

export default meta;

export const Showcase: StoryObj = {
  render: () => (
    <Container>
      <DataTable
        columns={[
          {
            key: 'name',
            label: 'Name',
          },
          {
            key: 'project',
            label: 'Project',
            cell: (value) => (
              <Typo.Caption color={text.tertiary}>{value}</Typo.Caption>
            ),
          },
          {
            key: 'modifiedAt',
            label: 'Date Modified',
            cell: (value) => (
              <Typo.Caption color={text.tertiary}>{value}</Typo.Caption>
            ),
          },
        ]}
        data={[
          {
            name: 'Project Proposal ',
            project: 'My Computer',
            modifiedAt: '08/15/2025',
          },
          {
            name: 'Meeting Notes',
            project: 'Workstation',
            modifiedAt: '08/15/2025',
          },
          {
            name: 'Design Document',
            project: 'My Desktop',
            modifiedAt: '08/16/2025',
          },
          {
            name: 'Research Summary',
            project: 'My PC',
            modifiedAt: '08/17/2025',
          },
          {
            name: 'Final Report',
            project: 'Office Desktop',
            modifiedAt: '08/18/2025',
          },
        ]}
      />
    </Container>
  ),
};
