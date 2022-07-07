import React from 'react';
import {NavigateFunction, Params, useLocation, useNavigate, useParams} from 'react-router-dom';
​
export default function withRouter<T extends Object>(Component:React.ComponentType<IWithRouterProps & T>) {
  function ComponentWithRouterProp(props: T) {
    // let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
​
    const rouProps: IWithRouterProps = {
         /*location,*/ navigate, params,
    }

    return <Component {...props} id="0" {...rouProps} />;
  }
​
  return ComponentWithRouterProp;
}
​
export interface IWithRouterProps {
    // location: Location;
    navigate: NavigateFunction,
    params: Params<string>
}