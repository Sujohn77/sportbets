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
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Provider store={store}>
          <Layout>
              <Route exact path={`/`} render={() => <LivePageContainer/>}/>
              <Route path={`/user_id=:user_id?&match_id=:match_id?&sport_id=:sport_id?&lng=:lng?`} render={() => <LivePageContainer/>}/>
              <Route exact path={`/user_id=:user_id?`} render={() => <LivePageContainer/>}/>
              <Route path={`/live`} render={() => <LivePageContainer/>}/>
              <Route path={`/line`} render={() => <LinePage/>}/>
              <Route path={`/casino`} render={() => <CasinoPage/>}/>
          </Layout>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
