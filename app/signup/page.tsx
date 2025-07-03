import { SignupForm } from "@/components/forms/SignupForm";
import Image from "next/image";

export default function SignUp() {
  return (
    <div className="grid md:grid-cols-2 h-screen">
      <div className="my-7 md:mx-10 mx-5 ">
        <div className=" w-full flex flex-col items-center gap-10">
          <Image
            src={
              "https://dreamschat.dreamstechnologies.com/html/template/assets/img/full-logo.svg"
            }
            alt="Logo"
            width={188}
            height={32}
            priority={true}
          />

          <div className="md:max-w-130 w-full shadow-md p-4 rounded bg-white pb-5">
            <h5 className="text-3xl font-bold mb-2">Register</h5>
            <h6 className="text-gray-500">
              Sign up to share moments with friends!
            </h6>
            <SignupForm />
          </div>
          <div className="mb-10 md:mb-0">
            <p>
              Already have a account?{" "}
              <span className="text-app-violet cursor-pointer">Sign in</span>
            </p>
          </div>
        </div>
      </div>
      <div className="border-5 hidden md:block">
        <h1>IMAGE CONTAINER</h1>
      </div>
    </div>
  );
}
