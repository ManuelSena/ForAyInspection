webpackJsonp([3],{

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_router__ = __webpack_require__(61);



__WEBPACK_IMPORTED_MODULE_1_react_dom__["render"](__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__src_router__["a" /* AppRouter */], null), document.getElementById("root"));

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Home_Home__ = __webpack_require__(98);




const AppRouter = () => {
    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router__["Router"], { history: __WEBPACK_IMPORTED_MODULE_1_react_router__["browserHistory"] }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], { path: "/", component: __WEBPACK_IMPORTED_MODULE_2__app__["a" /* App */] }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router__["IndexRoute"], { component: __WEBPACK_IMPORTED_MODULE_3__components_Home_Home__["a" /* Home */] }), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], { path: "/home", component: __WEBPACK_IMPORTED_MODULE_3__components_Home_Home__["a" /* Home */] })));
};
/* harmony export (immutable) */ __webpack_exports__["a"] = AppRouter;


/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_header_header__ = __webpack_require__(97);


const App = props => {
    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "container" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__components_header_header__["a" /* Header */], null), props.children);
};
/* harmony export (immutable) */ __webpack_exports__["a"] = App;


/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router__ = __webpack_require__(20);


const Header = () => {
    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router__["Link"], { to: "/home", className: "btn btn-primary" }, "Home"));
};
/* harmony export (immutable) */ __webpack_exports__["a"] = Header;


/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);

const Home = () => {
    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "container fahome" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "container col-md-12" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h1", null, "ForAy Inspection")), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "col-md-8 container" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h2", null, "Veteran Owned")), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "col-md-8 container" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h2", null, "Southern California"), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("ul", null, "Greater Los Angeles Area")), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "col-md-8 container" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h2", null, "Certified Welding Inspector"), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("ul", null, "License#: 1911311")), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "contact col-md-8 container" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h3", null, "Anthony Ramirez"), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "mailto:Dispatch@ForAyInspection.com?subject=Contact" }, "Dispatch@ForAyInspection.com"), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("ul", null, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "tel:562-456-6001" }, "Phone: 562-456-6001"))));
};
/* harmony export (immutable) */ __webpack_exports__["a"] = Home;


