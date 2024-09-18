import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export default async function handler(req: { method: string; query: { query: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { liquorName: string; id: number; costPerBottle: number; requisitionCost: number | null; }[]): void; new(): any; }; }; }) {
    if (req.method === 'GET') {
        const { query } = req.query;

        const results = await prisma.liquor.findMany({
            where: {
                liquorName: {
                    contains: query,
                },
            },
        })
        res.status(200).json(results)
    }
}