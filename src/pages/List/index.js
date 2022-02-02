import './list.scss';
import { Row, Col } from 'antd';
import {Link} from 'react-router-dom';

const List = () => {
    return(
        <div className="list">
        <Row>
            <Col md={12} offset={6}>
                <h1>List</h1>
                <Link to={'/'}>Go back</Link>
            </Col>
        </Row>
        </div>
    )
}

export default List;