"use server";

import { Endpoints } from "@/constants/endpoints";
import { RegisterSchema } from "@/schemas";
import * as z from "zod";
import axios from "axios";

export const Register = async (values: z.infer<typeof RegisterSchema>) => {
    const validatedFields = RegisterSchema.safeParse(values);

    if (!validatedFields.success) return { error: "Invalid Fields!" }

    try {
        const res = await axios.post(Endpoints.REGISTER, { email: validatedFields.data.email, password: validatedFields.data.password })
        return { success: res?.data?.message }
    } catch (error: any) {
        return { error: error?.response?.data?.message }
    }
};
