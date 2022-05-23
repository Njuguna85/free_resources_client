import localForage from "localforage";

localForage.config({
  name: "freeresources",
  driver: [localForage.LOCALSTORAGE],
  storeName: "freeresources",
});

async function savetoLF(key, item) {
  try {
    return await localForage.setItem(key, item);
  } catch (error) {
    return error;
  }
}

async function getFromLF(key) {
  try {
    return await localForage.getItem(key);
  } catch (error) {
    return error;
  }
}

async function removeFromLF(key) {
  try {
    await localForage.removeItem(key);
    return true;
  } catch (error) {
    return error;
  }
}

async function clearLF() {
  try {
    await localForage.clear();
    return true;
  } catch (error) {
    return error;
  }
}

export { savetoLF, getFromLF, removeFromLF, clearLF };
