webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/chat/chat_input.js":
/*!***************************************!*\
  !*** ./components/chat/chat_input.js ***!
  \***************************************/
/*! exports provided: ChatInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatInput", function() { return ChatInput; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _jsxFileName = "/app/client/components/chat/chat_input.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 70px;\n  background-color: #3832a8;\n  color: #fff;\n  font-size: 110%;\n  border-bottom-right-radius: 5px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  flex: 1;\n  margin: 0;\n  padding-left: 10px;\n  font-size: 110%;\n  border: 0 !important;\n  border-bottom-left-radius: 5px;\n  margin-left: 1px;\n  margin-bottom: 1px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  height: 40px;\n  display: flex;\n  flex-direction: row;\n  border-top: 1px solid #a3a3a3;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject());
var BigInput = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].input(_templateObject2());
var SubmitButton = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].button(_templateObject3());
var ChatInput = function ChatInput(_ref) {
  var draftMessage = _ref.draftMessage,
      onDraftMessageChange = _ref.onDraftMessageChange,
      sendMessageByKeyboard = _ref.sendMessageByKeyboard,
      sendMessage = _ref.sendMessage;
  return __jsx(Wrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx(BigInput, {
    name: "draft-message",
    value: draftMessage,
    onChange: onDraftMessageChange,
    onKeyPress: sendMessageByKeyboard,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }), __jsx(SubmitButton, {
    onClick: sendMessage,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "Send"));
};

/***/ })

})
//# sourceMappingURL=index.js.d170057f95816cebdd2c.hot-update.js.map