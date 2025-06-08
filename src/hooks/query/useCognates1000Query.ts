import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import config from '../../config';
import type { Sources } from '../../types';

const QUERY_KEY_BASE = 'cognates1000';

export const useCognates1000Query = () => {
  const cognates1000Query = useQuery<unknown, unknown, Sources>({
    queryKey: [QUERY_KEY_BASE],
    queryFn: () => axios.get(config.source.cognates1000).then((response) => response.data),
  });

  return {
    cognates1000Query,
  };
};
