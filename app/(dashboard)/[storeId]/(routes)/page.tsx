import { getGraphRevenue } from "@/actions/get-graph-revenue";
import { getSalesCount } from "@/actions/get-sales-count";
import { getStockCount } from "@/actions/get-stock-count";
import { getTotalRevenue } from "@/actions/get-total-revenue";
import { Overview } from "@/components/Overview";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Heading from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { formatter } from "@/lib/utils";
import { CreditCard, DollarSign, Package } from "lucide-react";

const DashboardPage = async({params}:{params:{storeId: string}}) => {

  const totalRevenue = await getTotalRevenue(params.storeId);
  const salesCount = await getSalesCount(params.storeId);
  const stockCount = await getStockCount(params.storeId);
  const graphRevenue = await getGraphRevenue(params.storeId);

  return (
    <div className="flex-col">
        <div className="flex-1 space-y-4 p-6 pt-6">
          <Heading title="Dashboard" description="Overview your store"/>
          <Separator/>
          <div className="grid gap-4 grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row justify-between items-cente space-y-4">
                <CardTitle className="text-sm font-medium">
                  Total Revenue
                </CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground"/>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">
                  {formatter.format(totalRevenue)}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row justify-between items-cente space-y-4">
                <CardTitle className="text-sm font-medium">
                  Sales
                </CardTitle>
                <CreditCard className="h-4 w-4 text-muted-foreground"/>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">
                  {salesCount}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row justify-between items-cente space-y-4">
                <CardTitle className="text-sm font-medium">
                  Products in stock
                </CardTitle>
                <Package className="h-4 w-4 text-muted-foreground"/>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">
                  {stockCount}
                </div>
              </CardContent>
            </Card>
          </div>
          <Card className="col-span-4">
            <CardHeader>
              <CardTitle>
                Overview
              </CardTitle>
              <CardContent className="pl-2">
                <Overview data={graphRevenue}/>
              </CardContent>
            </CardHeader>
          </Card>
        </div>
    </div>
  )
}

export default DashboardPage;