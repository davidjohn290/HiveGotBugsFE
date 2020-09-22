"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.editSuggestion = exports.deleteSuggestion = exports.getSuggestions = exports.makeUserAMentor = exports.getAllMentors = exports.getTech = exports.getSingleProblem = exports.getProblems = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var axiosInstance = _axios.default.create({
  baseURL: "https://hive-got-bugs.herokuapp.com/api"
});

var sortRef = {
  newest: {
    sort_by: "created_at",
    order: "desc"
  },
  oldest: {
    sort_by: "created_at",
    order: "asc"
  }
};

var getProblems = function getProblems(sort, solved, difficulty, tech) {
  var _sortRef$sort = sortRef[sort],
      sort_by = _sortRef$sort.sort_by,
      order = _sortRef$sort.order;
  return axiosInstance.get("/problems", {
    params: {
      sort_by: sort_by,
      order: order,
      solved: solved,
      difficulty: difficulty,
      tech: tech
    }
  }).then(function (_ref) {
    var problems = _ref.data.problems;
    return problems;
  });
};

exports.getProblems = getProblems;

var getSingleProblem = function getSingleProblem(id) {
  return axiosInstance.get("/problems/".concat(id)).then(function (_ref2) {
    var problem = _ref2.data.problem;
    return problem;
  });
};

exports.getSingleProblem = getSingleProblem;

var getTech = function getTech() {
  return axiosInstance.get("/tech").then(function (_ref3) {
    var tech = _ref3.data.tech;
    return tech;
  });
};

exports.getTech = getTech;

var getAllMentors = function getAllMentors() {
  return axiosInstance.get("/users?role=mentor").then(function (res) {
    console.log(res.data.users);
    return res.data.users;
  });
};

exports.getAllMentors = getAllMentors;

var makeUserAMentor = function makeUserAMentor(username, _ref4) {
  var bio = _ref4.bio,
      skills = _ref4.skills,
      github = _ref4.github;
  return axiosInstance.patch("/users/".concat(username), {
    role: "mentor",
    description: bio,
    skill1: skills[0],
    skill2: skills[1],
    skill3: skills[2],
    github_url: "www.github.com/".concat(github)
  }).then(function (_ref5) {
    var user = _ref5.data;
    return user;
  });
};

exports.makeUserAMentor = makeUserAMentor;

var getSuggestions = function getSuggestions(problem_id) {
  return axiosInstance.get("/problems/".concat(problem_id, "/suggestions")).then(function (_ref6) {
    var suggestions = _ref6.data.suggestions;
    return suggestions;
  });
};

exports.getSuggestions = getSuggestions;

var deleteSuggestion = function deleteSuggestion(suggestion_id) {
  return axiosInstance.delete("/suggestions/".concat(suggestion_id, "/"));
};

exports.deleteSuggestion = deleteSuggestion;

var editSuggestion = function editSuggestion(suggestion_id, body) {
  return axiosInstance.patch("/suggestions/".concat(suggestion_id, "/"));
};

exports.editSuggestion = editSuggestion;