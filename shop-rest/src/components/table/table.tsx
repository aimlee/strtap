import React from 'react';
import Table from 'rc-table';
import { CustomizedTable } from './table.style';

type TableProps = {
  columns: any;
  data: any;
  props?: any;
};


const components = {
  table: CustomizedTable,
};

const ReactTable: React.FC<TableProps & any> = ({
  columns,
  data,
  ...props
}) => {
  return (
    <>
      <Table columns={columns} data={data} {...props} components={components} />
    </>
  );
};

export default ReactTable;
