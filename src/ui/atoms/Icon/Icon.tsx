import * as proptypes from "./Icon.proptypes";
import { Eye } from "@icons";

export default function Icon({ iconType } : proptypes.IconProps) {

    switch (iconType) {
        case 'eye':
          return <Eye />;
        default:
            return null;    
      }

}