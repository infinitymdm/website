import {
  HiChevronRight,
  HiChevronLeft,
  HiMagnifyingGlassPlus,
} from "react-icons/hi2"
import { DesktopAppstream, mapScreenshot } from "../../types/Appstream"

import Lightbox from "yet-another-react-lightbox"
import Zoom from "yet-another-react-lightbox/plugins/zoom"
import Inline from "yet-another-react-lightbox/plugins/inline"
import "yet-another-react-lightbox/styles.css"
import Captions from "yet-another-react-lightbox/plugins/captions"
import { useTranslation } from "next-i18next"
import { useEffect, useRef, useState } from "react"
import clsx from "clsx"
import CarouselNextJsImage from "./CarouselNextJsImage"
import { CarouselJsonLd } from "next-seo"

export const CarouselStrip = ({
  app,
}: {
  app: Pick<DesktopAppstream, "screenshots">
}) => {
  const { t } = useTranslation()
  const [showLightbox, setShowLightbox] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    setCurrentIndex(0)
  }, [])

  useEffect(() => {
    setCurrentIndex(ref.current?.getLightboxState()?.currentIndex)
  }, [])

  const slides = app.screenshots?.map(mapScreenshot).map((screenshot) => {
    return {
      ...screenshot,
      title: screenshot.caption,
      alt: screenshot.caption || t("screenshot"),
      caption: undefined,
    }
  })

  return (
    <div className="col-start-1 col-end-4 bg-flathub-gainsborow dark:bg-flathub-arsenic">
      {slides && (
        <>
          <CarouselJsonLd
            ofType="default"
            data={slides.map((slide) => {
              return { url: slide.src }
            })}
          />
          <Lightbox
            controller={{ closeOnBackdropClick: true }}
            open={showLightbox}
            close={() => setShowLightbox(false)}
            plugins={[Captions, Zoom]}
            slides={slides}
            index={currentIndex}
            render={{
              buttonPrev: app.screenshots.length <= 1 ? () => null : undefined,
              buttonNext: app.screenshots.length <= 1 ? () => null : undefined,
              slide: CarouselNextJsImage,
            }}
          />
        </>
      )}
      <div className="max-w-11/12 relative mx-auto my-0 2xl:max-w-[1400px]">
        {slides && slides?.length > 0 && (
          <button
            className="absolute bottom-3 end-3 size-12 !bg-transparent px-3 py-3 text-2xl z-10"
            onClick={() => setShowLightbox(true)}
            aria-label={t("zoom")}
          >
            <HiMagnifyingGlassPlus />
          </button>
        )}
        <div className="aspect-video max-h-[500px] w-full">
          <Lightbox
            controller={{ ref }}
            plugins={[Inline]}
            slides={slides}
            index={slides?.length > currentIndex ? currentIndex : 0}
            carousel={{
              finite: slides?.length === 1,
            }}
            styles={{
              button: { filter: "none" },
              container: {
                backgroundColor: "transparent",
                width: "100%",
                maxHeight: "500px",
              },
            }}
            on={{
              click: () => setShowLightbox(true),
              view: (index) => setCurrentIndex(index.index),
            }}
            render={{
              iconPrev: () => (
                <div className="control-arrow control-prev text-3xl text-flathub-dark-gunmetal opacity-90 transition hover:opacity-50 dark:text-flathub-gainsborow">
                  <HiChevronLeft />
                </div>
              ),
              iconNext: () => (
                <div className="control-arrow control-prev text-3xl text-flathub-dark-gunmetal opacity-90 transition hover:opacity-50 dark:text-flathub-gainsborow">
                  <HiChevronRight />
                </div>
              ),
              buttonPrev: app.screenshots.length <= 1 ? () => null : undefined,
              buttonNext: app.screenshots.length <= 1 ? () => null : undefined,
              slide: CarouselNextJsImage,
            }}
          />
        </div>
        {slides?.length > 0 && slides[currentIndex]?.title && (
          <div className="flex justify-center text-center pb-4">
            {slides[currentIndex]?.title}
          </div>
        )}
        {slides?.length > 1 && (
          <div>
            <ul className="flex list-none justify-center gap-4 pb-8">
              {slides?.map((screenshot, index) => (
                <li key={index} value={index}>
                  <button
                    className={clsx(
                      index !== currentIndex && "opacity-50",
                      "size-2 cursor-pointer rounded-full bg-flathub-dark-gunmetal transition duration-200 dark:bg-flathub-gainsborow",
                      "hover:opacity-100",
                    )}
                    aria-label={
                      screenshot.caption ?? t("screenshot") + " " + index
                    }
                    onClick={() => {
                      if (index > currentIndex) {
                        ref.current?.next({ count: index - currentIndex })
                      } else {
                        ref.current?.prev({ count: currentIndex - index })
                      }
                    }}
                  ></button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}
