/**
 * Generated by orval v6.26.0 🍺
 * Do not edit manually.
 * Flathub API
 * OpenAPI spec version: 0.1.0
 */
import type { VendingConfigPlatforms } from "./vendingConfigPlatforms"

/**
 * Global vending environment configuration values
 */
export interface VendingConfig {
  fee_cost_percent: number
  fee_fixed_cost: number
  fee_prefer_percent: number
  platforms: VendingConfigPlatforms
  status: string
}
