webpackHotUpdate(5,{

/***/ 399:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(45);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(49);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _axios = __webpack_require__(400);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\Micah\\Apps\\OPENsrc\\primitive-wrapper\\pages\\index.js?entry';

// import LZString from 'lz-string';
// import { ApolloClient } from 'apollo-client';
// import { HttpLink } from 'apollo-link-http';
// import { InMemoryCache } from 'apollo-cache-inmemory';
// import { ApolloProvider } from 'react-apollo';

// import { gql, graphql } from 'react-apollo';

// const client = new ApolloClient({
//     // By default, this client will send queries to the
//     //  `/graphql` endpoint on the same host
//     // Pass the configuration option { uri: YOUR_GRAPHQL_API_URL } to the `HttpLink` to connect
//     // to a different host
//     link: new HttpLink(),
//     cache: new InMemoryCache()
//   });

var Index = function (_Component) {
    (0, _inherits3.default)(Index, _Component);

    function Index(props) {
        (0, _classCallCheck3.default)(this, Index);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Index.__proto__ || (0, _getPrototypeOf2.default)(Index)).call(this, props));

        _this.state = { image: "/static/images/test.png", imageData: null };
        return _this;
    }

    // componentDidMount(){

    //     // console.log(query);
    // }

    (0, _createClass3.default)(Index, [{
        key: 'renderData',
        value: function renderData() {
            if (this.state.imageData !== null) {
                return _react2.default.createElement('p', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 34
                    }
                }, this.state.imageData.substring(0, 50));
            } else {
                return null;
            }
        }
    }, {
        key: 'handleChange',
        value: function handleChange() {
            var FR = new FileReader();
            var self = this;
            var imageTarget = document.querySelector('.file-upload').files[0];

            FR.addEventListener("load", function () {
                self.setState({ imageData: this.result });
            }, false);

            FR.readAsDataURL(imageTarget);

            this.setState({
                image: window.URL.createObjectURL(imageTarget)
            });
        }
    }, {
        key: 'reset',
        value: function reset() {
            this.setState({
                image: "/static/images/test.png",
                imageData: null
            });
        }
    }, {
        key: 'submit',
        value: function submit() {
            console.log(this.state.imageData.length);
            var submission = {
                data: this.state.imageData
            };

            console.log(submission.data.length);

            self = this;
            _axios2.default.post('/api/post', submission).then(function (response) {
                console.log(response);
                self.setState({ image: "./static/images/rendered/" + response.data.filename });
            }).catch(function (error) {
                console.log(error);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return (
                // <ApolloProvider client={client}>
                _react2.default.createElement('div', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 86
                    }
                }, _react2.default.createElement('button', { onClick: this.reset.bind(this), __source: {
                        fileName: _jsxFileName,
                        lineNumber: 87
                    }
                }, 'Reset'), _react2.default.createElement('img', { className: 'preview', src: this.state.image, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 89
                    }
                }), _react2.default.createElement('br', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 90
                    }
                }), _react2.default.createElement('input', { className: "file-upload", accept: '.png, .jpg, .jpeg', type: 'file', onChange: this.handleChange.bind(this), __source: {
                        fileName: _jsxFileName,
                        lineNumber: 92
                    }
                }), '\u200B', _react2.default.createElement('button', { onClick: this.submit.bind(this), __source: {
                        fileName: _jsxFileName,
                        lineNumber: 93
                    }
                }, 'Submit'), this.renderData())
                // </ApolloProvider>

            );
        }
    }]);

    return Index;
}(_react.Component);

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsImF4aW9zIiwiSW5kZXgiLCJwcm9wcyIsInN0YXRlIiwiaW1hZ2UiLCJpbWFnZURhdGEiLCJzdWJzdHJpbmciLCJGUiIsIkZpbGVSZWFkZXIiLCJzZWxmIiwiaW1hZ2VUYXJnZXQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJmaWxlcyIsImFkZEV2ZW50TGlzdGVuZXIiLCJzZXRTdGF0ZSIsInJlc3VsdCIsInJlYWRBc0RhdGFVUkwiLCJ3aW5kb3ciLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJjb25zb2xlIiwibG9nIiwibGVuZ3RoIiwic3VibWlzc2lvbiIsImRhdGEiLCJwb3N0IiwidGhlbiIsInJlc3BvbnNlIiwiZmlsZW5hbWUiLCJjYXRjaCIsImVycm9yIiwicmVzZXQiLCJiaW5kIiwiaGFuZGxlQ2hhbmdlIiwic3VibWl0IiwicmVuZGVyRGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVE7Ozs7QUFDZixBQUFPOzs7Ozs7OztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFFcUIsQTttQ0FDakI7O21CQUFBLEFBQVksT0FBTTs0Q0FBQTs7d0lBQUEsQUFDUixBQUVOOztjQUFBLEFBQUssUUFBTyxFQUFFLE9BQUYsQUFBUSwyQkFBMkIsV0FIakMsQUFHZCxBQUFZLEFBQThDO2VBQzdEO0FBRUQ7O0FBRUE7O0FBQ0E7Ozs7O3FDQUVZLEFBQ1I7Z0JBQUcsS0FBQSxBQUFLLE1BQUwsQUFBVyxjQUFkLEFBQTRCLE1BQUssQUFDN0I7dUNBQVEsY0FBQTs7a0NBQUE7b0NBQUEsQUFBSTtBQUFKO0FBQUEsaUJBQUEsT0FBSSxBQUFLLE1BQUwsQUFBVyxVQUFYLEFBQXFCLFVBQXJCLEFBQStCLEdBQTNDLEFBQVEsQUFBSSxBQUFrQyxBQUNqRDtBQUZELG1CQUdJLEFBQ0E7dUJBQUEsQUFBTyxBQUNWO0FBQ0o7Ozs7dUNBRWEsQUFDVjtnQkFBSSxLQUFLLElBQVQsQUFBUyxBQUFJLEFBQ2I7Z0JBQUksT0FBSixBQUFXLEFBQ1g7Z0JBQUksY0FBYyxTQUFBLEFBQVMsY0FBVCxBQUF1QixnQkFBdkIsQUFBdUMsTUFBekQsQUFBa0IsQUFBNkMsQUFFL0Q7O2VBQUEsQUFBRyxpQkFBSCxBQUFvQixRQUFRLFlBQVksQUFDcEM7cUJBQUEsQUFBSyxTQUFTLEVBQUMsV0FBVSxLQUF6QixBQUFjLEFBQWdCLEFBQ2pDO0FBRkQsZUFBQSxBQUVHLEFBRUg7O2VBQUEsQUFBRyxjQUFILEFBQWlCLEFBRWpCOztpQkFBQSxBQUFLO3VCQUNPLE9BQUEsQUFBTyxJQUFQLEFBQVcsZ0JBRHZCLEFBQWMsQUFDRixBQUEyQixBQUUxQztBQUhpQixBQUNWOzs7O2dDQUlELEFBQ0g7aUJBQUEsQUFBSzt1QkFBUyxBQUNILEFBQ1A7MkJBRkosQUFBYyxBQUVFLEFBRW5CO0FBSmlCLEFBQ1Y7Ozs7aUNBS0EsQUFDSjtvQkFBQSxBQUFRLElBQUksS0FBQSxBQUFLLE1BQUwsQUFBVyxVQUF2QixBQUFpQyxBQUNqQztnQkFBSTtzQkFDTyxLQUFBLEFBQUssTUFEaEIsQUFBaUIsQUFDSyxBQUd0QjtBQUppQixBQUNiOztvQkFHSixBQUFRLElBQUksV0FBQSxBQUFXLEtBQXZCLEFBQTRCLEFBRTVCOzttQkFBQSxBQUFPLEFBQ1A7NEJBQUEsQUFBTSxLQUFOLEFBQVcsYUFBWCxBQUF3QixZQUF4QixBQUNHLEtBQUssVUFBQSxBQUFVLFVBQVUsQUFDdEI7d0JBQUEsQUFBUSxJQUFSLEFBQVksQUFDZDtxQkFBQSxBQUFLLFNBQVMsRUFBQyxPQUFRLDhCQUE4QixTQUFBLEFBQVMsS0FBOUQsQUFBYyxBQUFxRCxBQUNwRTtBQUpILGVBQUEsQUFLRyxNQUFNLFVBQUEsQUFBVSxPQUFPLEFBQ3RCO3dCQUFBLEFBQVEsSUFBUixBQUFZLEFBQ2I7QUFQSCxBQVFIOzs7O2lDQUVPLEFBQ0o7QUFDSTtBQUNJO2dDQUFBLGNBQUE7O2tDQUFBO29DQUFBLEFBQ0k7QUFESjtBQUFBLG1DQUNJLGNBQUEsWUFBUSxTQUFTLEtBQUEsQUFBSyxNQUFMLEFBQVcsS0FBNUIsQUFBaUIsQUFBZ0I7a0NBQWpDO29DQUFBO0FBQUE7bUJBREosQUFDSSxBQUVBLGlEQUFLLFdBQUwsQUFBZSxXQUFVLEtBQUssS0FBQSxBQUFLLE1BQW5DLEFBQXlDO2tDQUF6QztvQ0FISixBQUdJLEFBQ0E7QUFEQTs7O2tDQUNBO29DQUpKLEFBSUksQUFFQTtBQUZBO0FBQUEsNkRBRU8sV0FBUCxBQUFrQixlQUFlLFFBQWpDLEFBQXdDLHFCQUFvQixNQUE1RCxBQUFpRSxRQUFRLFVBQVUsS0FBQSxBQUFLLGFBQUwsQUFBa0IsS0FBckcsQUFBbUYsQUFBdUI7a0NBQTFHO29DQU5KLEFBTUk7QUFBQTtvQkFDQSwwQkFBQSxjQUFBLFlBQVEsU0FBUyxLQUFBLEFBQUssT0FBTCxBQUFZLEtBQTdCLEFBQWlCLEFBQWlCO2tDQUFsQztvQ0FBQTtBQUFBO21CQVBKLEFBT0ksQUFFQyxnQkFUTCxBQVNLLEFBQUssQUFFZDtBQWJKLEFBZUg7Ozs7Ozs7QUEvRThCLEE7O2tCQUFkLEEiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvTWljYWgvQXBwcy9PUEVOc3JjL3ByaW1pdGl2ZS13cmFwcGVyIn0=

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "C:\\Users\\Micah\\Apps\\OPENsrc\\primitive-wrapper\\pages\\index.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\Micah\\Apps\\OPENsrc\\primitive-wrapper\\pages\\index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(84)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5hNWU5MWFiYzY2YjJiZjhlZTk0ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/NDRmOWUzMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuLy8gaW1wb3J0IExaU3RyaW5nIGZyb20gJ2x6LXN0cmluZyc7XHJcbi8vIGltcG9ydCB7IEFwb2xsb0NsaWVudCB9IGZyb20gJ2Fwb2xsby1jbGllbnQnO1xyXG4vLyBpbXBvcnQgeyBIdHRwTGluayB9IGZyb20gJ2Fwb2xsby1saW5rLWh0dHAnO1xyXG4vLyBpbXBvcnQgeyBJbk1lbW9yeUNhY2hlIH0gZnJvbSAnYXBvbGxvLWNhY2hlLWlubWVtb3J5JztcclxuLy8gaW1wb3J0IHsgQXBvbGxvUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1hcG9sbG8nO1xyXG5cclxuLy8gaW1wb3J0IHsgZ3FsLCBncmFwaHFsIH0gZnJvbSAncmVhY3QtYXBvbGxvJztcclxuXHJcbi8vIGNvbnN0IGNsaWVudCA9IG5ldyBBcG9sbG9DbGllbnQoe1xyXG4vLyAgICAgLy8gQnkgZGVmYXVsdCwgdGhpcyBjbGllbnQgd2lsbCBzZW5kIHF1ZXJpZXMgdG8gdGhlXHJcbi8vICAgICAvLyAgYC9ncmFwaHFsYCBlbmRwb2ludCBvbiB0aGUgc2FtZSBob3N0XHJcbi8vICAgICAvLyBQYXNzIHRoZSBjb25maWd1cmF0aW9uIG9wdGlvbiB7IHVyaTogWU9VUl9HUkFQSFFMX0FQSV9VUkwgfSB0byB0aGUgYEh0dHBMaW5rYCB0byBjb25uZWN0XHJcbi8vICAgICAvLyB0byBhIGRpZmZlcmVudCBob3N0XHJcbi8vICAgICBsaW5rOiBuZXcgSHR0cExpbmsoKSxcclxuLy8gICAgIGNhY2hlOiBuZXcgSW5NZW1vcnlDYWNoZSgpXHJcbi8vICAgfSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIENvbXBvbmVudHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5zdGF0ZT0geyBpbWFnZTpcIi9zdGF0aWMvaW1hZ2VzL3Rlc3QucG5nXCIsIGltYWdlRGF0YTogbnVsbCB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGNvbXBvbmVudERpZE1vdW50KCl7XHJcblxyXG4gICAgLy8gICAgIC8vIGNvbnNvbGUubG9nKHF1ZXJ5KTtcclxuICAgIC8vIH1cclxuXHJcbiAgICByZW5kZXJEYXRhKCl7XHJcbiAgICAgICAgaWYodGhpcy5zdGF0ZS5pbWFnZURhdGEgIT09IG51bGwpe1xyXG4gICAgICAgICAgICByZXR1cm4gKDxwPnt0aGlzLnN0YXRlLmltYWdlRGF0YS5zdWJzdHJpbmcoMCwgNTApfTwvcD4pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVDaGFuZ2UoKXtcclxuICAgICAgICB2YXIgRlIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICB2YXIgaW1hZ2VUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmlsZS11cGxvYWQnKS5maWxlc1swXTtcclxuXHJcbiAgICAgICAgRlIuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBzZWxmLnNldFN0YXRlKHtpbWFnZURhdGE6dGhpcy5yZXN1bHR9KTtcclxuICAgICAgICB9LCBmYWxzZSk7XHJcblxyXG4gICAgICAgIEZSLnJlYWRBc0RhdGFVUkwoaW1hZ2VUYXJnZXQpO1xyXG5cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgaW1hZ2UgOiB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTChpbWFnZVRhcmdldClcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXNldCgpe1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBpbWFnZTogXCIvc3RhdGljL2ltYWdlcy90ZXN0LnBuZ1wiLFxyXG4gICAgICAgICAgICBpbWFnZURhdGEgOiBudWxsXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBzdWJtaXQoKXtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmltYWdlRGF0YS5sZW5ndGgpO1xyXG4gICAgICAgIHZhciBzdWJtaXNzaW9uID0ge1xyXG4gICAgICAgICAgICBkYXRhIDogdGhpcy5zdGF0ZS5pbWFnZURhdGFcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKHN1Ym1pc3Npb24uZGF0YS5sZW5ndGgpO1xyXG5cclxuICAgICAgICBzZWxmID0gdGhpcztcclxuICAgICAgICBheGlvcy5wb3N0KCcvYXBpL3Bvc3QnLCBzdWJtaXNzaW9uKVxyXG4gICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICBzZWxmLnNldFN0YXRlKHtpbWFnZSA6IFwiLi9zdGF0aWMvaW1hZ2VzL3JlbmRlcmVkL1wiICsgcmVzcG9uc2UuZGF0YS5maWxlbmFtZX0pXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIC8vIDxBcG9sbG9Qcm92aWRlciBjbGllbnQ9e2NsaWVudH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5yZXNldC5iaW5kKHRoaXMpfT5SZXNldDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInByZXZpZXdcIiBzcmM9e3RoaXMuc3RhdGUuaW1hZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17XCJmaWxlLXVwbG9hZFwifSBhY2NlcHQ9XCIucG5nLCAuanBnLCAuanBlZ1wiIHR5cGU9XCJmaWxlXCIgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpfSAvPuKAi1xyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5zdWJtaXQuYmluZCh0aGlzKX0+U3VibWl0PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyRGF0YSgpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIC8vIDwvQXBvbGxvUHJvdmlkZXI+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzP2VudHJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7Ozs7O0FBR0E7QUFBQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFLQTtBQUNBOzs7O0FBR0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7OztBQUtBO0FBQUE7QUFFQTtBQUVBO0FBSEE7Ozs7QUFNQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFBQTtBQUVBO0FBQ0E7QUFIQTtBQU1BO0FBRUE7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFBQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQURBOzs7QUFDQTtBQUVBO0FBRkE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFJQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==