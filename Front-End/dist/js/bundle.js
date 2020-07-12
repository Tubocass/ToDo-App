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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Task; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Task = function Task(id, desc, date) {\n  _classCallCheck(this, Task);\n\n  this.id = id;\n  this.description = desc;\n  this.dueDate = date;\n};\n\n\n\n//# sourceURL=webpack:///./src/js/Models/Task.js?");

/***/ }),

/***/ "./src/js/Models/project.js":
/*!**********************************!*\
  !*** ./src/js/Models/project.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Project; });\n/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Task */ \"./src/js/Models/Task.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n/*\r\n    Task Model:\r\n    There is a Meta-List of Projects/Goals *I actually might make \"Projects\" its own model*\r\n    Tasks are either one-time or reccuring\r\n        Reoccurrence can be every X days/weeks/months\r\n    Reminders: \r\n        Light - One-time friendly reminder\r\n        Heavy - Extremely Insistent reminder that keeps popping up ubtil the task is done.\r\n    Due Date - A specific date and/or time can be set\r\n    Health - Basically a gauge of how well tasks are being handled\r\n        Fresh tasks, or ones with far off due dates, are green\r\n        Stale tasks, ones that have an approaching due date or haven't been cleared after X days (maybe 5), are yellow\r\n        Late Tasks, either past due date or not cleared after X days (maybe 10), are red\r\n    Priority:\r\n        ! - Has a set time for completion, i.e. an appointment\r\n        !! - Important, but not Urgent. Complete as soon as you can get to it\r\n        !!! - Relatively minor, usually quick personal maintence or daily habits, i.e. brush teeth, change kitty litter\r\n        * might put these symbols in reverse order\r\n    Keywords/Labels - Not sure if I want to have this yet. Seems more like a large-scale projevt management thing.\r\n    \r\n*/\n\n\nvar Project = /*#__PURE__*/function () {\n  function Project(title, desc, date) {\n    _classCallCheck(this, Project);\n\n    this.title = title;\n    this.description = desc;\n    this.dueDate = date;\n    this.list = [];\n    this.count = 0;\n  }\n\n  _createClass(Project, [{\n    key: \"addTask\",\n    value: function addTask(taskStr) {\n      var dueDate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'none';\n      var id = this.count++; //generate an id\n\n      var task = new _Task__WEBPACK_IMPORTED_MODULE_0__[\"default\"](id, taskStr, dueDate);\n      this.list.push(task); //persist data in JSON\n\n      return task;\n    }\n  }, {\n    key: \"deleteTask\",\n    value: function deleteTask(id) {\n      var index = this.list.findIndex(function (el) {\n        return el.id === id;\n      });\n      console.log(index);\n      this.list.splice(index, 1); //persist data in JSON\n    }\n  }, {\n    key: \"calcHealth\",\n    value: function calcHealth() {\n      /*\r\n      if dueDate.none\r\n          return calcAge()<5 ? green:yellow;\r\n      else if 0 < (Date(today) - dueDate.Date) < 2\r\n          return yellow\r\n      else if  Date(today) - dueDate.Date <= 0\r\n          return red;\r\n      */\n    }\n  }]);\n\n  return Project;\n}();\n\n\n\n//# sourceURL=webpack:///./src/js/Models/project.js?");

/***/ }),

/***/ "./src/js/Views/projectView.js":
/*!*************************************!*\
  !*** ./src/js/Views/projectView.js ***!
  \*************************************/
/*! exports provided: SetProject, RenderList, RenderProject, AddTask */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SetProject\", function() { return SetProject; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RenderList\", function() { return RenderList; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RenderProject\", function() { return RenderProject; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AddTask\", function() { return AddTask; });\n/* harmony import */ var _reference__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reference */ \"./src/js/Views/reference.js\");\n/* harmony import */ var _taskView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskView */ \"./src/js/Views/taskView.js\");\n/* harmony import */ var _Models_project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Models/project */ \"./src/js/Models/project.js\");\n\n\n\nfunction SetProject(project) {\n  this.project = project;\n}\nfunction RenderList() {\n  _reference__WEBPACK_IMPORTED_MODULE_0__[\"keys\"].listView.innerHTML = '';\n  this.project.list.forEach(function (item) {\n    var li = document.createElement('li');\n    li.innerHTML = \"<input type =\\\"checkbox\\\">- \".concat(item.description, \" - Due: \").concat(item.dueDate);\n    li.addEventListener(\"click\", function () {\n      console.log('click');\n    });\n    _reference__WEBPACK_IMPORTED_MODULE_0__[\"keys\"].listView.appendChild(li);\n  });\n}\nfunction RenderProject() {\n  _reference__WEBPACK_IMPORTED_MODULE_0__[\"keys\"].projectView.innerHTML = '';\n  var markup = \"\\n       <h4> <li>\\n            \".concat(this.project.title, \" - \").concat(this.project.description, \" - Due: \").concat(this.project.dueDate, \"\\n        </li> </h4>\\n    \");\n  _reference__WEBPACK_IMPORTED_MODULE_0__[\"keys\"].projectView.insertAdjacentHTML('afterbegin', markup);\n  this.RenderList();\n}\n;\nfunction AddTask() {\n  var _this = this;\n\n  _reference__WEBPACK_IMPORTED_MODULE_0__[\"keys\"].inputModal.innerHTML = '';\n  var taskString = document.createElement('input');\n  taskString.setAttribute(\"type\", \"text\");\n  var taskDate = document.createElement('input');\n  taskDate.setAttribute(\"type\", \"date\");\n  var submit = document.createElement('button');\n  submit.innerHTML = \"Submit\";\n  submit.addEventListener(\"click\", function () {\n    console.log('click');\n\n    _this.project.addTask(taskString.value, taskDate.value);\n\n    taskString.value = '';\n    taskDate.value = '';\n    RenderProject();\n  });\n  _reference__WEBPACK_IMPORTED_MODULE_0__[\"keys\"].inputModal.appendChild(taskString);\n  _reference__WEBPACK_IMPORTED_MODULE_0__[\"keys\"].inputModal.appendChild(taskDate);\n  _reference__WEBPACK_IMPORTED_MODULE_0__[\"keys\"].inputModal.appendChild(submit);\n} // keys.deleteButton.addEventListener(\"click\", () =>{\n//    for(let i =0; i< keys.listView.children.length; i++){\n//        console.log(i);\n//        if(keys.listView.children[i].firstChild.checked)\n//        {\n//            this.project.deleteTask(i)\n//        }\n//    };\n// });\n\n//# sourceURL=webpack:///./src/js/Views/projectView.js?");

