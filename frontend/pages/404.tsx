import { GetStaticProps } from "next"
import { Trans, useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { NextSeo } from "next-seo"

export default function Custom404() {
  const { t } = useTranslation()
  return (
    <>
      <NextSeo title={t("page-not-found", { errorCode: "404" })} />
      <div className="max-w-11/12 my-0 mx-auto w-11/12 2xl:w-[1400px] 2xl:max-w-[1400px]">
        <h1 className="my-8">{t("page-not-found", { errorCode: "404" })}</h1>
        <p>{t("could-not-find-page")}</p>
        <p>
          <Trans i18nKey={"common:retry-or-go-home"}>
            You might want to retry or go back{" "}
            <a className="no-underline hover:underline" href=".">
              home
            </a>
            .
          </Trans>
        </p>
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  }
}
