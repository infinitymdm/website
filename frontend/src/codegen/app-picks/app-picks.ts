/**
 * Generated by orval v6.25.0 🍺
 * Do not edit manually.
 * Flathub API
 * OpenAPI spec version: 0.1.0
 */
import { useMutation, useQuery } from "@tanstack/react-query"
import type {
  MutationFunction,
  QueryFunction,
  QueryKey,
  UseMutationOptions,
  UseQueryOptions,
  UseQueryResult,
} from "@tanstack/react-query"
import axios from "axios"
import type { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios"
import type {
  AppOfTheDay,
  AppsOfTheWeek,
  HTTPValidationError,
  SetAppOfTheDayAppPicksAppOfTheDayPost200,
  SetAppOfTheWeekAppPicksAppOfTheWeekPost200,
  UpsertAppOfTheWeek,
} from ".././model"

/**
 * @summary Get App Of The Day
 */
export const getAppOfTheDayAppPicksAppOfTheDayDateGet = (
  date: string,
  options?: AxiosRequestConfig,
): Promise<AxiosResponse<AppOfTheDay>> => {
  return axios.get(`/app-picks/app-of-the-day/${date}`, options)
}

export const getGetAppOfTheDayAppPicksAppOfTheDayDateGetQueryKey = (
  date: string,
) => {
  return [`/app-picks/app-of-the-day/${date}`] as const
}

export const getGetAppOfTheDayAppPicksAppOfTheDayDateGetQueryOptions = <
  TData = Awaited<ReturnType<typeof getAppOfTheDayAppPicksAppOfTheDayDateGet>>,
  TError = AxiosError<HTTPValidationError>,
>(
  date: string,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof getAppOfTheDayAppPicksAppOfTheDayDateGet>>,
        TError,
        TData
      >
    >
    axios?: AxiosRequestConfig
  },
) => {
  const { query: queryOptions, axios: axiosOptions } = options ?? {}

  const queryKey =
    queryOptions?.queryKey ??
    getGetAppOfTheDayAppPicksAppOfTheDayDateGetQueryKey(date)

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof getAppOfTheDayAppPicksAppOfTheDayDateGet>>
  > = ({ signal }) =>
    getAppOfTheDayAppPicksAppOfTheDayDateGet(date, { signal, ...axiosOptions })

  return {
    queryKey,
    queryFn,
    enabled: !!date,
    ...queryOptions,
  } as UseQueryOptions<
    Awaited<ReturnType<typeof getAppOfTheDayAppPicksAppOfTheDayDateGet>>,
    TError,
    TData
  > & { queryKey: QueryKey }
}

export type GetAppOfTheDayAppPicksAppOfTheDayDateGetQueryResult = NonNullable<
  Awaited<ReturnType<typeof getAppOfTheDayAppPicksAppOfTheDayDateGet>>
>
export type GetAppOfTheDayAppPicksAppOfTheDayDateGetQueryError =
  AxiosError<HTTPValidationError>

/**
 * @summary Get App Of The Day
 */
export const useGetAppOfTheDayAppPicksAppOfTheDayDateGet = <
  TData = Awaited<ReturnType<typeof getAppOfTheDayAppPicksAppOfTheDayDateGet>>,
  TError = AxiosError<HTTPValidationError>,
>(
  date: string,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof getAppOfTheDayAppPicksAppOfTheDayDateGet>>,
        TError,
        TData
      >
    >
    axios?: AxiosRequestConfig
  },
): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getGetAppOfTheDayAppPicksAppOfTheDayDateGetQueryOptions(
    date,
    options,
  )

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey
  }

  query.queryKey = queryOptions.queryKey

  return query
}

/**
 * Returns apps of the week
 * @summary Get App Of The Week
 */
export const getAppOfTheWeekAppPicksAppsOfTheWeekDateGet = (
  date: string,
  options?: AxiosRequestConfig,
): Promise<AxiosResponse<AppsOfTheWeek>> => {
  return axios.get(`/app-picks/apps-of-the-week/${date}`, options)
}

export const getGetAppOfTheWeekAppPicksAppsOfTheWeekDateGetQueryKey = (
  date: string,
) => {
  return [`/app-picks/apps-of-the-week/${date}`] as const
}

export const getGetAppOfTheWeekAppPicksAppsOfTheWeekDateGetQueryOptions = <
  TData = Awaited<
    ReturnType<typeof getAppOfTheWeekAppPicksAppsOfTheWeekDateGet>
  >,
  TError = AxiosError<HTTPValidationError>,
>(
  date: string,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof getAppOfTheWeekAppPicksAppsOfTheWeekDateGet>>,
        TError,
        TData
      >
    >
    axios?: AxiosRequestConfig
  },
) => {
  const { query: queryOptions, axios: axiosOptions } = options ?? {}

  const queryKey =
    queryOptions?.queryKey ??
    getGetAppOfTheWeekAppPicksAppsOfTheWeekDateGetQueryKey(date)

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof getAppOfTheWeekAppPicksAppsOfTheWeekDateGet>>
  > = ({ signal }) =>
    getAppOfTheWeekAppPicksAppsOfTheWeekDateGet(date, {
      signal,
      ...axiosOptions,
    })

  return {
    queryKey,
    queryFn,
    enabled: !!date,
    ...queryOptions,
  } as UseQueryOptions<
    Awaited<ReturnType<typeof getAppOfTheWeekAppPicksAppsOfTheWeekDateGet>>,
    TError,
    TData
  > & { queryKey: QueryKey }
}

export type GetAppOfTheWeekAppPicksAppsOfTheWeekDateGetQueryResult =
  NonNullable<
    Awaited<ReturnType<typeof getAppOfTheWeekAppPicksAppsOfTheWeekDateGet>>
  >
