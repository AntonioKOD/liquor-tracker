
import {PrismaClient} from '@prisma/client';




const prisma = new PrismaClient();

export async function POST(req: { json }) {
  const body = await req.json();
  const { liquorName, price } = body;

  if (!liquorName || !price) {
    return new Response(JSON.stringify({ success: false, message: 'Missing fields' }), { status: 400 });
  }

  try {
    const newLiquor = await prisma.liquor.create({
      data: {
        name: liquorName,
        price: price,

      },
    });

    return new Response(JSON.stringify({ success: true, liquor: newLiquor }), { status: 200 });
  } catch (error) {
    console.error('Error creating liquor:', error);
    return new Response(JSON.stringify({ success: false, message: 'Failed to add liquor' }), { status: 500 });
  }
}

