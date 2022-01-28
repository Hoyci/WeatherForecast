import { IoWater } from 'react-icons/io5'
import { BsSunFill } from 'react-icons/bs'
import './week.css'


export default function Week() {
    return (
        <div className='container'>
            <HeaderWeek />

            <ContentWeek day={'Saturday'} RelativeHumidity={25} min={12} max={27}/>
            <ContentWeek day={'Sunday'} RelativeHumidity={55} min={8} max={19}/>
            <ContentWeek day={'Monday'} RelativeHumidity={17} min={13} max={22}/>
            <ContentWeek day={'Tuesday'} RelativeHumidity={22} min={15} max={29}/>
            <ContentWeek day={'Wednesday'} RelativeHumidity={18} min={13} max={23}/>
            <ContentWeek day={'Thursday'} RelativeHumidity={27} min={13} max={25}/>
            <ContentWeek day={'Friday'} RelativeHumidity={32} min={11} max={22}/>
        </div>
    )
}

function HeaderWeek()  {
    return (
        <div className='headerWeek'>
            <p>Day of week</p>
            <p>Relative Humidity</p>
            <p>Forecast</p>
            <p>Min</p>
            <p>Max</p>
        </div>
    )
}

function ContentWeek({day, RelativeHumidity, min, max}) {
    return (
        <div className='contentWeek'>
                <p className='dayOfWeek'>{day}</p> 
                <div className='RelativeHumidity'>
                    <IoWater color='#6A9FD7' fontSize='15px' />
                    <p>{RelativeHumidity}%</p>
                </div>
                <BsSunFill color='#F3C107' fontSize='15px' />
                <p className='min'> {min}°C</p>
                <p className='max'>{max}°C</p>
        </div>
    )
}