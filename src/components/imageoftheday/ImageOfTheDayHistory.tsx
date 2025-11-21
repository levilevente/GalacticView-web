import 'react-datepicker/dist/react-datepicker.css';

import { useMemo, useState } from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import DatePicker from 'react-datepicker';

import { toUTCDateOnly } from '../../utils/dateUtils.ts';
import style from './ImageOfTheDayHistory.module.css';

interface Props {
    setSearchedDate: (date: Date) => void;
}

function ImageOfTheDayHistory(props: Props) {
    const { setSearchedDate } = props;
    const todayUtc = useMemo(() => toUTCDateOnly(new Date()), []);
    const [date, setDate] = useState<Date>(todayUtc);
    const minDate = new Date(Date.UTC(1995, 5, 16));

    return (
        <>
            <Form.Group controlId="datePicker" className={style.formGroup}>
                <Form.Label>
                    <h3>Search for images from the past</h3>
                </Form.Label>
                <div className={style.datePickerContainer}>
                    <DatePicker
                        selected={date}
                        onChange={(d) => d && setDate(d)}
                        className={`form-control ${style.datePicker}`}
                        dateFormat="MM/dd/yyyy"
                        maxDate={todayUtc}
                        minDate={minDate}
                    />
                    <Button
                        className={style.datePickerButton}
                        type="button"
                        size="sm"
                        variant="dark"
                        onClick={() => setSearchedDate(date)}
                    >
                        Search for image
                    </Button>
                </div>
            </Form.Group>
        </>
    );
}

export default ImageOfTheDayHistory;
