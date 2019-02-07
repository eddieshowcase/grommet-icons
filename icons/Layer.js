"use strict";

exports.__esModule = true;
exports.Layer = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Layer = function Layer(props) {
  return _react.default.createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Layer"
  }, props), _react.default.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M1,1 L17,1 L17,17 L1,17 L1,1 Z M20,7 L23,7 L23,23 L7,23 L7,20 L7,20"
  }));
};

exports.Layer = Layer;