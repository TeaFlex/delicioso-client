import axios from "axios";
import { createRefresh, useAuthHeader } from "react-auth-kit";

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
          const {data} = await axios.post('/api/v1/token',
            {
              refresh: refreshToken,
              // oldAuthToken: authToken,
            }
          );
          return {
            isSuccess: true,
            newAuthToken: data.access,
            // newAuthTokenExpireIn: data.newAuthTokenExpireIn
          }
        } catch (error) {
          console.error(error);
          return {
            isSuccess: false,
            newAuthToken: "",
          }
        }
    }
});