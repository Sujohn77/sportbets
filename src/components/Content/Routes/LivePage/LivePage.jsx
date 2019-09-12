import React, {useState,useEffect} from 'react';
import {GameInfo} from "./GameInfo/GameInfo.jsx";
import {Statistic} from "./Statistic/Statistic.jsx";
import "../Content.scss";

export const LivePage = () => {
    const [width,setWidth] = useState(720);

    useEffect(() => {
        if(window.innerWidth > 720)
            setWidth(720)
        else{
            setWidth(window.innerWidth);
        }
        window.addEventListener('resize',() => {debugger;(window.innerWidth > 720)? setWidth(720) : setWidth(window.innerWidth);});
    },[])

    return <main>
        <div className="content__centered">
            <iframe src={`https://map-attacks.espnbet.com/?id=259655545&sport_id=12341&lng=en&width=${width}`} frameborder="0" width="100%" height={width / 1.7772}></iframe>
            <GameInfo/>
            <Statistic/>
        </div>
    </main>
}
