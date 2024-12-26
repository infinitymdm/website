/**
 * Generated by orval 🍺
 * Do not edit manually.
 * Flathub API
 * OpenAPI spec version: 0.1.0
 */
import { faker } from "@faker-js/faker"
import { HttpResponse, delay, http } from "msw"
import { ConnectedAccountProvider } from ".././model"
import type { FlathubUsersResult, UserResult } from ".././model"

export const getUsersUsersGetResponseMock = (
  overrideResponse: Partial<FlathubUsersResult> = {},
): FlathubUsersResult => ({
  pagination: {
    page: faker.number.int({ min: undefined, max: undefined }),
    page_size: faker.number.int({ min: undefined, max: undefined }),
    total: faker.number.int({ min: undefined, max: undefined }),
    total_pages: faker.number.int({ min: undefined, max: undefined }),
  },
  // @ts-expect-error
  users: Array.from(
    { length: faker.number.int({ min: 1, max: 10 }) },
    (_, i) => i + 1,
  ).map(() => ({
    accepted_publisher_agreement_at: faker.helpers.arrayElement([
      `${faker.date.past().toISOString().split(".")[0]}Z`,
      null,
    ]),
    connected_accounts: Array.from(
      { length: faker.number.int({ min: 1, max: 10 }) },
      (_, i) => i + 1,
    ).map(() =>
      faker.helpers.arrayElement([
        {
          avatar_url: faker.helpers.arrayElement([
            faker.string.alpha(20),
            null,
          ]),
          display_name: faker.helpers.arrayElement([
            faker.string.alpha(20),
            null,
          ]),
          email: faker.helpers.arrayElement([faker.string.alpha(20), null]),
          github_userid: faker.number.int({ min: undefined, max: undefined }),
          id: faker.number.int({ min: undefined, max: undefined }),
          last_used: faker.helpers.arrayElement([
            `${faker.date.past().toISOString().split(".")[0]}Z`,
            null,
          ]),
          login: faker.string.alpha(20),
          provider: faker.helpers.arrayElement(
            Object.values(ConnectedAccountProvider),
          ),
        },
        { gitlab_userid: faker.number.int({ min: undefined, max: undefined }) },
        { gnome_userid: faker.number.int({ min: undefined, max: undefined }) },
        { google_userid: faker.number.int({ min: undefined, max: undefined }) },
        { kde_userid: faker.number.int({ min: undefined, max: undefined }) },
      ]),
    ),
    default_account: faker.helpers.arrayElement([
      {
        avatar_url: faker.helpers.arrayElement([faker.string.alpha(20), null]),
        display_name: faker.helpers.arrayElement([
          faker.string.alpha(20),
          null,
        ]),
        email: faker.helpers.arrayElement([faker.string.alpha(20), null]),
        github_userid: faker.number.int({ min: undefined, max: undefined }),
        id: faker.number.int({ min: undefined, max: undefined }),
        last_used: faker.helpers.arrayElement([
          `${faker.date.past().toISOString().split(".")[0]}Z`,
          null,
        ]),
        login: faker.string.alpha(20),
        provider: faker.helpers.arrayElement(
          Object.values(ConnectedAccountProvider),
        ),
      },
      { gitlab_userid: faker.number.int({ min: undefined, max: undefined }) },
      { gnome_userid: faker.number.int({ min: undefined, max: undefined }) },
      { google_userid: faker.number.int({ min: undefined, max: undefined }) },
      { kde_userid: faker.number.int({ min: undefined, max: undefined }) },
      null,
    ]),
    display_name: faker.helpers.arrayElement([faker.string.alpha(20), null]),
    github_repos: faker.helpers.arrayElement([
      Array.from(
        { length: faker.number.int({ min: 1, max: 10 }) },
        (_, i) => i + 1,
      ).map(() => ({
        id: faker.number.int({ min: undefined, max: undefined }),
        reponame: faker.string.alpha(20),
      })),
      null,
    ]),
    id: faker.number.int({ min: undefined, max: undefined }),
    owned_apps: faker.helpers.arrayElement([
      Array.from(
        { length: faker.number.int({ min: 1, max: 10 }) },
        (_, i) => i + 1,
      ).map(() => ({
        app_id: faker.string.alpha(20),
        created: `${faker.date.past().toISOString().split(".")[0]}Z`,
      })),
      null,
    ]),
    roles: Array.from(
      { length: faker.number.int({ min: 1, max: 10 }) },
      (_, i) => i + 1,
    ).map(() => ({
      hasRole: faker.datatype.boolean(),
      name: faker.string.alpha(20),
    })),
  })),
  ...overrideResponse,
})

