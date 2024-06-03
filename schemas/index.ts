import * as z from "zod";

export const LoginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(1, { message: "Required" }),
});

export const RegisterSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6, { message: "Minimum 6 characters required" }),
    confirmPassword: z.string().min(6, { message: "Minimum 6 characters required" }),
}).refine(data => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
});
