import React from 'react';
import "./GameInfo.scss";

export const GameInfo = () => {
    return <div>

        <div className="d-flex justify-content-between align-items-center">
            <div>
                <button className="button-grey">ЦСКА</button>
            </div>
            <div className="d-flex flex-column jus">
                <div className="game__score">1:0</div>
                <div className="game__time">86:56</div>
            </div>
            <div>
                <button className="button-grey">Спартак</button>
            </div>
        </div>

        <div className="chances__block">
            <div><span>П1</span><span>1.23</span> </div>
            <div><span>X</span><span>1.2</span></div>
            <div><span>П2</span><span>1.33</span></div>
        </div>

        <div className="btn-default">
            <button>Поделиться матчем</button>
        </div>

    </div>
}
