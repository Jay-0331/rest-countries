import Link from "next/link";
import { useRouter } from "next/router";
import { HiArrowNarrowLeft, HiHome } from "react-icons/hi";

const Country= ({ country, borderCountries }) => {
    const router = useRouter();

    const back = () => {
        router.back()
    }

    const home = () => {
        router.push("/")
    }

    return (
        <section className="flex flex-col max-w-7xl m-6 md:m-12">
            <div className="flex mb-12">
                <button className="flex justify-between shadow-light-neumorphism-xl dark:shadow-dark-neumorphism-xl p-2 rounded-lg hover:shadow-light-neumorphism-l dark:hover:shadow-dark-neumorphism-l active:shadow-light-inner-neumorphism-l dark:active:shadow-dark-inner-neumorphism-l" onClick={back}>
                    <HiArrowNarrowLeft size={24}/>
                </button>
                <button className="flex justify-between ml-6 shadow-light-neumorphism-xl dark:shadow-dark-neumorphism-xl p-2 rounded-lg hover:shadow-light-neumorphism-l dark:hover:shadow-dark-neumorphism-l active:shadow-light-inner-neumorphism-l dark:active:shadow-dark-inner-neumorphism-l" onClick={home}>
                    <HiHome size={24}/>
                </button>
            </div>
            <div className="grid grid-flow-row-dense md:grid-cols-2 gap-16 md:gap-28">    
                <article className="aspect-[3/2] p-2 shadow-light-neumorphism-xl dark:shadow-dark-neumorphism-xl rounded-xl">
                    <img className="aspect-[3/2] w-full h-full object-cover object-center rounded-lg" src={country.flags.svg} alt={country.name + " flag"}/>
                </article>
                <article className="flex flex-col justify-center">
                    <div className=" mb-8">
                        <h1 className="text-xl md:text-3xl font-extrabold">{country.name}</h1>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between mr-20 ">
                        <div className="text-sm md:text-base">
                            <p className=" leading-[30px]"><strong>Native Name: </strong>{country.nativeName}</p>
                            <p className=" leading-[30px]"><strong>Population: </strong>{country.population.toLocaleString('en-US')}</p>
                            <p className=" leading-[30px]"><strong>Region: </strong>{country.region}</p>
                            <p className=" leading-[30px]"><strong>Sub Region: </strong>{country.subregion}</p>
                            <p className=" leading-[30px]"><strong>Capital: </strong>{country.hasOwnProperty('capital') ? country.capital : "-"}</p>
                        </div>
                        <div className="mt-6 md:mt-0 text-sm md:text-base">
                            <p className=" leading-[30px]"><strong>Top Level Domain: </strong>{country.topLevelDomain}</p>
                            <p className=" leading-[30px]"><strong>Currencies: </strong>{country.hasOwnProperty('currencies')?country.currencies[0].name : '-'}</p>
                            <p className=" leading-[30px]"><strong>Languages:</strong>{country.languages.map((item , i) => {
                                if(i === country.languages.length - 1 ){
                                    return ' ' + item.name
                                }
                                else {
                                    return ' ' + item.name + ','
                                }
                            })}</p>
                        </div>
                    </div>
                    <div className="flex  flex-col md:flex-row mt-20 text-sm md:text-base">
                        <strong className="flex items-center min-w-max h-10">Border countries:</strong>
                        <div className="flex flex-wrap">
                            {borderCountries.status === 400 ? <div className=" cursor-default w-max h-10 p-2 rounded-xl shadow-light-neumorphism-l mx-2">No Border Countries</div> : borderCountries.map(element => {
                                return(
                                    <Link key={element.alpha3Code} href={"/" + element.alpha3Code}>
                                        {element.name}
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
                </article>
            </div>
            <div>
                
            </div>
        </section>
    )
}

export async function getStaticPaths() {
    try {
        let res = await fetch('https://restcountries.com/v2/all?fields=alpha3Code');
        let countries = await res.json()
        let paths = countries.map(item => ({
            params: { countryCode: item.alpha3Code },
        }))
        return {
            paths,
            fallback: true,

        }
    }
    catch {
        console.log("Error while fetching Data")
    }
}

export async function getStaticProps({ params }) {
    try {
        let res = await fetch(`https://restcountries.com/v2/alpha/${params.countryCode}`);
        let country = await res.json()
        res = await fetch(`https://restcountries.com/v2/alpha?codes=${country.borders}`);
        let borderCountries = await res.json()

        return {
            props: {
                country,
                borderCountries,
            },
        }
    }
    catch {
        console.log("Error while fetching Data")
    }
}

export default Country;