import type { ReactNode } from "react";

type DataTableProps = {
  headers: string[];
  rows: ReactNode[][];
  /** Screen-reader description of what the table contains. */
  caption: string;
};

/**
 * One table style for schedules, contacts, and deliverables.
 * Scrolls horizontally on narrow screens instead of squeezing columns.
 */
export function DataTable({ headers, rows, caption }: DataTableProps) {
  return (
    <div className="overflow-x-auto rounded-lg border border-line">
      <table className="w-full min-w-xl border-collapse text-left text-sm">
        <caption className="sr-only">{caption}</caption>
        <thead className="bg-surface">
          <tr>
            {headers.map((header) => (
              <th
                key={header}
                scope="col"
                className="border-b border-line px-4 py-3 font-semibold whitespace-nowrap"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex} className="border-b border-line last:border-b-0">
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className="px-4 py-3 align-top">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
