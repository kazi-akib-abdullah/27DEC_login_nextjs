/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./comps/Signup.js":
/*!*************************!*\
  !*** ./comps/Signup.js ***!
  \*************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);


;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var _comps_Nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../comps/Nav */ \"./comps/Nav.js\");\n/* harmony import */ var _comps_Signup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../comps/Signup */ \"./comps/Signup.js\");\n/* harmony import */ var _comps_Signup__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_comps_Signup__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nfunction Home() {\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n        color: \"black\",\n        backgroundColor: \"white\",\n        __source: {\n            fileName: \"/home/w3e47/Downloads/nextass-main/register/pages/index.js\",\n            lineNumber: 8,\n            columnNumber: 5\n        },\n        __self: this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Container, {\n            backgroundColor: \"white\",\n            maxW: \"container.xl\",\n            p: 0,\n            __source: {\n                fileName: \"/home/w3e47/Downloads/nextass-main/register/pages/index.js\",\n                lineNumber: 9,\n                columnNumber: 5\n            },\n            __self: this,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_comps_Nav__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    __source: {\n                        fileName: \"/home/w3e47/Downloads/nextass-main/register/pages/index.js\",\n                        lineNumber: 10,\n                        columnNumber: 7\n                    },\n                    __self: this\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Flex, {\n                    h: \"100vh\",\n                    alignItems: \"center\",\n                    justifyContent: \"center\",\n                    __source: {\n                        fileName: \"/home/w3e47/Downloads/nextass-main/register/pages/index.js\",\n                        lineNumber: 11,\n                        columnNumber: 7\n                    },\n                    __self: this,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                            pos: \"absolute\",\n                            w: \"100%\",\n                            zIndex: 0,\n                            backgroundImage: \"url('./image.png')\",\n                            backgroundPosition: \"center\",\n                            \"background-size\": \"cover\",\n                            backgroundRepeat: \"no-repeat\",\n                            height: \"100vh\",\n                            __source: {\n                                fileName: \"/home/w3e47/Downloads/nextass-main/register/pages/index.js\",\n                                lineNumber: 12,\n                                columnNumber: 9\n                            },\n                            __self: this\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_comps_Signup__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            zIndex: 1,\n                            __source: {\n                                fileName: \"/home/w3e47/Downloads/nextass-main/register/pages/index.js\",\n                                lineNumber: 20,\n                                columnNumber: 9\n                            },\n                            __self: this\n                        })\n                    ]\n                })\n            ]\n        })\n    }));\n};\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBZ0c7QUFDbEU7QUFDTTtBQUNVO0FBRS9CLFFBQVEsQ0FBQ1csSUFBSSxHQUFHLENBQUM7SUFDOUIsTUFBTSxzRUFDSFgsaURBQUc7UUFBQ1ksS0FBSyxFQUFDLENBQU87UUFBQ0MsZUFBZSxFQUFDLENBQU87Ozs7Ozs7d0ZBQ3pDWCx1REFBUztZQUFDVyxlQUFlLEVBQUMsQ0FBTztZQUFDQyxJQUFJLEVBQUMsQ0FBYztZQUFDQyxDQUFDLEVBQUUsQ0FBQzs7Ozs7Ozs7cUZBQ3hEUCxrREFBRzs7Ozs7Ozs7c0ZBQ0hMLGtEQUFJO29CQUFDYSxDQUFDLEVBQUMsQ0FBTztvQkFBQ0MsVUFBVSxFQUFDLENBQVE7b0JBQUNDLGNBQWMsRUFBQyxDQUFROzs7Ozs7Ozs2RkFDeERsQixpREFBRzs0QkFDRm1CLEdBQUcsRUFBQyxDQUFVOzRCQUFDQyxDQUFDLEVBQUMsQ0FBTTs0QkFBQ0MsTUFBTSxFQUFFLENBQUM7NEJBQ2pDQyxlQUFlLEVBQUMsQ0FBb0I7NEJBQ3BDQyxrQkFBa0IsRUFBQyxDQUFROzRCQUMzQkMsQ0FBZSxrQkFBQyxDQUFPOzRCQUN2QkMsZ0JBQWdCLEVBQUMsQ0FBVzs0QkFDNUJDLE1BQU0sRUFBQyxDQUFPOzs7Ozs7Ozs2RkFFZmpCLHNEQUFNOzRCQUNMWSxNQUFNLEVBQUUsQ0FBQzs7Ozs7Ozs7Ozs7OztBQU9uQixDQUFDO0tBdEJ1QlYsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJveCwgVGV4dCwgQ29udGFpbmVyLCBGbGV4LCBGb3JtTGFiZWwsIEhlYWRpbmcsIElucHV0LCBWU3RhY2sgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xuaW1wb3J0IE5hdiBmcm9tICcuLi9jb21wcy9OYXYnXG5pbXBvcnQgU2lnbnVwIGZyb20gJy4uL2NvbXBzL1NpZ251cCdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgcmV0dXJuIChcbiAgICA8Qm94IGNvbG9yPVwiYmxhY2tcIiBiYWNrZ3JvdW5kQ29sb3I9XCJ3aGl0ZVwiPlxuICAgIDxDb250YWluZXIgYmFja2dyb3VuZENvbG9yPVwid2hpdGVcIiBtYXhXPVwiY29udGFpbmVyLnhsXCIgcD17MH0+XG4gICAgICA8TmF2IC8+XG4gICAgICA8RmxleCBoPVwiMTAwdmhcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCIganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIj5cbiAgICAgICAgPEJveFxuICAgICAgICAgIHBvcz1cImFic29sdXRlXCIgdz1cIjEwMCVcIiB6SW5kZXg9ezB9XG4gICAgICAgICAgYmFja2dyb3VuZEltYWdlPVwidXJsKCcuL2ltYWdlLnBuZycpXCJcbiAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb249XCJjZW50ZXJcIlxuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZT1cImNvdmVyXCJcbiAgICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0PVwibm8tcmVwZWF0XCJcbiAgICAgICAgICBoZWlnaHQ9XCIxMDB2aFwiXG4gICAgICAgIC8+XG4gICAgICAgIDxTaWdudXAgICAgICAgICAgXG4gICAgICAgICAgekluZGV4PXsxfSAvPlxuXG5cbiAgICAgIDwvRmxleD5cbiAgICA8L0NvbnRhaW5lcj5cbiAgICA8L0JveD5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIkJveCIsIlRleHQiLCJDb250YWluZXIiLCJGbGV4IiwiRm9ybUxhYmVsIiwiSGVhZGluZyIsIklucHV0IiwiVlN0YWNrIiwiTmF2IiwiU2lnbnVwIiwic3R5bGVzIiwiSG9tZSIsImNvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwibWF4VyIsInAiLCJoIiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwicG9zIiwidyIsInpJbmRleCIsImJhY2tncm91bmRJbWFnZSIsImJhY2tncm91bmRQb3NpdGlvbiIsImJhY2tncm91bmQtc2l6ZSIsImJhY2tncm91bmRSZXBlYXQiLCJoZWlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});