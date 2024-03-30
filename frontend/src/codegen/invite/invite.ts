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
  DevelopersResponse,
  HTTPValidationError,
  InviteDeveloperInvitesAppIdInvitePostParams,
  InviteStatus,
  RemoveDeveloperInvitesAppIdRemoveDeveloperPostParams,
  RevokeInviteInvitesAppIdRevokePostParams,
} from ".././model"

/**
 * @summary Get Invite Status
 */
export const getInviteStatusInvitesAppIdGet = (
  appId: string,
  options?: AxiosRequestConfig,
): Promise<AxiosResponse<InviteStatus>> => {
  return axios.get(`/invites/${appId}`, options)
}

export const getGetInviteStatusInvitesAppIdGetQueryKey = (appId: string) => {
  return [`/invites/${appId}`] as const
}

export const getGetInviteStatusInvitesAppIdGetQueryOptions = <
  TData = Awaited<ReturnType<typeof getInviteStatusInvitesAppIdGet>>,
  TError = AxiosError<HTTPValidationError>,
>(
  appId: string,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof getInviteStatusInvitesAppIdGet>>,
        TError,
        TData
      >
    >
    axios?: AxiosRequestConfig
  },
) => {
  const { query: queryOptions, axios: axiosOptions } = options ?? {}

  const queryKey =
    queryOptions?.queryKey ?? getGetInviteStatusInvitesAppIdGetQueryKey(appId)

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof getInviteStatusInvitesAppIdGet>>
  > = ({ signal }) =>
    getInviteStatusInvitesAppIdGet(appId, { signal, ...axiosOptions })

  return {
    queryKey,
    queryFn,
    enabled: !!appId,
    ...queryOptions,
  } as UseQueryOptions<
    Awaited<ReturnType<typeof getInviteStatusInvitesAppIdGet>>,
    TError,
    TData
  > & { queryKey: QueryKey }
}

export type GetInviteStatusInvitesAppIdGetQueryResult = NonNullable<
  Awaited<ReturnType<typeof getInviteStatusInvitesAppIdGet>>
>
export type GetInviteStatusInvitesAppIdGetQueryError =
  AxiosError<HTTPValidationError>

/**
 * @summary Get Invite Status
 */
export const useGetInviteStatusInvitesAppIdGet = <
  TData = Awaited<ReturnType<typeof getInviteStatusInvitesAppIdGet>>,
  TError = AxiosError<HTTPValidationError>,
>(
  appId: string,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof getInviteStatusInvitesAppIdGet>>,
        TError,
        TData
      >
    >
    axios?: AxiosRequestConfig
  },
): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getGetInviteStatusInvitesAppIdGetQueryOptions(
    appId,
    options,
  )

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey
  }

  query.queryKey = queryOptions.queryKey

  return query
}

/**
 * @summary Invite Developer
 */
export const inviteDeveloperInvitesAppIdInvitePost = (
  appId: string,
  params: InviteDeveloperInvitesAppIdInvitePostParams,
  options?: AxiosRequestConfig,
): Promise<AxiosResponse<void>> => {
  return axios.post(`/invites/${appId}/invite`, undefined, {
    ...options,
    params: { ...params, ...options?.params },
  })
}

export const getInviteDeveloperInvitesAppIdInvitePostMutationOptions = <
  TError = AxiosError<HTTPValidationError>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof inviteDeveloperInvitesAppIdInvitePost>>,
    TError,
    { appId: string; params: InviteDeveloperInvitesAppIdInvitePostParams },
    TContext
  >
  axios?: AxiosRequestConfig
}): UseMutationOptions<
  Awaited<ReturnType<typeof inviteDeveloperInvitesAppIdInvitePost>>,
  TError,
  { appId: string; params: InviteDeveloperInvitesAppIdInvitePostParams },
  TContext
> => {
  const { mutation: mutationOptions, axios: axiosOptions } = options ?? {}

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof inviteDeveloperInvitesAppIdInvitePost>>,
    { appId: string; params: InviteDeveloperInvitesAppIdInvitePostParams }
  > = (props) => {
    const { appId, params } = props ?? {}

    return inviteDeveloperInvitesAppIdInvitePost(appId, params, axiosOptions)
  }

  return { mutationFn, ...mutationOptions }
}

export type InviteDeveloperInvitesAppIdInvitePostMutationResult = NonNullable<
  Awaited<ReturnType<typeof inviteDeveloperInvitesAppIdInvitePost>>
>

export type InviteDeveloperInvitesAppIdInvitePostMutationError =
  AxiosError<HTTPValidationError>

