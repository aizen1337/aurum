'use client'
import React from 'react'
import { ThemeSwitcher } from './ThemeSwitcher'
import { DatePickerWithPresets } from './DatePicker'
import { OrganizationSwitcher, UserButton, useAuth} from '@clerk/nextjs'
import { Dices } from 'lucide-react'
import { Button } from './ui/button'
const Header = () => {
  const currentUser = useAuth()
  return (
    <header className='lg:h-16 h-32 dark:bg-zinc-900 bg-zinc-200 p-2 flex flex-col sm:flex-row items-center lg:justify-evenly w-full'>
        <div className="flex justify-center items-center">
        <ThemeSwitcher/>
        <DatePickerWithPresets/>
        </div>
        <div className="flex justify-center items-center gap-2">
        <OrganizationSwitcher hidePersonal={true}/>
        <UserButton/>
        {currentUser.orgRole == 'org:admin' && <Button variant={'ghost'}><Dices /></Button>}
        </div>
    </header>
  )
}

export default Header