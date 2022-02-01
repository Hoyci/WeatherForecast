import Header from './Header/Header'
// import Cards from './Cards/Cards'
import Week from './Week/Week'

import './content.css'


export default function Content({ weatherData, closest }) {
    return (
        <main>
            <Header />
            {/* <Cards /> */}
            <Week weatherData={weatherData} closest={closest}/>
        </main>
    )
}