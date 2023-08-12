import ytsr from 'ytsr';

export default defineEventHandler(async (event) => {
  const { searchQuery, limit } = getQuery(event);
  const findAvailableFilters = await ytsr.getFilters(searchQuery);
  const { url } = findAvailableFilters.get('Type').get('Video');
  return await ytsr(url, { limit });
});
