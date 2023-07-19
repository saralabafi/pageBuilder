import * as React from 'react'
import Pagination from '@material-ui/lab/Pagination'
import { ITableProps } from './Table.type'
import { useTableComponent } from './Table.biz'

const Table = (props: ITableProps) => {
  const {
    onChangeSearchTitle,
    removeAllData,
    findByTitle,
    handlePageChange,
    handlePageSizeChange,
    searchTitle,
    page,
    count,
    pageSize,
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    tableiteminpage,
  } = useTableComponent(props)

  return (
    <>
      <div className="grid grid-flow-row auto-rows-max">
        <div>
          <div className="grid grid-flow-row-dense grid-cols-2 grid-rows-1">
            <div className="">
              <input
                type="text"
                className="form-control"
                placeholder="Search by title"
                value={searchTitle}
                onChange={onChangeSearchTitle}
              />
            </div>
            <div className="">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                type="button"
                onClick={findByTitle}>
                Search
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="relative overflow-x-auto">
            <table
              className="border-collapse border border-slate-400 w-full"
              {...getTableProps()}>
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                {headerGroups.map(
                  (headerGroup: {
                    getHeaderGroupProps: () => React.JSX.IntrinsicAttributes &
                      React.ClassAttributes<HTMLTableRowElement> &
                      React.HTMLAttributes<HTMLTableRowElement>
                    headers: any[]
                  }) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                      {headerGroup.headers.map((column) => (
                        <th
                          scope="col"
                          className="border border-slate-300"
                          {...column.getHeaderProps()}>
                          {column.render('Header')}
                        </th>
                      ))}
                    </tr>
                  )
                )}
              </thead>
              <tbody {...getTableBodyProps()}>
                {rows.map(
                  (row: {
                    getRowProps: () => React.JSX.IntrinsicAttributes &
                      React.ClassAttributes<HTMLTableRowElement> &
                      React.HTMLAttributes<HTMLTableRowElement>
                    cells: any[]
                  }) => {
                    prepareRow(row as any)
                    return (
                      <tr
                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                        {...row.getRowProps()}>
                        {row.cells.map((cell) => {
                          return (
                            <td className="px-6 py-4" {...cell.getCellProps()}>
                              {cell.render('Cell')}
                            </td>
                          )
                        })}
                      </tr>
                    )
                  }
                )}
              </tbody>
            </table>
          </div>

          <div className="">
            <div className="grid grid-flow-row-dense grid-cols-2 grid-rows-1">
              <div className="">
                {tableiteminpage('itemperpage') + ':'}
                <select onChange={handlePageSizeChange} value={pageSize}>
                  {props.pageSizes.map(
                    (
                      size:
                        | boolean
                        | React.Key
                        | React.ReactElement<
                            any,
                            string | React.JSXElementConstructor<any>
                          >
                        | Iterable<React.ReactNode>
                        | null
                        | undefined
                    ) => (
                      <option key={size as any} value={size as any}>
                        {size}
                      </option>
                    )
                  )}
                </select>
              </div>
              <div className="">
                <Pagination
                  className="my-3"
                  count={count}
                  page={page}
                  siblingCount={1}
                  boundaryCount={1}
                  variant="outlined"
                  shape="rounded"
                  onChange={handlePageChange}
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-6 gap-4">
            <div>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={removeAllData}>
                Remove All
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Table