// Toast.stories.js
import React from "react";
import { action } from "@storybook/addon-actions";
import Toast from "./Toast";

export default {
  title: "Components/Toast",
  component: Toast,
  parameters: {
    layout: "centered", // Set layout to "centered"
  },
  argTypes: {
    iconContainer: {
      control: {
        type: "boolean",
      },
    },
    icon: {
      control: {
        type: "select",
      },
    },
    message: {
      control: "text",
    },
    divider: {
      control: "boolean",
    },
    actionButton: {
      control: "boolean",
    },
    onActionClick: {
      action: "onActionClick",
    },
    onCloseAction: {
      action: "onCloseAction",
    },
    onClose: {
      control: "boolean",
    },
  },
};

const Template = (args) => <Toast {...args} />;

export const Default = Template.bind({});
Default.args = {
  iconContainer: false,
  message: "Message here",
  divider: true,
  actionButton: true,
  onClose: true,
};

export const Full = Template.bind({});
Full.args = {
  iconContainer: true,
  icon: "information",
  message: "Message here",
  divider: true,
  actionButton: true,
  onClose: true,
};

export const WitoutIcon = Template.bind({});
WitoutIcon.args = {
  iconContainer: false, // Set icon prop to false
  message: "Message here",
  divider: true,
  actionButton: true,
  onClose: true,
};

export const WithoutActionButton = Template.bind({});
WithoutActionButton.args = {
  iconContainer: true,
  message: "Message here",
  divider: true,
  actionButton: false, // Set actionButton prop to false
  onClose: true,
};

export const WithoutDivider = Template.bind({});
WithoutDivider.args = {
  iconContainer: true,
  message: "Message here",
  divider: false, // Set divider prop to false
  actionButton: true,
  onClose: true,
};

export const TextAndIcon = Template.bind({});
TextAndIcon.args = {
  iconContainer: true,
  message: "Message here",
};

export const TextOnly = Template.bind({});
TextOnly.args = {
  message: "Message here",
};

export const TextAndClose = Template.bind({});
TextAndClose.args = {
  message: "Message here",
  onClose: true,
};

export const TextAndActionButton = Template.bind({});
TextAndActionButton.args = {
  message: "Message here",
  actionButton: true,
};

export const NotificationInformation = Template.bind({});
NotificationInformation.args = {
  iconContainer: true,
  icon: "information",
  message: "Message here",
  divider: true,
  actionButton: true,
  onClose: true,
};

export const NotificationWarning = Template.bind({});
NotificationWarning.args = {
  iconContainer: true,
  icon: "warning",
  message: "Message here",
  divider: true,
  actionButton: true,
  onClose: true,
};

export const NotificationError = Template.bind({});
NotificationError.args = {
  iconContainer: true,
  icon: "error",
  message: "Message here",
  divider: true,
  actionButton: true,
  onClose: true,
};

export const NotificationSuccess = Template.bind({});
NotificationSuccess.args = {
  iconContainer: true,
  icon: "success",
  message: "Message here",
  divider: true,
  actionButton: true,
  onClose: true,
};
