function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { StyledIcon } from '../StyledIcon';
export var Script = function Script(props) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Script"
  }, props), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M4 1C1.79086 1 0 2.79086 0 5V6H1H5.84699L4.01005 18.8586L4 18.9289V19C4 21.2091 5.79086 23 8 23H20C22.2091 23 24 21.2091 24 19V18H23H18.153L19.99 5.14142L20 5.07107V5C20 2.79086 18.2091 1 16 1H4ZM4 3C3.25972 3 2.61337 3.4022 2.26756 4H5.73244C5.38663 3.4022 4.74028 3 4 3ZM7.46487 3H16C17.0831 3 17.9652 3.86103 17.999 4.93597L16.1327 18H11H10V19C10 20.1046 9.10457 21 8 21C6.91685 21 6.03481 20.139 6.00101 19.064L7.98995 5.14142L8 5.07107V5C8 4.27143 7.80521 3.58835 7.46487 3ZM20 21H11.4649C11.6439 20.6905 11.7827 20.3548 11.874 20H21.7324C21.3866 20.5978 20.7403 21 20 21Z",
    fill: "#000"
  }));
};