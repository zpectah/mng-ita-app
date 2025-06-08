import { useSimilaritiesQuery } from '../../hooks';

export const useSimilaritiesTabs = () => {
  const { similaritiesQuery } = useSimilaritiesQuery();

  const { data, isError } = similaritiesQuery;

  return {
    items: data ?? [],
    isError,
  };
};
