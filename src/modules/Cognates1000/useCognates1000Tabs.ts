import { useCognates1000Query } from '../../hooks';

export const useCognates1000Tabs = () => {
  const { cognates1000Query } = useCognates1000Query();

  const { data, isError } = cognates1000Query;

  return {
    items: data ?? [],
    isError,
  };
};
