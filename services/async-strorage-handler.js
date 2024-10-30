import AsyncStorage from "@react-native-async-storage/async-storage";

export const setToStorage = async (key, data) => {
  try {
    return await AsyncStorage.setItem(key, JSON.stringify(data)).then(
      () => {
        console.log("data saved");
      },
      () => {
        console.log("error saving data");
      }
    );
  } catch (error) {
    alert(error);
  }
};

export const getFromStorage = async (key) => {
  try {
    const res = await AsyncStorage.getItem(key);
    if (res !== null) return JSON.parse(res);
  } catch (error) {
    alert(error);
  }
};
