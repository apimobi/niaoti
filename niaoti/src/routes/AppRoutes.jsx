import { Route, Routes }    from 'react-router-dom';
import routeConstants from '../constants/routeConstants';
import LayoutContainer from '../layout/LayoutContainer';
import Home from '../screens//Home/HomeScreen';
import PageNotFound from '../screens/PageNotFound/PageNotFound';


const AppRoutes = () => {
    return (
        <Routes>
            <Route path={routeConstants.ROOT} element={<LayoutContainer/>} >
                <Route path={routeConstants.HOME} element={<Home />} />
            </Route>
            <Route path={routeConstants.PAGE_NOT_FOUND} element={<PageNotFound />} />
        </Routes>
    );
}

export default AppRoutes;