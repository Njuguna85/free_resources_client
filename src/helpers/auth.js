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

    const { token: tokenData, fullName, email } = response.data.data.data;

    const { token, exp } = tokenData;

    const user = {
      fullName: fullName,
      email: email,
    };

    await removeFromLF("token");

    await savetoLF("token", { token, exp });

    await removeFromLF("user");

    await savetoLF("user", user);

    return { user };
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
    const user = await getFromLF("user");
    const token = await getToken();

    if (user && token) return { user, token };
  } catch (error) {
    return "Could not authenticate User";
  }
}

export { login, register, fetchCurrentUser, tryLogin };
