webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/chat/chat_item.js":
/*!**************************************!*\
  !*** ./components/chat/chat_item.js ***!
  \**************************************/
/*! exports provided: ChatItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatItem", function() { return ChatItem; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _jsxFileName = "/app/client/components/chat/chat_item.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 3px;\n  width: 3px;\n  border-radius: 50%;\n  background-color: #969696;\n  &.self {\n    right: 0;\n    background-color: #5435ff;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: relative;\n    padding: 10px 5px;\n    font-family: sans-serif;\n    &.self {\n      text-align: right;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var Item = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject());
var Indicator = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject2());
var ChatItem = function ChatItem(_ref) {
  var uuid = _ref.uuid,
      messageWrapper = _ref.messageWrapper;
  var selfMessage = messageWrapper.uuid === uuid;
  return __jsx(Item, {
    className: selfMessage ? 'self' : '',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx(Indicator, {
    className: selfMessage ? 'self' : '',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), selfMessage ? 'ME: ' : '', messageWrapper.message);
};

/***/ })

})
//# sourceMappingURL=index.js.0c43b658e2a47d8760c9.hot-update.js.map