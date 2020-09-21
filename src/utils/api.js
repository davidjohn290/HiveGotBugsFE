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

export const getTech = () => {
  return axiosInstance.get("/tech").then(({ data: { tech } }) => tech);
};
