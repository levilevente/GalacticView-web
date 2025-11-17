import { Button, Card, Spinner } from 'react-bootstrap';
import { useNasaEpicDataByDate } from '../../query/nasaEpicData.query.ts';
import type { NasaEpicDataType } from '../../data/NasaEpicDataTypes.ts';


const cardBodyStyle: React.CSSProperties = {
    gap: '2rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
}



interface epicDataCardProps {
    date: string;
    isLoading?: boolean;
}

function EpicDataCard(props: epicDataCardProps) {
    const { date, isLoading } = props;
    const { data: dataOnDate = [] as NasaEpicDataType[] } = useNasaEpicDataByDate(date);

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body style={cardBodyStyle}>
                {isLoading && <Spinner animation="border" />}
                <Card.Title>Images taken: {date}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{dataOnDate[0]?.caption}</Card.Subtitle>
                <Card.Text>
                    {dataOnDate.length} items for date {date}
                </Card.Text>
                <Button variant="dark" href={`/epicdata/${date}`}>
                    See more
                </Button>
            </Card.Body>
        </Card>
    );
}

export default EpicDataCard;
