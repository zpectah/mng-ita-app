import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import config from '../../config';
import type { Sources } from '../../types';

const QUERY_KEY_BASE = 'cognatesFF';

export const useCognatesFFQuery = () => {
  const cognatesFFQuery = useQuery<unknown, unknown, Sources>({
    queryKey: [QUERY_KEY_BASE],
    queryFn: () => axios.get(config.source.cognatesFF).then((response) => response.data),
  });

  return {
    cognatesFFQuery,
  };
};
