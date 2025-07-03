import toast from "react-hot-toast";

type TStaticResponseData = keyof typeof staticResponseData;
const staticResponseData = {
  FA001: "Please,Accept Terms and Conditions",
};

type TResponseType = "success" | "error";

const staticResponseType = (code: TStaticResponseData): TResponseType => {
  let type: TResponseType;
  if (code.startsWith("S")) {
    type = "success";
  } else {
    type = "error";
  }
  return type;
};

export const staticResponseMessage = (
  code: TStaticResponseData,
  duration = 2500
) => {
  return toast[staticResponseType(code)](staticResponseData[code], {
    duration,
  });
};
