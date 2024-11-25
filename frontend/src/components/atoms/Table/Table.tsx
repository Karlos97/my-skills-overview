interface TableDataProps {
  children: React.ReactNode;
  className?: string;
  colSpan?: number;
}

interface TableElementChildren {
  children: React.ReactNode;
}

export const TableWrapper = ({ children }: TableElementChildren) => (
  <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    {children}
  </div>
);

export const TableHeader = ({ children }: TableElementChildren) => (
  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
    {children}
  </thead>
);

export const TableHead = ({ children }: TableElementChildren) => (
  <th scope="col" className="px-4 py-2">
    {children}
  </th>
);

export const Table = ({ children }: TableElementChildren) => (
  <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
    {children}
  </table>
);

export const TableBody = ({ children }: TableElementChildren) => (
  <tbody>{children}</tbody>
);

export const TableRow = ({ children }: TableElementChildren) => (
  <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
    {children}
  </tr>
);

export const TableData = ({
  children,
  className,
  colSpan = 1,
}: TableDataProps) => (
  <td className={`whitespace-nowrap px-4 py-2 ${className}`} colSpan={colSpan}>
    {children}
  </td>
);
