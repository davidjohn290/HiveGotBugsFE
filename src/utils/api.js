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

export const getTech = () => {
  return axiosInstance.get("/tech").then(({ data: { tech } }) => tech);
};

export const makeUserAMentor = (username, { bio, skills, github }) => {
  return axiosInstance
    .patch(`/users/${username}`, {
      role: "mentor",
      description: bio,
      skill1: skills[0],
      skill2: skills[1],
      skill3: skills[2],
      github_url: `www.github.com/${github}`,
    })
    .then(({ data: user }) => user);
};

export const getUserByUsername = (username) => {
  return axiosInstance.get(`/users/${username}`).then(({ data: { user } }) => {
    return user;
  });
};
