"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledMentorForm = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _MentorForm = _interopRequireDefault(require("../components/mentors/MentorForm"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  font-size: 0.5cm;\n  border: black 1px solid;\n  width: auto;\n  height: auto;\n  background-color: grey;\n  padding: 30px;\n  margin-bottom: 25px;\n  border-radius: 8px;\n  margin: auto;\n  text-align: center;\n\n  h2 {\n    font-weight: bold;\n    text-align: center;\n    margin-top: 0;\n  }\n\n  header {\n    padding-bottom: 1cm;\n  }\n\n  form {\n    display: flex;\n    flex-direction: column;\n    text-align: center;\n    justify-content: space-evenly;\n  }\n\n  input {\n    width: 100%;\n    padding: 12px;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    box-sizing: border-box;\n    margin-top: 6px;\n    margin-bottom: 16px;\n  }\n\n  textarea {\n    margin-bottom: 16px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledMentorForm = (0, _styledComponents.default)(_MentorForm.default)(_templateObject());
exports.StyledMentorForm = StyledMentorForm;