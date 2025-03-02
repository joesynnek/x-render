"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _numberPicker = _interopRequireDefault(require("@alifd/next/lib/number-picker"));

var _range = _interopRequireDefault(require("@alifd/next/lib/range"));

var _sliderHoc = _interopRequireDefault(require("../../components/sliderHoc"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (0, _sliderHoc.default)(_range.default, _numberPicker.default);

exports.default = _default;