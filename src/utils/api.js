import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://hive-got-bugs.herokuapp.com/api",
});

const sortRef = {
  newest: { sort_by: "created_at", order: "desc" },
  oldest: { sort_by: "created_at", order: "asc" },
};

export const getProblems = (sort, solved, difficulty, tech) => {
  const { sort_by, order } = sortRef[sort];

  return axiosInstance
    .get("/problems", { params: { sort_by, order, solved, difficulty, tech } })
    .then(({ data: { problems } }) => problems);
};

export const getSingleProblem = (id) => {
  return axiosInstance
    .get(`/problems/${id}`)
    .then(({ data: { problem } }) => problem);
};

export const patchProblem = (problem_id, problem) => {
  return axiosInstance
    .patch(`/problems/${problem_id}`, problem)
    .then(({ data: { problem } }) => problem);
};

export const deleteProblem = (problem_id) => {
  return axiosInstance.delete(`/problems/${problem_id}`);
};

export const getTech = () => {
  return axiosInstance.get("/tech").then(({ data: { tech } }) => tech);
};

export const getAllMentors = () => {
  return axiosInstance.get("/users?role=mentor").then((res) => {
    return res.data.users;
  });
};

export const makeUserAMentor = (username, formValues) => {
  return axiosInstance
    .patch(`/users/${username}`, {
      name: formValues.name,
      role: "mentor",
      description: formValues.bio,
      skill1: formValues.skill1,
      skill2: formValues.skill2,
      skill3: formValues.skill3,
      github_url: `https://github.com/${formValues.github}`,
    })
    .then(({ data: user }) => user);
};

export const getUserByUsername = (username) => {
  return axiosInstance.get(`/users/${username}`).then(({ data: { user } }) => {
    return user;
  });
};

export const getProblemByUsername = (username, filter) => {
  return axiosInstance
    .get(`/problems?username=${username}&solved=${filter}`)
    .then(({ data: { problems } }) => problems);
};

export const getSuggestions = (problem_id) => {
  return axiosInstance
    .get(`/problems/${problem_id}/suggestions`)
    .then(({ data: { suggestions } }) => suggestions);
};

export const deleteSuggestion = (suggestion_id) => {
  return axiosInstance.delete(`/suggestions/${suggestion_id}/`);
};

export const editSuggestion = (suggestion_id, update) => {
  return axiosInstance.patch(`/suggestions/${suggestion_id}/`, update);
};

export const addSuggestion = (problem_id, username, body) => {
  return axiosInstance
    .post(`/problems/${problem_id}/suggestions`, { username, body })
    .then(({ data: { suggestion } }) => suggestion);
};

export const editUserProfileByUsername = (username, body) => {
  return axiosInstance
    .patch(`/users/${username}`, body)
    .then(({ data: { user } }) => user);
};

export const incrementBugPoints = (username) => {
  return axiosInstance
    .patch(`/users/${username}/`, { inc_bug_points: 1 })
    .then(({ data: { suggestion } }) => suggestion);
};

export const getProblemByUsernameWithoutFilter = (username) => {
  return axiosInstance
    .get(`/problems?username=${username}`)
    .then(({ data: { problems } }) => problems);
};

export const getAMentor = (username) => {
  return axiosInstance
    .get(`/users/${username}/`)
    .then(({ data: { user } }) => user);
};

export const addUser = (username, { avatar_url }) => {
  return axiosInstance
    .post("/users", {
      username: username,
      avatar_url: avatar_url,
      name: "Not provided",
      bug_points: 0,
      bug_points_over_month: 0,
      role: "user",
      online_status: "true",
    })
    .then(({ data: { user } }) => {
      return user;
    });
};

export const addProblemByUsername = (
  username,
  { difficulty, tech, title, body }
) => {
  return axiosInstance
    .post(`/problems`, {
      username,
      difficulty,
      tech,
      title,
      body,
      solved: "false",
    })
    .then(({ data: { problem } }) => problem);
};

export const removeFilter = () => {
  return axiosInstance.get("/problems").then(({ data: { problems } }) => {
    return problems;
  });
};
