/**
 * Generated by orval 🍺
 * Do not edit manually.
 * Flathub API
 * OpenAPI spec version: 0.1.0
 */
import type { AppPickRecommendationLastTimeAppOfTheDay } from "./appPickRecommendationLastTimeAppOfTheDay"
import type { AppPickRecommendationLastTimeAppOfTheWeek } from "./appPickRecommendationLastTimeAppOfTheWeek"

export interface AppPickRecommendation {
  app_id: string
  lastTimeAppOfTheDay: AppPickRecommendationLastTimeAppOfTheDay
  lastTimeAppOfTheWeek: AppPickRecommendationLastTimeAppOfTheWeek
  numberOfTimesAppOfTheDay: number
  numberOfTimesAppOfTheWeek: number
}
