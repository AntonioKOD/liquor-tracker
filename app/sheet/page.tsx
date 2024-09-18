
import { UserButton } from "@clerk/nextjs";
import React from "react";
import { checkRole } from "@/utils/roles";
import  Link from "next/link";
import SearchBar from "../components/Search";

export default function Page(){

    if(checkRole('admin')){
        return(
            <div>
                <div><UserButton/></div>
                <Link href='/admin/dashboard'>View Dashboard</Link>
                <SearchBar/>
            </div>
        )
    }
    return (
        <div>Hello
            <div><UserButton/></div>
            <SearchBar/>
            
            
        </div>
    
    )
}