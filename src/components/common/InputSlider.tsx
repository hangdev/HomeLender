import React, {useState} from 'react';
import SliderType from '../enums/SliderType';
import { InputSliderProps } from '../interfaces/InputSlider';


const InputSlider: React.FC<InputSliderProps> = ({index, type, name, label, range, value, onValueChange}) => {
  const [rangeValue, setRangeValue] = useState<number>(value);

  let regexInputFilter: RegExp;

  switch(type){
    case SliderType.dollar:
      regexInputFilter = /\$/g;
      break;
    case SliderType.year:
      regexInputFilter = /[a-zA-Z]/g;
      break;
    case SliderType.interest:
      regexInputFilter = /\\%/g;
      break;
    default:
      regexInputFilter = /(?:)/; // match nothing;
  }

  const handleRangeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value);
    setRangeValue(newValue);
    onValueChange(newValue, index);
  }
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const valueString = event.target.value;
    const newValue =  Number.isNaN(parseInt(valueString.replace(regexInputFilter, ''))) ? 0
    : parseInt(valueString.replace(regexInputFilter, ''));
    setRangeValue(newValue);
    onValueChange(newValue, index);
  }
  return (
    <div className='p-2'>
      <div className='flex'>
        <div className='flex'>
          <label className='mr-1' htmlFor={name}>{label}:</label>
        </div>
        <div className='flex-grow focus-within:ring-2 focus-within:ring-green-400'>
          {
            type === SliderType.dollar ? (
              <input className='w-full pl-2 outline-none focus:border-green-400' type='text'
                value={`$${rangeValue}`} onChange={handleInputChange}/>
            ) : type === SliderType.year ? (
              <input className='w-full pl-2 outline-none focus:border-green-400' type='text'
                value={`${rangeValue} years`} onChange={handleInputChange}/>
            ) : type === SliderType.interest ? (
              <input className='w-full pl-2 outline-none focus:border-green-400' type='text'
                value={`${rangeValue}%`} onChange={handleInputChange}/>
            ) : (
              <input className='w-full pl-2 outline-none focus:border-green-400' type='text'
                value={rangeValue} onChange={handleInputChange}/>
            )
          }
        </div>
      </div>
      <div className='pt-2'>
        {
          type === SliderType.interest ? (
            <input type='range' id={name} name={name} min={range.min} max={range.max} value={rangeValue} onChange={handleRangeChange} className='w-full'/>
          ) : (
            <input type='range' id={name} name={name} min={range.min} max={range.max} value={rangeValue} onChange={handleRangeChange} className='w-full'/>
          )
        }
      </div>
    </div>
  )
}

export default InputSlider;