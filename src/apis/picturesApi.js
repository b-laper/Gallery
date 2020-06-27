import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID 1PPxEc9611mAo9PVluXlF1CDkFjroR0kxOFwPKuxg_c",
  },
});
