interface SignOutIconProps {
  className?: string;
}

const SignOutIcon = ({ className }: SignOutIconProps) => (
  <svg
    width="50"
    viewBox="0 0 50 50"
    fill="white"
    fillRule="evenodd"
    clipRule="evenodd"
    className={className}
    aria-hidden
  >
    <circle cx="25.3462" cy="24.6616" r="24.5" fill="#FE5F1E" />
    <path d="M14.9712 13.1637C15.7111 12.4257 16.714 12.0116 17.7591 12.0116H31.171C32.2161 12.0116 33.219 12.4257 33.9589 13.1637C34.6989 13.9018 35.1152 14.9035 35.1152 15.9487V18.7357C35.1152 19.3708 34.6003 19.8857 33.9652 19.8857C33.3301 19.8857 32.8152 19.3708 32.8152 18.7357V15.9487C32.8152 15.5154 32.6427 15.0993 32.3347 14.7921C32.0265 14.4848 31.608 14.3116 31.171 14.3116H17.7591C17.3221 14.3116 16.9036 14.4848 16.5955 14.7921C16.2875 15.0993 16.1149 15.5154 16.1149 15.9487V32.671C16.1149 33.1043 16.2875 33.5203 16.5955 33.8276C16.9036 34.1349 17.3221 34.3081 17.7591 34.3081H31.171C31.608 34.3081 32.0265 34.1349 32.3347 33.8276C32.6427 33.5203 32.8152 33.1043 32.8152 32.671V29.884C32.8152 29.2488 33.3301 28.734 33.9652 28.734C34.6003 28.734 35.1152 29.2488 35.1152 29.884V32.671C35.1152 33.7162 34.6989 34.7179 33.9589 35.456C33.219 36.194 32.2161 36.6081 31.171 36.6081H17.7591C16.714 36.6081 15.7111 36.194 14.9712 35.456C14.2312 34.7179 13.8149 33.7162 13.8149 32.671V15.9487C13.8149 14.9035 14.2312 13.9018 14.9712 13.1637Z" />
    <path d="M37.3121 18.0779C37.8257 17.7042 38.545 17.8177 38.9186 18.3313L42.9186 23.8293C43.2121 24.2326 43.2121 24.7791 42.9186 25.1824L38.9186 30.6805C38.545 31.194 37.8257 31.3075 37.3121 30.9338C36.7986 30.5602 36.6851 29.8409 37.0588 29.3273L40.5666 24.5059L37.0588 19.6844C36.6851 19.1708 36.7986 18.4515 37.3121 18.0779Z" />
    <path d="M23.7247 24.5504C23.7213 23.9153 24.2334 23.3976 24.8685 23.3942L39.9589 23.3136C40.594 23.3102 41.1117 23.8223 41.1151 24.4574C41.1185 25.0925 40.6063 25.6101 39.9712 25.6135L24.8808 25.6942C24.2457 25.6976 23.7281 25.1855 23.7247 24.5504Z" />
  </svg>
);

export default SignOutIcon;
export type { SignOutIconProps };