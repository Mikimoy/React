import Home from '../views/pages/home';
import Detail from '../views/pages/detail';
import Favorite from '../views/pages/Favorite';

const routes = {
    '/': Home,
    '/home': Home,
    '/favorites': Favorite,
    '/detail/:id': Detail,
};

export default routes;