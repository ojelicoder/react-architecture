import './App.css';
import "antd/dist/antd.min.css";
import route from './core/routes';
import HeaderComponent from './components/Header';
import FooterComponent from './components/Footer';
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import { Layout } from 'antd';

const { Content } = Layout;

function App() {
  return (
    <>
    <Layout>
    <HeaderComponent/>
      <Content>
        <BrowserRouter>
          <Routes>
            {route.map((page, index) => <Route path={page.path} element={<page.component/> } key={index}/>)}
          </Routes>
        </BrowserRouter>
      </Content>
    <FooterComponent/>
    </Layout>
    </>
  );
}

export default App;
