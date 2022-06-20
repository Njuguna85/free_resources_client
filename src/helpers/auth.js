import { baseUrl } from "./utils";
import axios from "axios";
import {
  getFromLF,
  removeFromLF,
  savetoLF,
} from "../../store/storage/localForage";

const login = async (payLoad) => {
  try {
    const response = await axios.post(`${baseUrl}/auth/`, {
      ...payLoad,
    });

    if (!response.data.data) return { error: response.data.error.message };

    const { token: tokenData, fullName, email, userId } = response.data.data;

    const { token, exp } = tokenData;

    const user = {
      fullName: fullName,
      userId: userId,
      email: email,
    };

    await removeFromLF("token");

    await savetoLF("token", { token, exp });

    await removeFromLF("user");

    await savetoLF("user", user);

    return { user };
  } catch (err) {
    console.log(err);
    const error =
      err.response.data.error ||
      "An error occurred Login in.Please try again or Contact the System Admin ";
    return { error: error };
  }
};

const register = async (payLoad) => {
  try {
    const response = await axios.post(`${baseUrl}/users`, { payLoad });
    if (response.data.error) return { error: response.data.error.message };

    const { token: tokenData } = response.data.data.data;

    const { token, exp } = tokenData;

    await removeFromLF("token");

    await savetoLF("token", { token, exp });

    return { token };
  } catch (err) {
    return {
      error:
        err.response.data.error ||
        "An error occurred Registering user. Please try again or contact the System Admin.",
    };
  }
};

const fetchCurrentUser = async () => {
  try {
    return await getFromLF("user");
  } catch (err) {
    return "Could not get user";
  }
};

async function tryLogin() {
  try {
    const token = await getFromLF("token");
    if (token) return token;
  } catch (error) {
    return "Could not authenticate User";
  }
}

export { login, register, fetchCurrentUser, tryLogin };
