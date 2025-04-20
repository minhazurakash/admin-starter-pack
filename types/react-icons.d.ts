import { IconBaseProps } from "react-icons";
import "react-icons";

declare module "react-icons/lib" {
  export type IconType = (props: IconBaseProps) => React.ReactNode;
}
