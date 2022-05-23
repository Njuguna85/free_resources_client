import { getFromLF } from "../../store/storage/localForage";

const baseUrl = import.meta.env.VITE_APP_URL;

const getUserDetails = async () => {
  const user = await getFromLF("user");
  if (!user) return null;
  return user;
};

export { baseUrl, getUserDetails };
