/**
 * Generated by orval v6.26.0 🍺
 * Do not edit manually.
 * Flathub API
 * OpenAPI spec version: 0.1.0
 */

/**
 * A request to begin/continue the onboarding process for a user.

Any onboarding operation request a 'return' URL which we will tell Stripe
to send us back to.
 */
export interface VendingOnboardingRequest {
  return_url: string
}
