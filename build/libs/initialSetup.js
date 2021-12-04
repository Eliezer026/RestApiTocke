"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createroles = void 0;

var _Roles = _interopRequireDefault(require("../models/Roles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var createroles = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var foundRoles, roles, values;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _Roles["default"].find({
              name: {
                $in: "admin"
              }
            });

          case 3:
            foundRoles = _context.sent;
            roles = foundRoles.map(function (role) {
              return role._id;
            });

            if (!roles) {
              _context.next = 10;
              break;
            }

            console.log(roles);
            return _context.abrupt("return");

          case 10:
            _context.next = 12;
            return Promise.all([new _Roles["default"]({
              name: "user"
            }).save(), new _Roles["default"]({
              name: "moderator"
            }).save(), new _Roles["default"]({
              name: "admin"
            }).save()]);

          case 12:
            values = _context.sent;
            console.log(values);

          case 14:
            _context.next = 19;
            break;

          case 16:
            _context.prev = 16;
            _context.t0 = _context["catch"](0);
            console.error(_context.t0);

          case 19:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 16]]);
  }));

  return function createroles() {
    return _ref.apply(this, arguments);
  };
}();

exports.createroles = createroles;