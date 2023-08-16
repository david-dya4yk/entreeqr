import { MyTheme } from "@/shared/theme";
import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme extends MyTheme {
    [key: string]: any;
  }
}
