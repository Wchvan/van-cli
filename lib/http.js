// lib/http.js

// 通过 axios 处理请求
const axios = require("axios");

axios.interceptors.response.use((res) => {
  return res.data;
});

// TODO: 建一个自己的模板仓库进行替换
/** 
 * 获取模板列表
 * @return Promise
 */
async function getRepoList() {
  return axios.get("https://api.github.com/users/Wchvan/repos");
}

// TODO: 建一个自己的模板仓库进行替换

/**
 * 获取版本信息
 * @param {string} repo 模板名称
 * @returns Promise
 */
async function getTagList(repo) {
  return axios.get(`https://api.github.com/repos/Wchvan/${repo}/tags`);
}

module.exports = {
  getRepoList,
  getTagList,
};
