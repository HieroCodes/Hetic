"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/frontend/wifi_NYC/page",{

/***/ "(app-pages-browser)/./src/app/frontend/component/Navbar.tsx":
/*!***********************************************!*\
  !*** ./src/app/frontend/component/Navbar.tsx ***!
  \***********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Navbar)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_navbar_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/navbar.css */ \"(app-pages-browser)/./src/app/frontend/styles/navbar.css\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"(app-pages-browser)/./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"(app-pages-browser)/./node_modules/@fortawesome/free-solid-svg-icons/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Navbar(param) {\n    let { style } = param;\n    _s();\n    const [active, setActive] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"Dashboard\");\n    const [horiStyle, setHoriStyle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const handleActive = (item, element)=>{\n        setActive(item);\n        const rect = element.getBoundingClientRect();\n        setHoriStyle({\n            left: \"\".concat(element.offsetLeft, \"px\"),\n            width: \"\".concat(rect.width, \"px\"),\n            height: \"\".concat(rect.height, \"px\")\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"Navbar.useEffect\": ()=>{\n            const activeItem = document.querySelector(\".nav-item.active\");\n            if (activeItem) {\n                const rect = activeItem.getBoundingClientRect();\n                setHoriStyle({\n                    left: \"\".concat(activeItem.offsetLeft, \"px\"),\n                    width: \"\".concat(rect.width, \"px\"),\n                    height: \"\".concat(rect.height, \"px\")\n                });\n            }\n        }\n    }[\"Navbar.useEffect\"], []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"navbar navbar-expand-custom navbar-mainbg\",\n        style: style,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container-fluid d-flex justify-content-between align-items-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    className: \"navbar-brand navbar-logo\",\n                    href: \"#\",\n                    children: \"NYC | DATA\"\n                }, void 0, false, {\n                    fileName: \"/Volumes/SonnaLabs/Hetic/data-tech-next/src/app/frontend/component/Navbar.tsx\",\n                    lineNumber: 49,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"navbar-toggler\",\n                    type: \"button\",\n                    \"data-bs-toggle\": \"collapse\",\n                    \"data-bs-target\": \"#navbarSupportedContent\",\n                    \"aria-controls\": \"navbarSupportedContent\",\n                    \"aria-expanded\": \"false\",\n                    \"aria-label\": \"Toggle navigation\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {\n                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faBars,\n                        className: \"text-white\"\n                    }, void 0, false, {\n                        fileName: \"/Volumes/SonnaLabs/Hetic/data-tech-next/src/app/frontend/component/Navbar.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Volumes/SonnaLabs/Hetic/data-tech-next/src/app/frontend/component/Navbar.tsx\",\n                    lineNumber: 52,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"collapse navbar-collapse\",\n                    id: \"navbarSupportedContent\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \"navbar-nav ms-auto d-flex align-items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"hori-selector\",\n                                style: horiStyle,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"left\"\n                                    }, void 0, false, {\n                                        fileName: \"/Volumes/SonnaLabs/Hetic/data-tech-next/src/app/frontend/component/Navbar.tsx\",\n                                        lineNumber: 65,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"right\"\n                                    }, void 0, false, {\n                                        fileName: \"/Volumes/SonnaLabs/Hetic/data-tech-next/src/app/frontend/component/Navbar.tsx\",\n                                        lineNumber: 66,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Volumes/SonnaLabs/Hetic/data-tech-next/src/app/frontend/component/Navbar.tsx\",\n                                lineNumber: 64,\n                                columnNumber: 7\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"nav-item \".concat(active === \"Dashboard\" ? \"active\" : \"\"),\n                                onClick: (e)=>handleActive(\"Dashboard\", e.currentTarget),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    className: \"nav-link\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {\n                                            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faTachometerAlt\n                                        }, void 0, false, {\n                                            fileName: \"/Volumes/SonnaLabs/Hetic/data-tech-next/src/app/frontend/component/Navbar.tsx\",\n                                            lineNumber: 73,\n                                            columnNumber: 17\n                                        }, this),\n                                        \" Dashboard\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Volumes/SonnaLabs/Hetic/data-tech-next/src/app/frontend/component/Navbar.tsx\",\n                                    lineNumber: 72,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Volumes/SonnaLabs/Hetic/data-tech-next/src/app/frontend/component/Navbar.tsx\",\n                                lineNumber: 68,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"nav-item \".concat(active === \"Address Book\" ? \"active\" : \"\"),\n                                onClick: (e)=>handleActive(\"Address Book\", e.currentTarget),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    className: \"nav-link\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {\n                                            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faAddressBook\n                                        }, void 0, false, {\n                                            fileName: \"/Volumes/SonnaLabs/Hetic/data-tech-next/src/app/frontend/component/Navbar.tsx\",\n                                            lineNumber: 81,\n                                            columnNumber: 17\n                                        }, this),\n                                        \" Address Book\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Volumes/SonnaLabs/Hetic/data-tech-next/src/app/frontend/component/Navbar.tsx\",\n                                    lineNumber: 80,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Volumes/SonnaLabs/Hetic/data-tech-next/src/app/frontend/component/Navbar.tsx\",\n                                lineNumber: 76,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"nav-item \".concat(active === \"Components\" ? \"active\" : \"\"),\n                                onClick: (e)=>handleActive(\"Components\", e.currentTarget),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    className: \"nav-link\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {\n                                            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faChartGantt\n                                        }, void 0, false, {\n                                            fileName: \"/Volumes/SonnaLabs/Hetic/data-tech-next/src/app/frontend/component/Navbar.tsx\",\n                                            lineNumber: 89,\n                                            columnNumber: 17\n                                        }, this),\n                                        \" Statistics\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Volumes/SonnaLabs/Hetic/data-tech-next/src/app/frontend/component/Navbar.tsx\",\n                                    lineNumber: 88,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Volumes/SonnaLabs/Hetic/data-tech-next/src/app/frontend/component/Navbar.tsx\",\n                                lineNumber: 84,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Volumes/SonnaLabs/Hetic/data-tech-next/src/app/frontend/component/Navbar.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 7\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Volumes/SonnaLabs/Hetic/data-tech-next/src/app/frontend/component/Navbar.tsx\",\n                    lineNumber: 62,\n                    columnNumber: 7\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Volumes/SonnaLabs/Hetic/data-tech-next/src/app/frontend/component/Navbar.tsx\",\n            lineNumber: 48,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Volumes/SonnaLabs/Hetic/data-tech-next/src/app/frontend/component/Navbar.tsx\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, this);\n}\n_s(Navbar, \"myybX/KE6f2r/AlwEAqf2NquJr0=\");\n_c = Navbar;\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZnJvbnRlbmQvY29tcG9uZW50L05hdmJhci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBRW1EO0FBQ3JCO0FBQ21DO0FBT3RCO0FBTzVCLFNBQVNRLE9BQU8sS0FBc0I7UUFBdEIsRUFBRUMsS0FBSyxFQUFlLEdBQXRCOztJQUM3QixNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR1YsK0NBQVFBLENBQUM7SUFDckMsTUFBTSxDQUFDVyxXQUFXQyxhQUFhLEdBQUdaLCtDQUFRQSxDQUFDLENBQUM7SUFFNUMsTUFBTWEsZUFBZSxDQUFDQyxNQUFjQztRQUNsQ0wsVUFBVUk7UUFDVixNQUFNRSxPQUFPRCxRQUFRRSxxQkFBcUI7UUFDMUNMLGFBQWE7WUFDWE0sTUFBTSxHQUFzQixPQUFuQkgsUUFBUUksVUFBVSxFQUFDO1lBQzVCQyxPQUFPLEdBQWMsT0FBWEosS0FBS0ksS0FBSyxFQUFDO1lBQ3JCQyxRQUFRLEdBQWUsT0FBWkwsS0FBS0ssTUFBTSxFQUFDO1FBQ3pCO0lBQ0Y7SUFFQXBCLGdEQUFTQTs0QkFBQztZQUNSLE1BQU1xQixhQUFhQyxTQUFTQyxhQUFhLENBQUM7WUFDMUMsSUFBSUYsWUFBWTtnQkFDZCxNQUFNTixPQUFPLFdBQTRCQyxxQkFBcUI7Z0JBQzlETCxhQUFhO29CQUNYTSxNQUFNLEdBQTBDLE9BQXZDLFdBQTRCQyxVQUFVLEVBQUM7b0JBQ2hEQyxPQUFPLEdBQWMsT0FBWEosS0FBS0ksS0FBSyxFQUFDO29CQUNyQkMsUUFBUSxHQUFlLE9BQVpMLEtBQUtLLE1BQU0sRUFBQztnQkFDekI7WUFDRjtRQUNGOzJCQUFHLEVBQUU7SUFHTCxxQkFDRSw4REFBQ0k7UUFBSUMsV0FBVTtRQUE0Q2xCLE9BQU9BO2tCQUNoRSw0RUFBQ21CO1lBQUlELFdBQVU7OzhCQUNmLDhEQUFDRTtvQkFBRUYsV0FBVTtvQkFBMkJHLE1BQUs7OEJBQUk7Ozs7Ozs4QkFHakQsOERBQUNDO29CQUNDSixXQUFVO29CQUNWSyxNQUFLO29CQUNMQyxrQkFBZTtvQkFDZkMsa0JBQWU7b0JBQ2ZDLGlCQUFjO29CQUNkQyxpQkFBYztvQkFDZEMsY0FBVzs4QkFDWCw0RUFBQ2xDLDJFQUFlQTt3QkFBQ21DLE1BQU1sQyxxRUFBTUE7d0JBQUV1QixXQUFVOzs7Ozs7Ozs7Ozs4QkFFM0MsOERBQUNDO29CQUFJRCxXQUFVO29CQUEyQlksSUFBRzs4QkFDN0MsNEVBQUNDO3dCQUFHYixXQUFVOzswQ0FDZCw4REFBQ0M7Z0NBQUlELFdBQVU7Z0NBQWdCbEIsT0FBT0c7O2tEQUM5Qiw4REFBQ2dCO3dDQUFJRCxXQUFVOzs7Ozs7a0RBQ2YsOERBQUNDO3dDQUFJRCxXQUFVOzs7Ozs7Ozs7Ozs7MENBRWpCLDhEQUFDYztnQ0FDQ2QsV0FBVyxZQUFtRCxPQUF2Q2pCLFdBQVcsY0FBYyxXQUFXO2dDQUMzRGdDLFNBQVMsQ0FBQ0MsSUFBTTdCLGFBQWEsYUFBYTZCLEVBQUVDLGFBQWE7MENBRXpELDRFQUFDZjtvQ0FBRUYsV0FBVTs7c0RBQ1gsOERBQUN4QiwyRUFBZUE7NENBQUNtQyxNQUFNakMsOEVBQWVBOzs7Ozs7d0NBQUk7Ozs7Ozs7Ozs7OzswQ0FHOUMsOERBQUNvQztnQ0FDQ2QsV0FBVyxZQUFzRCxPQUExQ2pCLFdBQVcsaUJBQWlCLFdBQVc7Z0NBQzlEZ0MsU0FBUyxDQUFDQyxJQUFNN0IsYUFBYSxnQkFBZ0I2QixFQUFFQyxhQUFhOzBDQUU1RCw0RUFBQ2Y7b0NBQUVGLFdBQVU7O3NEQUNYLDhEQUFDeEIsMkVBQWVBOzRDQUFDbUMsTUFBTWhDLDRFQUFhQTs7Ozs7O3dDQUFJOzs7Ozs7Ozs7Ozs7MENBRzVDLDhEQUFDbUM7Z0NBQ0NkLFdBQVcsWUFBb0QsT0FBeENqQixXQUFXLGVBQWUsV0FBVztnQ0FDNURnQyxTQUFTLENBQUNDLElBQU03QixhQUFhLGNBQWM2QixFQUFFQyxhQUFhOzBDQUUxRCw0RUFBQ2Y7b0NBQUVGLFdBQVU7O3NEQUNYLDhEQUFDeEIsMkVBQWVBOzRDQUFDbUMsTUFBTS9CLDJFQUFZQTs7Ozs7O3dDQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUXZEO0dBOUV3QkM7S0FBQUEiLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL1Nvbm5hTGFicy9IZXRpYy9kYXRhLXRlY2gtbmV4dC9zcmMvYXBwL2Zyb250ZW5kL2NvbXBvbmVudC9OYXZiYXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFwiLi4vc3R5bGVzL25hdmJhci5jc3NcIjtcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcbmltcG9ydCB7XG4gIGZhQmFycyxcbiAgZmFUYWNob21ldGVyQWx0LFxuICBmYUFkZHJlc3NCb29rLFxuICBmYUNsb25lLFxuICBmYUNoYXJ0R2FudHQsXG59IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcbmltcG9ydCB7IGZhQ2hhcnREaWFncmFtIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYUNoYXJ0RGlhZ3JhbVwiO1xuXG50eXBlIE5hdmJhclByb3BzID0ge1xuICBzdHlsZT86IFJlYWN0LkNTU1Byb3BlcnRpZXM7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZiYXIoeyBzdHlsZSB9OiBOYXZiYXJQcm9wcykge1xuICBjb25zdCBbYWN0aXZlLCBzZXRBY3RpdmVdID0gdXNlU3RhdGUoXCJEYXNoYm9hcmRcIik7XG4gIGNvbnN0IFtob3JpU3R5bGUsIHNldEhvcmlTdHlsZV0gPSB1c2VTdGF0ZSh7fSk7XG5cbiAgY29uc3QgaGFuZGxlQWN0aXZlID0gKGl0ZW06IHN0cmluZywgZWxlbWVudDogSFRNTEVsZW1lbnQpID0+IHtcbiAgICBzZXRBY3RpdmUoaXRlbSk7XG4gICAgY29uc3QgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgc2V0SG9yaVN0eWxlKHtcbiAgICAgIGxlZnQ6IGAke2VsZW1lbnQub2Zmc2V0TGVmdH1weGAsXG4gICAgICB3aWR0aDogYCR7cmVjdC53aWR0aH1weGAsXG4gICAgICBoZWlnaHQ6IGAke3JlY3QuaGVpZ2h0fXB4YCxcbiAgICB9KTtcbiAgfTtcbiAgXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgYWN0aXZlSXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2LWl0ZW0uYWN0aXZlXCIpO1xuICAgIGlmIChhY3RpdmVJdGVtKSB7XG4gICAgICBjb25zdCByZWN0ID0gKGFjdGl2ZUl0ZW0gYXMgSFRNTEVsZW1lbnQpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgc2V0SG9yaVN0eWxlKHtcbiAgICAgICAgbGVmdDogYCR7KGFjdGl2ZUl0ZW0gYXMgSFRNTEVsZW1lbnQpLm9mZnNldExlZnR9cHhgLFxuICAgICAgICB3aWR0aDogYCR7cmVjdC53aWR0aH1weGAsXG4gICAgICAgIGhlaWdodDogYCR7cmVjdC5oZWlnaHR9cHhgLFxuICAgICAgfSk7XG4gICAgfVxuICB9LCBbXSk7XG4gIFxuXG4gIHJldHVybiAoXG4gICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXIgbmF2YmFyLWV4cGFuZC1jdXN0b20gbmF2YmFyLW1haW5iZ1wiIHN0eWxlPXtzdHlsZX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICA8YSBjbGFzc05hbWU9XCJuYXZiYXItYnJhbmQgbmF2YmFyLWxvZ29cIiBocmVmPVwiI1wiPlxuICAgICAgICBOWUMgfCBEQVRBXG4gICAgICA8L2E+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVyXCJcbiAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgIGRhdGEtYnMtdG9nZ2xlPVwiY29sbGFwc2VcIlxuICAgICAgICBkYXRhLWJzLXRhcmdldD1cIiNuYXZiYXJTdXBwb3J0ZWRDb250ZW50XCJcbiAgICAgICAgYXJpYS1jb250cm9scz1cIm5hdmJhclN1cHBvcnRlZENvbnRlbnRcIlxuICAgICAgICBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIlxuICAgICAgICBhcmlhLWxhYmVsPVwiVG9nZ2xlIG5hdmlnYXRpb25cIiA+XG4gICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFCYXJzfSBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCIgLz5cbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xsYXBzZSBuYXZiYXItY29sbGFwc2VcIiBpZD1cIm5hdmJhclN1cHBvcnRlZENvbnRlbnRcIj5cbiAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZiYXItbmF2IG1zLWF1dG8gZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJob3JpLXNlbGVjdG9yXCIgc3R5bGU9e2hvcmlTdHlsZX0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdFwiPjwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0XCI+PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BuYXYtaXRlbSAke2FjdGl2ZSA9PT0gXCJEYXNoYm9hcmRcIiA/IFwiYWN0aXZlXCIgOiBcIlwifWB9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBoYW5kbGVBY3RpdmUoXCJEYXNoYm9hcmRcIiwgZS5jdXJyZW50VGFyZ2V0KX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5cbiAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhVGFjaG9tZXRlckFsdH0gLz4gRGFzaGJvYXJkXG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgbmF2LWl0ZW0gJHthY3RpdmUgPT09IFwiQWRkcmVzcyBCb29rXCIgPyBcImFjdGl2ZVwiIDogXCJcIn1gfVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gaGFuZGxlQWN0aXZlKFwiQWRkcmVzcyBCb29rXCIsIGUuY3VycmVudFRhcmdldCl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+XG4gICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUFkZHJlc3NCb29rfSAvPiBBZGRyZXNzIEJvb2tcbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BuYXYtaXRlbSAke2FjdGl2ZSA9PT0gXCJDb21wb25lbnRzXCIgPyBcImFjdGl2ZVwiIDogXCJcIn1gfVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gaGFuZGxlQWN0aXZlKFwiQ29tcG9uZW50c1wiLCBlLmN1cnJlbnRUYXJnZXQpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiPlxuICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFDaGFydEdhbnR0fSAvPiBTdGF0aXN0aWNzXG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L25hdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiRm9udEF3ZXNvbWVJY29uIiwiZmFCYXJzIiwiZmFUYWNob21ldGVyQWx0IiwiZmFBZGRyZXNzQm9vayIsImZhQ2hhcnRHYW50dCIsIk5hdmJhciIsInN0eWxlIiwiYWN0aXZlIiwic2V0QWN0aXZlIiwiaG9yaVN0eWxlIiwic2V0SG9yaVN0eWxlIiwiaGFuZGxlQWN0aXZlIiwiaXRlbSIsImVsZW1lbnQiLCJyZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwibGVmdCIsIm9mZnNldExlZnQiLCJ3aWR0aCIsImhlaWdodCIsImFjdGl2ZUl0ZW0iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJuYXYiLCJjbGFzc05hbWUiLCJkaXYiLCJhIiwiaHJlZiIsImJ1dHRvbiIsInR5cGUiLCJkYXRhLWJzLXRvZ2dsZSIsImRhdGEtYnMtdGFyZ2V0IiwiYXJpYS1jb250cm9scyIsImFyaWEtZXhwYW5kZWQiLCJhcmlhLWxhYmVsIiwiaWNvbiIsImlkIiwidWwiLCJsaSIsIm9uQ2xpY2siLCJlIiwiY3VycmVudFRhcmdldCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/frontend/component/Navbar.tsx\n"));

/***/ })

});