/***/ })

},[51]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vcm91dGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9hcHAudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ib21lL0hvbWUudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBLGtEQUNJLHFEQUFDLDhEQUFELEVBQVUsSUFBVixDQURKLEVBRUksU0FBUyxjQUFULENBQXdCLE1BQXhCLENBRkosRTs7Ozs7Ozs7QUNKQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFHTyxNQUFNLFlBQTBDLE1BQUs7QUFDeEQsV0FDSSxxREFBQyxvREFBRCxFQUFPLEVBQUMsU0FBUyw0REFBVixFQUFQLEVBQ0kscURBQUMsbURBQUQsRUFBTSxFQUFDLE1BQUssR0FBTixFQUFVLFdBQVcsaURBQXJCLEVBQU4sRUFDSSxxREFBQyx3REFBRCxFQUFXLEVBQUMsV0FBVyxtRUFBWixFQUFYLENBREosRUFFSSxxREFBQyxtREFBRCxFQUFNLEVBQUMsTUFBSyxPQUFOLEVBQWMsV0FBVyxtRUFBekIsRUFBTixDQUZKLENBREosQ0FESjtBQVNILENBVk0sQzs7Ozs7Ozs7OztBQ05QO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFTyxNQUFNLE1BQXFDLEtBQUQsSUFBVTtBQUV2RCxXQUNJLDhEQUFLLFdBQVUsV0FBZixJQUNJLHFEQUFDLHlFQUFELEVBQU8sSUFBUCxDQURKLEVBRUssTUFBTSxRQUZYLENBREo7QUFPSCxDQVRNLEM7Ozs7Ozs7Ozs7QUNIUDtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRU8sTUFBTSxTQUF1QyxNQUFLO0FBQ3JELFdBQ0ksa0VBQ0kscURBQUMsa0RBQUQsRUFBSyxFQUFDLElBQUcsT0FBSixFQUFZLFdBQVUsaUJBQXRCLEVBQUwsRUFBNEMsTUFBNUMsQ0FESixDQURKO0FBS0gsQ0FOTSxDOzs7Ozs7Ozs7O0FDSFA7QUFBQTtBQUFBO0FBRU8sTUFBTSxPQUFxQyxNQUFLO0FBRW5ELFdBQ0ksOERBQUssV0FBVSxrQkFBZixJQUNJLDhEQUFLLFdBQVUscUJBQWYsSUFDSSxvRkFESixDQURKLEVBS0ksOERBQUssV0FBVSxvQkFBZixJQUNJLGlGQURKLENBTEosRUFTSSw4REFBSyxXQUFVLG9CQUFmLElBQ0ksdUZBREosRUFFSSw0RkFGSixDQVRKLEVBY0ksOERBQUssV0FBVSxvQkFBZixJQUNJLCtGQURKLEVBRUkscUZBRkosQ0FkSixFQWtCSSw4REFBSyxXQUFVLDRCQUFmLElBQ0ksbUZBREosRUFFSSw0REFBRyxNQUFLLHFEQUFSLElBQTZELDhCQUE3RCxDQUZKLEVBR0ksaUVBQUksNERBQUcsTUFBSyxrQkFBUixJQUEwQixxQkFBMUIsQ0FBSixDQUhKLENBbEJKLENBREo7QUE0QkgsQ0E5Qk0sQyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0ICogYXMgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xyXG5pbXBvcnQgeyBBcHBSb3V0ZXIgfSBmcm9tIFwiLi4vc3JjL3JvdXRlclwiO1xyXG5cclxuUmVhY3RET00ucmVuZGVyKFxyXG4gICAgPEFwcFJvdXRlciAvPixcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm9vdFwiKVxyXG4pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2luZGV4LnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBSb3V0ZSwgYnJvd3Nlckhpc3RvcnksIEluZGV4Um91dGUsIFJvdXRlciwgaGFzaEhpc3RvcnkgfSBmcm9tIFwicmVhY3Qtcm91dGVyXCI7XHJcbmltcG9ydCB7IEFwcCB9IGZyb20gXCIuL2FwcFwiO1xyXG5pbXBvcnQgeyBIb21lIH0gZnJvbSBcIi4vY29tcG9uZW50cy9Ib21lL0hvbWVcIjtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgQXBwUm91dGVyOiBSZWFjdC5TdGF0ZWxlc3NDb21wb25lbnQ8e30+ID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Um91dGVyIGhpc3Rvcnk9e2Jyb3dzZXJIaXN0b3J5fT5cclxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvXCIgY29tcG9uZW50PXtBcHB9PlxyXG4gICAgICAgICAgICAgICAgPEluZGV4Um91dGUgY29tcG9uZW50PXtIb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvaG9tZVwiIGNvbXBvbmVudD17SG9tZX0gLz5cclxuICAgICAgICAgICAgPC9Sb3V0ZT5cclxuICAgICAgICA8L1JvdXRlcj5cclxuXHJcbiAgICApO1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcm91dGVyLnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBIZWFkZXIgfSBmcm9tIFwiLi9jb21wb25lbnRzL2hlYWRlci9oZWFkZXJcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBBcHA6IFJlYWN0LlN0YXRlbGVzc0NvbXBvbmVudDx7fT4gPSAocHJvcHMpID0+IHtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyXCI7XHJcblxyXG5leHBvcnQgY29uc3QgSGVhZGVyOiBSZWFjdC5TdGF0ZWxlc3NDb21wb25lbnQ8e30+ID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8TGluayB0bz1cIi9ob21lXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+SG9tZTwvTGluaz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgY29uc3QgSG9tZTogUmVhY3QuU3RhdGVsZXNzQ29tcG9uZW50PHt9PiA9ICgpID0+IHtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGZhaG9tZVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBjb2wtbWQtMTJcIj5cclxuICAgICAgICAgICAgICAgIDxoMT5Gb3JBeSBJbnNwZWN0aW9uPC9oMT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC04IGNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGgyPlZldGVyYW4gT3duZWQ8L2gyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTggY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aDI+U291dGhlcm4gQ2FsaWZvcm5pYTwvaDI+XHJcbiAgICAgICAgICAgICAgICA8dWw+R3JlYXRlciBMb3MgQW5nZWxlcyBBcmVhPC91bD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC04IGNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGgyPkNlcnRpZmllZCBXZWxkaW5nIEluc3BlY3RvcjwvaDI+XHJcbiAgICAgICAgICAgICAgICA8dWw+TGljZW5zZSM6IDE5MTEzMTE8L3VsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWN0IGNvbC1tZC04IGNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGgzPkFudGhvbnkgUmFtaXJlejwvaDM+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwibWFpbHRvOkRpc3BhdGNoQEZvckF5SW5zcGVjdGlvbi5jb20/c3ViamVjdD1Db250YWN0XCI+RGlzcGF0Y2hARm9yQXlJbnNwZWN0aW9uLmNvbTwvYT5cclxuICAgICAgICAgICAgICAgIDx1bD48YSBocmVmPVwidGVsOjU2Mi00NTYtNjAwMVwiPlBob25lOiA1NjItNDU2LTYwMDE8L2E+PC91bD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIFxyXG4gICAgKTtcclxuXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0hvbWUvSG9tZS50c3giXSwic291cmNlUm9vdCI6IiJ9