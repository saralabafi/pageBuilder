'use client'
import React, { useMemo, useRef, useState } from 'react'
import Table from 'components/Table/Table'
import Link from 'next/link'
import TutorialDataService from '../../components/Table/TutorialService'

export default function Home() {
  const pageSizes = [5, 10]
  const columns: any = useMemo(
    () => [
      {
        Header: 'Title',
        accessor: 'title',
      },
      {
        Header: 'Description',
        accessor: 'description',
      },
      {
        Header: 'Status',
        accessor: 'published',
        Cell: (props: { value: any }) => {
          return props.value ? 'Published' : 'Pending'
        },
      },
    ],
    []
  )
  return (
    <div className="flex-col -full">
      <div className="flex justify-center items-center">
        <Link className="mx-4 cursor-pointer" href="/testView">
          For view test Page
        </Link>
        <Table
          history={''}
          DataService={TutorialDataService}
          pageSizes={pageSizes}
          columns={columns}
          costumeClassName={''}
        />
      </div>
    </div>
  )
}