export const getRolesUsersRolesGetResponseMock = (): string[] =>
  Array.from({ length: faker.number.int({ min: 1, max: 10 }) }, () =>
    faker.word.sample(),
  )

export const getUserUsersUserIdGetResponseMock = (
  overrideResponse: Partial<UserResult> = {},
): UserResult => ({
  accepted_publisher_agreement_at: faker.helpers.arrayElement([
    `${faker.date.past().toISOString().split(".")[0]}Z`,
    null,
  ]),
  // @ts-expect-error
  connected_accounts: Array.from(
    { length: faker.number.int({ min: 1, max: 10 }) },
    (_, i) => i + 1,
  ).map(() =>
    faker.helpers.arrayElement([
      {
        avatar_url: faker.helpers.arrayElement([faker.string.alpha(20), null]),
        display_name: faker.helpers.arrayElement([
          faker.string.alpha(20),
          null,
        ]),
        email: faker.helpers.arrayElement([faker.string.alpha(20), null]),
        github_userid: faker.number.int({ min: undefined, max: undefined }),
        id: faker.number.int({ min: undefined, max: undefined }),
        last_used: faker.helpers.arrayElement([
          `${faker.date.past().toISOString().split(".")[0]}Z`,
          null,
        ]),
        login: faker.string.alpha(20),
        provider: faker.helpers.arrayElement(
          Object.values(ConnectedAccountProvider),
        ),
      },
      { gitlab_userid: faker.number.int({ min: undefined, max: undefined }) },
      { gnome_userid: faker.number.int({ min: undefined, max: undefined }) },
      { google_userid: faker.number.int({ min: undefined, max: undefined }) },
      { kde_userid: faker.number.int({ min: undefined, max: undefined }) },
    ]),
  ),
  // @ts-expect-error
  default_account: faker.helpers.arrayElement([
    {
      avatar_url: faker.helpers.arrayElement([faker.string.alpha(20), null]),
      display_name: faker.helpers.arrayElement([faker.string.alpha(20), null]),
      email: faker.helpers.arrayElement([faker.string.alpha(20), null]),
      github_userid: faker.number.int({ min: undefined, max: undefined }),
      id: faker.number.int({ min: undefined, max: undefined }),
      last_used: faker.helpers.arrayElement([
        `${faker.date.past().toISOString().split(".")[0]}Z`,
        null,
      ]),
      login: faker.string.alpha(20),
      provider: faker.helpers.arrayElement(
        Object.values(ConnectedAccountProvider),
      ),
    },
    { gitlab_userid: faker.number.int({ min: undefined, max: undefined }) },
    { gnome_userid: faker.number.int({ min: undefined, max: undefined }) },
    { google_userid: faker.number.int({ min: undefined, max: undefined }) },
    { kde_userid: faker.number.int({ min: undefined, max: undefined }) },
    null,
  ]),
  display_name: faker.helpers.arrayElement([faker.string.alpha(20), null]),
  github_repos: faker.helpers.arrayElement([
    Array.from(
      { length: faker.number.int({ min: 1, max: 10 }) },
      (_, i) => i + 1,
    ).map(() => ({
      id: faker.number.int({ min: undefined, max: undefined }),
      reponame: faker.string.alpha(20),
    })),
    null,
  ]),
  id: faker.number.int({ min: undefined, max: undefined }),
  owned_apps: faker.helpers.arrayElement([
    Array.from(
      { length: faker.number.int({ min: 1, max: 10 }) },
      (_, i) => i + 1,
    ).map(() => ({
      app_id: faker.string.alpha(20),
      created: `${faker.date.past().toISOString().split(".")[0]}Z`,
    })),
    null,
  ]),
  roles: Array.from(
    { length: faker.number.int({ min: 1, max: 10 }) },
    (_, i) => i + 1,
  ).map(() => ({
    hasRole: faker.datatype.boolean(),
    name: faker.string.alpha(20),
  })),
  ...overrideResponse,
})

