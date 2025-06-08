import { useSimilaritiesTabs } from './useSimilaritiesTabs';

const SimilaritiesTabs = () => {
  const { items, isError } = useSimilaritiesTabs();

  if (isError) return <div>Something went wrong</div>;

  return (
    <>
      ...SimilaritiesTabs...
      <div>{JSON.stringify(items, null, 2)}</div>
    </>
  );
};

export default SimilaritiesTabs;
