import useSWR from "swr";

function useResponse(url, headers) {
  const fetcher = (url, options) =>
    fetch(url, options).then((res) => res.json());

  const { data, error, isLoading } = useSWR([url, headers], ([url, headers]) =>
    fetcher(url, { headers })
  );

  return { data, error, isLoading };
}

export default useResponse;
