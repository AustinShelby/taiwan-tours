export const nonCachedFetch = async (
  input: RequestInfo | URL,
  init?: RequestInit
): Promise<Response> => {
  return fetch(input, init);
};
