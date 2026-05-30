// Exports Renity design token names and helpers to reference CSS variables
export const renityTokens = {
  primary: '--renity-primary',
  secondary: '--renity-secondary',
  bg: '--renity-bg',
  bgLight: '--renity-bg-light',
  white: '--renity-white',
  text: '--renity-text',
  textDark: '--renity-text-dark',
  textSecondary: '--renity-text-secondary',
  error: '--renity-error',
  success: '--renity-success',
  warning: '--renity-warning',
  info: '--renity-info',
  border: '--renity-border',
  shadow: '--renity-shadow',
} as const;

export type RenityToken = (typeof renityTokens)[keyof typeof renityTokens];

export function cssVar(token: RenityToken) {
  return `var(${token})`;
}
