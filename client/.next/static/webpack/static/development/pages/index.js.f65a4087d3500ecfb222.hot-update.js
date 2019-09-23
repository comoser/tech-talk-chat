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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var uuid_v1__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! uuid/v1 */ "./node_modules/uuid/v1.js");
/* harmony import */ var uuid_v1__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(uuid_v1__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _hooks_chat_messages__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../hooks/chat_messages */ "./hooks/chat_messages.js");
/* harmony import */ var _chat_item__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./chat_item */ "./components/chat/chat_item.js");
/* harmony import */ var _chat_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./chat_input */ "./components/chat/chat_input.js");




var _jsxFileName = "/app/client/components/chat/chat_box.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__["default"])(["\n  overflow: scroll;\n  height: calc(100% - 40px);\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__["default"])(["\n    position: fixed;\n    width: 375px;\n    height: 60vh;\n    border-radius: 5px;\n    border: 1px solid #a3a3a3;\n    top: 100px;\n    left: 50%;\n    transform: translate(-50%, 0);\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}








var ChatBoxWrapper = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div(_templateObject());
var Scroller = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div(_templateObject2());
var ChatBox = function ChatBox() {
  var scrollerRef = null;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(null),
      uuid = _useState[0],
      setUuid = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(null),
      socket = _useState2[0],
      setSocket = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      draftMessage = _useState3[0],
      setDraftMessage = _useState3[1];

  var _useChatMessages = Object(_hooks_chat_messages__WEBPACK_IMPORTED_MODULE_8__["default"])([]),
      _useChatMessages2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useChatMessages, 2),
      messages = _useChatMessages2[0],
      addMessage = _useChatMessages2[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]),
      messageHistory = _useState4[0],
      setMessageHistory = _useState4[1];

  var fetchHistory =
  /*#__PURE__*/
  function () {
    var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var response, messagesJson;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return fetch("".concat("http://localhost:8007", "/history"));

            case 2:
              response = _context.sent;
              _context.next = 5;
              return response.json();

            case 5:
              messagesJson = _context.sent;
              setMessageHistory(messagesJson.response);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function fetchHistory() {
      return _ref.apply(this, arguments);
    };
  }();

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    setSocket(socket_io_client__WEBPACK_IMPORTED_MODULE_5___default.a.connect("http://localhost:8007"));
    setUuid(uuid_v1__WEBPACK_IMPORTED_MODULE_6___default()());
    fetchHistory();
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    if (scrollerRef) scrollerRef.scrollTop = scrollerRef.scrollHeight;
  });

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

    if (scrollerRef) {
      scrollerRef.scrollTop = scrollerRef.scrollHeight;
      setDraftMessage('');
    }
  };

  var sendMessageByKeyboard = function sendMessageByKeyboard(e) {
    if (e.which === 13) {
      socket.emit('CHAT_MESSAGE_SENT', {
        uuid: uuid,
        message: draftMessage
      });

      if (scrollerRef) {
        scrollerRef.scrollTop = scrollerRef.scrollHeight;
        setDraftMessage('');
      }
    }
  };

  var renderHistoryMessages = function renderHistoryMessages() {
    return messageHistory.map(function (messageWrapper, index) {
      return __jsx(_chat_item__WEBPACK_IMPORTED_MODULE_9__["ChatItem"], {
        key: String(index),
        uuid: uuid,
        messageWrapper: messageWrapper,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      });
    });
  };

  var renderMessages = function renderMessages() {
    return messages.map(function (messageWrapper, index) {
      return __jsx(_chat_item__WEBPACK_IMPORTED_MODULE_9__["ChatItem"], {
        key: String(index),
        uuid: uuid,
        messageWrapper: messageWrapper,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      });
    });
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx(ChatBoxWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, __jsx(Scroller, {
    ref: function ref(_ref2) {
      return scrollerRef = _ref2;
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, renderHistoryMessages(), renderMessages()), __jsx(_chat_input__WEBPACK_IMPORTED_MODULE_10__["ChatInput"], {
    draftMessage: draftMessage,
    onDraftMessageChange: onDraftMessageChange,
    sendMessage: sendMessage,
    sendMessageByKeyboard: sendMessageByKeyboard,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  })));
};

/***/ })

})
//# sourceMappingURL=index.js.f65a4087d3500ecfb222.hot-update.js.map