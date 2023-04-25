import React, {useState} from 'react';
import InputSlider from '../common/InputSlider';
import SliderType from '../enums/SliderType';
import Card from '../common/Card';
import { InputSliderProps } from '../interfaces/InputSlider';
import { HomeLendProps } from '../interfaces/HomeLend';

const HomeLend: React.FC<HomeLendProps> = ({className}) => {
  const [loanAmt, setLoanAmt] = useState<number>(0);
  const [monthlyPayment, setMonthlyPayment] = useState<number>(0);
  const [sliders, setSliders] = useState<InputSliderProps[]>(
      [{
        index: 0,
        type: SliderType.dollar,
        name:"purchasePrice",
        label:"Purchase Price",
        range: {
          min: 0,
          max: 3000000
        },
        value:0,
        onValueChange: (value: number, index?: number) => {
          if(index !== undefined)
          {
            setSliders((prevSliders) => {
              const newSliders = [...prevSliders];
              newSliders[index] = {...newSliders[index], value};
              return newSliders;
            })
          }
        },
      },
      {
        index: 1,
        type: SliderType.dollar,
        name:"downPayment",
        label:"Down Payment",
        range:{
          min: 0,
          max: 3000000
        },
        value:0,
        onValueChange:(value: number, index?: number) => {
          if(index !== undefined)
          {
            setSliders((prevSliders) => {
              const newSliders = [...prevSliders];
              newSliders[index] = {...newSliders[index], value};
              return newSliders;
            })
          }
        },
      },
      {
        index: 2,
        type: SliderType.year,
        name:"repaymentTime",
        label:"Repayment Time",
        range:{
          min: 0,
          max: 30
        },
        value:0,
        onValueChange:(value: number, index?: number) => {
          if(index !== undefined)
          {
            setSliders((prevSliders) => {
              const newSliders = [...prevSliders];
              newSliders[index] = {...newSliders[index], value};
              return newSliders;
            })
          }
        },
      },
      {
        index: 3,
        type: SliderType.interest,
        name:"interestRate",
        label:"Interest Rate",
        range:{
          min: 0,
          max: 15
        },
        value:0,
        onValueChange:(value: number, index?: number) => {
          if(index !== undefined)
          {
            setSliders((prevSliders) => {
              const newSliders = [...prevSliders];
              newSliders[index] = {...newSliders[index], value};
              return newSliders;
            })
          }
        },
      }]
  )
  const renderedInputSliders = [];

  for(let i=0; i < sliders.length; i += 2) {
    if(i % 2 === 0){
      renderedInputSliders.push(
        <div key={i} className='grid grid-cols-4 gap-1'>
          <div className='col-span-4 md:col-span-2'>
          <InputSlider
                index={sliders[i].index}
                type={sliders[i].type}
                name={sliders[i].name}
                label={sliders[i].label}
                range={sliders[i].range}
                value={sliders[i].value}
                onValueChange={sliders[i].onValueChange}
              />
          </div>
          <div className='col-span-4 md:col-span-2'>
          <InputSlider
                index={sliders[i+1].index}
                type={sliders[i+1].type}
                name={sliders[i+1].name}
                label={sliders[i+1].label}
                range={sliders[i+1].range}
                value={sliders[i+1].value}
                onValueChange={sliders[i+1].onValueChange}
              />
          </div>
        </div>
      );
    }
  }

  const handleMortgageQuote = (purchasePrice: number, downPayment: number, rate: number, years: number ) => {
    const principal = purchasePrice - downPayment;
    const r = (rate / 100) / 12;
    const n = years * 12;

    const numerator = r * Math.pow(1 + r, n);
    const denominator = Math.pow(1 + r, n) - 1;

    const monthlyPayment = (principal * numerator) / denominator;

    setLoanAmt(principal);
    setMonthlyPayment(parseFloat(monthlyPayment.toFixed(2)));
  }

  return (
    <>
      <div className={className}>
        <Card className=" p-6 max-w-[900px] h-auto bg-green-500 border border-green-700">
          <div className='flex justify-center pt-4 pb-6'>
              <h1 className='text-xl font-semibold text-center'>Mortgage Calculator</h1>
          </div>
          {renderedInputSliders}
          <div className='my-4 grid grid-cols-4 items-center'>
            <div className='col-span-4 md:col-span-2'>
              <button className='bg-green-700 active:bg-green-300 text-beige font-semibold px-3 h-[45px] w-full md:w-3/4'
                type='button'
                onClick={() => handleMortgageQuote(sliders[0].value, sliders[1].value, sliders[3].value, sliders[2].value)}
                >
                Get a mortgage quote
              </button>
            </div>
            <div className='my-4 col-span-4 md:col-span-1'>
              <div className='text-sm'><i>Loan amount</i></div>
              <div className='text-lg font-bold'>
                {loanAmt}
              </div>
            </div>
            <div className='my-4 col-span-4 md:col-span-1'>
              <div className='text-sm'>
                <i>Estimated pr. month</i>
              </div>
              <div className='text-lg font-bold'>
                {monthlyPayment}
              </div>
            </div>
          </div>
        </Card>
      </div>
    </>
  )
}

export default HomeLend