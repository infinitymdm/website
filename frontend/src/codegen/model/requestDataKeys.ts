/**
 * Generated by orval v6.25.0 🍺
 * Do not edit manually.
 * Flathub API
 * OpenAPI spec version: 0.1.0
 */
import type { RequestDataKeysAnyOfItem } from "./requestDataKeysAnyOfItem"
import type { RequestDataKeysAnyOfTwo } from "./requestDataKeysAnyOfTwo"

export type RequestDataKeys = {
  [key: string]:
    | string
    | RequestDataKeysAnyOfItem[]
    | RequestDataKeysAnyOfTwo
    | boolean
    | null
}
