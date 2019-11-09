import { useReducer } from 'react';

function pageReducer(page, action) {
  switch(action.type) {
    case 'increment':
      return page + 1;
    case 'decrement':
      return page - 1;
    default:
      return page;
  }
}

const usePages = (initialValue) => {
  const [page, dispatchPage] = useReducer(pageReducer, initialValue);

  const next = () => dispatchPage({ type: 'increment' });
  const previous = () => dispatchPage({ type: 'decrement' });

  return [page, next, previous];
};

export default usePages;
