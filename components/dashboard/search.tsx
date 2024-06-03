"use client"

import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Dispatch, SetStateAction } from "react";

interface SearchProps {
    setQuery: Dispatch<SetStateAction<string>>
    query: string
    onQuery : (page? : number) => void
}

export const Search = ({  setQuery, query , onQuery }: SearchProps) => {


    const onSubmit = async (e: any) => {
        e.preventDefault()
        onQuery()
    }

    return (
        <div className="mx-auto">
            <form action="" className="flex items-center gap-x-8" onSubmit={(e) => onSubmit(e)}>
                <Input
                    className="w-96"
                    value={query}
                    placeholder="Frontend Developer"
                    type="text"
                    onChange={(e) => setQuery(e.target.value)}
                />
                <Button disabled={query.length <= 1} type="submit">
                    Search
                </Button>
            </form>
        </div>
    )
}