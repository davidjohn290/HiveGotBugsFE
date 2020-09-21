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
      description: bio,
      skills1: skills[0],
      skills2: skills[1],
      skills3: skills[2],
      github_url: github,
    })
    .then(({ data: user }) => {
      return user;
    });
};
