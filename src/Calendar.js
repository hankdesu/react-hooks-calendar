import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 500px;
`;

const Header = styled.div`
    align-items: center;
    background-color: #ff5752;
    box-sizing: border-box;
    color: #fff;
    display: flex;
    font-size: 16px;
    font-weight: bold;
    height: 40px;
    justify-content: space-between;
    padding: 0 10px;
    width: 100%;
`;

const MonthButton = styled.div`
    cursor: pointer;
`;

const Body = styled.div`
    background-color: #ff9591;
    box-sizing: border-box;
    color: #fff;
    display: flex;
    flex-wrap: wrap;
    font-size: 16px;
    padding: 10px;
    width: 100%;
`;

const DayWrapper = styled.div`
    align-items: center;
    background-color: ${({ today }) => today ? '#fff' : 'auto'};
    color: ${({ today }) => today ? '#ff9591' : 'auto'};
    display: flex;
    height: 50px;
    justify-content: center;
    width: 14.2%;
`;

const Calendar = () => {
    const DAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const DAYS_OF_LEAP = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const WEEKS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
    const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const [date, setDate] = useState(new Date());
    const [day, setDay] = useState(date.getDate());
    const [month, setMonth] = useState(date.getMonth());
    const [year, setYear] = useState(date.getFullYear());
    const [startDate, setStartDate] = useState(getStartDate());

    useEffect(() => {
        setDay(date.getDate());
        setMonth(date.getMonth());
        setYear(date.getFullYear());
        setStartDate(getStartDate());
      }, [date]);

    function getStartDate() {
        return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    }

    function onMonthChange(e) {
        const { id } = e.target;
        if (id === 'prev') {
            setDate(new Date(year, month - 1, day));
        } else if (id === 'next') {
            setDate(new Date(year, month + 1, day));
        }
    }

    function renderDays() {
        const days = ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) ? DAYS_OF_LEAP : DAYS;
        const blankDate = new Array(startDate).fill('blank');
        const daysOfMonth = [...blankDate, ...new Array(days[month])];
        const today = new Date();
        return daysOfMonth.map((day, index) => {
            const value = index - blankDate.length + 1;
            return (
                <DayWrapper today={year === today.getFullYear() && month === today.getMonth() && value === today.getDate()}>
                    {day !== 'blank' ? value : ''}
                </DayWrapper>
            );
        })
    }

    return (
        <Wrapper>
            <Header>
                <MonthButton id="prev" onClick={onMonthChange}>Prev Month</MonthButton>
                <div>{year} {MONTHS[month]}</div>
                <MonthButton id="next" onClick={onMonthChange}>Next Month</MonthButton>
            </Header>
            <Body>
                {WEEKS.map(week => <DayWrapper>{week}</DayWrapper>)}
                {renderDays()}
            </Body>
        </Wrapper>
    )
};

export default Calendar;
