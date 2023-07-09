import prismadb from "@/lib/prismaDb";


export const getSalesCount = async (storeId: string)=>{
    const salesCounts= await prismadb.order.count({
        where:{
            storeId,
            isPaid: true,
        },
    });

    return salesCounts;
}