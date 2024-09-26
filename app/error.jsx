'use client'
import {Button} from '../components/ui/button'

export default function Error({error, reset}) {
  console.log({error})
  return (
    <div className='mx-auto flex flex-col items-center justify-center text-center'>
      <p className='my-4 text-2xl font-semibold'>Something went wrong!</p>
      <Button
        onClick={reset}
        className='rounded-lg border-2 bg-blue-500 px-8 py-2 text-white shadow-lg'
      >
        Refresh
      </Button>
    </div>
  )
}
