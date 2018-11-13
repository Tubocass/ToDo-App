/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/Models/Task.js":
/*!*******************************!*\
  !*** ./src/js/Models/Task.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return TaskList; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n/*\r\n    Task Model:\r\n    There is a Meta-List of Projects/Goals *I actually might make \"Projects\" its own model*\r\n    Tasks are either one-time or reccuring\r\n        Reoccurrence can be every X days/weeks/months\r\n    Reminders: \r\n        Light - One-time friendly reminder\r\n        Heavy - Extremely Insistent reminder that keeps popping up ubtil the task is done.\r\n    Due Date - A specific date and/or time can be set\r\n    Health - Basically a gauge of how well tasks are being handled\r\n        Fresh tasks, or ones with far off due dates, are green\r\n        Stale tasks, ones that have an approaching due date or haven't been cleared after X days (maybe 5), are yellow\r\n        Late Tasks, either past due date or not cleared after X days (maybe 10), are red\r\n    Priority:\r\n        ! - Has a set time for completion, i.e. an appointment\r\n        !! - Important, but not Urgent. Complete as soon as you can get to it\r\n        !!! - Relatively minor, usually quick personal maintence or daily habits, i.e. brush teeth, change kitty litter\r\n    Keywords/Labels - Not sure if I want to have this yet. Seems more like a large-scale projevt management thing.\r\n    \r\n*/\nvar TaskList =\n/*#__PURE__*/\nfunction () {\n  function TaskList() {\n    _classCallCheck(this, TaskList);\n\n    this.list = [];\n  }\n  /* \r\n  dueDate = \r\n  {\r\n      isNone: true,\r\n      date,//:Date();\r\n  }; */\n\n\n  _createClass(TaskList, [{\n    key: \"addTask\",\n    value: function addTask(id, taskStr, dueDate, priorityLevel, reminder) {\n      var task = {\n        id: id,\n        taskStr: taskStr,\n        dueDate: dueDate,\n        priorityLevel: priorityLevel,\n        reminder: reminder\n      };\n      this.list.push(task); //persist data in JSON\n\n      return task;\n    }\n  }, {\n    key: \"deleteTask\",\n    value: function deleteTask(id) {\n      var index = this.list.findIndex(function (el) {\n        return el.id === id;\n      });\n      this.list.splice(index, 1); //persist data in JSON\n    }\n  }, {\n    key: \"calcHealth\",\n    value: function calcHealth() {\n      /*\r\n      if dueDate.none\r\n          return calcAge()<5 ? green:yellow;\r\n      else if 0 < Date(today) - dueDate.Date < 2\r\n          return yellow\r\n      else if  Date(today) - dueDate.Date <= 0\r\n          return red;\r\n      */\n    }\n  }]);\n\n  return TaskList;\n}();\n\n\n\n//# sourceURL=webpack:///./src/js/Models/Task.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Models_Task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Models/Task */ \"./src/js/Models/Task.js\");\n\nvar tasksList = new _Models_Task__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\ntasksList.addTask(0, 'Pickup cat from school.', new Date(), 0, 'none');\nconsole.log('boobs');\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ })

/******/ });