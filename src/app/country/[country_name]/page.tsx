export default function CountryName({ params }: any) {
    const countries: {
        name: string;
        capital: string;
        population: number;
    }[] = [
        { 
            name: "Pakistan", 
            capital: "Islamabad", 
            population: 241000000 },

        { 
            name: "India", 
            capital: "Delhi", 
            population: 1428000000 },
        { 
            name: "Japan", 
            capital: "Tokyo", 
            population: 124600000 },
        { 
            name: "China", 
            capital: "Beijing", 
            population: 1426000000 },
        { 
            name: "Iran", 
            capital: "Tehran", 
            population: 89000000 },
    ];

    function findCountry(country_url: string) {
        return countries.find(country => country.name.toLowerCase() === country_url.toLowerCase());
    }

    const result = findCountry(params.country_name);

    return (
        <div>
            {result ? ( 
                <>
                    <h1>Country Name: {result.name}</h1>
                    <h1>Country Capital: {result.capital}</h1>
                    <h1>Country Population: {result.population}</h1>
                </>
            ) : (
                <h1>Country Not Found</h1>
            )}
        </div>
    );
}
