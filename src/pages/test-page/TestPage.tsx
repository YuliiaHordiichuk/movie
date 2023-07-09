// test
import { useLoaderData } from 'react-router-dom';

export function TestPage() {
  const data = useLoaderData();
  console.log(data);

  return <div>test</div>;
}
