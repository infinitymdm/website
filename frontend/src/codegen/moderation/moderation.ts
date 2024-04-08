/**
 * Generated by orval v6.26.0 🍺
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
  UseMutationResult,
  UseQueryOptions,
  UseQueryResult,
} from "@tanstack/react-query"
import axios from "axios"
import type { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios"
import type {
  GetModerationAppModerationAppsAppIdGetParams,
  GetModerationAppsModerationAppsGetParams,
  HTTPValidationError,
  ModerationApp,
  ModerationAppsResponse,
  Review,
  ReviewRequest,
  ReviewRequestResponse,
  SubmitReviewModerationRequestsIdReviewPost200,
} from ".././model"

/**
 * Get a list of apps with unhandled moderation requests.
 * @summary Get Moderation Apps
 */
export const getModerationAppsModerationAppsGet = (
  params?: GetModerationAppsModerationAppsGetParams,
  options?: AxiosRequestConfig,
): Promise<AxiosResponse<ModerationAppsResponse>> => {
  return axios.get(`/moderation/apps`, {
    ...options,
    params: { ...params, ...options?.params },
  })
}

export const getGetModerationAppsModerationAppsGetQueryKey = (
  params?: GetModerationAppsModerationAppsGetParams,
) => {
  return [`/moderation/apps`, ...(params ? [params] : [])] as const
}

export const getGetModerationAppsModerationAppsGetQueryOptions = <
  TData = Awaited<ReturnType<typeof getModerationAppsModerationAppsGet>>,
  TError = AxiosError<HTTPValidationError>,
>(
  params?: GetModerationAppsModerationAppsGetParams,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof getModerationAppsModerationAppsGet>>,
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
    getGetModerationAppsModerationAppsGetQueryKey(params)

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof getModerationAppsModerationAppsGet>>
  > = ({ signal }) =>
    getModerationAppsModerationAppsGet(params, { signal, ...axiosOptions })

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof getModerationAppsModerationAppsGet>>,
    TError,
    TData
  > & { queryKey: QueryKey }
}

export type GetModerationAppsModerationAppsGetQueryResult = NonNullable<
  Awaited<ReturnType<typeof getModerationAppsModerationAppsGet>>
>
export type GetModerationAppsModerationAppsGetQueryError =
  AxiosError<HTTPValidationError>

/**
 * @summary Get Moderation Apps
 */
export const useGetModerationAppsModerationAppsGet = <
  TData = Awaited<ReturnType<typeof getModerationAppsModerationAppsGet>>,
  TError = AxiosError<HTTPValidationError>,
>(
  params?: GetModerationAppsModerationAppsGetParams,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof getModerationAppsModerationAppsGet>>,
        TError,
        TData
      >
    >
    axios?: AxiosRequestConfig
  },
): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getGetModerationAppsModerationAppsGetQueryOptions(
    params,
    options,
  )

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey
  }

  query.queryKey = queryOptions.queryKey

  return query
}

/**
 * Get a list of moderation requests for an app.
 * @summary Get Moderation App
 */
export const getModerationAppModerationAppsAppIdGet = (
  appId: string,
  params?: GetModerationAppModerationAppsAppIdGetParams,
  options?: AxiosRequestConfig,
): Promise<AxiosResponse<ModerationApp>> => {
  return axios.get(`/moderation/apps/${appId}`, {
    ...options,
    params: { ...params, ...options?.params },
  })
}

export const getGetModerationAppModerationAppsAppIdGetQueryKey = (
  appId: string,
  params?: GetModerationAppModerationAppsAppIdGetParams,
) => {
  return [`/moderation/apps/${appId}`, ...(params ? [params] : [])] as const
}

export const getGetModerationAppModerationAppsAppIdGetQueryOptions = <
  TData = Awaited<ReturnType<typeof getModerationAppModerationAppsAppIdGet>>,
  TError = AxiosError<HTTPValidationError>,
>(
  appId: string,
  params?: GetModerationAppModerationAppsAppIdGetParams,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof getModerationAppModerationAppsAppIdGet>>,
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
    getGetModerationAppModerationAppsAppIdGetQueryKey(appId, params)

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof getModerationAppModerationAppsAppIdGet>>
  > = ({ signal }) =>
    getModerationAppModerationAppsAppIdGet(appId, params, {
      signal,
      ...axiosOptions,
    })

  return {
    queryKey,
    queryFn,
    enabled: !!appId,
    ...queryOptions,
  } as UseQueryOptions<
    Awaited<ReturnType<typeof getModerationAppModerationAppsAppIdGet>>,
    TError,
    TData
  > & { queryKey: QueryKey }
}

export type GetModerationAppModerationAppsAppIdGetQueryResult = NonNullable<
  Awaited<ReturnType<typeof getModerationAppModerationAppsAppIdGet>>
>
export type GetModerationAppModerationAppsAppIdGetQueryError =
  AxiosError<HTTPValidationError>

/**
 * @summary Get Moderation App
 */
export const useGetModerationAppModerationAppsAppIdGet = <
  TData = Awaited<ReturnType<typeof getModerationAppModerationAppsAppIdGet>>,
  TError = AxiosError<HTTPValidationError>,
