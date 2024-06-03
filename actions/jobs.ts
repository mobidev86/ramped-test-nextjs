"use server"

import { Endpoints } from "@/constants/endpoints"
import { getCookie } from "@/utils/cookies"
import axios from "axios"

export const Jobs = async (query: string, page = 1) => {
    const url = Endpoints.JOBS + "page=" + page + "&keyword=" + query
    const token = getCookie("token")
    try {
        const res = await axios.get(url, { headers: { "Authorization": `${token}`, 'Cache-Control': 'no-cache' } })
        return { success: "success", data: res?.data?.data?.rows, pagination: { totalPages: res?.data?.data?.meta?.pages, currentPage: res?.data?.data?.meta?.page } }
    } catch (error: any) {
        return { error: error?.response?.data?.message }
    }
}