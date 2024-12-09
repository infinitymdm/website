import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ConditionalWrapper } from "@/lib/helpers"
import { format, formatDistanceToNow } from "date-fns"
import { GetStaticPaths, GetStaticProps } from "next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { NextSeo } from "next-seo"
import Link from "next/link"
import {
  ConnectedAccountProvider,
  Permission,
  UserInfo,
  useUserUsersUserIdGet,
} from "src/codegen"
import Breadcrumbs from "src/components/Breadcrumbs"
import LoginGuard from "src/components/login/LoginGuard"
import { ProviderLogo } from "src/components/login/ProviderLogo"
import Spinner from "src/components/Spinner"

const ProviderProfileLink = ({
  provider,
  login,
}: {
  provider: ConnectedAccountProvider
  login: string
}) => {
  let url = ""
  switch (provider) {
    case ConnectedAccountProvider.github:
      url = `https://github.com/${login}`
      break
    case ConnectedAccountProvider.gitlab:
      url = `https://gitlab.com/${login}`
      break
    case ConnectedAccountProvider.kde:
      url = `https://invent.kde.org/${login}`
      break
    case ConnectedAccountProvider.gnome:
      url = `https://gitlab.gnome.org/${login}`
      break
    default:
      break
  }

  return (
    <ConditionalWrapper
      condition={url.length > 0}
      wrapper={(a) => (
        <a href={url} target="_blank" rel="noopener noreferrer">
          {a}
        </a>
      )}
    >
      <div className="flex items-center space-x-2">
        <ProviderLogo provider={provider} />
        <span>{login}</span>
      </div>
    </ConditionalWrapper>
  )
}

export default function UserAdmin({ userId }) {
  const query = useUserUsersUserIdGet(userId, {
    axios: {
      withCredentials: true,
    },
  })

  return (
    <div className="max-w-11/12 mx-auto my-0 w-11/12 2xl:w-[1400px] 2xl:max-w-[1400px]">
      <NextSeo title={query?.data?.data?.default_account.login ?? userId} />
      <LoginGuard
        condition={(info: UserInfo) =>
          info.permissions.some((a) => a === Permission.moderation)
        }
      >
        {query.isLoading && <Spinner size="m" />}
        {query.isSuccess && (
          <div className="space-y-8">
            <Breadcrumbs
              pages={[
                {
                  name: "Users",
                  href: "/admin/users",
                  current: false,
                },
                {
                  name: query.data.data.default_account.login,
                  href: `/admin/moderation/${query.data.data.id}`,
                  current: true,
                },
              ]}
            />

            <div className="space-y-8">
              <h1 className="mt-4 text-4xl font-extrabold">
                {query.data.data.default_account.login} ({query.data.data.id})
              </h1>

              {query.data.data.default_account && (
                <div className="space-y-4">
                  <h2 className="text-2xl font-extrabold">Default Account</h2>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
                    <Card>
                      <CardHeader>
                        <CardTitle>
                          {" "}
                          <ProviderProfileLink
                            {...query.data.data.default_account}
                          />
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <div>
                          Email: {query.data.data.default_account.email}
                        </div>
                        <div>
                          Display Name:{" "}
                          {query.data.data.default_account.display_name}
                        </div>
                        <div>
                          Last Used:{" "}
                          {format(
                            query.data.data.default_account.last_used,
                            "PP",
                          )}{" "}
                          (
                          {formatDistanceToNow(
                            query.data.data.default_account.last_used,
                            { addSuffix: true },
                          )}
                          )
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              )}

              {query.data.data.github_repos.length > 0 && (
                <div className="space-y-4">
                  <h2 className="text-2xl font-extrabold">Managed repos</h2>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
                    {query.data.data.github_repos.map((repo) => (
                      <a
                        key={repo.id}
                        href={`https://github.com/flathub/${repo.reponame}`}
                      >
                        <Card key={repo.reponame}>
                          <CardHeader>
                            <CardTitle>{repo.reponame}</CardTitle>
                          </CardHeader>
                        </Card>
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {query.data.data.owned_apps.length > 0 && (
                <div className="space-y-4">
                  <h2 className="text-2xl font-extrabold">Owned Apps</h2>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-6">
                    {query.data.data.owned_apps.map((app) => (
                      <Link key={app.app_id} href={`/apps/${app.app_id}`}>
                        <Card key={app.app_id}>
                          <CardHeader>
                            <CardTitle>{app.app_id}</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div>{format(app.created, "PP")}</div>
                          </CardContent>
                        </Card>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {query.data.data.roles.length > 0 && (
                <div className="space-y-4">
                  <h2 className="text-2xl font-extrabold">Roles</h2>
                  <div className="space-y-2">
                    {query.data.data.roles.map((role) => (
                      <div key={role.id}>{role.name}</div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </LoginGuard>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async ({
  locale,
  params: { user },
}) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      userId: user,
    },
    revalidate: 900,
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  }
}
