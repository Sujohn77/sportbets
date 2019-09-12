import React from 'react';
import "./Indicators.scss";

export const Indicators = () => {
    return  <>
            <div className="indicator__block">
                <div>Удары в створ</div>
                <div className="indicator">
                    <div><span>1</span><span>1</span></div>
                    <span className="white__filler"></span>
                </div>
            </div>
            <div className="indicator__block">
                <div>Владение мячом</div>
                <div className="indicator reverse">
                    <div><span>1</span><span>1</span></div>
                    <span className="white__filler"></span>
                </div>
            </div>
            <div className="indicator__block">
                <div>Удары в створ</div>
                <div className="indicator reverse">
                    <div><span>1</span><span>1</span></div>
                    <span className="white__filler"></span>
                </div>
            </div>
           <div className="indicator__block">
                <div>Угловые удары</div>
                <div className="indicator reverse">
                    <div><span>1</span><span>1</span></div>
                    <span className="white__filler"></span>
                </div>
            </div>
        </>
}

