import AsyncStorage from "@react-native-async-storage/async-storage";

export const setToStorage = async (key, data) => {
  try {
    const value = JSON.stringify(data);
    return await AsyncStorage.setItem(key, value);
  } catch (error) {
    alert(error);
  }
};

export const getFromStorage = async (key) => {
  try {
    const res = await AsyncStorage.getItem(key);
    return res !== null ? JSON.parse(res) : null;
  } catch (error) {
    alert(error);
  }
};
