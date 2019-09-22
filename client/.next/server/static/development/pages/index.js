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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
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
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! socket.io-client */ "socket.io-client");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var uuid_v1__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! uuid/v1 */ "uuid/v1");
/* harmony import */ var uuid_v1__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(uuid_v1__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _hooks_chat_messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/chat_messages */ "./hooks/chat_messages.js");
var _jsxFileName = "/Users/davidalecrim/Desktop/tech-talk/client/components/chat/chat_box.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const ChatBox = () => {
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
  const [messages, addMessage] = Object(_hooks_chat_messages__WEBPACK_IMPORTED_MODULE_5__["default"])([]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const socket = socket_io_client__WEBPACK_IMPORTED_MODULE_3___default.a.connect('http://localhost:8007');
    const uuidValue = uuid_v1__WEBPACK_IMPORTED_MODULE_4___default()();
    setSocket(socket);
    setUuid(uuidValue);
    socket.on('CHAT_MESSAGE_RECEIVED', chatMessageContent => {
      addMessage(chatMessageContent.message);

      if (chatMessageContent.uuid === uuidValue) {
        console.log('IT WAS ME');
      } else {
        console.log('NOT ME');
      }
    });
  }, []);

  const onDraftMessageChange = e => {
    setDraftMessage(e.target.value);
  };

  const sendMessage = () => {
    socket.emit('CHAT_MESSAGE_SENT', {
      uuid,
      message: draftMessage
    });
  };

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }, messages.map(msg => {
    return __jsx("li", {
      key: msg,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: undefined
    }, msg);
  })), __jsx("input", {
    name: "draft-message",
    value: draftMessage,
    onChange: onDraftMessageChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }), __jsx("button", {
    onClick: sendMessage,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }, "Send Message"));
};
ChatBox.propTypes = {};
ChatBox.defaultProps = {};

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

const Main = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.main``;

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
var _jsxFileName = "/Users/davidalecrim/Desktop/tech-talk/client/components/navbar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const NavbarWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.nav`
    display: flex;
    position: fixed;
    height: 80px;
    top:0;
    right: 0;
    left: 0;
    background-color: #fafafa;
    justify-content: center;
    align-items: center;
`;
const Navbar = () => {
  return __jsx(NavbarWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
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
    min-height: 100vh;
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
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components */ "./components/index.js");
var _jsxFileName = "/Users/davidalecrim/Desktop/tech-talk/client/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Index = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components__WEBPACK_IMPORTED_MODULE_1__["Navbar"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }), __jsx(_components__WEBPACK_IMPORTED_MODULE_1__["Main"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_1__["Section"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_1__["ChatBox"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/davidalecrim/Desktop/tech-talk/client/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

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