import axios from "axios";

axios.defaults.baseURL = `https://www.omdbapi.com`;

axios.interceptors.request.use(
    async (config: any) => {
        if (typeof window !== "undefined") {
            config.headers["Content-Type"] = "application/json";
            config.headers["Accept"] = "*/*";
            config.headers["Accept-Language"] = "en";
        }
        return config;
    },
    (err) =>{
        if(err){
            console.error("Something went wrong.")
        }
        return Promise.reject(err);
    }
);

axios.interceptors.response.use(
    (res) => res,
    (error) => {
      if (error && typeof error.response === "undefined") {
        console.error("error", "Something went wrong.");
      } else {
        switch (error.response.status) {
          case 429:
            console.error("Too many request.");
            break;
          case 422:
            console.error("Please check your data.");
            break;
          default:
            console.error("Something went wrong.");
        }
        const expectedError =
          error.response &&
          error.response.status >= 400 &&
          error.response.status < 500;
        if (!expectedError) {
          console.error("Something went wrong.");
        }
      }
      return Promise.reject(error);
    }
  );

  export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    patch: axios.patch,
    delete: axios.delete
  };
  