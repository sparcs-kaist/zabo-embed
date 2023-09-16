import "react";

declare module "react" {
  interface CSSProperties {
    "--theme"?: string | number;
  }
}
