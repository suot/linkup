import React, { Component, Suspense } from 'react';
import {connect} from "react-redux";
import { Route, Switch } from 'react-router-dom';
import {routes} from '../../routes';  // routes config

import {Container} from 'reactstrap';
import {AppFooter, AppHeader} from '@coreui/react';


const DefaultFooter = React.lazy(() => import('./DefaultFooter'));
const DefaultHeader = React.lazy(() => import('./DefaultHeader'));

class DefaultLayout extends Component {
    loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>;

    //state.firebase.auth is loaded when redirecting to this page, while state.firebase.profile needs seconds to be synchronized from firebase DB.
    //When it is loaded the props will change and then set the state to render the component again.
    componentDidUpdate(prevProps, prevState) {
        if(prevProps.profile.isEmpty && (!this.props.profile.isEmpty)){
            this.setState({
                profile: this.props.profile
            });
        }
    }

    render() {
        if(this.props.profile.isEmpty) {
            return this.loading();
        }else{
            return (
                <div className="app">
                    <AppHeader fixed>
                        <Suspense fallback={this.loading()}>
                            <DefaultHeader />
                        </Suspense>
                    </AppHeader>
                    <div className="app-body">
                        <main className="main">
                            <Container fluid>
                                <Suspense fallback={this.loading()}>
                                    <Switch>
                                        {routes.map((route, idx) => {
                                            return route.component ? (
                                                <Route
                                                    key={idx}
                                                    path={route.path}
                                                    exact={route.exact}
                                                    name={route.name}
                                                    render={props => (
                                                        <route.component {...props} />
                                                    )}
                                                />
                                            ) : null;
                                        })}
                                    </Switch>
                                </Suspense>
                            </Container>
                        </main>
                    </div>
                    <AppFooter>
                        <Suspense fallback={this.loading()}>
                            <DefaultFooter />
                        </Suspense>
                    </AppFooter>
                </div>
            );
        }
    }
}


const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
};


export default connect(mapStateToProps)(DefaultLayout);
