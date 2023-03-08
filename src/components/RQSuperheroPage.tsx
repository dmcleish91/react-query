import { useQuery } from 'react-query';
import { Hero } from './SuperheroPage';

const fetchSuperHeroes = async () => {
  const res = await fetch('https://my-json-server.typicode.com/dmcleish91/demo/superheroes');
  return await res.json();
};

export const RQSuperheroPage = () => {
  const { data, isLoading } = useQuery<Hero[]>('super-heroes', fetchSuperHeroes);

  if (isLoading)
    return (
      <div className='content'>
        <h2>Loading...</h2>
      </div>
    );

  if (data) {
    console.table(data);
  }

  return (
    <div className='content'>
      <h2>RQ Super Hero Page</h2>
      {data?.map((hero) => {
        return <div key={hero.name}>{hero.name}</div>;
      })}
    </div>
  );
};
