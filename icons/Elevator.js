'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Elevator = function Elevator(props) {
  return _react2.default.createElement(
    _Icon2.default,
    _extends({ a11yTitle: 'Elevator' }, props),
    _react2.default.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd', strokeLinecap: 'round' },
      _react2.default.createElement(
        'g',
        { stroke: '#000000', strokeWidth: '2' },
        _react2.default.createElement('path', { d: 'M1,2.991155 C1,1.89147046 1.88967395,1 2.991155,1 L21.008845,1 C22.1085295,1 23,1.88967395 23,2.991155 L23,21.008845 C23,22.1085295 22.1103261,23 21.008845,23 L2.991155,23 C1.89147046,23 1,22.1103261 1,21.008845 L1,2.991155 Z M16.5,8 L18,10 L15,10 L16.5,8 Z M16.5,16 L18,14 L15,14 L16.5,16 Z M5,13 L6.55613518,9.88772964 C6.80127495,9.3974501 7.44386482,9 8,9 L8,9 C8.55228475,9 9.19907951,9.39815903 9.44386482,9.88772964 L11,13 M6.5,18 L7.75,10 L8,10 L8.25,10 L9.5,18 M8,7 C8.55228475,7 9,6.55228475 9,6 C9,5.44771525 8.55228475,5 8,5 C7.44771525,5 7,5.44771525 7,6 C7,6.55228475 7.44771525,7 8,7 Z' })
      )
    )
  );
};

exports.default = Elevator;