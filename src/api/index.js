import http from "../utils/request";

//请求首页数据的接口

export const getData = () => {
  //返回一个promise对象
  return http.get("/home/getData");
};

export const getUser = (params) => {
  //传入用户列表
  return http.get("/user/getUser", params);
};

export const addUser = () => {
  return http.post("/user/add", data);
};
export const editUser = () => {
  return http.post("/user/edit", data);
};
export const delUser = () => {
  return http.post("/user/del", data);
};
