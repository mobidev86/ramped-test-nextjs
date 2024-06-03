"use server"

import { removeCookie } from "@/utils/cookies"
import { redirect } from "next/navigation"

export const Logout = () => {
    removeCookie("token")
    removeCookie("email")
    redirect("/auth/login")
}