import axios from "axios";

const token = "efa495397d7316c75744660fd3429c862365cd5ef818caf06435cfccd69a9f7cb580a995e88df8abfbccd68c7a0652230aeb34f86c1098decec490d1deb3ef4f519b49dd25a3e018811a3e3cbff178e4cb56fcef6bed1f610bf8353a6d1e6f99f3f3f46824a7a31cfdb3c3d791e366d1706a622b2c54393e5e1a3897bf38789f"

export const makeRequest = axios.create({
  baseURL: "http://localhost:1337/api",
  headers: {
    Authorization: ` bearer ${token}`   ,
  },
});