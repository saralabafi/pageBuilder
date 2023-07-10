'use client'
import Link from 'next/link'
import Card from "../../components/Card/Card"
import { Grid } from 'components/Grid/Grid'
export default function Home() {
  return (
    <div className="flex-col w-full h-screen bg-white text-black">
      <div className="flex justify-center items-center">
        <Link className="mx-4 cursor-pointer" href="/testView">
          For view test Page
        </Link>
      </div>
      <div className='grid '></div>
      {/* <div className='grid  grid-cols-1 md:grid-cols-3 gap-10'> */}

      <Grid
        columns='grid-cols-3'
        customCSS='md:grid-cols-3'
        gap='gap-16'
      >
        <Card  >
          <div>
            <h1>test btn</h1>
            <h1>test btn</h1>
            <h1>test btn</h1>
          </div>
          <div>

            <h1>test btn</h1>
            <h1>test btn</h1>
          </div>
        </Card>
        <Card  >
          <div>
            <h1>test btn</h1>
            <h1>test btn</h1>
            <h1>test btn</h1>
          </div>
          <div>

            <h1>test btn</h1>
            <h1>test btn</h1>
          </div>
        </Card>
        <Card  >
          <div>
            <h1>test btn</h1>
            <h1>test btn</h1>
            <h1>test btn</h1>
          </div>
          <div>

            <h1>test btn</h1>
            <h1>test btn</h1>
          </div>
        </Card>
      </Grid>


      {/* </div> */}
    </div>
  )
}
