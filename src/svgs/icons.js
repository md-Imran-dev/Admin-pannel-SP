import * as React from "react";
export const DarkModeIcon = ({ width, height, color, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    {...props}
  >
    <path
      fill={color}
      d="m21.067 11.857-.642-.388.642.388Zm-8.924-8.924-.388-.642.388.642ZM22 12h-.75A9.25 9.25 0 0 1 12 21.25v1.5c5.937 0 10.75-4.813 10.75-10.75H22ZM12 22v-.75A9.25 9.25 0 0 1 2.75 12h-1.5c0 5.937 4.813 10.75 10.75 10.75V22ZM2 12h.75A9.25 9.25 0 0 1 12 2.75v-1.5C6.063 1.25 1.25 6.063 1.25 12H2Zm13.5 3v-.75A5.75 5.75 0 0 1 9.75 8.5h-1.5a7.25 7.25 0 0 0 7.25 7.25V15Zm5.567-3.143-.642-.388A5.746 5.746 0 0 1 15.5 14.25v1.5a7.247 7.247 0 0 0 6.21-3.505l-.643-.388ZM9 8.5h.75a5.747 5.747 0 0 1 2.781-4.925l-.388-.642-.388-.642A7.246 7.246 0 0 0 8.25 8.5H9ZM12 2v.75a.384.384 0 0 1-.268-.118.285.285 0 0 1-.082-.155c-.004-.031-.002-.121.105-.186l.388.642.388.642c.503-.304.665-.861.606-1.299-.062-.455-.42-1.026-1.137-1.026V2Zm9.067 9.857.642.388c-.065.107-.155.109-.186.105a.285.285 0 0 1-.155-.082.384.384 0 0 1-.118-.268h1.5c0-.717-.571-1.075-1.026-1.137-.438-.059-.995.103-1.299.606l.642.388Z"
    />
  </svg>
);
export const LightModeIcon = ({ width, height, color, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    {...props}
  >
    <circle cx={12} cy={12} r={5} stroke={color} strokeWidth={1.5} />
    <path
      stroke={color}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M12 2v2M12 20v2M4 12H2M22 12h-2M19.778 4.222l-2.222 2.032M4.222 4.222l2.222 2.032M6.444 17.556l-2.222 2.222M19.778 19.778l-2.222-2.223"
    />
  </svg>
);
export const SearchIcon = ({ height, width, color, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    {...props}
  >
    <path
      fill={color}
      d="M13.898 12.441a6.77 6.77 0 1 0-1.456 1.456v.001c.03.042.065.082.102.12l4.011 4.01a1.042 1.042 0 1 0 1.473-1.473l-4.01-4.01a1.063 1.063 0 0 0-.12-.104Zm.269-4.004a5.73 5.73 0 1 1-11.459 0 5.73 5.73 0 0 1 11.459 0Z"
    />
  </svg>
);

export const NotificationIcon = ({
  height,
  width,
  color,
  hasFillOpacity = false,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    {...props}
  >
    <path
      fill={color}
      fillOpacity={hasFillOpacity ? 0.8 : 1}
      d="m17.19 13.332-.19-.231c-.86-1.04-1.38-1.667-1.38-4.61 0-1.523-.365-2.773-1.083-3.71-.53-.693-1.246-1.218-2.19-1.607a.117.117 0 0 1-.031-.026C11.976 2.011 11.047 1.25 10 1.25c-1.048 0-1.977.761-2.316 1.897a.122.122 0 0 1-.032.025C5.45 4.08 4.38 5.818 4.38 8.49c0 2.944-.52 3.571-1.38 4.61l-.19.231a1.373 1.373 0 0 0-.182 1.47c.24.508.754.823 1.34.823h12.067c.583 0 1.093-.315 1.335-.82a1.373 1.373 0 0 0-.18-1.472ZM10 18.75a3.128 3.128 0 0 0 2.751-1.646.157.157 0 0 0-.138-.229H7.387a.156.156 0 0 0-.139.23A3.128 3.128 0 0 0 10 18.75Z"
    />
  </svg>
);

export const MailIcon = ({ height, width, color, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    {...props}
  >
    <path
      fill={color}
      d="m1.723 4.568 7.396 7.397a1.25 1.25 0 0 0 1.674.086l.095-.086 7.39-7.392c.024.092.04.185.049.281l.006.146v10a1.667 1.667 0 0 1-1.541 1.663l-.125.004H3.333a1.667 1.667 0 0 1-1.662-1.542L1.667 15V5c0-.1.008-.197.025-.292l.031-.14Zm14.944-1.235c.1 0 .2.009.295.026l.142.033-7.1 7.1L2.902 3.39a1.6 1.6 0 0 1 .283-.05l.148-.007h13.334Z"
    />
  </svg>
);

export const CallIcon = ({ height, width, color, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    {...props}
  >
    <path
      fill={color}
      d="M5.714 2.038c.953.694 1.694 1.641 2.328 2.548l.368.536.348.513a1.253 1.253 0 0 1-.214 1.655L6.918 8.498a.4.4 0 0 0-.118.513c.368.669 1.023 1.666 1.773 2.416.751.75 1.794 1.448 2.51 1.858a.402.402 0 0 0 .537-.135l1.058-1.61a1.253 1.253 0 0 1 1.714-.277l.552.382c1.033.717 2.142 1.53 2.99 2.617a1.225 1.225 0 0 1 .158 1.236c-.698 1.628-2.463 3.014-4.299 2.946l-.25-.014-.194-.017-.215-.025-.234-.031-.254-.042a10.082 10.082 0 0 1-.134-.025l-.28-.06-.146-.033-.305-.079-.321-.091-.335-.109c-1.538-.521-3.49-1.546-5.494-3.55-2.003-2.002-3.028-3.955-3.55-5.493l-.108-.335-.091-.32-.079-.306-.065-.288a9.829 9.829 0 0 1-.052-.272L1.644 7.1l-.033-.234-.024-.215-.017-.194-.013-.25C1.489 4.377 2.89 2.599 4.51 1.905a1.225 1.225 0 0 1 1.204.133Zm6.78 2.995.096.011a2.917 2.917 0 0 1 2.382 2.467.834.834 0 0 1-1.632.327l-.02-.096a1.25 1.25 0 0 0-.89-1.027l-.13-.03a.834.834 0 0 1 .193-1.652ZM12.5 2.5a5 5 0 0 1 5 5 .833.833 0 0 1-1.66.098l-.007-.098a3.331 3.331 0 0 0-3.115-3.326l-.218-.007a.833.833 0 0 1 0-1.667Z"
    />
  </svg>
);

export const MessageIcon = ({ height, width, color, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    {...props}
  >
    <path
      fill={color}
      d="M10 1.667a8.333 8.333 0 1 1 0 16.666H3.333a1.667 1.667 0 0 1-1.666-1.666V10A8.333 8.333 0 0 1 10 1.667Zm0 10H7.5a.833.833 0 1 0 0 1.666H10a.834.834 0 0 0 0-1.666Zm2.5-3.334h-5a.833.833 0 0 0-.098 1.661L7.5 10h5a.833.833 0 0 0 .098-1.66l-.098-.007Z"
    />
  </svg>
);

export const CalendarIcon = ({ height, width, color, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    {...props}
  >
    <path
      fill={color}
      fillRule="evenodd"
      d="M11.333.5a.833.833 0 0 1 .834.833v.834h1.666A1.666 1.666 0 0 1 15.5 3.833v10a1.666 1.666 0 0 1-1.667 1.667H2.167A1.667 1.667 0 0 1 .5 13.833v-10a1.667 1.667 0 0 1 1.667-1.666h1.666v-.834a.833.833 0 0 1 1.667 0v.834h5v-.834A.833.833 0 0 1 11.333.5ZM4.675 11.333h-.008a.834.834 0 0 0-.098 1.661l.106.006a.833.833 0 1 0 0-1.667Zm3.333 0H8a.834.834 0 0 0-.098 1.661l.106.006a.833.833 0 1 0 0-1.667Zm3.334 0h-.009a.834.834 0 0 0-.097 1.661l.106.006a.833.833 0 0 0 0-1.667ZM4.675 8h-.008a.833.833 0 0 0-.098 1.66l.106.007a.833.833 0 0 0 0-1.667Zm3.333 0H8a.833.833 0 0 0-.098 1.66l.106.007a.833.833 0 1 0 0-1.667Zm3.334 0h-.009a.833.833 0 0 0-.097 1.66l.106.007a.833.833 0 0 0 0-1.667Zm2.491-4.167H2.167V5.5h11.666V3.833Z"
      clipRule="evenodd"
    />
  </svg>
);
export const SaveIcon = ({ height, width, color, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    {...props}
  >
    <path
      fill="#22C55E"
      stroke="#22C55E"
      d="M2.167 1h2v2.417l.008.173a1.752 1.752 0 0 0 1.742 1.577H9.25A1.75 1.75 0 0 0 11 3.417V1c.267.003.523.097.727.265l.086.077 2.012 2.012c.219.218.342.515.342.825v9.654A1.168 1.168 0 0 1 13 15h-1.167V9.667A2.167 2.167 0 0 0 9.667 7.5H5.5a2.167 2.167 0 0 0-2.167 2.167V15H2.167A1.167 1.167 0 0 1 1 13.833V2.167a1.167 1.167 0 0 1 1.052-1.161L2.167 1Zm7 9.167V15H6v-4.833h3.167ZM8.333 1v1.5h-1.5V1h1.5Z"
    />
  </svg>
);
export const TotalOrdersIcon = ({ height, width, color, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    {...props}
  >
    <path
      fill={color}
      fillRule="evenodd"
      d="M4 .781C4.5.281 5.178.001 5.885 0h12.23C18.822 0 19.5.281 20 .781L23.219 4c.5.5.78 1.178.781 1.885v15.448a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V5.885C0 5.178.281 4.5.781 4L4 .781Zm14.115 1.886H5.885L3.22 5.333H20.78l-2.666-2.666ZM9.333 12a1.333 1.333 0 1 0-2.666 0 5.333 5.333 0 1 0 10.666 0 1.333 1.333 0 1 0-2.666 0 2.667 2.667 0 0 1-5.334 0Z"
      clipRule="evenodd"
    />
    <defs>
      <linearGradient
        id="a"
        x1={12}
        x2={12}
        y1={0}
        y2={25.333}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#C521FF" />
        <stop offset={0.5} stopColor="#FF2164" />
        <stop offset={1} stopColor="#FF9B21" />
      </linearGradient>
    </defs>
  </svg>
);
export const AllIcon = ({ height, width, color, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    {...props}
  >
    <path
      fill={color}
      fillRule="evenodd"
      d="M18.184 3.216a2.333 2.333 0 0 1 3.299 0l3.3 3.301a2.333 2.333 0 0 1 0 3.3l-3.3 3.3a2.333 2.333 0 0 1-3.3 0l-3.3-3.3a2.333 2.333 0 0 1 0-3.3l3.3-3.3ZM10.5 3.5a2.333 2.333 0 0 1 2.333 2.333V10.5a2.333 2.333 0 0 1-2.333 2.333H5.833A2.333 2.333 0 0 1 3.5 10.5V5.833A2.333 2.333 0 0 1 5.833 3.5H10.5Zm14 14a2.333 2.333 0 0 0-2.333-2.333H17.5a2.333 2.333 0 0 0-2.333 2.333v4.667A2.333 2.333 0 0 0 17.5 24.5h4.667a2.333 2.333 0 0 0 2.333-2.333V17.5Zm-14-2.333a2.333 2.333 0 0 1 2.333 2.333v4.667A2.333 2.333 0 0 1 10.5 24.5H5.833A2.333 2.333 0 0 1 3.5 22.167V17.5a2.333 2.333 0 0 1 2.333-2.333H10.5Z"
      clipRule="evenodd"
    />
  </svg>
);
export const NewIcon = ({ height, width, color, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    {...props}
  >
    <path
      fill={color}
      d="m9.922 8.47.11.097 9.901 9.899a1.167 1.167 0 0 1-.287 1.86l-.135.06L7.395 24.85c-2.277.84-4.495-1.3-3.803-3.575l.058-.17L8.114 8.989a1.167 1.167 0 0 1 1.688-.602l.12.083Zm10.536 5.068c1.063.056 2.52.28 3.787 1.04a1.167 1.167 0 0 1-1.079 2.066l-.121-.064c-.796-.479-1.813-.665-2.71-.712a8.95 8.95 0 0 0-1.108.005l-.368.036a1.167 1.167 0 0 1-.328-2.31 10.015 10.015 0 0 1 1.927-.062m2.363-3.25a1.167 1.167 0 0 1 .135 2.325l-.135.008h-.826a1.167 1.167 0 0 1-.136-2.325l.136-.008h.826Zm-3.713-.895a1.166 1.166 0 0 1 .097 1.54l-.097.11-1.237 1.237a1.166 1.166 0 0 1-1.747-1.54l.097-.11 1.237-1.236a1.167 1.167 0 0 1 1.65-.001ZM16.09 3.249c.523 1.57.243 3.29-.084 4.492-.196.749-.466 1.477-.805 2.173a1.167 1.167 0 0 1-2.088-1.041c.278-.555.478-1.15.642-1.746.264-.97.397-2.024.193-2.887l-.07-.252a1.167 1.167 0 1 1 2.212-.739Zm6.318 2.844a1.167 1.167 0 0 1 0 1.65l-.825.825a1.166 1.166 0 1 1-1.65-1.65l.825-.825a1.167 1.167 0 0 1 1.65 0Z"
    />
  </svg>
);
export const PendingIcon = ({ height, width, color, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    {...props}
  >
    <path
      fill={color}
      d="M11 .333c1.093 0 2.158.126 3.18.363a1.166 1.166 0 1 1-.527 2.273 11.647 11.647 0 0 0-1.749-.269l-.49-.026.397.023c1.688.128 3.319.665 4.753 1.563l.318.208.707-.707a1.167 1.167 0 0 1 1.748 1.54l-.097.11-.577.577a10.5 10.5 0 1 1-8.28-3.303l.232-.011h-.07a11.89 11.89 0 0 0-1.769.204l-.429.09A1.167 1.167 0 0 1 7.82.697 14.085 14.085 0 0 1 11 .333Zm0 7A1.167 1.167 0 0 0 9.833 8.5v4.667a1.167 1.167 0 0 0 2.334 0V8.5A1.167 1.167 0 0 0 11 7.333Z"
    />
  </svg>
);
export const DispatchedIcon = ({ height, width, color, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    {...props}
  >
    <path
      fill={color}
      d="M18 4.667A2.333 2.333 0 0 1 20.333 7v1.167h1.774a2.333 2.333 0 0 1 1.82.875l1.727 2.16c.332.413.512.927.513 1.457V17.5a2.333 2.333 0 0 1-2.334 2.333h-1.166a3.5 3.5 0 0 1-7 0h-3.5a3.5 3.5 0 1 1-7 0A2.333 2.333 0 0 1 2.833 17.5V7a2.333 2.333 0 0 1 2.334-2.333H18Zm-9.333 14a1.167 1.167 0 1 0 0 2.333 1.167 1.167 0 0 0 0-2.333Zm10.5 0a1.167 1.167 0 1 0 0 2.333 1.167 1.167 0 0 0 0-2.333Zm2.94-8.167h-1.774v4.667h3.5v-2.509L22.107 10.5Z"
    />
  </svg>
);
export const DeliveredIcon = ({ height, width, color, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    {...props}
  >
    <path
      fill={color}
      fillRule="evenodd"
      d="M12.35 2.45a2.333 2.333 0 0 1 3.15-.135l.15.136 2.216 2.216H21a2.333 2.333 0 0 1 2.326 2.158l.007.175v3.134l2.217 2.216a2.334 2.334 0 0 1 .135 3.152l-.136.148-2.217 2.216V21a2.333 2.333 0 0 1-2.158 2.328l-.174.005h-3.133l-2.216 2.217a2.333 2.333 0 0 1-3.151.135l-.149-.135-2.216-2.217H7a2.333 2.333 0 0 1-2.328-2.158L4.667 21v-3.134L2.45 15.65a2.334 2.334 0 0 1-.135-3.152l.135-.148 2.217-2.216V7a2.333 2.333 0 0 1 2.158-2.326L7 4.667h3.134L12.35 2.45Zm5.242 8.03-4.951 4.951-2.063-2.062a1.167 1.167 0 0 0-1.65 1.65l2.805 2.805a1.283 1.283 0 0 0 1.816 0l5.693-5.694a1.167 1.167 0 0 0-1.65-1.65Z"
      clipRule="evenodd"
    />
  </svg>
);
export const CancelledIcon = ({ height, width, color, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    {...props}
  >
    <path
      fill={color}
      d="M8.165 6.49a1.4 1.4 0 0 0 0 2.187l5.227 4.18c.917.734 2.275.083 2.275-1.092V8.263a7.008 7.008 0 0 1 5.612 5.154h-.946a1.75 1.75 0 1 0 0 3.5h.947a7.01 7.01 0 0 1-5.03 5.03V21a1.75 1.75 0 0 0-3.5 0v.946a7.012 7.012 0 0 1-5.03-5.03h.947a1.75 1.75 0 0 0 0-3.5H7.72c.01-.039.02-.078.032-.116a1.75 1.75 0 1 0-3.374-.933A10.5 10.5 0 1 0 15.667 4.73V3.403c0-1.174-1.358-1.826-2.275-1.093L8.165 6.49Z"
    />
  </svg>
);
export const MsgIcon = ({ height, width, color, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    {...props}
  >
    <path
      fill={color}
      stroke={color}
      d="M8 1.833a6.167 6.167 0 0 1 0 12.333H2.666a.833.833 0 0 1-.833-.833V8A6.167 6.167 0 0 1 8 1.833Zm-2 7A1.167 1.167 0 0 0 4.833 10l.006.116A1.166 1.166 0 0 0 6 11.166h2a1.165 1.165 0 0 0 .824-1.99A1.166 1.166 0 0 0 8 8.832H6Zm0-2.667a1.167 1.167 0 0 0-1.152.989l-.012.11a1.167 1.167 0 0 0 1.027 1.227l.014.001.015.001.078.005.015.001H10a1.168 1.168 0 0 0 .137-2.325l-.015-.002h-.014l-.079-.006H6Z"
    />
  </svg>
);
export const ReplyIcon = ({ height, width, color, fillOpacity, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    {...props}
  >
    <path
      fill={color}
      fillOpacity={fillOpacity}
      d="M3.773 4.315A4.667 4.667 0 0 1 12 7.333a1 1 0 0 0 2 0 6.667 6.667 0 0 0-11.612-4.47l-.231-1.31a1 1 0 1 0-1.97.347l.695 3.94c.046.26.193.493.411.645.27.188.623.23.924.135l3.762-.664a1 1 0 1 0-.346-1.97l-1.859.328Z"
    />
  </svg>
);

export const TotalOrdersCardIcon = ({ height, width, color, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    {...props}
  >
    <rect width={53} height={53} x={0.5} y={0.5} fill={color} rx={11.5} />
    <rect width={53} height={53} x={0.5} y={0.5} stroke="url(#a)" rx={11.5} />
    <path
      fill="url(#b)"
      fillRule="evenodd"
      d="M19 15.781c.5-.5 1.178-.78 1.885-.781h12.23c.707 0 1.385.281 1.885.781L38.219 19c.5.5.78 1.178.781 1.885v15.448a4 4 0 0 1-4 4H19a4 4 0 0 1-4-4V20.885c0-.707.281-1.385.781-1.885L19 15.781Zm14.115 1.886h-12.23l-2.666 2.666H35.78l-2.666-2.666ZM24.333 27a1.333 1.333 0 1 0-2.666 0 5.333 5.333 0 1 0 10.666 0 1.333 1.333 0 1 0-2.666 0 2.667 2.667 0 0 1-5.334 0Z"
      clipRule="evenodd"
    />
    <defs>
      <linearGradient
        id="a"
        x1={27}
        x2={27}
        y1={0}
        y2={54}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#C521FF" />
        <stop offset={0.495} stopColor="#FF2164" />
        <stop offset={1} stopColor="#FF9B21" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={27}
        x2={27}
        y1={15}
        y2={40.333}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#C521FF" />
        <stop offset={0.5} stopColor="#FF2164" />
        <stop offset={1} stopColor="#FF9B21" />
      </linearGradient>
    </defs>
  </svg>
);

export const TotalTakenCardIcon = ({ height, width, color, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    {...props}
  >
    <rect width={53} height={53} x={0.7} y={0.5} fill={color} rx={11.5} />
    <rect width={53} height={53} x={0.7} y={0.5} stroke="url(#a)" rx={11.5} />
    <path
      fill="url(#b)"
      fillRule="evenodd"
      d="M39.199 20.139c.044-1.974-.962-3.699-2.444-4.563-1.272-.741-2.847-.81-4.222.05-1.373-.86-2.949-.791-4.221-.05-1.483.864-2.488 2.59-2.444 4.563.057 2.545 2.028 4.618 4.912 6.332.536.317 1.108.677 1.753.677.646 0 1.218-.36 1.754-.677 2.884-1.714 4.854-3.787 4.912-6.332Zm-16.814 7.298-2.653 1.658a2.658 2.658 0 0 0-1.865-.76h-1.334A2.667 2.667 0 0 0 13.867 31v5.334A2.667 2.667 0 0 0 16.533 39h1.334a2.666 2.666 0 0 0 2.309-1.333h1.061c.207 0 .411.048.596.14l3.134 1.567a6.667 6.667 0 0 0 4.289.573l4.28-.855a3.982 3.982 0 0 0 1.613-.722l4.095-3.071a3.222 3.222 0 0 0 1.29-2.577v-.075c0-2.36-2.485-3.896-4.597-2.84-.92.46-1.769 1.167-2.624 1.737.494-1.484-.292-3.13-1.853-3.52l-4.955-1.24a5.334 5.334 0 0 0-4.12.652Z"
      clipRule="evenodd"
    />
    <defs>
      <linearGradient
        id="a"
        x1={27.2}
        x2={27.2}
        y1={0}
        y2={54}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#C521FF" />
        <stop offset={0.495} stopColor="#FF2164" />
        <stop offset={1} stopColor="#FF9B21" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={27.2}
        x2={27.2}
        y1={15.001}
        y2={40.078}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#C521FF" />
        <stop offset={0.5} stopColor="#FF2164" />
        <stop offset={1} stopColor="#FF9B21" />
      </linearGradient>
    </defs>
  </svg>
);

export const TotalRevenueCardIcon = ({ height, width, color, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    {...props}
  >
    <rect width={53} height={53} x={0.9} y={0.5} fill={color} rx={11.5} />
    <rect width={53} height={53} x={0.9} y={0.5} stroke="url(#a)" rx={11.5} />
    <g clipPath="url(#b)">
      <path
        fill="url(#c)"
        d="M39.4 32.524v1.81c0 1.085-.508 2.013-1.213 2.742-.698.723-1.644 1.312-2.71 1.779-2.136.933-4.992 1.478-8.077 1.478s-5.941-.544-8.077-1.478c-1.066-.467-2.012-1.056-2.71-1.779-.646-.667-1.126-1.504-1.202-2.475l-.011-.268v-1.809c.62.352 1.283.664 1.992.927 2.707 1.001 6.247 1.56 10.008 1.56 3.761 0 7.301-.559 10.008-1.56a13.538 13.538 0 0 0 1.519-.671l.473-.256Zm-24-7.333c.62.352 1.283.664 1.992.926 2.707 1.002 6.247 1.56 10.008 1.56 3.761 0 7.301-.558 10.008-1.56.71-.262 1.372-.573 1.992-.926v4.14a11.103 11.103 0 0 1-2.917 1.618c-2.34.867-5.552 1.396-9.083 1.396-3.53 0-6.741-.529-9.083-1.396a11.103 11.103 0 0 1-2.917-1.618v-4.14ZM27.4 15c3.085 0 5.941.544 8.077 1.479 1.066.466 2.012 1.056 2.71 1.778.646.667 1.126 1.504 1.202 2.475l.01.268v.997a11.099 11.099 0 0 1-2.916 1.619c-2.34.867-5.552 1.396-9.083 1.396-3.53 0-6.741-.53-9.083-1.396-.932-.345-1.773-.8-2.54-1.341l-.377-.278V21c0-1.085.508-2.013 1.213-2.743.698-.722 1.644-1.312 2.71-1.778C21.459 15.545 24.315 15 27.4 15Z"
      />
    </g>
    <defs>
      <linearGradient
        id="a"
        x1={27.4}
        x2={27.4}
        y1={0}
        y2={54}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#C521FF" />
        <stop offset={0.495} stopColor="#FF2164" />
        <stop offset={1} stopColor="#FF9B21" />
      </linearGradient>
      <linearGradient
        id="c"
        x1={27.4}
        x2={27.4}
        y1={15}
        y2={40.333}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#C521FF" />
        <stop offset={0.5} stopColor="#FF2164" />
        <stop offset={1} stopColor="#FF9B21" />
      </linearGradient>
      <clipPath id="b">
        <path fill="#fff" d="M11.4 11h32v32h-32z" />
      </clipPath>
    </defs>
  </svg>
);
export const PendingOrderIcon = ({ height, width, color, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    {...props}
  >
    <rect width={53} height={53} x={1.1} y={0.5} fill="#F6F8F9" rx={11.5} />
    <rect width={53} height={53} x={1.1} y={0.5} stroke="url(#a)" rx={11.5} />
    <path
      fill="url(#b)"
      d="M27.6 13.667c1.25 0 2.467.144 3.635.414a1.335 1.335 0 0 1 .8 2.084 1.333 1.333 0 0 1-1.403.514 13.305 13.305 0 0 0-1.999-.307l-.56-.03.454.026a11.93 11.93 0 0 1 5.432 1.787l.364.237.808-.808a1.333 1.333 0 0 1 1.997 1.76l-.11.125-.66.66a12 12 0 1 1-9.463-3.774l.265-.014-.08.002c-.69.026-1.364.106-2.021.232l-.491.104a1.333 1.333 0 0 1-.603-2.598 16.1 16.1 0 0 1 3.635-.414Zm0 8A1.333 1.333 0 0 0 26.267 23v5.333a1.333 1.333 0 1 0 2.666 0V23a1.333 1.333 0 0 0-1.333-1.333Z"
    />
    <defs>
      <linearGradient
        id="a"
        x1={27.6}
        x2={27.6}
        y1={0}
        y2={54}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#C521FF" />
        <stop offset={0.495} stopColor="#FF2164" />
        <stop offset={1} stopColor="#FF9B21" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={27.6}
        x2={27.6}
        y1={13.667}
        y2={40.334}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#C521FF" />
        <stop offset={0.5} stopColor="#FF2164" />
        <stop offset={1} stopColor="#FF9B21" />
      </linearGradient>
    </defs>
  </svg>
);
export const PendingReturnIcon = ({ height, width, color, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    {...props}
  >
    <rect width={53} height={53} x={1.3} y={0.5} fill="#F6F8F9" rx={11.5} />
    <rect width={53} height={53} x={1.3} y={0.5} stroke="url(#a)" rx={11.5} />
    <path
      fill="url(#b)"
      fillRule="evenodd"
      d="M29.533 36.832a10.005 10.005 0 0 1-10.508-5.039 2 2 0 0 0-3.506 1.924c2.802 5.114 8.64 8.124 14.709 7.054 7.613-1.342 12.699-8.603 11.356-16.218-1.344-7.614-8.604-12.7-16.219-11.356a14.004 14.004 0 0 0-11.509 12.458c-.165 1.745 1.688 2.878 3.157 2.065l3.76-2.083c2.063-1.141 1.023-4.292-1.314-3.981l-.136.019a10 10 0 1 1 10.21 15.157Z"
      clipRule="evenodd"
    />
    <defs>
      <linearGradient
        id="a"
        x1={27.8}
        x2={27.8}
        y1={0}
        y2={54}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#C521FF" />
        <stop offset={0.495} stopColor="#FF2164" />
        <stop offset={1} stopColor="#FF9B21" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={27.822}
        x2={27.822}
        y1={12.982}
        y2={40.986}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#C521FF" />
        <stop offset={0.5} stopColor="#FF2164" />
        <stop offset={1} stopColor="#FF9B21" />
      </linearGradient>
    </defs>
  </svg>
);
