"use client";

import { SignupFormValues, signupSchema } from "@/schemas/signup.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Camera, Eye, EyeOff, Mail, Phone, User } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { GoogleIcon } from "../icons/GoogleIcon";
import { FacebookIcon } from "../icons/FacebookIcon";
import { useState } from "react";
import toast from "react-hot-toast";
import { staticResponseMessage } from "@/lib/utils/static-response-message";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../../graphql/index";
import { appToast } from "@/lib/utils/toast";

export const SignupForm = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [hasAcceptedTerms, setHasAcceptedTerms] = useState(false);
  const [createUser, { loading, data }] = useMutation(CREATE_USER);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema),
  });

  const toggleAcceptedTerms = () => {
    setHasAcceptedTerms(!hasAcceptedTerms);
  };

  const onSubmit = async (formData: SignupFormValues) => {
    if (!hasAcceptedTerms) {
      staticResponseMessage("FA001");
      return;
    }
    await createUser({
      variables: {
        input: formData,
      },
    });

    appToast({ message: data?.createAuth, toastType: "success" });
    toggleAcceptedTerms();
    reset();
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-5 flex flex-col gap-5"
      >
        <div className="flex flex-col md:flex-row gap-3">
          <div className="md:flex-1 relative">
            <Label className="mb-3 font-semibold">First Name</Label>
            <Input
              type="text"
              {...register("firstName")}
              className="border-gray-300 focus-visible:ring-0 pl-8"
            />
            <User className="absolute top-9 left-2 " size={16} color="grey" />
            <p className="text-red-500 text-xs mt-1.5">
              {errors.firstName?.message}
            </p>
          </div>
          <div className="md:flex-1 relative">
            <Label className="mb-3 font-semibold">Last Name</Label>
            <Input
              type="text"
              {...register("lastName")}
              className="border-gray-300 focus-visible:ring-0 pl-8"
            />
            <User className="absolute top-9 left-2 " size={16} color="grey" />
            <p className="text-red-500 text-xs mt-1.5">
              {errors.lastName?.message}
            </p>
          </div>
        </div>
        <div className="relative">
          <Label className="mb-3 font-semibold">Email</Label>
          <Input
            type="text"
            {...register("email")}
            className="border-gray-300 focus-visible:ring-0 pl-8"
          />
          <Mail className="absolute top-9 left-2 " size={16} color="grey" />
          <p className="text-red-500 text-xs mt-1.5">{errors.email?.message}</p>
        </div>
        <div className="relative">
          <Label className="mb-3 font-semibold">Phone Number</Label>
          <Input
            type="text"
            {...register("phoneNumber")}
            className="border-gray-300 focus-visible:ring-0 pl-8"
          />
          <Phone className="absolute top-9 left-2 " size={16} color="grey" />
          <p className="text-red-500 text-xs mt-1.5">
            {errors.phoneNumber?.message}
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-3">
          <div className="relative flex-1">
            <Label className="mb-3 font-semibold">User Name</Label>
            <Input
              type="text"
              {...register("userName")}
              className="border-gray-300 focus-visible:ring-0 pl-8"
            />
            <User className="absolute top-9 left-2 " size={16} color="grey" />
            <p className="text-red-500 text-xs mt-1.5">
              {errors.userName?.message}
            </p>
          </div>
          <div className="relative flex-1">
            <Label className="mb-3 font-semibold">Password</Label>
            <Input
              type={isPasswordVisible ? "text" : "password"}
              {...register("password")}
              className="border-gray-300 focus-visible:ring-0 pl-8"
            />
            {isPasswordVisible ? (
              <Eye
                className="absolute top-9 left-2 cursor-pointer"
                size={16}
                color="grey"
                onClick={() => setIsPasswordVisible(false)}
              />
            ) : (
              <EyeOff
                className="absolute top-9 left-2 cursor-pointer"
                size={16}
                color="grey"
                onClick={() => setIsPasswordVisible(true)}
              />
            )}
            <p className="text-red-500 text-xs mt-1.5">
              {errors.password?.message}
            </p>
          </div>
        </div>
        <div className="flex flex-wrap items-center">
          <Checkbox
            className="data-[state=checked]:bg-app-violet mr-2 "
            onClick={toggleAcceptedTerms}
          />{" "}
          I agree to{" "}
          <span className="text-app-violet cursor-pointer mr-1">
            Terms of use
          </span>{" "}
          &
          <span className="text-app-violet cursor-pointer ml-1">
            Privacy policy
          </span>
        </div>
        <div>
          <Button
            disabled={loading}
            type="submit"
            className="bg-app-violet w-full hover:bg-violet-600 cursor-pointer"
          >
            {loading ? "Submitting..." : "Sign Up"}
          </Button>
        </div>
        <div className="flex items-center">
          <hr className="mr-5 flex-1" />
          <p className="text-gray-500 font-semibold">or sign up with</p>
          <hr className="ml-5 flex-1" />
        </div>
        <div className="flex gap-4 h-10">
          <div className="flex-1 flex items-center justify-center gap-3 bg-sidebar text-black font-semibold shadow-md hover:bg-sidebar-ring cursor-pointer rounded">
            <GoogleIcon size={22} />
            <p>Google</p>
          </div>
          <div className="flex-1 flex items-center justify-center gap-3 bg-sidebar text-black font-semibold shadow-md hover:bg-sidebar-ring cursor-pointer rounded">
            <FacebookIcon size={24} />
            <p>Facebook</p>
          </div>
        </div>
      </form>
    </div>
  );
};
