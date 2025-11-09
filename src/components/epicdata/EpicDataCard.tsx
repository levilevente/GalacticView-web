import { Button, Card } from 'react-bootstrap';
import { useNasaEpicDataByDate } from '../../query/nasaEpicData.query.ts';
import type { NasaEpicDataType } from '../../data/NasaEpicDataTypes.ts';

interface epicDataCardProps {
    date: string;
}

function EpicDataCard(props: epicDataCardProps) {
    const { date } = props;
    const { data: dataOnDate = [] as NasaEpicDataType[] } = useNasaEpicDataByDate(date);

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Imgages taken on date {date}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                    {dataOnDate[0]?.caption}
                </Card.Subtitle>
                <Card.Text>
                    {dataOnDate.length} items for date {date}
                </Card.Text>
                <Button variant="success" href={`/epicdata/${date}`}>See more</Button>

            </Card.Body>
        </Card>
    );
}

export default EpicDataCard;