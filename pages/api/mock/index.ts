import client from '../client';

export const getMain = async () => {
  const { data } = await client.get('/db/main.json');
  return data;
};
