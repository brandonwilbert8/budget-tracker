import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const DollarIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <Path
      stroke="#2A2636"
      strokeLinecap="round"
      d="M10 2v2M10 16v2M13.5 6S13 4 10 4 6.5 5.957 6.5 7c0 4.14 7 1.965 7 6 0 1.043-.5 3-3.5 3s-3.5-2-3.5-2"
    />
  </Svg>
);
export default DollarIcon;
