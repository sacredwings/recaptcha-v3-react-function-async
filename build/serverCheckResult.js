"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.serverCheckResult = serverCheckResult;

var _axios = _interopRequireDefault(require("axios"));

var _querystring = _interopRequireDefault(require("querystring"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/**
 * Validate Google reCaptcha
 * @param {string} captchaResponse - 'g-recaptcha-response'
 * @param {string} secret - your Google reCaptcha secret string
 * @returns {Promise}
 */
function serverCheckResult(_x, _x2) {
  return _serverCheckResult.apply(this, arguments);
}

function _serverCheckResult() {
  _serverCheckResult = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(captchaResponse, secret) {
    var params, result;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
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
      }
    }, _callee, null, [[1, 8]]);
  }));
  return _serverCheckResult.apply(this, arguments);
}