/**
 * @summary Invite Developer
 */
export const useInviteDeveloperInvitesAppIdInvitePost = <
  TError = AxiosError<HTTPValidationError>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof inviteDeveloperInvitesAppIdInvitePost>>,
    TError,
    { appId: string; params: InviteDeveloperInvitesAppIdInvitePostParams },
    TContext
  >
  axios?: AxiosRequestConfig
}) => {
  const mutationOptions =
    getInviteDeveloperInvitesAppIdInvitePostMutationOptions(options)

  return useMutation(mutationOptions)
}
/**
 * @summary Accept Invite
 */
export const acceptInviteInvitesAppIdAcceptPost = (
  appId: string,
  options?: AxiosRequestConfig,
): Promise<AxiosResponse<void>> => {
  return axios.post(`/invites/${appId}/accept`, undefined, options)
}

export const getAcceptInviteInvitesAppIdAcceptPostMutationOptions = <
  TError = AxiosError<HTTPValidationError>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof acceptInviteInvitesAppIdAcceptPost>>,
    TError,
    { appId: string },
    TContext
  >
  axios?: AxiosRequestConfig
}): UseMutationOptions<
  Awaited<ReturnType<typeof acceptInviteInvitesAppIdAcceptPost>>,
  TError,
  { appId: string },
  TContext
> => {
  const { mutation: mutationOptions, axios: axiosOptions } = options ?? {}

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof acceptInviteInvitesAppIdAcceptPost>>,
    { appId: string }
  > = (props) => {
    const { appId } = props ?? {}

    return acceptInviteInvitesAppIdAcceptPost(appId, axiosOptions)
  }

  return { mutationFn, ...mutationOptions }
}

export type AcceptInviteInvitesAppIdAcceptPostMutationResult = NonNullable<
  Awaited<ReturnType<typeof acceptInviteInvitesAppIdAcceptPost>>
>

export type AcceptInviteInvitesAppIdAcceptPostMutationError =
  AxiosError<HTTPValidationError>

/**
 * @summary Accept Invite
 */
export const useAcceptInviteInvitesAppIdAcceptPost = <
  TError = AxiosError<HTTPValidationError>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof acceptInviteInvitesAppIdAcceptPost>>,
    TError,
    { appId: string },
    TContext
  >
  axios?: AxiosRequestConfig
}) => {
  const mutationOptions =
    getAcceptInviteInvitesAppIdAcceptPostMutationOptions(options)

  return useMutation(mutationOptions)
}
/**
 * @summary Decline Invite
 */
export const declineInviteInvitesAppIdDeclinePost = (
  appId: string,
  options?: AxiosRequestConfig,
): Promise<AxiosResponse<void>> => {
  return axios.post(`/invites/${appId}/decline`, undefined, options)
}

export const getDeclineInviteInvitesAppIdDeclinePostMutationOptions = <
  TError = AxiosError<HTTPValidationError>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof declineInviteInvitesAppIdDeclinePost>>,
    TError,
    { appId: string },
    TContext
  >
  axios?: AxiosRequestConfig
}): UseMutationOptions<
  Awaited<ReturnType<typeof declineInviteInvitesAppIdDeclinePost>>,
  TError,
  { appId: string },
  TContext
> => {
  const { mutation: mutationOptions, axios: axiosOptions } = options ?? {}

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof declineInviteInvitesAppIdDeclinePost>>,
    { appId: string }
  > = (props) => {
    const { appId } = props ?? {}

    return declineInviteInvitesAppIdDeclinePost(appId, axiosOptions)
  }

  return { mutationFn, ...mutationOptions }
}

export type DeclineInviteInvitesAppIdDeclinePostMutationResult = NonNullable<
  Awaited<ReturnType<typeof declineInviteInvitesAppIdDeclinePost>>
>

export type DeclineInviteInvitesAppIdDeclinePostMutationError =
  AxiosError<HTTPValidationError>

/**
 * @summary Decline Invite
 */
export const useDeclineInviteInvitesAppIdDeclinePost = <
  TError = AxiosError<HTTPValidationError>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof declineInviteInvitesAppIdDeclinePost>>,
    TError,
    { appId: string },
    TContext
  >
  axios?: AxiosRequestConfig
}) => {
  const mutationOptions =
    getDeclineInviteInvitesAppIdDeclinePostMutationOptions(options)

  return useMutation(mutationOptions)
}
/**
 * @summary Leave Team
 */
export const leaveTeamInvitesAppIdLeavePost = (
  appId: string,
  options?: AxiosRequestConfig,
): Promise<AxiosResponse<void>> => {
  return axios.post(`/invites/${appId}/leave`, undefined, options)
}

