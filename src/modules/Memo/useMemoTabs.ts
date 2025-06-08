import { useMemoQuery } from '../../hooks';

export const useMemoTabs = () => {
  const { memoQuery } = useMemoQuery();

  const { data, isError } = memoQuery;

  return {
    items: data ?? [],
    isError,
  };
};
