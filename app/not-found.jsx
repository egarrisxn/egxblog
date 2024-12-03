import Link from 'next/link'
import {Button} from '../components/ui/button'

export default function NotFound() {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center'>
      <p className='pt-2 text-2xl font-semibold'>Page not found!</p>
      <br />
      <Button asChild variant='reset'>
        <Link href='/'>Home</Link>
      </Button>
    </div>
  )
}

//
