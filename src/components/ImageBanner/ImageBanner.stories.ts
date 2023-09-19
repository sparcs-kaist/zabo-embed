import type { Meta } from "@storybook/react";

import { ImageBanner } from "./ImageBanner";
import { StoryObj } from "@storybook/react";

const meta = {
  title: "Banner/ImageBanner",
  component: ImageBanner,

} satisfies Meta<typeof ImageBanner>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    serviceColor: "#E54C65",
    items: [
      {
        "imageURL": "http://localhost:3000/assets/release-note.png",
        "actionURL": "https://otl.sparcs.org",
      },
      {
        "imageURL": "http://localhost:3000/assets/app-launch.png",
        "actionURL": "https://otl.sparcs.org",
      },
    ],
  },
};
