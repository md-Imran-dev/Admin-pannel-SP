import {
  AllIcon,
  CancelledIcon,
  DeliveredIcon,
  DispatchedIcon,
  NewIcon,
  PendingIcon,
} from "../svgs/icons";

export const statusData = [
  {
    name: "All",
    value: 50,
    icon: (color) => <AllIcon width={28} height={28} color={color} />,
    color: "#5e35b1",
  },
  {
    name: "New",
    value: 50,
    icon: (color) => <NewIcon width={28} height={28} color={color} />,
    color: "#7C52DD",
  },
  {
    name: "Pending",
    value: 50,
    icon: (color) => <PendingIcon width={28} height={28} color={color} />,
    color: "#3949ab",
  },
  {
    name: "Dispatched",
    value: 50,
    icon: (color) => <DispatchedIcon width={28} height={28} color={color} />,
    color: "#5c6bc0",
  },
  {
    name: "Delivered",
    value: 123,
    icon: (color) => <DeliveredIcon width={28} height={28} color={color} />,
    color: "#43a047",
  },
  {
    name: "Cancelled",
    value: 50,
    icon: (color) => <CancelledIcon width={28} height={28} color={color} />,
    color: "#e53935",
  },
];