export type GetAppOfTheWeekAppPicksAppsOfTheWeekDateGetQueryError =
  AxiosError<HTTPValidationError>

/**
 * @summary Get App Of The Week
 */
export const useGetAppOfTheWeekAppPicksAppsOfTheWeekDateGet = <
  TData = Awaited<
    ReturnType<typeof getAppOfTheWeekAppPicksAppsOfTheWeekDateGet>
  >,
  TError = AxiosError<HTTPValidationError>,
>(
  date: string,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof getAppOfTheWeekAppPicksAppsOfTheWeekDateGet>>,
        TError,
        TData
      >
    >
    axios?: AxiosRequestConfig
  },
): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions =
    getGetAppOfTheWeekAppPicksAppsOfTheWeekDateGetQueryOptions(date, options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey
  }

  query.queryKey = queryOptions.queryKey

  return query
}

/**
 * Sets an app of the week
 * @summary Set App Of The Week
 */
export const setAppOfTheWeekAppPicksAppOfTheWeekPost = (
  upsertAppOfTheWeek: UpsertAppOfTheWeek,
  options?: AxiosRequestConfig,
): Promise<AxiosResponse<SetAppOfTheWeekAppPicksAppOfTheWeekPost200>> => {
  return axios.post(`/app-picks/app-of-the-week`, upsertAppOfTheWeek, options)
}

export const getSetAppOfTheWeekAppPicksAppOfTheWeekPostMutationOptions = <
  TError = AxiosError<HTTPValidationError>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof setAppOfTheWeekAppPicksAppOfTheWeekPost>>,
    TError,
    { data: UpsertAppOfTheWeek },
    TContext
  >
  axios?: AxiosRequestConfig
}): UseMutationOptions<
  Awaited<ReturnType<typeof setAppOfTheWeekAppPicksAppOfTheWeekPost>>,
  TError,
  { data: UpsertAppOfTheWeek },
  TContext
> => {
  const { mutation: mutationOptions, axios: axiosOptions } = options ?? {}

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof setAppOfTheWeekAppPicksAppOfTheWeekPost>>,
    { data: UpsertAppOfTheWeek }
  > = (props) => {
    const { data } = props ?? {}

    return setAppOfTheWeekAppPicksAppOfTheWeekPost(data, axiosOptions)
  }

  return { mutationFn, ...mutationOptions }
}

export type SetAppOfTheWeekAppPicksAppOfTheWeekPostMutationResult = NonNullable<
  Awaited<ReturnType<typeof setAppOfTheWeekAppPicksAppOfTheWeekPost>>
>
export type SetAppOfTheWeekAppPicksAppOfTheWeekPostMutationBody =
  UpsertAppOfTheWeek
export type SetAppOfTheWeekAppPicksAppOfTheWeekPostMutationError =
  AxiosError<HTTPValidationError>

/**
 * @summary Set App Of The Week
 */
export const useSetAppOfTheWeekAppPicksAppOfTheWeekPost = <
  TError = AxiosError<HTTPValidationError>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof setAppOfTheWeekAppPicksAppOfTheWeekPost>>,
    TError,
    { data: UpsertAppOfTheWeek },
    TContext
  >
  axios?: AxiosRequestConfig
}) => {
  const mutationOptions =
    getSetAppOfTheWeekAppPicksAppOfTheWeekPostMutationOptions(options)

  return useMutation(mutationOptions)
}
/**
 * Sets an app of the day
 * @summary Set App Of The Day
 */
export const setAppOfTheDayAppPicksAppOfTheDayPost = (
  appOfTheDay: AppOfTheDay,
  options?: AxiosRequestConfig,
): Promise<AxiosResponse<SetAppOfTheDayAppPicksAppOfTheDayPost200>> => {
  return axios.post(`/app-picks/app-of-the-day`, appOfTheDay, options)
}

export const getSetAppOfTheDayAppPicksAppOfTheDayPostMutationOptions = <
  TError = AxiosError<HTTPValidationError>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof setAppOfTheDayAppPicksAppOfTheDayPost>>,
    TError,
    { data: AppOfTheDay },
    TContext
  >
  axios?: AxiosRequestConfig
}): UseMutationOptions<
  Awaited<ReturnType<typeof setAppOfTheDayAppPicksAppOfTheDayPost>>,
  TError,
  { data: AppOfTheDay },
  TContext
> => {
  const { mutation: mutationOptions, axios: axiosOptions } = options ?? {}

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof setAppOfTheDayAppPicksAppOfTheDayPost>>,
    { data: AppOfTheDay }
  > = (props) => {
    const { data } = props ?? {}

    return setAppOfTheDayAppPicksAppOfTheDayPost(data, axiosOptions)
  }

  return { mutationFn, ...mutationOptions }
}

export type SetAppOfTheDayAppPicksAppOfTheDayPostMutationResult = NonNullable<
  Awaited<ReturnType<typeof setAppOfTheDayAppPicksAppOfTheDayPost>>
>
export type SetAppOfTheDayAppPicksAppOfTheDayPostMutationBody = AppOfTheDay
export type SetAppOfTheDayAppPicksAppOfTheDayPostMutationError =
  AxiosError<HTTPValidationError>

/**
 * @summary Set App Of The Day
 */
export const useSetAppOfTheDayAppPicksAppOfTheDayPost = <
  TError = AxiosError<HTTPValidationError>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof setAppOfTheDayAppPicksAppOfTheDayPost>>,
    TError,
    { data: AppOfTheDay },
    TContext
  >
  axios?: AxiosRequestConfig
}) => {
  const mutationOptions =
    getSetAppOfTheDayAppPicksAppOfTheDayPostMutationOptions(options)

  return useMutation(mutationOptions)
}
