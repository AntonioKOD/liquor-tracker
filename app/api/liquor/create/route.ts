import { NextResponse } from "next/server";
import {PrismaClient} from '@prisma/client';
import { parse } from "path";
import {v4 as uuidv4} from 'uuid';




const prisma = new PrismaClient();

export async function POST(req: { json: () => any; }) {
  const body = await req.json();
  const { liquorName, costPerBottle } = body;

  if (!liquorName || !costPerBottle) {
    return new Response(JSON.stringify({ success: false, message: 'Missing fields' }), { status: 400 });
  }

  try {
    const newLiquor = await prisma.liquor.create({
      data: {
        liquorName,
        costPerBottle: parseFloat(costPerBottle),
        emptyBottles: 0, 
      },
    });

    return new Response(JSON.stringify({ success: true, liquor: newLiquor }), { status: 200 });
  } catch (error) {
    console.error('Error creating liquor:', error);
    return new Response(JSON.stringify({ success: false, message: 'Failed to add liquor' }), { status: 500 });
  }
}

