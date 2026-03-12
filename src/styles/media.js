const size = {
  mobile: "768px",
  tablet: "1247px",
  desktop: "1248px",
};

export const device = {
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(max-width: ${size.tablet})`,
  desktop: `(min-width: ${size.desktop})`,
};