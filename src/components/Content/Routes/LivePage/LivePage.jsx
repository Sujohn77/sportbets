import React from 'react';
import {GameInfo} from "./GameInfo/GameInfo.jsx";
import {Statistic} from "./Statistic/Statistic.jsx";
import "../Content.scss";

export const LivePage = (props) => {
    const url = "https://map-attacks.espnbet.com/?id";
    return <main>
        <div className="content__centered">
            <iframe title="game__translation" src={url+`=${props.match.params.match_id || 259655545}
            &sport_id=${props.match.params.sport_id || 12341}
            &lng=${props.match.params.lng || "en"}
            &width=${props.width}`} frameBorder="0" width="100%" height={props.width / 1.7772}>
            </iframe>
            <GameInfo/>
            <Statistic/>
        </div>
    </main>
}
