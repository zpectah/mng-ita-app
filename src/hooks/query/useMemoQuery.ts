import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import config from '../../config';
import type { Sources } from '../../types';

const QUERY_KEY_BASE = 'memo';

export const useMemoQuery = () => {
  const memoQuery = useQuery<unknown, unknown, Sources>({
    queryKey: [QUERY_KEY_BASE],
    queryFn: () => axios.get(config.source.memo).then((response) => response.data),
  });

  return {
    memoQuery,
  };
};
