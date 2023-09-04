import classNames from 'classnames'
import Text from '../Text/Text'
import { ITableProps } from './Table.type'

const Table = ({ columns, dataSource }: ITableProps) => {
  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead>
        <tr>
          {columns.map((column, index) => (
            <th
              key={index}
              className=" bg-slate-50 py-2 border border-slate-200">
              <Text
                fontSize={10}
                fontWeight={500}
                customCSS="text-start p-2 "
                color="text-slate-400">
                {column.title}
              </Text>
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="bg-white divide-slate-200">
        {dataSource.map((row: any) => (
          <tr key={row.key}>
            {columns.map((column: any) => {
              return (
                <td
                  key={`${row.key}-${column.key}`}
                  className="border border-slate-200">
                  {column.render
                    ? column.render(row[column.dataIndex], row)
                    : row[column.dataIndex]}
                </td>
              )
            })}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table
