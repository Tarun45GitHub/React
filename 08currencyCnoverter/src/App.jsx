import { useState } from 'react'
import './App.css'
import useCurrencyinfo from './hooks/useCurrencyInfo'
import InputBox from "./components/InputBox.jsx"

function App() {
  const [amount, setAmount] = useState(0)
  const [from,setFrom]=useState("inr")
  const [to,setTo]=useState("usd")
  const [convertAmount,setConvertAmount]=useState(0)
  
  const currency=useCurrencyinfo(from)
  const currencyOption=Object.keys(currency)
//   console.log(currencyOption);

  const swap=()=>{
    setFrom(to)
    setTo(from)
  }

  const convert=()=>{setConvertAmount(Number(amount*(currency[to])))}
  return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat bg-gray-500"
            
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                           convert()
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                Amount={amount}
                                onAmountChange={(amount)=>setAmount(amount)}
                                currencyOption={currencyOption}
                                onCurrencyChange={(currency)=>setFrom(currency)}
                                selectCurrency={from}
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                Amount={convertAmount}
                                onAmountChange={(convertAmount)=>setConvertAmount(convertAmount)}
                                currencyOption={currencyOption}
                                onCurrencyChange={(currency)=>setTo(currency)}
                                selectCurrency={to}
                                
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
                        onClick={convert}
                        >
                            Convert {from.toUpperCase()} to {to.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>
  )
}

export default App
