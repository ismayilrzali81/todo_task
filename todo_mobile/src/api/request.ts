import { BASE_URL_ANDROID, BASE_URL_IOS } from "@env";
import axios, { AxiosError } from "axios";
import { Platform } from "react-native";
import Toast from "react-native-toast-message";

export const request = axios.create({
  baseURL: Platform.OS === "ios" ? BASE_URL_IOS : BASE_URL_ANDROID,
  responseType: "json",
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
  },
});

request.interceptors.response.use(
  (response: any) => {
    return response;
  },
  (error: AxiosError) => {
    if (error.response) {
      Toast.show({
        type: "error",
        text1: "An error occurred",
        text2: "Please try again.",
      });
    } else if (error.request) {
      Toast.show({
        type: "error",
        text1: "No response received",
        text2: "Please check your network connection.",
      });
    } else {
      Toast.show({
        type: "error",
        text1: "An error occurred",
        text2: "While setting up the request.",
      });
    }

    return Promise.reject(error);
  }
);
