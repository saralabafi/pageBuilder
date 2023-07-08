import * as React from 'react'
import { useState, useRef, useMemo, useEffect } from 'react'
// import DataService from "./services/TutorialService";
import { useTable } from 'react-table'
import Pagination from '@material-ui/lab/Pagination'

interface ITableProps {
  history: any
  DataService: any
  pageSizes: any
  columns: any
  costumeClassName: any
}
const Table = (props: ITableProps) => {
  const [tutorials, setTutorials] = useState([])
  const [searchTitle, setSearchTitle] = useState('')
  const tutorialsRef: any = useRef()

  const [page, setPage] = useState(1)
  const [count, setCount] = useState(0)
  const [pageSize, setPageSize] = useState(3)

  // const pageSizes = [3, 6, 9];

  tutorialsRef.current = tutorials
  type SearchType = {
    target: {
      value: any
    }
  }

  const onChangeSearchTitle = (e: SearchType): void => {
    const searchTitle = e.target.value
    setSearchTitle(searchTitle)
  }

  const getRequestParams = (searchTitle: any, page: number, pageSize: any) => {
    const params: any = {}

    if (searchTitle) {
      params['title'] = searchTitle
    }

    if (page) {
      params['page'] = page - 1
    }

    if (pageSize) {
      params['size'] = pageSize
    }

    return params
  }

  const retrieveTutorials = () => {
    const params = getRequestParams(searchTitle, page, pageSize)

    props.DataService.getAll(params)
      .then((response: { data: { tutorials: any; totalPages: any } }) => {
        const { tutorials, totalPages } = response.data

        setTutorials(tutorials)
        setCount(totalPages)

        console.log(response.data)
      })
      .catch((e: any) => {
        console.log(e)
      })
  }

  useEffect(retrieveTutorials, [page, pageSize])

  const refreshList = () => {
    retrieveTutorials()
  }

  const removeAllTutorials = () => {
    type NewType = any

    props.DataService.removeAll()
      .then((response: { data: any }) => {
        console.log(response.data)
        refreshList()
      })
      .catch((e: NewType) => {
        console.log(e)
      })
  }

  const findByTitle = () => {
    setPage(1)
    retrieveTutorials()
  }

  const openTutorial = (rowIndex: string | number) => {
    const id = tutorialsRef.current[rowIndex].id

    props.history.push('/tutorials/' + id)
  }

  const deleteTutorial = (rowIndex: number) => {
    const id = tutorialsRef.current[rowIndex].id

    props.DataService.remove(id)
      .then((response: any) => {
        props.history.push('/tutorials')

        const newTutorials = [...tutorialsRef.current]
        newTutorials.splice(rowIndex, 1)

        setTutorials(newTutorials as any)
      })
      .catch((e: any) => {
        console.log(e)
      })
  }

  const handlePageChange = (event: any, value: any) => {
    setPage(value)
  }

  const handlePageSizeChange = (event: { target: { value: any } }) => {
    setPageSize(event.target.value)
    setPage(1)
  }

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns: props.columns,
      data: tutorials,
    })

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
                {headerGroups.map((headerGroup) => (
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
                ))}
              </thead>
              <tbody {...getTableBodyProps()}>
                {rows.map((row, i) => {
                  prepareRow(row)
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
                })}
              </tbody>
            </table>
          </div>

          <div className="">
            <div className="grid grid-flow-row-dense grid-cols-2 grid-rows-1">
              <div className="">
                {'Items per Page: '}{' '}
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
                {' '}
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
              {' '}
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={removeAllTutorials}>
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
