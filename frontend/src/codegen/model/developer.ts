/**
 * Generated by orval v6.25.0 🍺
 * Do not edit manually.
 * Flathub API
 * OpenAPI spec version: 0.1.0
 */
import type { DeveloperIsPrimary } from "./developerIsPrimary"
import type { DeveloperName } from "./developerName"

export interface Developer {
  id: number
  is_primary?: DeveloperIsPrimary
  is_self: boolean
  name: DeveloperName
}
