import { $$ } from '@lib/utils/functions';
import { QueryClient, UseMutationOptions, UseQueryOptions } from '@tanstack/react-query';

import { AxiosError } from 'axios';

export type PromiseValue<PromiseType, Otherwise = PromiseType> =
  PromiseType extends Promise<infer Value>
    ? { 0: PromiseValue<Value>; 1: Value }[PromiseType extends Promise<unknown> ? 0 : 1]
    : Otherwise;

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // useErrorBoundary: true,
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

export const makeUniqueQueryKey = (nameSpace: string, key?: string, ...rest: string[]) => {
  if (key === nameSpace) return nameSpace;
  const keyArray = $$.toCleanArray([nameSpace, key, ...rest]);
  return keyArray?.join('-');
};

export type QueryConfig<FetcherFnType extends (...args: any) => any> = UseQueryOptions<
  PromiseValue<ReturnType<FetcherFnType>>
>;

export type MutationConfig<FetcherFnType extends (...args: any) => any> = UseMutationOptions<
  PromiseValue<ReturnType<FetcherFnType>>,
  AxiosError,
  Parameters<FetcherFnType>[0]
>;
