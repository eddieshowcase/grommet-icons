"use strict";

exports.__esModule = true;
exports.Braille = void 0;

var _react = _interopRequireWildcard(require("react"));

var _StyledIcon = require("../StyledIcon");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Braille = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Braille"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M7 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM7 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm10 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM7 20a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm10-10a3 3 0 1 1 0-6 3 3 0 0 1 0 6z",
    fill: "none",
    stroke: "#000",
    strokeWidth: "2"
  }));
});
exports.Braille = Braille;
Braille.displayName = 'Braille';