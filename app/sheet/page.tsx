
import { UserButton } from "@clerk/nextjs";
import React from "react";
import { checkRole } from "@/utils/roles";
import  Link from "next/link";
import { useUser } from "@clerk/nextjs";


const {isLoaded, user, isSignedIn} = useUser();
export default async function Page(){
    
    
 const role = user?.publicMetadata?.role;
    if(role === 'admin'){
        return(
            <div>
                <div><UserButton/></div>
                <Link href='/admin/dashboard'>View Dashboard</Link>
            </div>
        )
    }
    return (
        <div>Hello
            <div><UserButton/></div>
    
            
            
        </div>
    
    )
}