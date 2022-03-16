import React,{ useState, useEffect, useRef } from 'react'
import { HiChevronDown, HiChevronUp } from 'react-icons/hi'

const Select = ({filterCountry}) => {
    const [selected, setSelected] = useState("Filter by Region");
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(0);
    const option = useRef();

    const clicked = (e) => {
        setSelected(e.target.innerText)
        filterCountry(e)
    }

    useEffect(() => {
        window.addEventListener('click', (e) => {
            if(e.target.id !== 'select') {
                setIsOpen(false)
            }
        })

        return () => {
            window.removeEventListener('click', (e) => {
                if(e.target.id !== 'select') {
                    setIsOpen(false)
                }
            })
        };
    }, []);


  return (
    // <select name="region" className="appearance-none w-2/12 shadow-light-neumorphism-xl bg-transparent p-3 outline-none rounded-lg">
    //     <option value="all">All</option>
    //     <option value="africa">Africa</option>
    //     <option value="america">America</option>
    //     <option value="asia">Asia</option>
    //     <option value="europe">Europe</option>
    //     <option value="oceania">Oceania</option>
    // </select>
    <div id="select" className={`flex flex-col justify-center relative w-1/2 mt-4 md:mt-0 md:w-2/12 text-sm ${isOpen ? "shadow-light-inner-neumorphism-l dark:shadow-dark-inner-neumorphism-l" : "shadow-light-neumorphism-xl dark:shadow-dark-neumorphism-xl"} bg-transparent py-3 px-4 rounded-lg hover:shadow-light-inner-neumorphism-l dark:hover:shadow-dark-inner-neumorphism-l`} onClick={() => setIsOpen(!isOpen)}>
        <span className="pointer-events-none">{selected}</span>
        {isOpen ?
        <>
            <HiChevronUp size={24} className="absolute top-3 right-3 pointer-events-none fill-current"/>
            <div ref={option} id="options" className="absolute z-10 h-max top-14 left-0 shadow-light-neumorphism-l dark:shadow-dark-neumorphism-l p-2 rounded-lg bg-[#ecf0f3] dark:bg-gray-900 w-full">
                <div onClick={clicked} id="all" className="cursor-pointer rounded-md p-2 hover:shadow-light-inner-neumorphism-l dark:hover:shadow-dark-inner-neumorphism-l">All Region</div>
                <div onClick={clicked} id="africa" className="cursor-pointer rounded-md p-2 hover:shadow-light-inner-neumorphism-l dark:hover:shadow-dark-inner-neumorphism-l">Africa</div>
                <div onClick={clicked} id="america" className="cursor-pointer rounded-md p-2 hover:shadow-light-inner-neumorphism-l dark:hover:shadow-dark-inner-neumorphism-l">America</div>
                <div onClick={clicked} id="asia" className="cursor-pointer rounded-md p-2 hover:shadow-light-inner-neumorphism-l dark:hover:shadow-dark-inner-neumorphism-l">Asia</div>
                <div onClick={clicked} id="europe" className="cursor-pointer rounded-md p-2 hover:shadow-light-inner-neumorphism-l dark:hover:shadow-dark-inner-neumorphism-l">Europe</div>
                <div onClick={clicked} id="oceania" className="cursor-pointer rounded-md p-2 hover:shadow-light-inner-neumorphism-l dark:hover:shadow-dark-inner-neumorphism-l">Oceania</div>
            </div>
        </> 
        : 
        <HiChevronDown size={22} className=" absolute top-3 right-3 pointer-events-none fill-current"/>
        }
    </div>

  )
}

export default Select