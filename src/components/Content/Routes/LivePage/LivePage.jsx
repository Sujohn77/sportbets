import React, {useState,useEffect} from 'react';
import {GameInfo} from "./GameInfo/GameInfo.jsx";
import {Statistic} from "./Statistic/Statistic.jsx";
import "../Content.scss";

import {getHashSha256} from "../../../../hash/sha256";

export const LivePage = (props) => {
    const [width,setWidth] = useState(720);

    useEffect(() => {
        props.getBalanceUser(props.match.params.user_id || 187640199);

        window.innerWidth > 720? setWidth(720) : setWidth(window.innerWidth);

        window.addEventListener('resize',() => {(window.innerWidth > 720)? setWidth(720) : setWidth(window.innerWidth);});
    },[])

    const url = "https://map-attacks.espnbet.com/?id";

    console.log(props.match.params)

    return <main>
        <div className="content__centered">
            <iframe src={url+`=${props.match.params.match_id || 259655545}&sport_id=${props.match.params.sport_id || 12341}&lng=${props.match.params.lng || "en"}&width=${width}`}
                    frameBorder="0" width="100%" height={width / 1.7772}>
            </iframe>
            <GameInfo/>
            <Statistic/>
        </div>
    </main>
}