export const getLeaveTeamInvitesAppIdLeavePostMutationOptions = <
  TError = AxiosError<HTTPValidationError>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof leaveTeamInvitesAppIdLeavePost>>,
    TError,
    { appId: string },
    TContext
  >
  axios?: AxiosRequestConfig
}): UseMutationOptions<
  Awaited<ReturnType<typeof leaveTeamInvitesAppIdLeavePost>>,
  TError,
  { appId: string },
  TContext
> => {
  const { mutation: mutationOptions, axios: axiosOptions } = options ?? {}

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof leaveTeamInvitesAppIdLeavePost>>,
    { appId: string }
  > = (props) => {
    const { appId } = props ?? {}

    return leaveTeamInvitesAppIdLeavePost(appId, axiosOptions)
  }

  return { mutationFn, ...mutationOptions }
}

export type LeaveTeamInvitesAppIdLeavePostMutationResult = NonNullable<
  Awaited<ReturnType<typeof leaveTeamInvitesAppIdLeavePost>>
>

export type LeaveTeamInvitesAppIdLeavePostMutationError =
  AxiosError<HTTPValidationError>

/**
 * @summary Leave Team
 */
export const useLeaveTeamInvitesAppIdLeavePost = <
  TError = AxiosError<HTTPValidationError>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof leaveTeamInvitesAppIdLeavePost>>,
    TError,
    { appId: string },
    TContext
  >
  axios?: AxiosRequestConfig
}) => {
  const mutationOptions =
    getLeaveTeamInvitesAppIdLeavePostMutationOptions(options)

  return useMutation(mutationOptions)
}
/**
 * @summary Get Developers
 */
export const getDevelopersInvitesAppIdDevelopersGet = (
  appId: string,
  options?: AxiosRequestConfig,
): Promise<AxiosResponse<DevelopersResponse>> => {
  return axios.get(`/invites/${appId}/developers`, options)
}

export const getGetDevelopersInvitesAppIdDevelopersGetQueryKey = (
  appId: string,
) => {
  return [`/invites/${appId}/developers`] as const
}

export const getGetDevelopersInvitesAppIdDevelopersGetQueryOptions = <
  TData = Awaited<ReturnType<typeof getDevelopersInvitesAppIdDevelopersGet>>,
  TError = AxiosError<HTTPValidationError>,
>(
  appId: string,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof getDevelopersInvitesAppIdDevelopersGet>>,
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
    getGetDevelopersInvitesAppIdDevelopersGetQueryKey(appId)

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof getDevelopersInvitesAppIdDevelopersGet>>
  > = ({ signal }) =>
    getDevelopersInvitesAppIdDevelopersGet(appId, { signal, ...axiosOptions })

  return {
    queryKey,
    queryFn,
    enabled: !!appId,
    ...queryOptions,
  } as UseQueryOptions<
    Awaited<ReturnType<typeof getDevelopersInvitesAppIdDevelopersGet>>,
    TError,
    TData
  > & { queryKey: QueryKey }
}

export type GetDevelopersInvitesAppIdDevelopersGetQueryResult = NonNullable<
  Awaited<ReturnType<typeof getDevelopersInvitesAppIdDevelopersGet>>
>
export type GetDevelopersInvitesAppIdDevelopersGetQueryError =
  AxiosError<HTTPValidationError>

/**
 * @summary Get Developers
 */
export const useGetDevelopersInvitesAppIdDevelopersGet = <
  TData = Awaited<ReturnType<typeof getDevelopersInvitesAppIdDevelopersGet>>,
  TError = AxiosError<HTTPValidationError>,
>(
  appId: string,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof getDevelopersInvitesAppIdDevelopersGet>>,
        TError,
        TData
      >
    >
    axios?: AxiosRequestConfig
  },
): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getGetDevelopersInvitesAppIdDevelopersGetQueryOptions(
    appId,
    options,
  )

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey
  }

  query.queryKey = queryOptions.queryKey

  return query
}

/**
 * @summary Remove Developer
 */
export const removeDeveloperInvitesAppIdRemoveDeveloperPost = (
  appId: string,
  params: RemoveDeveloperInvitesAppIdRemoveDeveloperPostParams,
  options?: AxiosRequestConfig,
): Promise<AxiosResponse<void>> => {
  return axios.post(`/invites/${appId}/remove-developer`, undefined, {
    ...options,
    params: { ...params, ...options?.params },
  })
}

