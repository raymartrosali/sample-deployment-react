import {Card, Col, Button} from 'react-bootstrap';

const GridItems = (props) => {
    return ( 
        <>
            <Col md = "4">
                <Card>
                    <Card.Img variant='top' src={props.image}/>
                    <Card.Body>
                        <Card.Title>
                            {props.title}
                        </Card.Title>
                        <Card.Text>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum facilis sit totam cumque voluptatum ex molestiae necessitatibus! Consequuntur pariatur quas illum explicabo nostrum aperiam eaque, deserunt officiis, tenetur amet nesciunt.
                        </Card.Text>
                        <Button variant="warning">More Info</Button>
                    </Card.Body>
                </Card>
            </Col>

        </>
     );

}
 
export default GridItems;