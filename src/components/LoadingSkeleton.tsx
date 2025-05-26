import { Input } from "./ui/input";
import { Skeleton } from "./ui/skeleton";
import { TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import { Table } from "./ui/table";

export const LoadingSkeleton = () => {
    return (
        <div className="flex justify-center w-full h-full">
            <div className="flex w-full h-screen bg-[#F0F5FA]">
                <div className="hidden md:block w-16 lg:w-64 bg-white shadow-md py-4">
                    <Skeleton className="w-36 h-12 rounded-xl mx-auto mb-4 bg-gray-200"></Skeleton>
                    <div className="p-2 flex items-center space-x-3 border rounded-full mx-4">
                        <Skeleton className="h-8 w-8 rounded-full bg-gray-200" />
                        <div className="hidden lg:block">
                            <Skeleton className="h-4 w-24 bg-gray-200 rounded"></Skeleton>
                        </div>
                    </div>
                    <div className="mt-6 space-y-4 px-2">
                        {[...Array(6)].map((_, i) => (
                            <div key={i} className="flex items-center p-2 space-x-3 rounded">
                                <Skeleton className="h-7 w-7 bg-gray-200 rounded-full"></Skeleton>
                                <Skeleton className="hidden lg:block h-4 w-32 bg-gray-200 rounded"></Skeleton>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex-1 p-4 md:p-6 w-full">
                    <div className="bg-white rounded-lg shadow-xl h-full overflow-hidden">
                        <div className="p-4 md:p-6 border-b mx-auto flex flex-col items-center">
                            <Skeleton className="h-6 w-48 md:h-8 md:w-64 bg-gray-200 rounded-lg"></Skeleton>
                            <Skeleton className="mt-2 md:mt-4 h-6 w-48 md:h-8 md:w-1/2 bg-gray-200 rounded-lg"></Skeleton>
                            <Input className="w-48 h-6 md:h-8 md:w-64 mt-2 md:mt-4 animate-pulse" />
                        </div>

                        <div className="overflow-x-auto">
                            <Table>
                                <TableHeader className="bg-muted sticky top-0 z-10">
                                    <TableRow className="">
                                        {[...Array(6)].map((header) => {
                                            return (
                                                <TableHead key={header} >
                                                    <Skeleton className="h-6 w-32 bg-gray-200 rounded"></Skeleton>
                                                </TableHead>
                                            )
                                        })}
                                    </TableRow>
                                </TableHeader>
                                <TableBody className="**:data-[slot=table-cell]:first:w-8">
                                    {[...Array(8)].map((row) => (
                                        <TableRow key={row} className="">
                                            {[...Array(6)].map((cell) => (
                                                <TableCell key={cell}>
                                                    <Skeleton className="h-6 w-32 bg-gray-200 rounded"></Skeleton>
                                                </TableCell>
                                            ))}
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>

                        </div>

                        <div className="px-4 md:px-6 py-3 md:py-4 border-t flex flex-col md:flex-row items-center justify-between gap-2">
                            <Skeleton className="h-3 md:h-6 w-24 md:w-64 bg-gray-200 rounded-lg"></Skeleton>
                            <div className="flex space-x-1 md:space-x-2">
                                {[...Array(2)].map((i) => (
                                    <Skeleton key={i} className="h-4 md:h-8 w-4 md:w-8 bg-gray-200 rounded"></Skeleton>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}