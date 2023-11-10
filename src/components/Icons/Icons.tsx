import type { ComponentProps } from "react";

interface IconProps extends ComponentProps<"svg"> {
  className?: string;
  width?: number;
  height?: number;
  children?: React.ReactNode;
  viewBox?: string;
}
const Icon = ({ children, className, width, height, viewBox }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${className ? className : ""}`}
      width={width}
      height={height}
      viewBox={viewBox}
      fill="none"
    >
      {children}
    </svg>
  );
};

export const Add = ({ width = 40, height = 40 }: IconProps): JSX.Element => {
  return (
    <Icon width={width} height={height} viewBox={"0 0 40 40"}>
      <path
        d="M28.3333 21.6667H21.6667V28.3333H18.3333V21.6667H11.6667V18.3333H18.3333V11.6667H21.6667V18.3333H28.3333M31.6667 5H8.33333C6.48333 5 5 6.48333 5 8.33333V31.6667C5 32.5507 5.35119 33.3986 5.97631 34.0237C6.60143 34.6488 7.44928 35 8.33333 35H31.6667C32.5507 35 33.3986 34.6488 34.0237 34.0237C34.6488 33.3986 35 32.5507 35 31.6667V8.33333C35 7.44928 34.6488 6.60143 34.0237 5.97631C33.3986 5.35119 32.5507 5 31.6667 5Z"
        fill="#66AD2E"
      />
    </Icon>
  );
};

export const SortAZ = ({ width = 30, height = 30 }: IconProps): JSX.Element => {
  return (
    <Icon width={width} height={height} viewBox={"0 0 25 25"}>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M15.5172 2.40857C15.4455 2.47556 15.2941 2.68099 15.2941 3.3V4.4H17.6471V3.3C17.6471 2.68099 17.4956 2.47556 17.424 2.40857C17.3523 2.34158 17.1326 2.2 16.4706 2.2C15.8085 2.2 15.5888 2.34158 15.5172 2.40857ZM20 3.3C20 2.40101 19.7867 1.50644 19.0878 0.852933C18.3888 0.199421 17.4321 0 16.4706 0C15.5091 0 14.5523 0.199421 13.8534 0.852933C13.1545 1.50644 12.9412 2.40101 12.9412 3.3V8.8C12.9412 9.40751 13.4679 9.9 14.1176 9.9C14.7674 9.9 15.2941 9.40751 15.2941 8.8V6.6H17.6471V8.8C17.6471 9.40751 18.1738 9.9 18.8235 9.9C19.4733 9.9 20 9.40751 20 8.8V3.3ZM4.70588 3.3C5.35563 3.3 5.88235 3.79249 5.88235 4.4V14.9444L7.4034 13.5222C7.86284 13.0926 8.60774 13.0926 9.06718 13.5222C9.52663 13.9518 9.52663 14.6482 9.06718 15.0778L5.53777 18.3778C5.07833 18.8074 4.33343 18.8074 3.87399 18.3778L0.34458 15.0778C-0.11486 14.6482 -0.11486 13.9518 0.34458 13.5222C0.804021 13.0926 1.54892 13.0926 2.00836 13.5222L3.52941 14.9444V4.4C3.52941 3.79249 4.05614 3.3 4.70588 3.3ZM12.9412 13.2C12.9412 12.5925 13.4679 12.1 14.1176 12.1H18.8235C19.2429 12.1 19.6306 12.3087 19.8411 12.6479C20.0516 12.987 20.0531 13.4053 19.845 13.7458L16.1449 19.8H18.8235C19.4733 19.8 20 20.2925 20 20.9C20 21.5075 19.4733 22 18.8235 22H14.1176C13.6983 22 13.3106 21.7913 13.1001 21.4521C12.8896 21.113 12.8881 20.6947 13.0962 20.3542L16.7963 14.3H14.1176C13.4679 14.3 12.9412 13.8075 12.9412 13.2Z"
        fill="black"
      />
    </Icon>
  );
};

export const SortZA = ({ width = 30, height = 30 }: IconProps): JSX.Element => {
  return (
    <Icon width={width} height={height} viewBox={"0 0 25 25"}>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M15.5172 14.1087C15.4455 14.1757 15.2941 14.3811 15.2941 15.0001V16.1001H17.6471V15.0001C17.6471 14.3811 17.4956 14.1757 17.424 14.1087C17.3523 14.0417 17.1326 13.9001 16.4706 13.9001C15.8085 13.9001 15.5888 14.0417 15.5172 14.1087ZM20 15.0001C20 14.1011 19.7867 13.2065 19.0878 12.553C18.3888 11.8995 17.4321 11.7001 16.4706 11.7001C15.5091 11.7001 14.5523 11.8995 13.8534 12.553C13.1545 13.2065 12.9412 14.1011 12.9412 15.0001V20.5001C12.9412 21.1076 13.4679 21.6001 14.1176 21.6001C14.7674 21.6001 15.2941 21.1076 15.2941 20.5001V18.3001H17.6471V20.5001C17.6471 21.1076 18.1738 21.6001 18.8235 21.6001C19.4733 21.6001 20 21.1076 20 20.5001V15.0001ZM4.70588 3.29995C5.35563 3.29995 5.88235 3.79244 5.88235 4.39996V14.9444L7.4034 13.5222C7.86284 13.0927 8.60774 13.0927 9.06718 13.5222C9.52662 13.9518 9.52662 14.6483 9.06718 15.0779L5.53777 18.3779C5.07833 18.8075 4.33343 18.8075 3.87399 18.3779L0.34458 15.0779C-0.11486 14.6483 -0.11486 13.9518 0.34458 13.5222C0.804021 13.0927 1.54892 13.0927 2.00836 13.5222L3.52941 14.9444V4.39996C3.52941 3.79244 4.05614 3.29995 4.70588 3.29995ZM12.9412 1.19998C12.9412 0.59246 13.4679 0.0999756 14.1176 0.0999756H18.8235C19.2429 0.0999756 19.6306 0.308708 19.8411 0.647859C20.0516 0.987008 20.0531 1.40528 19.845 1.74573L16.1449 7.80001H18.8235C19.4733 7.80001 20 8.29249 20 8.90001C20 9.50753 19.4733 10 18.8235 10H14.1176C13.6983 10 13.3106 9.79128 13.1001 9.45213C12.8896 9.11298 12.8881 8.69471 13.0962 8.35426L16.7963 2.29998H14.1176C13.4679 2.29998 12.9412 1.8075 12.9412 1.19998Z"
        fill="black"
      />
    </Icon>
  );
};

export const Sort09 = ({ width = 30, height = 30 }: IconProps): JSX.Element => {
  return (
    <Icon width={width} height={height} viewBox={"0 0 25 25"}>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M16.4706 2.2C16.1586 2.2 15.8593 2.31589 15.6387 2.52218C15.4181 2.72847 15.2941 3.00826 15.2941 3.3V6.6C15.2941 6.89174 15.4181 7.17153 15.6387 7.37782C15.8593 7.58411 16.1586 7.7 16.4706 7.7C16.7826 7.7 17.0818 7.58411 17.3025 7.37782C17.5231 7.17153 17.6471 6.89174 17.6471 6.6V3.3C17.6471 3.00826 17.5231 2.72847 17.3025 2.52218C17.0818 2.31589 16.7826 2.2 16.4706 2.2ZM13.9749 0.966548C14.6368 0.347678 15.5345 0 16.4706 0C17.4066 0 18.3044 0.347678 18.9663 0.966548C19.6282 1.58542 20 2.42479 20 3.3V6.6C20 7.47522 19.6282 8.31458 18.9663 8.93345C18.3044 9.55232 17.4066 9.9 16.4706 9.9C15.5345 9.9 14.6368 9.55232 13.9749 8.93345C13.313 8.31458 12.9412 7.47522 12.9412 6.6V3.3C12.9412 2.42479 13.313 1.58542 13.9749 0.966548ZM4.70588 3.3C5.35563 3.3 5.88235 3.79249 5.88235 4.4V14.9444L7.4034 13.5222C7.86284 13.0926 8.60774 13.0926 9.06718 13.5222C9.52663 13.9518 9.52663 14.6482 9.06718 15.0778L5.53777 18.3778C5.07833 18.8074 4.33343 18.8074 3.87399 18.3778L0.34458 15.0778C-0.11486 14.6482 -0.11486 13.9518 0.34458 13.5222C0.804021 13.0926 1.54892 13.0926 2.00836 13.5222L3.52941 14.9444V4.4C3.52941 3.79249 4.05614 3.3 4.70588 3.3ZM13.9749 13.0665C14.6368 12.4477 15.5345 12.1 16.4706 12.1C17.4066 12.1 18.3044 12.4477 18.9663 13.0665C19.6282 13.6854 20 14.5248 20 15.4V18.7C20 19.5752 19.6282 20.4146 18.9663 21.0335C18.3044 21.6523 17.4066 22 16.4706 22H14.7059C14.0561 22 13.5294 21.5075 13.5294 20.9C13.5294 20.2925 14.0561 19.8 14.7059 19.8H16.4706C16.7826 19.8 17.0818 19.6841 17.3025 19.4778C17.5231 19.2715 17.6471 18.9917 17.6471 18.7V18.5113C17.2727 18.635 16.8752 18.7 16.4706 18.7C15.5345 18.7 14.6368 18.3523 13.9749 17.7335C13.313 17.1146 12.9412 16.2752 12.9412 15.4C12.9412 14.5248 13.313 13.6854 13.9749 13.0665ZM17.6471 15.4C17.6471 15.1083 17.5231 14.8285 17.3025 14.6222C17.0818 14.4159 16.7826 14.3 16.4706 14.3C16.1586 14.3 15.8593 14.4159 15.6387 14.6222C15.4181 14.8285 15.2941 15.1083 15.2941 15.4C15.2941 15.6917 15.4181 15.9715 15.6387 16.1778C15.8593 16.3841 16.1586 16.5 16.4706 16.5C16.7826 16.5 17.0818 16.3841 17.3025 16.1778C17.5231 15.9715 17.6471 15.6917 17.6471 15.4Z"
        fill="black"
      />
    </Icon>
  );
};

export const Sort90 = ({ width = 30, height = 30 }: IconProps): JSX.Element => {
  return (
    <Icon width={width} height={height} viewBox={"0 0 25 25"}>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M16.4706 14.2C16.1586 14.2 15.8593 14.3159 15.6387 14.5222C15.4181 14.7284 15.2941 15.0082 15.2941 15.3V18.6C15.2941 18.8917 15.4181 19.1715 15.6387 19.3778C15.8593 19.5841 16.1586 19.7 16.4706 19.7C16.7826 19.7 17.0818 19.5841 17.3025 19.3778C17.5231 19.1715 17.6471 18.8917 17.6471 18.6V15.3C17.6471 15.0082 17.5231 14.7284 17.3025 14.5222C17.0818 14.3159 16.7826 14.2 16.4706 14.2ZM13.9749 12.9665C14.6368 12.3477 15.5345 12 16.4706 12C17.4066 12 18.3044 12.3477 18.9663 12.9665C19.6282 13.5854 20 14.4248 20 15.3V18.6C20 19.4752 19.6282 20.3146 18.9663 20.9334C18.3044 21.5523 17.4066 21.9 16.4706 21.9C15.5345 21.9 14.6368 21.5523 13.9749 20.9334C13.313 20.3146 12.9412 19.4752 12.9412 18.6V15.3C12.9412 14.4248 13.313 13.5854 13.9749 12.9665ZM4.70588 3.29998C5.35563 3.29998 5.88235 3.79246 5.88235 4.39998V14.9443L7.4034 13.5222C7.86284 13.0926 8.60774 13.0926 9.06718 13.5222C9.52662 13.9517 9.52662 14.6482 9.06718 15.0778L5.53777 18.3778C5.07833 18.8074 4.33343 18.8074 3.87399 18.3778L0.34458 15.0778C-0.11486 14.6482 -0.11486 13.9517 0.34458 13.5222C0.804021 13.0926 1.54892 13.0926 2.00836 13.5222L3.52941 14.9443V4.39998C3.52941 3.79246 4.05614 3.29998 4.70588 3.29998ZM13.9749 1.06652C14.6368 0.447654 15.5345 0.0999756 16.4706 0.0999756C17.4066 0.0999756 18.3044 0.447654 18.9663 1.06652C19.6282 1.68539 20 2.52476 20 3.39998V6.69998C20 7.57519 19.6282 8.41456 18.9663 9.03343C18.3044 9.6523 17.4066 9.99998 16.4706 9.99998H14.7059C14.0561 9.99998 13.5294 9.50749 13.5294 8.89997C13.5294 8.29246 14.0561 7.79998 14.7059 7.79998H16.4706C16.7826 7.79998 17.0818 7.68409 17.3025 7.47779C17.5231 7.2715 17.6471 6.99171 17.6471 6.69998V6.51125C17.2727 6.63501 16.8752 6.69998 16.4706 6.69998C15.5345 6.69998 14.6368 6.3523 13.9749 5.73343C13.313 5.11456 12.9412 4.27519 12.9412 3.39998C12.9412 2.52476 13.313 1.68539 13.9749 1.06652ZM17.6471 3.39998C17.6471 3.10824 17.5231 2.82845 17.3025 2.62216C17.0818 2.41587 16.7826 2.29998 16.4706 2.29998C16.1586 2.29998 15.8593 2.41587 15.6387 2.62216C15.4181 2.82845 15.2941 3.10824 15.2941 3.39998C15.2941 3.69171 15.4181 3.9715 15.6387 4.17779C15.8593 4.38408 16.1586 4.49998 16.4706 4.49998C16.7826 4.49998 17.0818 4.38408 17.3025 4.17779C17.5231 3.9715 17.6471 3.69171 17.6471 3.39998Z"
        fill="black"
      />
    </Icon>
  );
};

export const Avatar = ({ width = 60, height = 60 }: IconProps): JSX.Element => {
  return (
    <Icon width={width} height={height} viewBox={"0 0 60 60"}>
      <g clip-path="url(#clip0_18_41)">
        <path
          d="M30 60C22.0435 60 14.4129 56.8393 8.7868 51.2132C3.16071 45.5871 0 37.9565 0 30C0 22.0435 3.16071 14.4129 8.7868 8.7868C14.4129 3.16071 22.0435 0 30 0C37.9565 0 45.5871 3.16071 51.2132 8.7868C56.8393 14.4129 60 22.0435 60 30C60 37.9565 56.8393 45.5871 51.2132 51.2132C45.5871 56.8393 37.9565 60 30 60ZM33.1763 29.4562C35.2547 28.7085 37.0026 27.2514 38.1124 25.3416C39.2221 23.4318 39.6225 21.1916 39.243 19.0156C38.8634 16.8396 37.7284 14.8673 36.0376 13.4459C34.3469 12.0245 32.2088 11.2452 30 11.2452C27.7912 11.2452 25.6531 12.0245 23.9624 13.4459C22.2716 14.8673 21.1366 16.8396 20.757 19.0156C20.3775 21.1916 20.7779 23.4318 21.8876 25.3416C22.9974 27.2514 24.7453 28.7085 26.8237 29.4562C20.5162 30.9788 15 36.6562 15 41.25C15 42.7313 15.5437 44.9813 18.75 44.9813H41.25C44.4562 44.9813 45 42.7313 45 41.25C45 36.66 39.4875 30.975 33.1763 29.4562Z"
          fill="black"
        />
      </g>
      <defs>
        <clipPath id="clip0_18_41">
          <rect width="60" height="60" fill="white" />
        </clipPath>
      </defs>
    </Icon>
  );
};

export const Delete = ({ width = 30, height = 30 }: IconProps): JSX.Element => {
  return (
    <Icon width={width} height={height} viewBox={"0 0 30 30"}>
      <path
        d="M8.75 26.25C8.0625 26.25 7.47375 26.005 6.98375 25.515C6.49375 25.025 6.24917 24.4367 6.25 23.75V7.5H5V5H11.25V3.75H18.75V5H25V7.5H23.75V23.75C23.75 24.4375 23.505 25.0263 23.015 25.5163C22.525 26.0063 21.9367 26.2508 21.25 26.25H8.75ZM21.25 7.5H8.75V23.75H21.25V7.5ZM11.25 21.25H13.75V10H11.25V21.25ZM16.25 21.25H18.75V10H16.25V21.25Z"
        fill="black"
      />
    </Icon>
  );
};

export const Edit = ({ width = 26, height = 26 }: IconProps): JSX.Element => {
  return (
    <Icon width={width} height={height} viewBox={"0 0 26 26"}>
      <g clip-path="url(#clip0_18_65)">
        <path
          d="M14.0833 3.25C14.3595 3.25031 14.625 3.35604 14.8258 3.54559C15.0266 3.73514 15.1474 3.9942 15.1636 4.26984C15.1798 4.54549 15.0901 4.81691 14.9129 5.02865C14.7357 5.24039 14.4843 5.37647 14.2101 5.40908L14.0833 5.41667H5.41667V20.5833H20.5833V11.9167C20.5836 11.6405 20.6894 11.375 20.8789 11.1742C21.0685 10.9734 21.3275 10.8526 21.6032 10.8364C21.8788 10.8202 22.1502 10.9099 22.362 11.0871C22.5737 11.2643 22.7098 11.5157 22.7424 11.7899L22.75 11.9167V20.5833C22.7502 21.13 22.5437 21.6564 22.172 22.0573C21.8004 22.4581 21.2909 22.7036 20.7458 22.7446L20.5833 22.75H5.41667C4.87004 22.7502 4.34355 22.5437 3.94274 22.172C3.54193 21.8004 3.29641 21.2909 3.25542 20.7458L3.25 20.5833V5.41667C3.24983 4.87004 3.45627 4.34355 3.82796 3.94274C4.19964 3.54193 4.70908 3.29641 5.25417 3.25542L5.41667 3.25H14.0833ZM20.8466 3.62158C21.0415 3.42729 21.3031 3.31449 21.5783 3.30609C21.8534 3.29769 22.1214 3.39432 22.3278 3.57635C22.5342 3.75839 22.6637 4.01218 22.6898 4.28618C22.7159 4.56018 22.6367 4.83384 22.4683 5.05158L22.3784 5.1545L11.6534 15.8784C11.4585 16.0727 11.1969 16.1855 10.9218 16.1939C10.6466 16.2023 10.3786 16.1057 10.1722 15.9236C9.96575 15.7416 9.83634 15.4878 9.81024 15.2138C9.78413 14.9398 9.8633 14.6662 10.0317 14.4484L10.1216 14.3466L20.8466 3.62158Z"
          fill="black"
          stroke="black"
          stroke-width="0.5"
        />
      </g>
      <defs>
        <clipPath id="clip0_18_65">
          <rect width="26" height="26" fill="white" />
        </clipPath>
      </defs>
    </Icon>
  );
};
