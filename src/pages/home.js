import {Container, Row, Col, Image} from 'react-bootstrap'
import '../styles/pages.css';
import HeaderOne from '../images/header7.jpg';
import HeaderTwo from '../images/secHeader.jpg';
const Home = () => {
    return (
        <>
    <Container>
        <Row>
         <Image src={HeaderOne} />
         <Image src={HeaderTwo} />
        </Row>

    {/* <Container> 
        <Row>
            <h1 className="header">Why Using World News?</h1>
            <Col>
                <div className="col">
                    <h3>Latest Breaking News</h3>
                    <h3>Live Sports Game Scores</h3>
                    <h3>Post Favorite News</h3>
                </div>
            </Col>
            <Col>
                <div className="col">
                    <h3>Save Read Articles</h3>
                    <h3>Browse Your News History</h3>
                    <h3>Article Focus, Not Much Rabish Stuff</h3>
                </div>
            </Col>
        </Row>
    </Container>     */}
    </Container>
    </>
    )
}

export default Home