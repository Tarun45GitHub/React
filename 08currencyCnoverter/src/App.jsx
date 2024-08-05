import { useState } from 'react'
import './App.css'
import useCurrencyInfo from './hooks/useCurrencyInfo.js';
import Input from './components/InputBox.jsx';

function App() {
  const [amount, setAmount] = useState(0);
  const [convertedAmount,setConvertedAmount]=useState(0);
  const [from,setFrom]=useState("usd");
  const[to,setTo]=useState("inr");

  const currencyInfo=useCurrencyInfo(from);
  
  const optaions= Object.keys(currencyInfo);

  const swap=()=>{
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  }

  const convert=()=>{
    setConvertedAmount(amount*currencyInfo[to]);

  }
  const BackgroundImage="https://t4.ftcdn.net/jpg/04/48/46/75/360_F_448467517_QXFZY8nA41dSbvaJzCIfItRzk0Wmv5n6.jpg";

  return (
    <div >
       <h2 className=' bg-black text-white text-3xl' >Currency Converter</h2>
       <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('${BackgroundImage}')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-100 rounded-lg p-5 backdrop-blur-sm bg-slate-600">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert();
                           
                        }}
                    >
                        <div className="w-full mb-1 ">
                            <Input
                                label="From"
                                amount={amount}
                                onAmountChange={(amount)=>setAmount(amount)}
                                onCurrencyChange={(currency)=>setFrom(currency)}
                                currencyOptions={optaions}
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
                            <Input
                                label="To"
                                amount={convertedAmount}
                                currencyOptions={optaions}
                                selectCurrency={to}
                                onCurrencyChange={(currency)=>{setTo(currency)}}
                                
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert {`${from.toUpperCase()} to ${to.toUpperCase()}`}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default App
