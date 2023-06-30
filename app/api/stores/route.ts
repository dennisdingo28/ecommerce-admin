import prismadb from "@/lib/prismaDb";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function POST(req: Request){
    try{
        const {userId} = auth();
        const body = await req.json();
        console.log(userId,body);
        const {name} = body;

        if(!userId)
            return new NextResponse("Unauthorized",{status:401});
        if(!name)
            return new NextResponse("Name is required",{status:400});

        const store = await prismadb.store.create({
            data:{
                name,
                userId,
            }
        });

        return NextResponse.json(store);

    }catch(err){
        console.log(`[STORES_POST]`,err);
        return new NextResponse("Internal error",{status:500});
    }
}