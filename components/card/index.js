/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'

const Card = ({country}) => {
  
  return (
    <div className="cursor-pointer flex flex-col justify-self-center w-64 md:w-[17rem] h-80 rounded-lg shadow-light-neumorphism-xl dark:shadow-dark-neumorphism-xl transition-transform duration-500 ease-in-out hover:scale-[1.03] hover:shadow-light-neumorphism-2xl dark:hover:shadow-dark-neumorphism-2xl">
      <Link href={"/" + country.cca3} passHref>
        <div className="w-full h-1/2">
            <img className="h-full w-full rounded-t-lg object-center object-cover" src={country.flags.png} alt={country.name.offical + " flag"} />
        </div>
        <div className="h-1/2 p-6">
            <p className="text-base font-extrabold mb-3">{country.name.common}</p>
            <p className=" text-[14px] leading-[22px]"><strong>Population:</strong> {country.population.toLocaleString('en-US')}</p>
            <p className=" text-[14px] leading-[22px]"><strong>Region:</strong> {country.region}</p>
            <p className=" text-[14px] leading-[22px]"><strong>Capital:</strong> {country.capital.length === 0 ? "-" : country.capital}</p>
        </div>
      </Link>
    </div>
  )
}

export default Card