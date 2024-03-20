// Toast.stories.js
import React from "react";
import { action } from "@storybook/addon-actions";
import Toast from "./Toast";

export default {
  title: "Components/Toast",
  component: Toast,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    icon: {
      control: {
        type: "boolean", // Set control type to boolean
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
    onClose: {
      control: "boolean",
    },
  },
};

const Template = (args) => <Toast {...args} />;

export const Default = Template.bind({});
Default.args = {
  icon: false, // Default icon to false
  message: "Message here",
  actionButton: true,
  onClose: true,
};

export const WithAction = Template.bind({});
WithAction.args = {
  icon: true, // Set icon prop to true to show icon options
  message: "Message here",
  actionButton: true,
  onClose: true,
};

export const SuccessToast = Template.bind({});
SuccessToast.args = {
  icon: true, // Set icon prop to true to show icon options
  message: "Message here",
  actionButton: true,
};
