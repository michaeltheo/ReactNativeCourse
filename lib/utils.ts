import dayjs from "dayjs";

/**
 * Formats a numeric value as standard U.S. currency.
 *
 * @param value - The amount to format.
 * @param currency - The ISO 4217 currency code (defaults to "USD").
 * @returns The value formatted with a currency symbol and exactly two decimal places.
 */
export function formatCurrency(
  value: number,
  currency: string = "USD",
): string {
  try {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  } catch {
    // Fallback for invalid input or unsupported currency codes.
    const safeValue = Number.isFinite(value) ? value : 0;
    return `$${safeValue.toFixed(2)}`;
  }
}

export const formatSubscriptionDateTime = (value?: string): string => {
  if (!value) return "N/A";
  const date = dayjs(value);
  return date.isValid() ? date.format("MMM D, YYYY") : "Invalid date";
};

export const formatStatusLabel = (value?: string): string => {
  if (!value) return "Unknown";
  return value.charAt(0).toUpperCase() + value.slice(1);
};
