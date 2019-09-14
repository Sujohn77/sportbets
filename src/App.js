import React , { Suspense } from 'react';
import {Provider} from "react-redux";
import {BrowserRouter, Route} from "react-router-dom";
import store from "./redux/store";
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/App.scss';

import {Layout} from "./components/Shared/Layout.jsx";
import {LinePage} from "./components/Content/Routes/LinePage.jsx";
import {CasinoPage} from "./components/Content/Routes/CasinoPage.jsx";
import {MainPage} from "./components/Content/Routes/MainPage.jsx";
import LivePageContainer from "./components/Content/Routes/LivePage/LivePageContainer.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
          <Layout>
              <Route exact path={`${process.env.PUBLIC_URL}/`} render={() => <MainPage/>}/>
              <Route path={`${process.env.PUBLIC_URL}/live`} render={() => <LivePageContainer/>}/>
              <Route  path={`${process.env.PUBLIC_URL}/line`} render={() => <LinePage/>}/>
              <Route path={`${process.env.PUBLIC_URL}casino`} render={() => <CasinoPage/>}/>
          </Layout>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
