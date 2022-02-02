import path from './constants';
import Home from '../../pages/Home';
import List from '../../pages/List';

const route = [
    {
        path: path.HOME,
        component: Home
    },
    {
        path: path.LIST,
        component: List
    }
];

export default route;