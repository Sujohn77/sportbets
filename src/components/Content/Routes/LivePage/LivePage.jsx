import React from 'react';
import {GameInfo} from "./GameInfo/GameInfo.jsx";
import {Statistic} from "./Statistic/Statistic.jsx";
import "../Content.scss";

export const LivePage = () => {
    return <main>
        <div className="content__centered">
            <iframe src="" frameborder="0" width="100%" height="220px"></iframe>
            <GameInfo/>
            <Statistic/>
        </div>
    </main>
}
