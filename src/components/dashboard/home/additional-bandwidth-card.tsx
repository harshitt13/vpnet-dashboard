import { useNavigate } from "react-router-dom"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Skeleton } from "@/components/ui/skeleton"
import { IconInfoCircle } from '@tabler/icons-react'

export function AdditionalBandwidthCard(profileData:any){
  const navigate = useNavigate();
  function navigateToShop() {
    navigate("/shop");
  }
  const data = profileData
  return(
    <AlertDialog>
      <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Additional Premium Bandwidth</AlertDialogTitle>
            <AlertDialogDescription>
            Should you exhaust your monthly premium bandwidth, you have the option to buy more to maintain uninterrupted service. This extra bandwidth is permanent and will be utilized whenever your monthly allocation is depleted.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction>Okay</AlertDialogAction>
          </AlertDialogFooter>
      </AlertDialogContent>
      <Card className="bg-inherit col-span-2">
        <CardHeader className="pb-1">
          <div className="flex">
            <CardDescription className="text-xs md:text-sm font-semibold text-secondary-foreground">Excess Bandwidth</CardDescription>
            <AlertDialogTrigger  className="mt-1 ml-auto hover:cursor-pointer hover:text-muted-foreground"><IconInfoCircle size={16} /></AlertDialogTrigger>
          </div>
          <CardTitle className="text-xl md:text-2xl font-bold">
            {data ? `${(data.data.attributes.bandwidth_surplus/1024/1024/1024).toFixed(2)} GB`: <Skeleton className="mt-2 w-[100px] h-[24px] rounded-full" />}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-xs font-semibold text-muted-foreground">
            {data ? `of excess bandwidth availaible` :<Skeleton className="mt-2 w-[128px] h-[8px] rounded-full" />}
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={navigateToShop} className="w-full h-8">
            <p className="text-xs md:text-sm font-semibold">Buy More</p>
          </Button>
        </CardFooter>
      </Card>
    </AlertDialog>
  )
}