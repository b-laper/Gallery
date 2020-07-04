import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID qpOzc1XPIrvfblfrCHJhSSpIl1CKDe48YDmPCCPzkd8",
  },
});