export const getRemoveDeveloperInvitesAppIdRemoveDeveloperPostMutationOptions =
  <TError = AxiosError<HTTPValidationError>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<
      Awaited<
        ReturnType<typeof removeDeveloperInvitesAppIdRemoveDeveloperPost>
      >,
      TError,
      {
        appId: string
        params: RemoveDeveloperInvitesAppIdRemoveDeveloperPostParams
      },
      TContext
    >
    axios?: AxiosRequestConfig
  }): UseMutationOptions<
    Awaited<ReturnType<typeof removeDeveloperInvitesAppIdRemoveDeveloperPost>>,
    TError,
    {
      appId: string
      params: RemoveDeveloperInvitesAppIdRemoveDeveloperPostParams
    },
    TContext
  > => {
    const { mutation: mutationOptions, axios: axiosOptions } = options ?? {}

    const mutationFn: MutationFunction<
      Awaited<
        ReturnType<typeof removeDeveloperInvitesAppIdRemoveDeveloperPost>
      >,
      {
        appId: string
        params: RemoveDeveloperInvitesAppIdRemoveDeveloperPostParams
      }
    > = (props) => {
      const { appId, params } = props ?? {}

      return removeDeveloperInvitesAppIdRemoveDeveloperPost(
        appId,
        params,
        axiosOptions,
      )
    }

    return { mutationFn, ...mutationOptions }
  }

export type RemoveDeveloperInvitesAppIdRemoveDeveloperPostMutationResult =
  NonNullable<
    Awaited<ReturnType<typeof removeDeveloperInvitesAppIdRemoveDeveloperPost>>
  >

export type RemoveDeveloperInvitesAppIdRemoveDeveloperPostMutationError =
  AxiosError<HTTPValidationError>

/**
 * @summary Remove Developer
 */
export const useRemoveDeveloperInvitesAppIdRemoveDeveloperPost = <
  TError = AxiosError<HTTPValidationError>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof removeDeveloperInvitesAppIdRemoveDeveloperPost>>,
    TError,
    {
      appId: string
      params: RemoveDeveloperInvitesAppIdRemoveDeveloperPostParams
    },
    TContext
  >
  axios?: AxiosRequestConfig
}) => {
  const mutationOptions =
    getRemoveDeveloperInvitesAppIdRemoveDeveloperPostMutationOptions(options)

  return useMutation(mutationOptions)
}
/**
 * @summary Revoke Invite
 */
export const revokeInviteInvitesAppIdRevokePost = (
  appId: string,
  params: RevokeInviteInvitesAppIdRevokePostParams,
  options?: AxiosRequestConfig,
): Promise<AxiosResponse<void>> => {
  return axios.post(`/invites/${appId}/revoke`, undefined, {
    ...options,
    params: { ...params, ...options?.params },
  })
}

export const getRevokeInviteInvitesAppIdRevokePostMutationOptions = <
  TError = AxiosError<HTTPValidationError>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof revokeInviteInvitesAppIdRevokePost>>,
    TError,
    { appId: string; params: RevokeInviteInvitesAppIdRevokePostParams },
    TContext
  >
  axios?: AxiosRequestConfig
}): UseMutationOptions<
  Awaited<ReturnType<typeof revokeInviteInvitesAppIdRevokePost>>,
  TError,
  { appId: string; params: RevokeInviteInvitesAppIdRevokePostParams },
  TContext
> => {
  const { mutation: mutationOptions, axios: axiosOptions } = options ?? {}

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof revokeInviteInvitesAppIdRevokePost>>,
    { appId: string; params: RevokeInviteInvitesAppIdRevokePostParams }
  > = (props) => {
    const { appId, params } = props ?? {}

    return revokeInviteInvitesAppIdRevokePost(appId, params, axiosOptions)
  }

  return { mutationFn, ...mutationOptions }
}

export type RevokeInviteInvitesAppIdRevokePostMutationResult = NonNullable<
  Awaited<ReturnType<typeof revokeInviteInvitesAppIdRevokePost>>
>

export type RevokeInviteInvitesAppIdRevokePostMutationError =
  AxiosError<HTTPValidationError>

/**
 * @summary Revoke Invite
 */
export const useRevokeInviteInvitesAppIdRevokePost = <
  TError = AxiosError<HTTPValidationError>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof revokeInviteInvitesAppIdRevokePost>>,
    TError,
    { appId: string; params: RevokeInviteInvitesAppIdRevokePostParams },
    TContext
  >
  axios?: AxiosRequestConfig
}) => {
  const mutationOptions =
    getRevokeInviteInvitesAppIdRevokePostMutationOptions(options)

  return useMutation(mutationOptions)
}
