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
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var uuid_v1__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! uuid/v1 */ "./node_modules/uuid/v1.js");
/* harmony import */ var uuid_v1__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(uuid_v1__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _hooks_chat_messages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/chat_messages */ "./hooks/chat_messages.js");



var _jsxFileName = "/Users/davidalecrim/Desktop/tech-talk/client/components/chat/chat_box.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;




var ChatBox = function ChatBox() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      uuid = _useState[0],
      setUuid = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      socket = _useState2[0],
      setSocket = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      draftMessage = _useState3[0],
      setDraftMessage = _useState3[1];

  var _useChatMessages = Object(_hooks_chat_messages__WEBPACK_IMPORTED_MODULE_6__["default"])([]),
      _useChatMessages2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useChatMessages, 2),
      messages = _useChatMessages2[0],
      addMessage = _useChatMessages2[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      messageHistory = _useState4[0],
      setMessageHistory = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(
  /*#__PURE__*/
  Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var response, messagesJson;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            setSocket(socket_io_client__WEBPACK_IMPORTED_MODULE_4___default.a.connect("http://localhost:8007"));
            setUuid(uuid_v1__WEBPACK_IMPORTED_MODULE_5___default()());
            _context.next = 4;
            return fetch("".concat("http://localhost:8007", "/history"));

          case 4:
            response = _context.sent;
            _context.next = 7;
            return response.json();

          case 7:
            messagesJson = _context.sent;
            setMessageHistory(messagesJson.response);

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })), []);

  if (socket) {
    socket.on('CHAT_MESSAGE_RECEIVED', function (chatMessageContent) {
      addMessage(chatMessageContent);
    });
  }

  var onDraftMessageChange = function onDraftMessageChange(e) {
    setDraftMessage(e.target.value);
  };

  var sendMessage = function sendMessage() {
    socket.emit('CHAT_MESSAGE_SENT', {
      uuid: uuid,
      message: draftMessage
    });
  };

  var sendMessageByKeyboard = function sendMessageByKeyboard(e) {
    if (e.which === 13) {
      socket.emit('CHAT_MESSAGE_SENT', {
        uuid: uuid,
        message: draftMessage
      });
    }
  };

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, messageHistory.map(function (item) {
    return __jsx("li", {
      key: item.message,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, item.uuid === uuid ? 'ME: ' : '', item.message);
  }), messages.map(function (messageWrapper) {
    return __jsx("li", {
      key: messageWrapper.message,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, messageWrapper.uuid === uuid ? 'ME: ' : '', messageWrapper.message);
  })), __jsx("input", {
    name: "draft-message",
    value: draftMessage,
    onChange: onDraftMessageChange,
    onKeyPress: sendMessageByKeyboard,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }), __jsx("button", {
    onClick: sendMessage,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, "Send Message"));
};
ChatBox.propTypes = {};
ChatBox.defaultProps = {};

/***/ })

})
//# sourceMappingURL=index.js.8c10a75e0becf65eaa2f.hot-update.js.map