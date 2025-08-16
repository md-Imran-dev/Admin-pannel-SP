import {
  TotalOrdersCardIcon,
  TotalRevenueCardIcon,
  TotalTakenCardIcon,
  PendingOrderIcon,
  PendingReturnIcon,
} from "../svgs/icons";

export const orderMetrics = [
  {
    title: "Total Orders",
    value: "123",
    icon: (color) => (
      <TotalOrdersCardIcon height={54} width={54} color={color} />
    ),
    bgColor: "#ffe9f1",
    iconColor: "#e91e63",
    change: 28,
    isPositive: true,
  },
  {
    title: "Total Taken",
    value: "123",
    icon: (color) => (
      <TotalTakenCardIcon height={54} width={54} color={color} />
    ),
    bgColor: "#f3e5f5",
    iconColor: "#9c27b0",
    change: 15,
    isPositive: false,
  },
  {
    title: "Total Revenue",
    value: "123",
    icon: (color) => (
      <TotalRevenueCardIcon height={54} width={54} color={color} />
    ),
    bgColor: "#fff3e0",
    iconColor: "#ff6d00",
    change: 28,
    isPositive: true,
  },
  {
    title: "Pending Orders",
    value: "$1234.99",
    icon: (color) => <PendingOrderIcon height={54} width={54} color={color} />,
    bgColor: "#ffebee",
    iconColor: "#f44336",
    change: 28,
    isPositive: true,
  },
  {
    title: "Pending   Returns",
    value: "$1234.99",
    icon: (color) => <PendingReturnIcon height={54} width={54} color={color} />,
    bgColor: "#f3e5f5",
    iconColor: "#9c27b0",
    change: 28,
    isPositive: true,
  },
  {
    title: "Pending Dispatch",
    value: "$1234.99",
    icon: (color) => (
      <TotalOrdersCardIcon height={54} width={54} color={color} />
    ),
    bgColor: "#ffebee",
    iconColor: "#f44336",
    change: 28,
    isPositive: true,
  },
  {
    title: "Pending Returns",
    value: "$1234.99",
    icon: (color) => (
      <TotalOrdersCardIcon height={54} width={54} color={color} />
    ),
    bgColor: "#f3e5f5",
    iconColor: "#9c27b0",
    change: 28,
    isPositive: true,
  },
];
