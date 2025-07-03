import toast from "react-hot-toast";
import {
  SOMETHING_WENT_WRONG,
  ACTION_COMPLETED_SUCCESSFULLY,
} from "../constants/app-constant";
type TAppToast = {
  message?: string;
  toastType: "success" | "error";
};
export const appToast = ({ message, toastType }: TAppToast) => {
  if (!message) {
    message =
      toastType === "error"
        ? SOMETHING_WENT_WRONG
        : ACTION_COMPLETED_SUCCESSFULLY;
  }
  toast[toastType](message);
};
