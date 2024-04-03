import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const PaginationComponent = ({ totalPages, onPageChange }) => {
  function handlePageChange(event, page) {
    onPageChange(page);
  }

  return (
    <Stack spacing={2}>
      <Pagination
        count={totalPages}
        onChange={handlePageChange}
        color="primary"
        shape="rounded"
      />
    </Stack>
  );
};

export default PaginationComponent;
