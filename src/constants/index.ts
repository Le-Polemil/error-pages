export const API_BASE_URL = "https://bo.polemil.dev/api"

export function cN(
  ...args: Array<string | boolean | number | undefined | null>
): string {
  return args.filter(Boolean).join(" ")
}
