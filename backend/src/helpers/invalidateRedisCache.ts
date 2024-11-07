import redisClient from "../config/redisSetup";

interface InvalidateRedisCache {
  cachePrefix: "getAccountingInfo*";
}
const invalidateRedisCache = async ({ cachePrefix }: InvalidateRedisCache) => {
  const keys = await redisClient.keys(cachePrefix);
  console.log("🚀 ~ invalidateRedisCache ~ keys:", keys);

  if (keys.length > 0) {
    await redisClient.del(keys);
  }
};

export default invalidateRedisCache;
