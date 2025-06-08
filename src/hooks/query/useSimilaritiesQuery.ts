import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import config from '../../config';
import type { Sources } from '../../types';

const QUERY_KEY_BASE = 'similarities';

export const useSimilaritiesQuery = () => {
  const similaritiesQuery = useQuery<unknown, unknown, Sources>({
    queryKey: [QUERY_KEY_BASE],
    queryFn: () => axios.get(config.source.similarities).then((response) => response.data),
  });

  return {
    similaritiesQuery,
  };
};
