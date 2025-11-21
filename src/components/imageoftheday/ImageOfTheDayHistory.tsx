import 'react-datepicker/dist/react-datepicker.css';

import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import DatePicker from 'react-datepicker';

import style from './ImageOfTheDayHistory.module.css';

interface Props {
    setSearchedDate: (date: Date) => void;
}

function ImageOfTheDayHistory(props: Props) {
    const { setSearchedDate } = { ...props };
    const [date, setDate] = useState<Date>(new Date());

    useEffect(() => {
        console.log(date);
    }, [date]);

    return (<>
        <Form.Group controlId="datePicker" className={style.formGroup}>
            <Form.Label>
                <h3>Search for images from the past</h3>
            </Form.Label>
            <div className={style.datePickerContainer}>
                <DatePicker
                    selected={date}
                    onChange={(d) => setDate(d!)}
                    className={`form-control ${style.datePicker}`}
                    dateFormat="MM/dd/yyyy"
                    maxDate={new Date()}
                />
                <Button className={style.datePickerButton} type='submit' size="sm" variant='dark' onClick={() => setSearchedDate(date)}>Search</Button>
            </div>
        </Form.Group>
    </>);
}

export default ImageOfTheDayHistory;
