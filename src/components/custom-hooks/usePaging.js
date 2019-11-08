import { useState } from 'react';

const usePaging = () => {

  const [page, setPage] = useState(0);
  
  const handlePageBackward = () => {
    if(page > 0) { setPage(page - 1); }
  };

  const handlePageForward = () => {
    setPage(page + 1);
  };

  return { page, handlePageBackward, handlePageForward };
};

export default usePaging;
