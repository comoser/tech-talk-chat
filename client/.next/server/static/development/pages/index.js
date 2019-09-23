module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/chat/chat_box.js":
/*!*************************************!*\
  !*** ./components/chat/chat_box.js ***!
  \*************************************/
/*! exports provided: ChatBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatBox", function() { return ChatBox; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! socket.io-client */ "socket.io-client");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var uuid_v1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid/v1 */ "uuid/v1");
/* harmony import */ var uuid_v1__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(uuid_v1__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hooks_chat_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/chat_messages */ "./hooks/chat_messages.js");
/* harmony import */ var _chat_item__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chat_item */ "./components/chat/chat_item.js");
/* harmony import */ var _chat_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chat_input */ "./components/chat/chat_input.js");
var _jsxFileName = "/app/client/components/chat/chat_box.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const ChatBoxWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div`
    position: fixed;
    width: 375px;
    height: 60vh;
    border-radius: 5px;
    border: 1px solid #a3a3a3;
    top: 100px;
    left: 50%;
    transform: translate(-50%, 0);
`;
const Scroller = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div`
  overflow: scroll;
  height: calc(100% - 40px);
`;
const ChatBox = () => {
  let scrollerRef = null;
  const {
    0: uuid,
    1: setUuid
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    0: socket,
    1: setSocket
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    0: draftMessage,
    1: setDraftMessage
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [messages, addMessage] = Object(_hooks_chat_messages__WEBPACK_IMPORTED_MODULE_4__["default"])([]);
  const {
    0: messageHistory,
    1: setMessageHistory
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);

  const fetchHistory = async () => {
    const response = await fetch(`${"http://localhost:8007"}/history`);
    const messagesJson = await response.json();
    setMessageHistory(messagesJson.response);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setSocket(socket_io_client__WEBPACK_IMPORTED_MODULE_1___default.a.connect("http://localhost:8007"));
    setUuid(uuid_v1__WEBPACK_IMPORTED_MODULE_2___default()());
    fetchHistory();
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (scrollerRef) scrollerRef.scrollTop = scrollerRef.scrollHeight;
  });

  if (socket) {
    socket.on('CHAT_MESSAGE_RECEIVED', chatMessageContent => {
      addMessage(chatMessageContent);
    });
  }

  const onDraftMessageChange = e => {
    setDraftMessage(e.target.value);
  };

  const sendMessage = () => {
    socket.emit('CHAT_MESSAGE_SENT', {
      uuid,
      message: draftMessage
    });

    if (scrollerRef) {
      scrollerRef.scrollTop = scrollerRef.scrollHeight;
      setDraftMessage('');
    }
  };

  const sendMessageByKeyboard = e => {
    if (e.which === 13) {
      socket.emit('CHAT_MESSAGE_SENT', {
        uuid,
        message: draftMessage
      });

      if (scrollerRef) {
        scrollerRef.scrollTop = scrollerRef.scrollHeight;
        setDraftMessage('');
      }
    }
  };

  const renderHistoryMessages = () => {
    return messageHistory.map((messageWrapper, index) => {
      return __jsx(_chat_item__WEBPACK_IMPORTED_MODULE_5__["ChatItem"], {
        key: String(index),
        uuid: uuid,
        messageWrapper: messageWrapper,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: undefined
      });
    });
  };

  const renderMessages = () => {
    return messages.map((messageWrapper, index) => {
      return __jsx(_chat_item__WEBPACK_IMPORTED_MODULE_5__["ChatItem"], {
        key: String(index),
        uuid: uuid,
        messageWrapper: messageWrapper,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: undefined
      });
    });
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(ChatBoxWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: undefined
  }, __jsx(Scroller, {
    ref: ref => scrollerRef = ref,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: undefined
  }, renderHistoryMessages(), renderMessages()), __jsx(_chat_input__WEBPACK_IMPORTED_MODULE_6__["ChatInput"], {
    draftMessage: draftMessage,
    onDraftMessageChange: onDraftMessageChange,
    sendMessage: sendMessage,
    sendMessageByKeyboard: sendMessageByKeyboard,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: undefined
  })));
};

/***/ }),

/***/ "./components/chat/chat_input.js":
/*!***************************************!*\
  !*** ./components/chat/chat_input.js ***!
  \***************************************/
/*! exports provided: ChatInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatInput", function() { return ChatInput; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/app/client/components/chat/chat_input.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  height: 40px;
  display: flex;
  flex-direction: row;
  border-top: 1px solid #a3a3a3;
`;
const BigInput = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.input`
  flex: 1;
  margin: 0;
  padding-left: 10px;
  font-size: 110%;
  border: 0 !important;
  border-bottom-left-radius: 5px;
  margin-left: 1px;
  margin-bottom: 1px;
`;
const SubmitButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button`
  width: 70px;
  background-color: #3832a8;
  color: #fff;
  font-size: 110%;
  border-bottom-right-radius: 5px;
`;
const ChatInput = ({
  draftMessage,
  onDraftMessageChange,
  sendMessageByKeyboard,
  sendMessage
}) => {
  return __jsx(Wrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }, __jsx(BigInput, {
    name: "draft-message",
    value: draftMessage,
    onChange: onDraftMessageChange,
    onKeyPress: sendMessageByKeyboard,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }), __jsx(SubmitButton, {
    onClick: sendMessage,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }, "Send"));
};

