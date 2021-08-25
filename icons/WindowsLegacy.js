"use strict";

exports.__esModule = true;
exports.WindowsLegacy = void 0;

var _react = _interopRequireWildcard(require("react"));

var _StyledIcon = require("../StyledIcon");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var WindowsLegacy = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "WindowsLegacy"
  }, props), /*#__PURE__*/_react["default"].createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#F35325",
    d: "m2.613 10.096.282-.985c.666-2.301 1.332-4.603 1.996-6.904.026-.09.054-.164.157-.205 1.15-.461 2.327-.825 3.565-.959 1.666-.18 3.195.21 4.607 1.094.184.115.362.24.55.347.12.069.136.142.098.272-.553 1.897-1.1 3.795-1.648 5.694-.192.661-.388 1.322-.574 1.986-.04.148-.075.173-.211.08-.814-.553-1.672-1.017-2.633-1.263-1.212-.312-2.423-.25-3.632.015-.862.19-1.692.474-2.557.828"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#81BC06",
    d: "M17.277 13.025c-1.529.01-2.878-.526-4.134-1.351-.355-.234-.354-.232-.238-.635.712-2.458 1.421-4.918 2.134-7.376.07-.241.019-.285.29-.104.895.6 1.839 1.094 2.908 1.31 1.128.228 2.248.15 3.362-.099.7-.157 1.38-.377 2.048-.635.096-.036.195-.098.294-.007.097.09.052.19.022.293-.713 2.465-1.426 4.93-2.134 7.397-.033.115-.093.171-.2.214-1.162.465-2.351.831-3.604.95-.248.025-.498.03-.748.043"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#FFBA08",
    d: "m21.377 13.352-.442 1.533c-.602 2.08-1.206 4.162-1.801 6.245a.437.437 0 0 1-.298.32c-1.026.395-2.069.72-3.163.874-1.693.238-3.268-.082-4.73-.963-.242-.146-.475-.306-.72-.45-.12-.07-.13-.144-.093-.272.523-1.796 1.04-3.594 1.56-5.392l.635-2.194c.067-.23.068-.23.28-.09.76.501 1.551.936 2.434 1.186 1.273.36 2.547.3 3.822.018.849-.187 1.668-.472 2.516-.815"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#05A6F0",
    d: "m11.179 12.047-.366 1.261c-.623 2.156-1.249 4.312-1.866 6.47-.054.185-.103.19-.253.088-.857-.585-1.764-1.065-2.787-1.298-1.157-.264-2.309-.193-3.458.059-.72.157-1.418.384-2.106.649-.09.034-.183.085-.277.008-.105-.086-.06-.191-.03-.291l2.132-7.377a.282.282 0 0 1 .185-.203c1.18-.475 2.389-.844 3.663-.962 1.571-.144 3.026.212 4.372 1.029.23.14.457.285.684.43.058.038.138.07.107.137"
  })));
});
exports.WindowsLegacy = WindowsLegacy;
WindowsLegacy.displayName = 'WindowsLegacy';