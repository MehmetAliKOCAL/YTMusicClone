import ytsr from "ytsr";

export default defineEventHandler(async (event) => {
  return await ytsr(decodeURIComponent(event.context.params.query), {
    limit: 3,
  });
});
