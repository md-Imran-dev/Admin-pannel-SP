// src/data/activitiesData.js
import { MsgIcon, ReplyIcon } from "../svgs/icons";

export const activities = [
  {
    id: 1,
    type: "message",
    user: "Christian Wood",
    action: "Sent Message to",
    recipient: "Nikita Houston",
    time: "1 min ago",
    date: "TODAY",
    color: "#ff9800",
    isReply: false,
  },
  {
    id: 2,
    type: "reply",
    user: "Nikita Houston",
    action: "Reply your message",
    content: "Hello",
    time: "1 min ago",
    date: "TODAY",
    color: "#e0e0e0",
    isReply: true,
  },
  {
    id: 3,
    type: "order",
    user: "Christian Wood",
    action: "Accept Order from",
    source: "Ebay",
    time: "1 min ago",
    date: "TODAY",
    color: "#f44336",
    isReply: false,
  },
  {
    id: 4,
    type: "reply",
    user: "Rohan Walker",
    action: "Reply your message",
    source: "Ebay",
    time: "1 min ago",
    date: "TODAY",
    color: "#e0e0e0",
    isReply: true,
  },
  {
    id: 5,
    type: "reply",
    user: "Rohan Walker",
    action: "Reply your message",
    source: "Ebay",
    time: "1 min ago",
    date: "TODAY",
    color: "#e0e0e0",
    isReply: true,
  },
  {
    id: 6,
    type: "order",
    user: "Christian Wood",
    action: "Accept Order from",
    source: "Amazon",
    time: "12:30PM",
    date: "YESTERDAY",
    color: "#673ab7",
    isReply: false,
  },
  {
    id: 7,
    type: "order",
    user: "Christian Wood",
    action: "Accept Order from",
    source: "Walmart",
    time: "11:20AM",
    date: "25 MAY 2024",
    color: "#2196f3",
    isReply: false,
  },
];

// Helper function to get the appropriate icon based on activity type
export const getActivityIcon = (type, color) => {
  switch (type) {
    case "message":
      return <MsgIcon height={16} width={16} color="white" />;
    case "reply":
      return <ReplyIcon height={8} width={13.831} color="#666" />;
    case "order":
      return <MsgIcon height={16} width={16} color="white" />;
    default:
      return <MsgIcon height={16} width={16} color="white" />;
  }
};

// Add additional helper function to process relationships
export const processActivitiesRelationships = (activities) => {
  const processedActivities = [...activities];

  // Find potential parent messages for replies
  for (let i = 0; i < processedActivities.length; i++) {
    const activity = processedActivities[i];

    if (activity.isReply) {
      // Look for the nearest non-reply activity before this one as a potential parent
      let j = i - 1;
      while (j >= 0) {
        if (!processedActivities[j].isReply) {
          activity.replyTo = processedActivities[j].id;
          processedActivities[j].hasReplies = true;
          break;
        }
        j--;
      }
    } else {
      // Initialize hasReplies for non-reply activities
      activity.hasReplies = false;
    }
  }

  return processedActivities;
};