/***/ }),

/***/ "./components/chat/chat_item.js":
/*!**************************************!*\
  !*** ./components/chat/chat_item.js ***!
  \**************************************/
/*! exports provided: ChatItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatItem", function() { return ChatItem; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/app/client/components/chat/chat_item.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Item = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  position: relative;
    padding: 10px 16px;
    font-family: sans-serif;
    &.self {
      text-align: right;
    }
`;
const Indicator = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  position: absolute;
  top: 50%;
  height: 6px;
  width: 6px;
  border-radius: 50%;
  background-color: #969696;
  transform: translate(0, -50%);
  &.other {
    left: 5px;  
  }
  &.self {
    right: 5px;
    background-color: #5435ff;
  }
`;
const ChatItem = ({
  uuid,
  messageWrapper
}) => {
  const selfMessage = messageWrapper.uuid === uuid;
  return __jsx(Item, {
    className: selfMessage ? 'self' : '',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, __jsx(Indicator, {
    className: selfMessage ? 'self' : 'other',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }), selfMessage ? 'ME: ' : '', messageWrapper.message);
};

/***/ }),

/***/ "./components/index.js":
/*!*****************************!*\
  !*** ./components/index.js ***!
  \*****************************/
/*! exports provided: Navbar, Section, Main, ChatBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar */ "./components/navbar.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Navbar", function() { return _navbar__WEBPACK_IMPORTED_MODULE_0__["Navbar"]; });

/* harmony import */ var _section__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./section */ "./components/section.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Section", function() { return _section__WEBPACK_IMPORTED_MODULE_1__["Section"]; });

/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main */ "./components/main.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Main", function() { return _main__WEBPACK_IMPORTED_MODULE_2__["Main"]; });

/* harmony import */ var _chat_chat_box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chat/chat_box */ "./components/chat/chat_box.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChatBox", function() { return _chat_chat_box__WEBPACK_IMPORTED_MODULE_3__["ChatBox"]; });






/***/ }),

/***/ "./components/main.js":
/*!****************************!*\
  !*** ./components/main.js ***!
  \****************************/
/*! exports provided: Main */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Main", function() { return Main; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Main = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.main`
    padding-top: 80px;
`;

/***/ }),

/***/ "./components/navbar.js":
/*!******************************!*\
  !*** ./components/navbar.js ***!
  \******************************/
/*! exports provided: Navbar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Navbar", function() { return Navbar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/app/client/components/navbar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const NavbarWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.nav`
    display: flex;
    position: fixed;
    height: 80px;
    top:0;
    right: 0;
    left: 0;
    background-color: #3832a8;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-family: sans-serif;
`;
const Navbar = () => {
  return __jsx(NavbarWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, "Chat Demo"));
};

/***/ }),

/***/ "./components/section.js":
/*!*******************************!*\
  !*** ./components/section.js ***!
  \*******************************/
/*! exports provided: Section */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Section", function() { return Section; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Section = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.section`
    min-width: 100vw;
    margin-top: 80px;
    padding: 60px;
`;

/***/ }),

/***/ "./hooks/chat_messages.js":
/*!********************************!*\
  !*** ./hooks/chat_messages.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function useChatMessages(initialState) {
  const {
    0: messages,
    1: setMessages
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialState);

  function addMessage(message) {
    setMessages([...messages, message]);
  }

  return [messages, addMessage];
}

/* harmony default export */ __webpack_exports__["default"] = (useChatMessages);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dotenv */ "dotenv");
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components */ "./components/index.js");
var _jsxFileName = "/app/client/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



dotenv__WEBPACK_IMPORTED_MODULE_1___default.a.config();

const Index = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components__WEBPACK_IMPORTED_MODULE_2__["Navbar"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }), __jsx(_components__WEBPACK_IMPORTED_MODULE_2__["Main"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_2__["Section"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_2__["ChatBox"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /app/client/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("dotenv");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "socket.io-client":
/*!***********************************!*\
  !*** external "socket.io-client" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("socket.io-client");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "uuid/v1":
/*!**************************!*\
  !*** external "uuid/v1" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("uuid/v1");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map