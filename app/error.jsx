'use client'
import {Button} from '../components/ui/button'

export default function Error({error, reset}) {
  console.log({error})
  return (
    <div className='mx-auto flex flex-col items-center justify-center text-center'>
      <p className='my-4 text-2xl font-semibold'>Something went wrong!</p>
      <Button variant='reset' onClick={reset}>
        Refresh
      </Button>
    </div>
  )
}