export const getAddUserRoleUsersUserIdRolePostResponseMock = (
  overrideResponse: Partial<UserResult> = {},
): UserResult => ({
  accepted_publisher_agreement_at: faker.helpers.arrayElement([
    `${faker.date.past().toISOString().split(".")[0]}Z`,
    null,
  ]),
  // @ts-expect-error
  connected_accounts: Array.from(
    { length: faker.number.int({ min: 1, max: 10 }) },
    (_, i) => i + 1,
  ).map(() =>
    faker.helpers.arrayElement([
      {
        avatar_url: faker.helpers.arrayElement([faker.string.alpha(20), null]),
        display_name: faker.helpers.arrayElement([
          faker.string.alpha(20),
          null,
        ]),
        email: faker.helpers.arrayElement([faker.string.alpha(20), null]),
        github_userid: faker.number.int({ min: undefined, max: undefined }),
        id: faker.number.int({ min: undefined, max: undefined }),
        last_used: faker.helpers.arrayElement([
          `${faker.date.past().toISOString().split(".")[0]}Z`,
          null,
        ]),
        login: faker.string.alpha(20),
        provider: faker.helpers.arrayElement(
          Object.values(ConnectedAccountProvider),
        ),
      },
      { gitlab_userid: faker.number.int({ min: undefined, max: undefined }) },
      { gnome_userid: faker.number.int({ min: undefined, max: undefined }) },
      { google_userid: faker.number.int({ min: undefined, max: undefined }) },
      { kde_userid: faker.number.int({ min: undefined, max: undefined }) },
    ]),
  ),
  // @ts-expect-error
  default_account: faker.helpers.arrayElement([
    {
      avatar_url: faker.helpers.arrayElement([faker.string.alpha(20), null]),
      display_name: faker.helpers.arrayElement([faker.string.alpha(20), null]),
      email: faker.helpers.arrayElement([faker.string.alpha(20), null]),
      github_userid: faker.number.int({ min: undefined, max: undefined }),
      id: faker.number.int({ min: undefined, max: undefined }),
      last_used: faker.helpers.arrayElement([
        `${faker.date.past().toISOString().split(".")[0]}Z`,
        null,
      ]),
      login: faker.string.alpha(20),
      provider: faker.helpers.arrayElement(
        Object.values(ConnectedAccountProvider),
      ),
    },
    { gitlab_userid: faker.number.int({ min: undefined, max: undefined }) },
    { gnome_userid: faker.number.int({ min: undefined, max: undefined }) },
    { google_userid: faker.number.int({ min: undefined, max: undefined }) },
    { kde_userid: faker.number.int({ min: undefined, max: undefined }) },
    null,
  ]),
  display_name: faker.helpers.arrayElement([faker.string.alpha(20), null]),
  github_repos: faker.helpers.arrayElement([
    Array.from(
      { length: faker.number.int({ min: 1, max: 10 }) },
      (_, i) => i + 1,
    ).map(() => ({
      id: faker.number.int({ min: undefined, max: undefined }),
      reponame: faker.string.alpha(20),
    })),
    null,
  ]),
  id: faker.number.int({ min: undefined, max: undefined }),
  owned_apps: faker.helpers.arrayElement([
    Array.from(
      { length: faker.number.int({ min: 1, max: 10 }) },
      (_, i) => i + 1,
    ).map(() => ({
      app_id: faker.string.alpha(20),
      created: `${faker.date.past().toISOString().split(".")[0]}Z`,
    })),
    null,
  ]),
  roles: Array.from(
    { length: faker.number.int({ min: 1, max: 10 }) },
    (_, i) => i + 1,
  ).map(() => ({
    hasRole: faker.datatype.boolean(),
    name: faker.string.alpha(20),
  })),
  ...overrideResponse,
})

