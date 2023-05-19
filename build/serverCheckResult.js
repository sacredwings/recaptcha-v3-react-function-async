"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _axios = _interopRequireDefault(require("axios"));
var _querystring = _interopRequireDefault(require("querystring"));
/**
 * Validate Google reCaptcha
 * @param {string} captchaResponse - 'g-recaptcha-response'
 * @param {string} secret - your Google reCaptcha secret string
 * @returns {Promise}
 */
var _default = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(captchaResponse, secret) {
    var params, result;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          params = {
            secret: secret,
            response: captchaResponse
          };
          _context.prev = 1;
          _context.next = 4;
          return _axios["default"].post('https://www.google.com/recaptcha/api/siteverify', _querystring["default"].stringify(params), {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            }
          });
        case 4:
          result = _context.sent;
          return _context.abrupt("return", result.data.success);
        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](1);
          throw _context.t0;
        case 11:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[1, 8]]);
  }));
  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
exports["default"] = _default;