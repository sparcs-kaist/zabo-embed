import type { Meta } from "@storybook/react";

import { ImageBanner} from "./ImageBanner";
import { StoryObj } from "@storybook/react";


const meta = {
  title: "Banner/ImageBanner",
  component: ImageBanner

} satisfies Meta<typeof ImageBanner>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    // mainText: "지금은 새학기 동아리 모집 시즌",
    // subText: "어느 동아리가 모집중인지 알고 싶다면?",
  }
};