export const getDeleteUserRoleUsersUserIdRoleDeleteResponseMock = (
  overrideResponse: Partial<UserResult> = {},
): UserResult => ({
  accepted_publisher_agreement_at: faker.helpers.arrayElement([
    `${faker.date.past().toISOString().split(".")[0]}Z`,
    null,
  ]),
  // @ts-expect-error
  connected_accounts: Array.from(
    { length: faker.number.int({ min: 1, max: 10 }) },
    (_, i) => i + 1,
  ).map(() =>
    faker.helpers.arrayElement([
      {
        avatar_url: faker.helpers.arrayElement([faker.string.alpha(20), null]),
        display_name: faker.helpers.arrayElement([
          faker.string.alpha(20),
          null,
        ]),
        email: faker.helpers.arrayElement([faker.string.alpha(20), null]),
        github_userid: faker.number.int({ min: undefined, max: undefined }),
        id: faker.number.int({ min: undefined, max: undefined }),
        last_used: faker.helpers.arrayElement([
          `${faker.date.past().toISOString().split(".")[0]}Z`,
          null,
        ]),
        login: faker.string.alpha(20),
        provider: faker.helpers.arrayElement(
          Object.values(ConnectedAccountProvider),
        ),
      },
      { gitlab_userid: faker.number.int({ min: undefined, max: undefined }) },
      { gnome_userid: faker.number.int({ min: undefined, max: undefined }) },
      { google_userid: faker.number.int({ min: undefined, max: undefined }) },
      { kde_userid: faker.number.int({ min: undefined, max: undefined }) },
    ]),
  ),
  // @ts-expect-error
  default_account: faker.helpers.arrayElement([
    {
      avatar_url: faker.helpers.arrayElement([faker.string.alpha(20), null]),
      display_name: faker.helpers.arrayElement([faker.string.alpha(20), null]),
      email: faker.helpers.arrayElement([faker.string.alpha(20), null]),
      github_userid: faker.number.int({ min: undefined, max: undefined }),
      id: faker.number.int({ min: undefined, max: undefined }),
      last_used: faker.helpers.arrayElement([
        `${faker.date.past().toISOString().split(".")[0]}Z`,
        null,
      ]),
      login: faker.string.alpha(20),
      provider: faker.helpers.arrayElement(
        Object.values(ConnectedAccountProvider),
      ),
    },
    { gitlab_userid: faker.number.int({ min: undefined, max: undefined }) },
    { gnome_userid: faker.number.int({ min: undefined, max: undefined }) },
    { google_userid: faker.number.int({ min: undefined, max: undefined }) },
    { kde_userid: faker.number.int({ min: undefined, max: undefined }) },
    null,
  ]),
  display_name: faker.helpers.arrayElement([faker.string.alpha(20), null]),
  github_repos: faker.helpers.arrayElement([
    Array.from(
      { length: faker.number.int({ min: 1, max: 10 }) },
      (_, i) => i + 1,
    ).map(() => ({
      id: faker.number.int({ min: undefined, max: undefined }),
      reponame: faker.string.alpha(20),
    })),
    null,
  ]),
  id: faker.number.int({ min: undefined, max: undefined }),
  owned_apps: faker.helpers.arrayElement([
    Array.from(
      { length: faker.number.int({ min: 1, max: 10 }) },
      (_, i) => i + 1,
    ).map(() => ({
      app_id: faker.string.alpha(20),
      created: `${faker.date.past().toISOString().split(".")[0]}Z`,
    })),
    null,
  ]),
  roles: Array.from(
    { length: faker.number.int({ min: 1, max: 10 }) },
    (_, i) => i + 1,
  ).map(() => ({
    hasRole: faker.datatype.boolean(),
    name: faker.string.alpha(20),
  })),
  ...overrideResponse,
})

