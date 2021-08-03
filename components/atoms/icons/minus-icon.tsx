interface MinusIconProps {
  className?: string;
}

const MinusIcon = ({ className }: MinusIconProps) => (
  <svg
    width="10"
    viewBox="0 0 10 2"
    fill="#FE5F1E"
    className={className}
    aria-hidden
  >
    <path d="M4.04019 0.0399933H8.84019C9.37035 0.0399933 9.80019 0.469833 9.80019 0.999993C9.80019 1.53015 9.37035 1.95999 8.84019 1.95999H4.04019H1.1602C0.630035 1.95999 0.200195 1.53015 0.200195 0.999993C0.200195 0.469833 0.630035 0.0399933 1.1602 0.0399933H4.04019Z" />
  </svg>
);

export default MinusIcon;
export type { MinusIconProps };
