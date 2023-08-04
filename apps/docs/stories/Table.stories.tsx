import React from 'react';
import Table, { Tbody, Td, Th, Thead, Tr } from 'shared-ui/src/components/Table';
import 'shared-ui/src/reset.scss';

export default {
  title: 'Component/Table',
  component: Table,
};

export const Default = () => {
  return (
    <div style={{ padding: 20 }}>
      <Table>
        <Thead>
          <Tr>
            <Th>기호</Th>
            <Th>약어</Th>
            <Th>명칭</Th>
          </Tr>
        </Thead>
        <Tbody>
          {/* <Tr>
            <Td>₩</Td>
            <Td>KRW</Td>
            <Td>한국 원화</Td>
          </Tr>
          <Tr>
            <Td>$</Td>
            <Td>USD</Td>
            <Td>미국 달러화</Td>
          </Tr> */}
        </Tbody>
      </Table>
    </div>
  );
};
