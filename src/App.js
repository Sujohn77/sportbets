import React , { Suspense } from 'react';
import {Provider} from "react-redux";
import {BrowserRouter, Route} from "react-router-dom";
import store from "./redux/store";
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/App.scss';

import {Layout} from "./components/Shared/Layout.jsx";
import {LivePage} from "./components/Content/LivePage.jsx";
import {LinePage} from "./components/Content/LinePage.jsx";
import {CasinoPage} from "./components/Content/CasinoPage.jsx";
import {MainPage} from "./components/Content/MainPage.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
          <Layout>
              <Route exact path={"/"} render={() => <MainPage/>}/>
              <Route path={"/live"} render={() => <LivePage/>}/>
              <Route  path={"/line"} render={() => <LinePage/>}/>
              <Route path={"/casino"} render={() => <CasinoPage/>}/>
          </Layout>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
