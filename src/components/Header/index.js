import './header.scss';
import { Layout } from 'antd';

const { Header } = Layout;

const HeaderComponent = () => {
    return(
        <>
        <Header className="header-wrapper">
            <h1>Header</h1>
        </Header>
        </>
    )
}

export default HeaderComponent;