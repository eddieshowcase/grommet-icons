function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { StyledIcon } from '../StyledIcon';
export var Link = function Link(props) {
  return React.createElement(StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Link"
  }, props), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M16.1251884,2.42026615 C16.9095797,1.63587482 18.1818354,1.63638083 18.9643331,2.41887857 L21.5811214,5.03566688 C22.3647464,5.81929188 22.3723943,7.08215115 21.5797338,7.87481161 L17.8748116,11.5797338 C17.0904203,12.3641252 15.8181646,12.3636192 15.0356669,11.5811214 L12.4188786,8.96433312 C11.6352536,8.18070812 11.6276057,6.91784885 12.4202662,6.12518839 L16.1251884,2.42026615 Z M6.12518839,12.4202662 C6.90957973,11.6358748 8.18183538,11.6363808 8.96433312,12.4188786 L11.5811214,15.0356669 C12.3647464,15.8192919 12.3723943,17.0821512 11.5797338,17.8748116 L7.87481161,21.5797338 C7.09042027,22.3641252 5.81816462,22.3636192 5.03566688,21.5811214 L2.41887857,18.9643331 C1.63525357,18.1807081 1.6276057,16.9178488 2.42026615,16.1251884 L6.12518839,12.4202662 Z M7,17 L17,7"
  }));
};