import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string;
  wallet: string;
  lp: string;
  trade: string;
  referral: string;
  total: string;
};

const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "wallet",
    header: "15,422",
  },
  {
    accessorKey: "lp",
    header: "LP",
  },
  {
    accessorKey: "trade",
    header: "Trade",
  },
  {
    accessorKey: "referral",
    header: "Referral",
  },
  {
    accessorKey: "total",
    header: "Total",
  },
];

const payments: Payment[] = [
  {
    id: "489e1d42",
    wallet: "100",
    lp: "100",
    trade: "100",
    referral: "100",
    total: "100",
  },
  {
    id: "489e1d42",
    wallet: "100",
    lp: "100",
    trade: "100",
    referral: "100",
    total: "100",
  },
  {
    id: "489e1d42",
    wallet: "100",
    lp: "100",
    trade: "100",
    referral: "100",
    total: "100",
  },
  {
    id: "489e1d42",
    wallet: "100",
    lp: "100",
    trade: "100",
    referral: "100",
    total: "100",
  },
  {
    id: "489e1d42",
    wallet: "100",
    lp: "100",
    trade: "100",
    referral: "100",
    total: "100",
  },
  {
    id: "489e1d42",
    wallet: "100",
    lp: "100",
    trade: "100",
    referral: "100",
    total: "100",
  },
  {
    id: "489e1d42",
    wallet: "100",
    lp: "100",
    trade: "100",
    referral: "100",
    total: "100",
  },
  {
    id: "489e1d42",
    wallet: "100",
    lp: "100",
    trade: "100",
    referral: "100",
    total: "100",
  },
  {
    id: "489e1d42",
    wallet: "100",
    lp: "100",
    trade: "100",
    referral: "100",
    total: "100",
  },
  {
    id: "489e1d42",
    wallet: "100",
    lp: "100",
    trade: "100",
    referral: "100",
    total: "100",
  },
  {
    id: "489e1d42",
    wallet: "100",
    lp: "100",
    trade: "100",
    referral: "100",
    total: "100",
  },
];

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="rounded-md border border-[#222428]">
      <Table>
        <TableHeader className="border-[#222428]">
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
                className="border-[#222428]"
              >
                {row.getVisibleCells().map((cell, index) => (
                  <TableCell key={cell.id} className="">
                    <span>
                      {index !== 0 && (
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0 5.75024L1.47456 6.4056C2.89451 7.03467 4.03734 8.15727 4.69068 9.56711L5.54427 11.4058L6.39785 9.56711C7.05119 8.15929 8.19402 7.03669 9.61397 6.4056L11.0885 5.75024L9.61397 5.09488C8.19402 4.46581 7.05119 3.34321 6.39785 1.93337L5.54427 0.0947266L4.69068 1.93337C4.03734 3.34119 2.89451 4.46379 1.47456 5.09488L0 5.75024Z"
                            fill="#FAE24D"
                          />
                        </svg>
                      )}

                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </span>
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}

export default function TableComponent() {
  return (
    <div className="container mx-auto">
      <DataTable columns={columns} data={payments} />
    </div>
  );
}
