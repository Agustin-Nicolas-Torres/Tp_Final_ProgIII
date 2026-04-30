import { useState } from "react";
import { imageList } from "./Data";
import './StyleCarrucel.css';

export default function Banner(){
    const [index, setIndex] = useState(0);

    function handleNextClick() {
        if (index < imageList.length -1){
            setIndex(index + 1)
        }
    }

    function handleLeftClick(){
        if (index > 0){
            setIndex(index - 1)
        }
    }

    let BannersImages = imageList[index];
    return(
        <div className="Composiciones">
            <div className="BNT-IMG">
            <button className="btn-next" onClick={handleNextClick}> ▶ </button>
            <button className="btn-left" onClick={handleLeftClick}> ◀ </button>
            <img src={BannersImages.url} alt= "" />
            </div>
                <div style={{textAlign: "center"}}>
                    {imageList.map((item, pos)=> (
                        <span
                            key={pos}
                                style={{
                                    height: '10px',
                                    width: '10px',
                                    backgroundColor: pos === index ? 'gray' : 'lightgray',
                                    borderRadius: '50%',
                                    display: 'inline-block',
                                    margin: '8px'
                                    }}
                        ></span>
                    ))}
                </div>
            </div>
    );
}