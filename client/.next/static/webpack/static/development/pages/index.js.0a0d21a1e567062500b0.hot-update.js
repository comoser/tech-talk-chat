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

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    padding: 10px 5px;\n    font-family: sans-serif;\n    background-color: #cbcbcb;\n    &.right {\n      text-align: right;\n      background-color: blue;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var Item = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject());
var ChatItem = function ChatItem(_ref) {
  var uuid = _ref.uuid,
      messageWrapper = _ref.messageWrapper;
  var selfMessage = messageWrapper.uuid === uuid;
  return __jsx(Item, {
    className: selfMessage ? 'right' : '',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, selfMessage ? 'ME: ' : '', messageWrapper.message);
};

/***/ })

})
//# sourceMappingURL=index.js.0a0d21a1e567062500b0.hot-update.js.map