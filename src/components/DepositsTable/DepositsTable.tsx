import styled from "@emotion/styled";

import { HeadRow, headerCells, ColumnKey } from "./HeadRow";
import { DataRow } from "./DataRow";
import { Deposit } from "hooks/useDeposits";

export type DepositsTableProps = {
  disabledColumns?: ColumnKey[];
  onClickSpeedUp?: (deposit: Deposit) => void;
  deposits: Deposit[];
  filterKey?: string;
};

export function DepositsTable({
  disabledColumns = [],
  deposits,
  onClickSpeedUp,
  filterKey = "",
}: DepositsTableProps) {
  return (
    <Wrapper>
      <StyledTable>
        <HeadRow disabledColumns={disabledColumns} />
        <tbody>
          {deposits.map((deposit) => (
            <DataRow
              disabledColumns={disabledColumns}
              headerCells={headerCells}
              key={`${filterKey}${deposit.sourceChainId}-${deposit.depositId}`}
              deposit={deposit}
              onClickSpeedUp={onClickSpeedUp}
            />
          ))}
        </tbody>
      </StyledTable>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow-x: auto;
`;

const StyledTable = styled.table`
  white-space: nowrap;
  table-layout: fixed;
`;
