import * as React from 'react';
import { Route } from 'react-router-dom'
import GIF from '../utils/RestScreen.gif'

function NPMRoute(props) {
    const [show, setShow] = React.useState(true);

    React.useEffect(() => {
        let showTimer = setTimeout(() => setShow(false), 3000);
        return () => {
            clearTimeout(showTimer);
        };
    }, []);

    if (show) {

        return (
            <div className="min-vh-100 d-flex justify-content-center align-items-center bg-white">
                <img src={GIF} alt=""/>
            </div>
        );
    }

    if (!show) {
        return (
            <Route exact={props.exact} path={props.path}>
                {props.children}
            </Route>
        )
    }
}

export default NPMRoute;