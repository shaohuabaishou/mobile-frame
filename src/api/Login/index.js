import request from "@/utils/request.js";
//账密登陆
export function loginByAccount(data) {
  return request({
    url: "/eam_s/xxx",
    method: "post",
    data,
  });
}
