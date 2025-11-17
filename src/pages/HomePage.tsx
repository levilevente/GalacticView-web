import React from 'react';
import ImageOfTheDayContainer from '../components/imageoftheday/ImageOfTheDayContainer.tsx';

const dateStyle: React.CSSProperties = {
    fontSize: '22px',
    color: '#000',
    fontWeight: 'bold',
    marginLeft: '10rem',
    marginTop: '40px',
};

const lineStyle: React.CSSProperties = {
    width: '87rem',
    height: '20px',
    borderBottom: '1px solid #939393',
    position: 'absolute',
    marginLeft: '10rem',
    marginTop: '0px',
};

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
            <p style={dateStyle}>LIVE {getDayName(date.getDay())}, {getMonthName(date.getMonth())} {date.getDate()}, {date.getHours()}:{date.getMinutes()}, {date.getTimezoneOffset()} UTC</p>
            <div style={lineStyle}></div>
            <div>
                <ImageOfTheDayContainer />
            </div>
        </div>
    );
}

export default HomePage;
