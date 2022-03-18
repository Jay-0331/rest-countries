import Card from "../components/card";
import { useRef, useState, useEffect } from 'react'
import Search from "../components/searchBar";
import { HiArrowUp } from 'react-icons/hi'

const Home= ({ countries }) => {
    const searchInput = useRef()
    const [filteredCountries, setFilteredCountries] = useState([]);

    useEffect(() => {
        setFilteredCountries(countries.sort((a,b) => (a.name.common > b.name.common)? 1 : -1))
    }, []);

    const filter = (e) => {
        if (e.target.name === "country") {
            setFilteredCountries(countries.filter((item) => {
                return item.name.common.toLowerCase().includes(e.target.value.toLowerCase())
            }))
        }
        else {
            setFilteredCountries(countries.filter((item) => {
                if(e.target.id === 'all') return item
                return item.region.toLowerCase().includes(e.target.id.toLowerCase())
            }))
        }
    }

    const totop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    return (
        <>
            <div onClick={totop} className="fixed flex items-center justify-center bottom-6 right-6 rounded-full w-10 h-10 bg-[#ecf0f3] dark:bg-gray-900 shadow-light-neumorphism-xl dark:shadow-dark-neumorphism-xl hover:shadow-light-neumorphism-l dark:hover:shadow-dark-neumorphism-l active:shadow-light-inner-neumorphism-l dark:active:shadow-dark-inner-neumorphism-l"><HiArrowUp className="fill-current" size={24}/></div>
            <Search filterCountry={filter}/>
            <div className=" max-w-7xl my-10 md:my-14 place-items-center grid gap-12 md:gap-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xxl:grid-cols-4">
                {countries !== undefined && filteredCountries.map((item) => {
                    return <Card key={item.cca3} country={item}/>
                })}   
            </div>
        </>
    )
}

export async function getStaticProps() {
    try {
        let res = await fetch('https://restcountries.com/v3.1/all?fields=name,capital,population,region,flags,cca3');
        let countries = await res.json()
        
        return {
            props: {
                countries,
            },
        }
    }
    catch {
        console.log("Error while fetching Data")
    }

}

export default Home;