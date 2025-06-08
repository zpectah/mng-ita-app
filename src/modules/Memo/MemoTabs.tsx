import { useMemoTabs } from './useMemoTabs';

const MemoTabs = () => {
  const { items, isError } = useMemoTabs();

  if (isError) return <div>Something went wrong</div>;

  return (
    <>
      ...MemoTabs...
      <div>{JSON.stringify(items, null, 2)}</div>
    </>
  );
};

export default MemoTabs;
