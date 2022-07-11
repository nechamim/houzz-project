import React from 'react';
import { NavigateFunction, Params, useNavigate, useParams } from "react-router-dom";
export default function WithRouter<T extends Object>(Component:React.ComponentType<IWithRouterProps & T>) {
  function ComponentWithRouterProp(props: T) {
    let navigate = useNavigate();
    let params = useParams();
    const rouProps: IWithRouterProps = {
         navigate, params,
    }

    return <Component {...props} id="0" {...rouProps} />;
  }
  return ComponentWithRouterProp;
}
export interface IWithRouterProps {
    navigate: NavigateFunction,
    params: Params<string>
}