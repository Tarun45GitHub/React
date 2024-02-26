// function hook(){
//     return []
// }  that is also a hook

import { useEffect, useState } from "react";

function useCurrencyinfo(currency){
    // console.log( currency);
    const [data,setData]=useState({})

    useEffect(()=>{
         fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res)=>res.json())
        .then((res)=> setData(res[currency]))
    },[currency])
    // console.log(data);
    return data;
}
export default useCurrencyinfo;


