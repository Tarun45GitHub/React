// function hook(){
//     return []
// }  that is also a hook

import { useEffect,useState } from "react";

function useCurrencyInfo(currency){
    
    const [data,seData]=useState({});

    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`)
        .then((data)=>data.json())
        .then((res)=>seData(res[currency]))
    },[currency])

    return data;
}

export default useCurrencyInfo;