export const getUsersUsersGetMockHandler = (
  overrideResponse?:
    | FlathubUsersResult
    | ((
        info: Parameters<Parameters<typeof http.get>[1]>[0],
      ) => Promise<FlathubUsersResult> | FlathubUsersResult),
) => {
  return http.get("*/users", async (info) => {
    await delay(1000)

    return new HttpResponse(
      JSON.stringify(
        overrideResponse !== undefined
          ? typeof overrideResponse === "function"
            ? await overrideResponse(info)
            : overrideResponse
          : getUsersUsersGetResponseMock(),
      ),
      { status: 200, headers: { "Content-Type": "application/json" } },
    )
  })
}

export const getRolesUsersRolesGetMockHandler = (
  overrideResponse?:
    | string[]
    | ((
        info: Parameters<Parameters<typeof http.get>[1]>[0],
      ) => Promise<string[]> | string[]),
) => {
  return http.get("*/users/roles", async (info) => {
    await delay(1000)

    return new HttpResponse(
      JSON.stringify(
        overrideResponse !== undefined
          ? typeof overrideResponse === "function"
            ? await overrideResponse(info)
            : overrideResponse
          : getRolesUsersRolesGetResponseMock(),
      ),
      { status: 200, headers: { "Content-Type": "application/json" } },
    )
  })
}

export const getUserUsersUserIdGetMockHandler = (
  overrideResponse?:
    | UserResult
    | ((
        info: Parameters<Parameters<typeof http.get>[1]>[0],
      ) => Promise<UserResult> | UserResult),
) => {
  return http.get("*/users/:userId", async (info) => {
    await delay(1000)

    return new HttpResponse(
      JSON.stringify(
        overrideResponse !== undefined
          ? typeof overrideResponse === "function"
            ? await overrideResponse(info)
            : overrideResponse
          : getUserUsersUserIdGetResponseMock(),
      ),
      { status: 200, headers: { "Content-Type": "application/json" } },
    )
  })
}

export const getAddUserRoleUsersUserIdRolePostMockHandler = (
  overrideResponse?:
    | UserResult
    | ((
        info: Parameters<Parameters<typeof http.post>[1]>[0],
      ) => Promise<UserResult> | UserResult),
) => {
  return http.post("*/users/:userId/role", async (info) => {
    await delay(1000)

    return new HttpResponse(
      JSON.stringify(
        overrideResponse !== undefined
          ? typeof overrideResponse === "function"
            ? await overrideResponse(info)
            : overrideResponse
          : getAddUserRoleUsersUserIdRolePostResponseMock(),
      ),
      { status: 200, headers: { "Content-Type": "application/json" } },
    )
  })
}

export const getDeleteUserRoleUsersUserIdRoleDeleteMockHandler = (
  overrideResponse?:
    | UserResult
    | ((
        info: Parameters<Parameters<typeof http.delete>[1]>[0],
      ) => Promise<UserResult> | UserResult),
) => {
  return http.delete("*/users/:userId/role", async (info) => {
    await delay(1000)

    return new HttpResponse(
      JSON.stringify(
        overrideResponse !== undefined
          ? typeof overrideResponse === "function"
            ? await overrideResponse(info)
            : overrideResponse
          : getDeleteUserRoleUsersUserIdRoleDeleteResponseMock(),
      ),
      { status: 200, headers: { "Content-Type": "application/json" } },
    )
  })
}
export const getUsersMock = () => [
  getUsersUsersGetMockHandler(),
  getRolesUsersRolesGetMockHandler(),
  getUserUsersUserIdGetMockHandler(),
  getAddUserRoleUsersUserIdRolePostMockHandler(),
  getDeleteUserRoleUsersUserIdRoleDeleteMockHandler(),
]
