import axios from "axios";
import { createRefresh, useAuthHeader } from "react-auth-kit";
import { api_refresh } from "../config";

export const refreshApi = createRefresh({
    interval: 2,
    refreshApiCallback: async ({
          authToken,
          authTokenExpireAt,
          refreshToken,
          refreshTokenExpiresAt,
          authUserState
        }) => {
        try {
          const {data} = await axios.post(api_refresh,
            {
              refresh: refreshToken,
              oldAuthToken: authToken,
            }
          );
          console.log("refresh success");
          return {
            isSuccess: true,
            newAuthToken: data.access,
            newAuthTokenExpireIn: data.newAuthTokenExpireIn
          }
        } catch (error) {
          console.log("bad refresh");
          console.error(error);
          return {
            isSuccess: false,
            newAuthToken: "",
          }
        }
    }
});