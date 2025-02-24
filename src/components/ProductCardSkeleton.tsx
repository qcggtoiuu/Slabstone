import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Skeleton } from "./ui/skeleton";

const ProductCardSkeleton = () => {
  return (
    <Card className="w-full max-w-[280px] bg-white overflow-hidden flex flex-col">
      <CardHeader className="p-0">
        <div className="relative aspect-[1/2] overflow-hidden">
          <Skeleton className="w-full h-full" />
        </div>
      </CardHeader>
      <CardContent className="p-4 flex-1">
        <div className="h-full flex flex-col">
          <Skeleton className="h-6 w-3/4 mb-2" />
          <div className="flex-1 space-y-2">
            <Skeleton className="h-4 w-2/3" />
            <Skeleton className="h-4 w-1/2" />
            <Skeleton className="h-4 w-3/4" />
          </div>
          <Skeleton className="h-6 w-1/3 mt-auto" />
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 mt-auto">
        <Skeleton className="h-10 w-full" />
      </CardFooter>
    </Card>
  );
};

export default ProductCardSkeleton;
