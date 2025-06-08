import { useCognatesFFQuery } from '../../hooks';

export const useCognatesFFTabs = () => {
  const { cognatesFFQuery } = useCognatesFFQuery();

  const { data, isError } = cognatesFFQuery;

  return {
    items: data ?? [],
    isError,
  };
};
