export interface ITableProps {
  columns: ColumnType[]
  dataSource: { [key: string]: string }[]
}

export type ColumnType = {
  key: string
  title: string
  dataIndex: string
  render?: (text: string, record: any) => JSX.Element
}
