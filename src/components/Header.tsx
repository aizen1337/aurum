import React from 'react'
import { ThemeSwitcher } from './ThemeSwitcher'
import { DatePickerWithPresets } from './DatePicker'
import { UserButton } from '@clerk/nextjs'

const Header = async () => {
  return (
    <header className='h-16 dark:bg-zinc-900 bg-zinc-200 p-2 flex items-center justify-evenly w-full'>
        <div className="flex justify-center items-center">
        <ThemeSwitcher/>
        <DatePickerWithPresets/>
        </div>
        <div className="flex justify-center items-center">
        <UserButton/>
        </div>
    </header>
  )
}

export default Header