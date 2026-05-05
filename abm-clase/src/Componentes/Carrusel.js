import { useState } from "react";
import { imageList } from "./Data";
import './StyleCarrucel.css';

export default function Banner() {
    const [index, setIndex] = useState(0);

    function handleNextClick() {
        if (index < imageList.length - 1) {
            setIndex(index + 1);
        }
    }

    function handleLeftClick() {
        if (index > 0) {
            setIndex(index - 1);
        }
    }

    return (
        <div className="Composiciones">
            <div className="BNT-IMG">

                <div>
                    <div style={{
                        display: "flex",
                        transform: `translateX(-${index * 100}%)`,
                        transition: "transform 0.45s cubic-bezier(0.77, 0, 0.175, 1)"
                    }}>
                        {imageList.map((item, pos) => (
                            <img
                                key={pos}
                                src={item.url}
                                alt=""
                                style={{ minWidth: "100%", display: "block" }}
                            />
                        ))}
                    </div>
                </div>

                <button className="btn-left" onClick={handleLeftClick}> ◀ </button>
                <button className="btn-next" onClick={handleNextClick}> ▶ </button>

            </div>

            <div style={{ textAlign: "center" }}>
                {imageList.map((item, pos) => (
                    <span
                        key={pos}
                        style={{
                            height: pos === index ? '13px' : '10px',
                            width: pos === index ? '13px' : '10px',
                            backgroundColor: pos === index ? 'lightgray' : 'gray',
                            borderRadius: '50%',
                            display: 'inline-block',
                            margin: '8px'
                        }}
                    />
                ))}
            </div>
        </div>
    );
}