import ytsr from 'ytsr';

export default defineEventHandler(async (event) => {
  const searchQuery = getQuery(event);

  return await ytsr(decodeURIComponent(searchQuery.query), {
    limit: searchQuery.limit,
  });
});
