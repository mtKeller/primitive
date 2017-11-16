'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _axios = require('axios');

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