>(
  appId: string,
  params?: GetModerationAppModerationAppsAppIdGetParams,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof getModerationAppModerationAppsAppIdGet>>,
        TError,
        TData
      >
    >
    axios?: AxiosRequestConfig
  },
): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getGetModerationAppModerationAppsAppIdGetQueryOptions(
    appId,
    params,
    options,
  )

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey
  }

  query.queryKey = queryOptions.queryKey

  return query
}

/**
 * @summary Submit Review Request
 */
export const submitReviewRequestModerationSubmitReviewRequestPost = (
  reviewRequest: ReviewRequest,
  options?: AxiosRequestConfig,
): Promise<AxiosResponse<ReviewRequestResponse>> => {
  return axios.post(`/moderation/submit_review_request`, reviewRequest, options)
}

export const getSubmitReviewRequestModerationSubmitReviewRequestPostMutationOptions =
  <TError = AxiosError<HTTPValidationError>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<
      Awaited<
        ReturnType<typeof submitReviewRequestModerationSubmitReviewRequestPost>
      >,
      TError,
      { data: ReviewRequest },
      TContext
    >
    axios?: AxiosRequestConfig
  }): UseMutationOptions<
    Awaited<
      ReturnType<typeof submitReviewRequestModerationSubmitReviewRequestPost>
    >,
    TError,
    { data: ReviewRequest },
    TContext
  > => {
    const { mutation: mutationOptions, axios: axiosOptions } = options ?? {}

    const mutationFn: MutationFunction<
      Awaited<
        ReturnType<typeof submitReviewRequestModerationSubmitReviewRequestPost>
      >,
      { data: ReviewRequest }
    > = (props) => {
      const { data } = props ?? {}

      return submitReviewRequestModerationSubmitReviewRequestPost(
        data,
        axiosOptions,
      )
    }

    return { mutationFn, ...mutationOptions }
  }

export type SubmitReviewRequestModerationSubmitReviewRequestPostMutationResult =
  NonNullable<
    Awaited<
      ReturnType<typeof submitReviewRequestModerationSubmitReviewRequestPost>
    >
  >
export type SubmitReviewRequestModerationSubmitReviewRequestPostMutationBody =
  ReviewRequest
export type SubmitReviewRequestModerationSubmitReviewRequestPostMutationError =
  AxiosError<HTTPValidationError>

/**
 * @summary Submit Review Request
 */
export const useSubmitReviewRequestModerationSubmitReviewRequestPost = <
  TError = AxiosError<HTTPValidationError>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<
      ReturnType<typeof submitReviewRequestModerationSubmitReviewRequestPost>
    >,
    TError,
    { data: ReviewRequest },
    TContext
  >
  axios?: AxiosRequestConfig
}): UseMutationResult<
  Awaited<
    ReturnType<typeof submitReviewRequestModerationSubmitReviewRequestPost>
  >,
  TError,
  { data: ReviewRequest },
  TContext
> => {
  const mutationOptions =
    getSubmitReviewRequestModerationSubmitReviewRequestPostMutationOptions(
      options,
    )

  return useMutation(mutationOptions)
}
/**
 * Approve or reject the moderation request with a comment. If all requests for a job are approved, the job is
marked as successful in flat-manager.
 * @summary Submit Review
 */
export const submitReviewModerationRequestsIdReviewPost = (
  id: number,
  review: Review,
  options?: AxiosRequestConfig,
): Promise<AxiosResponse<SubmitReviewModerationRequestsIdReviewPost200>> => {
  return axios.post(`/moderation/requests/${id}/review`, review, options)
}

export const getSubmitReviewModerationRequestsIdReviewPostMutationOptions = <
  TError = AxiosError<HTTPValidationError>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof submitReviewModerationRequestsIdReviewPost>>,
    TError,
    { id: number; data: Review },
    TContext
  >
  axios?: AxiosRequestConfig
}): UseMutationOptions<
  Awaited<ReturnType<typeof submitReviewModerationRequestsIdReviewPost>>,
  TError,
  { id: number; data: Review },
  TContext
> => {
  const { mutation: mutationOptions, axios: axiosOptions } = options ?? {}

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof submitReviewModerationRequestsIdReviewPost>>,
    { id: number; data: Review }
  > = (props) => {
    const { id, data } = props ?? {}

    return submitReviewModerationRequestsIdReviewPost(id, data, axiosOptions)
  }

  return { mutationFn, ...mutationOptions }
}

export type SubmitReviewModerationRequestsIdReviewPostMutationResult =
  NonNullable<
    Awaited<ReturnType<typeof submitReviewModerationRequestsIdReviewPost>>
  >
export type SubmitReviewModerationRequestsIdReviewPostMutationBody = Review
export type SubmitReviewModerationRequestsIdReviewPostMutationError =
  AxiosError<HTTPValidationError>

/**
 * @summary Submit Review
 */
export const useSubmitReviewModerationRequestsIdReviewPost = <
  TError = AxiosError<HTTPValidationError>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof submitReviewModerationRequestsIdReviewPost>>,
    TError,
    { id: number; data: Review },
    TContext
  >
  axios?: AxiosRequestConfig
}): UseMutationResult<
  Awaited<ReturnType<typeof submitReviewModerationRequestsIdReviewPost>>,
  TError,
  { id: number; data: Review },
  TContext
> => {
  const mutationOptions =
    getSubmitReviewModerationRequestsIdReviewPostMutationOptions(options)

  return useMutation(mutationOptions)
}
