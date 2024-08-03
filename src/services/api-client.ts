import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "11a7d075cb724711809430dd9f4c64ec",
  },
});
