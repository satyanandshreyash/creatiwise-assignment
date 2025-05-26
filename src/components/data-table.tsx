import * as React from "react"
import {
  DndContext,
  KeyboardSensor,
  MouseSensor,
  TouchSensor,
  closestCenter,
  useSensor,
  useSensors,
  type UniqueIdentifier,
} from "@dnd-kit/core"
import { restrictToVerticalAxis } from "@dnd-kit/modifiers"
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable"
import {
  type ColumnDef,
  type ColumnFiltersState,
  type Row,
  type SortingState,
  type VisibilityState,
  type Table,
  flexRender,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Table as ShadcnTable,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Tabs,
  TabsContent,
} from "@/components/ui/tabs"
import type { Article } from "@/types/types"
import { ArrowDownUp, ChevronDown, MoveDown, MoveUp } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu"
import wordpressLogo from "@/assets/wordpress.png"

const columns: ColumnDef<Article>[] = [
  {
    id: "select",
    header: ({ table }: { table: Table<Article> }) => (
      <div className="flex items-center justify-center">
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all rows"
        />
      </div>
    ),
    cell: ({ row }: { row: Row<Article> }) => (
      <div className="flex items-center justify-center">
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      </div>
    ),
    enableSorting: false,
  },
  {
    accessorKey: "title",
    header: "Title",
    cell: ({ row }: { row: Row<Article> }) => {
      return <div>{row.original.title}</div>
    },
    enableHiding: false,
  },
  {
    accessorKey: "keyword",
    header: "Keyword [Traffic]",
    cell: ({ row }: { row: Row<Article> }) => (
      <h1>{row.original.keyword} [{row.original.traffic}]</h1>
    ),
    enableSorting: true,
  },
  {
    accessorKey: "words",
    header: "Words",
    cell: ({ row }: { row: Row<Article> }) => (

      <h1>{row.original.words}</h1>

    ),
    enableSorting: true,
  },
  {
    accessorKey: "createdOn",
    header: "Created On",
    cell: ({ row }: { row: Row<Article> }) => (
      <h1 >
        {row.original.createdOn}
      </h1>
    )
  },
  {
    id: "action",
    header: "Action",
    cell: () => (
      <Button variant={"outline"} className="text-green-500 border-green-500 hover:bg-green-100 hover:text-green-500">View</Button>
    )
  },
  {
    id: "publish",
    header: "Publish",
    cell: () => (
      <div className="flex items-center justify-center">
        <DropdownMenu>
          <DropdownMenuTrigger className="w-auto">
            <div className="flex items-center justify-around p-2 gap-1 md:gap-2">
              <img src={wordpressLogo} className="rounded-full h-6 md:h-8" />
              <ChevronDown className="ml-auto size-8 md:size-4" />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-auto">
            <DropdownMenuItem>Wordpress</DropdownMenuItem>
            <DropdownMenuItem>Others</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    )
  }
]

export function DataTable({ data }: { data: Article[] }) {
  const [rowSelection, setRowSelection] = React.useState({})
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [pagination, setPagination] = React.useState({
    pageIndex: 0,
    pageSize: 10,
  })
  const sortableId = React.useId()
  const sensors = useSensors(
    useSensor(MouseSensor, {}),
    useSensor(TouchSensor, {}),
    useSensor(KeyboardSensor, {})
  )

  const dataIds = React.useMemo<UniqueIdentifier[]>(
    () => data?.map(({ id }) => id) || [],
    [data]
  )

  const table = useReactTable<Article>({
    data,
    columns,
    state: {
      sorting,
      columnVisibility,
      rowSelection,
      columnFilters,
      pagination,
    },
    getRowId: (row) => row.id.toString(),
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
  })

  return (
    <Tabs
      defaultValue="outline"
      className="w-full mt-6 flex-col justify-start gap-6"
    >
      <TabsContent
        value="outline"
        className="relative flex flex-col gap-4 overflow-auto px-4 lg:px-6"
      >
        <div className="overflow-hidden rounded-lg border">
          <DndContext
            collisionDetection={closestCenter}
            modifiers={[restrictToVerticalAxis]}
            sensors={sensors}
            id={sortableId}
          >
            <ShadcnTable>
              <TableHeader className="bg-muted sticky top-0 z-10">
                {table.getHeaderGroups().map((headerGroup) => (
                  <TableRow key={headerGroup.id}>
                    {headerGroup.headers.map((header) => {
                      return (
                        <TableHead key={header.id} colSpan={header.colSpan} onClick={header.column.getToggleSortingHandler()}>
                          <div className={`flex items-center gap-1 text-center`}>
                            {header.id !== "select" &&
                              header.id !== "title" &&
                              header.id !== "action" &&
                              header.id !== "publish" && (
                                <span className="mr-1">
                                  {(header.column.getIsSorted() &&
                                    { asc: <MoveUp size={16} />, desc: <MoveDown size={16} /> }[header.column.getIsSorted() as "asc" | "desc"]) || <ArrowDownUp size={18} />}
                                </span>
                              )}
                            {header.isPlaceholder
                              ? null
                              : flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                              )}
                          </div>
                        </TableHead>
                      )
                    })}
                  </TableRow>
                ))}
              </TableHeader>
              <TableBody className="**:data-[slot=table-cell]:first:w-8">
                {table.getRowModel().rows?.length ? (
                  <SortableContext
                    items={dataIds}
                    strategy={verticalListSortingStrategy}
                  >
                    {table.getRowModel().rows.map((row) => (
                      <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
                        {row.getVisibleCells().map((cell) => (
                          <TableCell key={cell.id}>
                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                          </TableCell>
                        ))}
                      </TableRow>
                    ))}
                  </SortableContext>
                ) : (
                  <TableRow>
                    <TableCell
                      colSpan={columns.length}
                      className="h-24 text-center"
                    >
                      No results.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </ShadcnTable>
          </DndContext>
        </div>
        <div className="lg:flex items-center justify-between px-4">
          <div className="lg:flex items-center gap-2">
            <div className="font-medium flex-1 text-sm lg:flex lg:border-r-2 border-r-blue-500 pr-2">
              {table.getFilteredSelectedRowModel().rows.length} of{" "}
              {table.getFilteredRowModel().rows.length} Article Title(s) selected
            </div>
            <div className="items-center gap-2 flex mt-1 lg:mt-0">
              <Label htmlFor="rows-per-page" className="text-sm font-medium">
                Show
              </Label>
              <Select
                value={`${table.getState().pagination.pageSize}`}
                onValueChange={(value) => {
                  table.setPageSize(Number(value))
                }}
              >
                <SelectTrigger size="sm" className="w-20" id="rows-per-page">
                  <SelectValue
                    placeholder={table.getState().pagination.pageSize}
                  />
                </SelectTrigger>
                <SelectContent side="top">
                  {[10, 20, 30, 40, 50].map((pageSize) => (
                    <SelectItem key={pageSize} value={`${pageSize}`}>
                      {pageSize}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <span className="text-sm font-medium">entries per page</span>
            </div>
          </div>
          <div className="flex items-center gap-8 lg:w-fit w-full">
            <div className="flex w-fit items-center justify-center text-sm font-medium mx-auto mt-4 lg:mt-0">
              <span className="border rounded-md pl-1 pr-4 mr-1 text-muted-foreground">{table.getState().pagination.pageIndex + 1}</span>{" / "}
              {table.getPageCount()}
            </div>
          </div>
        </div>
      </TabsContent>
    </Tabs>
  )
}
