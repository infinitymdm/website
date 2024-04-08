/**
 * Generated by orval v6.26.0 🍺
 * Do not edit manually.
 * Flathub API
 * OpenAPI spec version: 0.1.0
 */
import type { QualityModerationTypeComment } from "./qualityModerationTypeComment"
import type { Guideline } from "./guideline"
import type { QualityModerationTypePassed } from "./qualityModerationTypePassed"
import type { QualityModerationTypeUpdatedBy } from "./qualityModerationTypeUpdatedBy"

export interface QualityModerationType {
  app_id: string
  comment: QualityModerationTypeComment
  guideline: Guideline
  guideline_id: string
  needed_to_pass_since: string
  passed: QualityModerationTypePassed
  updated_at: string
  updated_by: QualityModerationTypeUpdatedBy
}
