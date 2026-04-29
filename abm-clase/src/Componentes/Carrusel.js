import { useState } from "react";
import { imageList } from "./Data";

export default function Banner(){
    const [index, setIndex] = useState(0);

    function handleNextClick() {
        setIndex(index + 1)
    }

    function handleLeftClick(){
        if (index > 0){
            setIndex(index - 1)
        }
    }

    let BannersImages = imageList[index];
    return(
        <>
            <button onClick={handleNextClick}>
                Next
            </button>
            <button onClick={handleLeftClick}>
                Left 
            </button>
            <img
                src={BannersImages.url}
                alt= ""
            />
        </>
    );
}