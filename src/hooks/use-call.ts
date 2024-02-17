import qs from "qs";

type CallType = <T = any>(
  url: string,
  requestInit?: RequestInit & { params?: any }
) => Promise<T>;

const backendUrl = process.env.REACT_APP_BACKEND_URL;

const methods = ["post", "get", "put", "patch", "delete"] as const;

const createCallWithMethods = (call: CallType) =>
  methods.reduce(
    (acc, curr) => ({
      ...acc,
      [curr]: (
        url: Parameters<typeof call>[0],
        requestInit: Parameters<typeof call>[1]
      ) => call(url, { ...(requestInit || {}), method: curr.toUpperCase() }),
    }),
    {}
  ) as Record<(typeof methods)[number], typeof call>;

const useCall = () => {
  const call: CallType = (url, requestInit) =>
    new Promise(async (resolve, reject) => {
      const { params, headers } = requestInit || {};
      const searchparams = params ? `?${qs.stringify(params)}` : "";
      const response = await fetch(backendUrl + url + searchparams, {
        headers: { "content-type": "application/json; charset=utf-8" },
        ...(headers || {}),
      });
      const responseBody = await response.json();
      if (response.ok) {
        resolve(responseBody);
      } else {
        reject(responseBody);
      }
    });
  return createCallWithMethods(call);
};

export default useCall;
