'use client'
import React, { useState } from 'react'
import { getWordFromApi } from '../lib/api'
import ResultView from './ResultView'

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState([])

  const handleSearch = async () => {
    try {
      const data = await getWordFromApi(searchTerm)
      if (data) {
        setSearchResults(data)
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  return (
    <div>
      <div className='flex mt-5'>
        <h1 className='text-zinc-200 text-3xl font-bold'>Dictio</h1>
      </div>
      <div className='mt-10 '>
        <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className='px-2 py-4 outline-none rounded-md bg-zinc-700 focus:border-indigo-600 focus:ring-indigo-600 focus:ring-2 text-zinc-200 w-2/3 md:w-4/5' placeholder='Try typing a word' type="search" />
        <button onClick={handleSearch} className='text-zinc-200 bg-indigo-600 hover:bg-violet-500 px-4 py-4 rounded-md ml-2 ' >search</button>
        <ResultView searchResults={searchResults} />
      </div>
    </div>
  )
}

export default Header