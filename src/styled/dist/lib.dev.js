"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledErrorPage = exports.StyledLoader = exports.StyledLink = exports.StyledDifficultyButton = exports.StyledHexButton = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _router = require("@reach/router");

var _Loader = _interopRequireDefault(require("../components/Loader"));

var _ErrorPage = _interopRequireDefault(require("../components/ErrorPage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject5() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  text-decoration: none;\n  color: black;\n  font-weight: 500;\n\n  &:hover {\n    text-decoration: underline;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  margin-left: 0.2em;\n  margin-right: 0.2em;\n  text-align: center;\n  border: none;\n  height: 25px;\n  width: 70px;\n  outline: none;\n  background-color: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  width: 70px;\n  height: 40.41px;\n  /* background-color: #b8dbd9; */\n  background-color: rgb(0, 124, 146);\n  margin: 20.21px 0;\n  border: none;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-decoration: none;\n  color: white;\n  font-weight: 600;\n  font-size: 10pt;\n  text-align: center;\n\n  :before,\n  :after {\n    content: \"\";\n    position: absolute;\n    width: 0;\n    border-left: 35px solid transparent;\n    border-right: 35px solid transparent;\n  }\n  :before {\n    bottom: 100%;\n    border-bottom: 20.21px solid rgb(0, 124, 146);\n  }\n  :after {\n    top: 100%;\n    width: 0;\n    border-top: 20.21px solid rgb(0, 124, 146);\n  }\n\n  &:hover {\n    font-weight: bold;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// <Link>, sometimes overridden as <Button>
var StyledHexButton = (0, _styledComponents.default)(_router.Link)(_templateObject());
exports.StyledHexButton = StyledHexButton;

var StyledDifficultyButton = _styledComponents.default.button(_templateObject2(), function (props) {
  var difficulty = props.difficulty;
  if (difficulty === "easy") return "#8cc56f";
  if (difficulty === "medium") return "#da995c";
  if (difficulty === "hard") return "#ed6270";
});

exports.StyledDifficultyButton = StyledDifficultyButton;
var StyledLink = (0, _styledComponents.default)(_router.Link)(_templateObject3());
exports.StyledLink = StyledLink;
var StyledLoader = (0, _styledComponents.default)(_Loader.default)(_templateObject4());
exports.StyledLoader = StyledLoader;
var StyledErrorPage = (0, _styledComponents.default)(_ErrorPage.default)(_templateObject5());
exports.StyledErrorPage = StyledErrorPage;