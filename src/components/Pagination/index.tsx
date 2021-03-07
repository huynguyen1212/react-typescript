/**
 *
 * Pagination
 * make by phamthainb
 */
import React from 'react';
import { memo } from 'react';
import styled from 'styled-components';

interface Props {
  pagination: {
    page: number;
    limit: number;
    totalRow: number;
  };
  onPageChange: (page: number) => void;
}

function Pagination({ pagination, onPageChange }: Props) {
  const { page, limit, totalRow } = pagination;

  const totalPages = Math.ceil(totalRow / limit);

  function handlePageChange(newPage: any) {
    if (onPageChange) {
      onPageChange(newPage);
    }
  }

  return (
    <StypePagination>
      <button disabled={page <= 1}  onClick={() => {
          handlePageChange(page - 1);
          console.log(page - 1);
        }}>
        Prev
      </button>

      <button
        disabled={page >= totalPages}
        onClick={() => {
          handlePageChange(page + 1);
          console.log(page + 1);
        }}
      >
        next
      </button>
    </StypePagination>
  );
}

const StypePagination = styled.div``;

export default memo(Pagination);
