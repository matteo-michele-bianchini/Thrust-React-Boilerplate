import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { appTitle, projectName } from '@/utils/constants/uiText'
import { LogIn, UserCircle } from 'lucide-react'
import { Link } from 'react-router'
import type { Route } from './+types/homepage'

// eslint-disable-next-line no-empty-pattern
export function meta({ }: Route.MetaArgs) {
  return [
    { title: appTitle },
    { name: 'description', content: 'Welcome to React Router!' }
  ]
}

export default () => {
  return <div className='w-full relative z-10 flex flex-col h-full justify-between items-center gap-8 px-4 text-center'>

    <Card className='shadow-lg border rounded-2xl bg-background/60 mt-[10vh] sm:mt-[10vh] md:mt-[15vh] lg:mt-[20vh]'>
      <CardContent className='p-5 px-5 sm:px-10'>
        <h1 className='text-5xl font-bold text-center tracking-tight'>
          {`${projectName}`}
        </h1>
      </CardContent>
    </Card>

    <div className='grid grid-cols-2 gap-4 sm:gap-30 w-full max-w-xl mb-[25vh] sm:mb-[20vh] md:mb-[25vh] lg:mb-[35vh]'>

      <Link to={'/login'} >
        <Button className='w-full' >
          <LogIn />Login
        </Button>
      </Link>

      <Link to={'/user'} >
        <Button className='w-full' >
          <UserCircle />Personal Area
        </Button>
      </Link>

    </div>
  </div>
}