import type { Meta } from "@storybook/react";

import { TextBanner } from "./TextBanner";
import { StoryObj } from "@storybook/react";

const meta = {
  title: "Banner/TextBanner",
  component: TextBanner,
} satisfies Meta<typeof TextBanner>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ZaboPrimary: Story = {
  args: {
    style: {
      primary: true,
      themeColor: "#1C3340",
    },
    mainText: "지금은 새학기 동아리 모집 시즌",
    subText: "어느 동아리가 모집중인지 알고 싶다면?",
    serviceName: "Zabo",
    actionURL: "https://zabo.sparcs.org",
    actionText: "자보 바로가기",
  },
};

export const ZaboSecondary: Story = {
  args: {
    style: {
      primary: false,
      themeColor: "#1C3340",
    },
    mainText: "지금은 새학기 동아리 모집 시즌",
    subText: "어느 동아리가 모집중인지 알고 싶다면?",
    serviceName: "Zabo",
    actionURL: "https://zabo.sparcs.org",
    actionText: "자보 바로가기",
  },
};

export const AraPrimary: Story = {
  args: {
    style: {
      primary: true,
      themeColor: "#ED3A3A",
    },
    mainText: "학교 공지사항, 일일히 찾아보기 힘들다면",
    subText: "아라에서 한눈에 모아보는 학교 공지사항",
    serviceName: "Ara",
    actionURL: "https://newara.sparcs.org",
    actionText: "아라 바로가기",
  },
};

export const AraSecondary: Story = {
  args: {
    style: {
      primary: false,
      themeColor: "#ED3A3A",
    },
    mainText: "학교 공지사항, 일일히 찾아보기 힘들다면",
    subText: "아라에서 한눈에 모아보는 학교 공지사항",
    serviceName: "Ara",
    actionURL: "https://newara.sparcs.org",
    actionText: "아라 바로가기",
  },
};

export const TaxiPrimary: Story = {
  args: {
    style: {
      primary: true,
      themeColor: "#6E3678",
    },
    mainText: "오늘은 금요일, 집 가는 날",
    subText: "택시팟 모아타고 택시비를 아껴보세요!",
    serviceName: "Taxi",
    actionURL: "https://taxi.sparcs.org",
    actionText: "택시 바로가기",
  },
};

export const TaxiSecondary: Story = {
  args: {
    style: {
      primary: false,
      themeColor: "#6E3678",
    },
    mainText: "오늘은 금요일, 집 가는 날",
    subText: "택시팟 모아타고 택시비를 아껴보세요!",
    serviceName: "Taxi",
    actionURL: "https://taxi.sparcs.org",
    actionText: "택시 바로가기",
  },
};

export const OTLPrimary: Story = {
  args: {
    style: {
      primary: true,
      themeColor: "#e54c65",
    },
    mainText: "새학기 수강신청, 미리미리 준비하려면?",
    subText: "OTL에서 수강후기를 확인해보세요!",
    serviceName: "OTL",
    actionURL: "https://taxi.sparcs.org",
    actionText: "OTL 바로가기",
  },
};

export const OTLSecondary: Story = {
  args: {
    style: {
      primary: false,
      themeColor: "#e54c65",
    },
    mainText: "새학기 수강신청, 미리미리 준비하려면?",
    subText: "OTL에서 수강후기를 확인해보세요!",
    serviceName: "OTL",
    actionURL: "https://taxi.sparcs.org",
    actionText: "OTL 바로가기",
  },
};

export const SPARCSPrimary: Story = {
  args: {
    style: {
      primary: false,
      themeColor: "#eba12a",
    },
    mainText: "자보같은 멋진 서비스를 만들고 싶다면",
    subText: "지금 바로 스팍스에 지원하세요!",
    serviceName: "SPARCS",
    actionURL: "https://apply.sparcs.org",
    actionText: "지원 바로가기",
  },
};

export const SPARCSSecondary: Story = {
  args: {
    style: {
      primary: true,
      themeColor: "#eba12a",
    },
    mainText: "자보같은 멋진 서비스를 만들고 싶다면",
    subText: "지금 바로 스팍스에 지원하세요!",
    serviceName: "SPARCS",
    actionURL: "https://apply.sparcs.org",
    actionText: "지원 바로가기",
  },
};
