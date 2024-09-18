'use client'
import {useSearchParams} from 'next/navigation'
import {PrismaClient} from '@prisma/client'


const prisma = new PrismaClient();

const SearchResults = () => {
    const searchParams = useSearchParams()

    const searchQuery = searchParams.get('q');

    const searchResults = async () => {
        if (searchQuery) {
            return await prisma.liquor.findMany({
                where: {
                    liquorName: {contains: searchQuery},
                }
            })
        }
        return [];
    }

    return (
        <div>
            
            
        </div>
    )
}