import { QueryFunctionContext } from '@tanstack/react-query'
import axios from 'axios'
interface IQueryKey {
  url: string
  page?: number
  pageSize?: number
  body?: string
}
const base_api = axios.create({
  baseURL: 'http://gateway.dourtal.co/api/',
})

const GetData = async ({ queryKey }: QueryFunctionContext) => {
  const { url, page, pageSize } = queryKey?.[0] as IQueryKey

  const res = await base_api.get(url, { params: { page, pageSize } })

  return res.data
}

const UpdateData = async (data: any) => {
  const pageContent = { Widgets: data }
  console.log(JSON.stringify(pageContent))
  const response = await fetch(
    'http://gateway.dourtal.co/api/cms/v1.0/{site}/pages/ca320982-04cf-47dc-233c-08dbb45cb49a',
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(pageContent),
    }
  )

  if (!response.ok) {
    throw new Error('An error occurred while updating the data.')
  }
  console.log('response is: ', response.json())
}

export const services = {
  GetData,
  UpdateData,
}
