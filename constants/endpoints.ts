const baseUrl = process.env.NEXT_PUBLIC_API_URL;

export const Endpoints = {
    REGISTER : baseUrl + "user/signup",
    LOGIN : baseUrl + "user/login",
    JOBS : baseUrl + "dashboard/list?limit=10&",
}