import Notification from "../Notification/Notification";

export default {
  title: "Components/Notification",
  component: Notification,
};

export const DefaultNotification = {
  args: {
    children: "Notification",
  },
};

export const PrimaryNotification = {
  args: {
    children: "Primary notification",
    $primary: true,
  },
};
