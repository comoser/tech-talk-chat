webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/chat/chat_box.js":
/*!*************************************!*\
  !*** ./components/chat/chat_box.js ***!
  \*************************************/
/*! exports provided: ChatBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatBox", function() { return ChatBox; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var uuid_v1__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! uuid/v1 */ "./node_modules/uuid/v1.js");
/* harmony import */ var uuid_v1__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(uuid_v1__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "/Users/davidalecrim/Desktop/tech-talk/client/components/chat/chat_box.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var ChatBox = function ChatBox() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      uuid = _useState[0],
      setUuid = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      socket = _useState2[0],
      setSocket = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      message = _useState3[0],
      setMessage = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      messages = _useState4[0],
      setMessages = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var socket = socket_io_client__WEBPACK_IMPORTED_MODULE_4___default.a.connect('http://localhost:8007');
    var uuidValue = uuid_v1__WEBPACK_IMPORTED_MODULE_5___default()();
    setSocket(socket);
    setUuid(uuidValue);
    socket.on('CHAT_MESSAGE_RECEIVED', function (chatMessageContent) {
      console.log(chatMessageContent);
      setMessages([].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(messages), [chatMessageContent.message]));
      console.log(chatMessageContent.uuid, uuidValue);

      if (chatMessageContent.uuid === uuidValue) {
        console.log('IT WAS ME');
      } else {
        console.log('NOT ME');
      }
    });
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    console.log(messages);
  });

  var onMessageChange = function onMessageChange(e) {
    setMessage(e.target.value);
  };

  var sendMessage = function sendMessage() {
    socket.emit('CHAT_MESSAGE_SENT', {
      uuid: uuid,
      message: message
    });
  };

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, messages.map(function (msg) {
    return __jsx("li", {
      key: msg,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, msg);
  })), __jsx("input", {
    name: "chat-message",
    value: message,
    onChange: onMessageChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }), __jsx("button", {
    onClick: sendMessage,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, "Send Message"));
};
ChatBox.propTypes = {};
ChatBox.defaultProps = {};

/***/ })

})
//# sourceMappingURL=index.js.483e58a6b8ecad0dfaf3.hot-update.js.map