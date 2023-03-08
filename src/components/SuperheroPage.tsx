import { useEffect, useState } from 'react';

export type Hero = {
  id: number;
  name: string;
  alterEgo: string;
};

export const SuperheroPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<Hero[]>([]);

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/dmcleish91/demo/superheroes')
      .then((response) => response.json())
      .then((res) => {
        console.table(res);
        setData(res);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  if (isLoading)
    return (
      <div className='content'>
        <h2>Loading...</h2>
      </div>
    );

  return (
    <div className='content'>
      <h2>Super Heroes Page</h2>
      {data.map((hero) => {
        return <div key={hero.name}>{hero.name}</div>;
      })}
    </div>
  );
};
