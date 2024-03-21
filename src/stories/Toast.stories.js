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
  icon: true, // Default icon to true
  message: "Message here",
  divider: true,
  actionButton: true,
  onClose: true,
};

export const WitoutIcon = Template.bind({});
WitoutIcon.args = {
  icon: false, // Set icon prop to false
  message: "Message here",
  divider: true,
  actionButton: true,
  onClose: true,
};

export const WithoutActionButton = Template.bind({});
WithoutActionButton.args = {
  icon: true,
  message: "Message here",
  divider: true,
  actionButton: false, // Set actionButton prop to false
  onClose: true,
};

export const WithoutDivider = Template.bind({});
WithoutDivider.args = {
  icon: true,
  message: "Message here",
  divider: false, // Set divider prop to false
  actionButton: true,
  onClose: true,
};

export const TextAndIcon = Template.bind({});
TextAndIcon.args = {
  icon: true,
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
