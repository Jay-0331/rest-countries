/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { useRouter } from "next/router";

const Card = ({country}) => {
  const router = useRouter()
  const route = () => {
    router.push("/" + country.cca3)
  }
  
  return (
      <div onClick={route} className="cursor-pointer flex flex-col justify-self-center w-[17rem] h-80 rounded-lg shadow-light-neumorphism-xl dark:shadow-dark-neumorphism-xl transition-transform duration-500 ease-in-out hover:scale-[1.03] hover:shadow-light-neumorphism-2xl dark:hover:shadow-dark-neumorphism-2xl">
          <div className="w-full h-1/2">
            <img className="h-full w-full rounded-t-lg object-center object-cover" src={country.flags.png} alt={country.name.offical + " flag"} />
          </div>
          <div className="h-1/2 p-6">
            <p className="text-base font-extrabold mb-3">{country.name.common}</p>
            <p className=" text-[14px] leading-[22px]"><strong>Population:</strong> {country.population.toLocaleString('en-US')}</p>
            <p className=" text-[14px] leading-[22px]"><strong>Region:</strong> {country.region}</p>
            <p className=" text-[14px] leading-[22px]"><strong>Capital:</strong> {country.capital.length === 0 ? "-" : country.capital}</p>
          </div>
      </div>
  )
}

export default Card