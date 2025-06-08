import { useCognates1000Tabs } from './useCognates1000Tabs';

const Cognates1000Tabs = () => {
  const { items, isError } = useCognates1000Tabs();

  if (isError) return <div>Something went wrong</div>;

  return (
    <>
      ...Cognates1000...
      <div>{JSON.stringify(items, null, 2)}</div>
    </>
  );
};

export default Cognates1000Tabs;
