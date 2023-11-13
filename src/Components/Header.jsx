import React from 'react'

export default function Header() {
  return (
    <header className='bg-slate-300 shadow-md'>
        <div className='flex justify-between  items-center max-w-6xl mx-auto'>
        <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
            <span className='text-slate-500'>Lokesh</span>
            <span className='text-slate-700'>Estate</span>
        </h1>

        <form>
            <input type='text' placeholder='search...' className='' ></input>
        </form>
        </div>
    </header>
  )
}
