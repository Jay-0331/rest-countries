import React from 'react'
import Select from './Select'
import { HiSearch } from "react-icons/hi";

const Search = ({filterCountry}) => {

  return (
    <div className="max-w-7xl mt-6 md:mt-10 w-full flex flex-col md:flex-row justify-between">
        <div className="relative flex w-full md:w-4/12">
          <input id="search" name="country" type="text" placeholder="Search for a Country..." className="py-3 pl-12 pr-4 w-full placeholder:text-sm placeholder:text-current shadow-light-inner-neumorphism-xl focus-visible:shadow-light-inner-neumorphism-l hover:shadow-light-inner-neumorphism-l dark:shadow-dark-inner-neumorphism-xl dark:focus-visible:shadow-dark-inner-neumorphism-l dark:hover:shadow-dark-inner-neumorphism-l rounded-lg bg-transparent appearance-none outline-none" onChange={filterCountry}/>
          <HiSearch size={24} className="absolute top-3 left-3 fill-current"/>
        </div>
        <Select filterCountry={filterCountry}/>
    </div>
  )
}

export default Search