import ImageOfTheDayContainer from '../components/imageoftheday/ImageOfTheDayContainer.tsx';
import style from './HomePage.module.css';

function getMonthName(monthIndex: number): string {
    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December',
    ];
    return monthNames[monthIndex];
}

function getDayName(dayIndex: number): string {
    const dayNames = [
        'Sunday', 'Monday', 'Tuesday', 'Wednesday',
        'Thursday', 'Friday', 'Saturday',
    ];
    return dayNames[dayIndex];
}

function HomePage() {
    let date = new Date();

    return (
        <div>
            <p className={style.date}>LIVE {getDayName(date.getDay())}, {getMonthName(date.getMonth())} {date.getDate()}, {date.getHours()}:{date.getMinutes()}, {date.getTimezoneOffset()} UTC</p>
            <div className={style.line}></div>
            <div>
                <ImageOfTheDayContainer />
            </div>
        </div>
    );
}

export default HomePage;
