"use client"

import { Logout } from "@/actions/logout"
import { Button } from "../ui/button"

export const LogoutBtn = () => {

    const onLogout = () => {
        Logout()
    }
    return (
        <Button variant={'secondary'} onClick={onLogout}>
            Logout
        </Button>
    )
}