/***/ }),

/***/ "./src/js/Views/reference.js":
/*!***********************************!*\
  !*** ./src/js/Views/reference.js ***!
  \***********************************/
/*! exports provided: keys */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"keys\", function() { return keys; });\nvar keys = {\n  taskInput: document.getElementById('InputField'),\n  taskDate: document.getElementById('DatePicker'),\n  taskTime: document.getElementById('TimePicker'),\n  submitButton: document.getElementById('Submit'),\n  createButton: document.getElementById('newTaskBtn'),\n  deleteButton: document.getElementById('deleteTaskBtn'),\n  listView: document.getElementById(\"listView\"),\n  projectView: document.getElementById(\"projectView\"),\n  inputModal: document.getElementById(\"taskModal\")\n};\n\n//# sourceURL=webpack:///./src/js/Views/reference.js?");

/***/ }),

/***/ "./src/js/Views/taskView.js":
/*!**********************************!*\
  !*** ./src/js/Views/taskView.js ***!
  \**********************************/
/*! exports provided: renderTask */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderTask\", function() { return renderTask; });\nfunction renderTask(item) {\n  var markup = \"\\n        <li>\\n            <input type =\\\"checkbox\\\">- \".concat(item.description, \" - Due: \").concat(item.dueDate, \"\\n        </li>\\n    \");\n  return markup;\n}\n;\n\n//# sourceURL=webpack:///./src/js/Views/taskView.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Models_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Models/project */ \"./src/js/Models/project.js\");\n/* harmony import */ var _Views_reference__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Views/reference */ \"./src/js/Views/reference.js\");\n/* harmony import */ var _Views_projectView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Views/projectView */ \"./src/js/Views/projectView.js\");\n\n\n\n/*\r\n\r\nRender projects\r\n\r\nprojectName - description\r\ndueDate\r\n    tasks  -- Add New\r\n    .\r\n    .\r\n    .\r\nprojectName - description\r\ndueDate\r\n    tasks  -- Add New\r\n    .\r\n    .\r\n    .\r\n\r\n\r\n*/\n\nvar projects = [];\nvar tasksList = new _Models_project__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"Project 1\", \"Some project\", new Date().toLocaleDateString(\"en-US\"));\ntasksList.addTask('Pickup cat from school.', new Date().toLocaleDateString(\"en-US\"));\n_Views_projectView__WEBPACK_IMPORTED_MODULE_2__[\"SetProject\"](tasksList);\n_Views_projectView__WEBPACK_IMPORTED_MODULE_2__[\"RenderProject\"](); // keys.submitButton.addEventListener('click',e =>{\n//     e.preventDefault();\n//     tasksList.addTask(keys.taskInput.value, new Date(keys.taskDate.value).toLocaleDateString(\"en-US\"));\n//     keys.taskInput.value = '';\n//     keys.taskDate.value = '';\n//     projectView.renderProject();\n// });\n\n_Views_reference__WEBPACK_IMPORTED_MODULE_1__[\"keys\"].createButton.addEventListener('click', function (e) {\n  e.preventDefault();\n  _Views_projectView__WEBPACK_IMPORTED_MODULE_2__[\"AddTask\"]();\n});\n_Views_reference__WEBPACK_IMPORTED_MODULE_1__[\"keys\"].deleteButton.addEventListener(\"click\", function () {\n  for (var i = 0; i < _Views_reference__WEBPACK_IMPORTED_MODULE_1__[\"keys\"].listView.children.length; i++) {\n    console.log(i);\n\n    if (_Views_reference__WEBPACK_IMPORTED_MODULE_1__[\"keys\"].listView.children[i].firstChild.checked) {\n      tasksList.deleteTask(i);\n    }\n  }\n\n  ;\n  _Views_projectView__WEBPACK_IMPORTED_MODULE_2__[\"RenderProject\"]();\n}); // console.log(tasksList);\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ })

/******/ });