import React from 'react';
import {Indicators} from "./Indicators/Indicators.jsx";
import "./Statistic.scss";

export const Statistic = () => {
    return <div>
        <div className="statistic__title">Статистика</div>
        <Indicators/>
    </div>
}
