import { Select } from 'antd';
import { FC } from 'react';
import { Sort } from '../../store/TodoList';

export const TodoSort: FC<{
  sort: Sort;
  onChange: (value: Sort) => void;
}> = ({ sort, onChange }) => {
  return (
    <Select
      className="custom-select"
      defaultValue={sort}
      onChange={onChange}
      options={[
        {
          value: 'id_asc',
          label: 'Id ↑',
        },
        {
          value: 'id_desc',
          label: 'Id ↓',
        },
        {
          value: 'email_asc',
          label: 'Email ↑',
        },
        {
          value: 'email_desc',
          label: 'Email ↓',
        },
        {
          value: 'userName_asc',
          label: 'User name ↑',
        },
        {
          value: 'userName_desc',
          label: 'User name ↓',
        },
        {
          value: 'done_asc',
          label: 'Status ↑',
        },
        {
          value: 'done_desc',
          label: 'Status ↓',
        },
      ]}
    />
  );
};
