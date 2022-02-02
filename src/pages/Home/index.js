import './home.scss';
import { Row, Col, Input } from 'antd';
import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

const Home = () => {
    const [name, setName] = useState('');

    useEffect(() => {
        localStorage.setItem('name', name);

        return(() => {
            localStorage.removeItem('name');
        })
    }, [name])

    return(
        <div className="home">
        <Row>
            <Col md={12} offset={6}>
                <h1>Home</h1>
                <Link to={'/list'}>Go to List</Link>
                <Input name={name} onChange={(e) => setName(e.target.value)}></Input>
                <p>{name}</p>
            </Col>
        </Row>
        </div>
    )
}

export default Home;