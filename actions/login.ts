"use server";

import { Endpoints } from "@/constants/endpoints";
import { LoginSchema } from "@/schemas";
import { setCookie } from "@/utils/cookies";
import axios from "axios";
import * as z from "zod";

export const Login = async (values: z.infer<typeof LoginSchema>) => {
  const validatedFields = LoginSchema.safeParse(values);

  if (!validatedFields.success) return { error: "Invalid Fields!" };

  try {
    const res : any = await axios.post(Endpoints.LOGIN , validatedFields.data , {headers : {'Cache-Control': 'no-cache'}})
    setCookie("token" , res?.data?.data?.token)
    setCookie("email" , res?.data?.data?.email)
    return {success : res?.data?.message}
  } catch (error : any) {
    return {error : error?.response?.data?.message}
  }
};
