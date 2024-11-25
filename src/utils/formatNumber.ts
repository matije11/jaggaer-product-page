export const formatNumber = (
  value: number,
  locale: string = "de-DE",
  options: Intl.NumberFormatOptions = {
    style: "decimal",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }
): string => {
  return new Intl.NumberFormat(locale, options).format(value);
};
