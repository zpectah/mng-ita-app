import { useCognatesFFTabs } from './useCognatesFFTabs';

const CognatesFFTabs = () => {
  const { items, isError } = useCognatesFFTabs();

  if (isError) return <div>Something went wrong</div>;

  return (
    <>
      ...CognatesFF...
      <div>{JSON.stringify(items, null, 2)}</div>
    </>
  );
};

export default CognatesFFTabs;
