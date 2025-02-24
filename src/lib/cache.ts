const CACHE_PREFIX = "slabstone-cache-";
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

export const cacheGet = (key: string) => {
  const item = localStorage.getItem(CACHE_PREFIX + key);
  if (!item) return null;

  const { value, timestamp } = JSON.parse(item);
  if (Date.now() - timestamp > CACHE_DURATION) {
    localStorage.removeItem(CACHE_PREFIX + key);
    return null;
  }

  return value;
};

export const cacheSet = (key: string, value: any) => {
  localStorage.setItem(
    CACHE_PREFIX + key,
    JSON.stringify({
      value,
      timestamp: Date.now(),
    }),
  );
};
