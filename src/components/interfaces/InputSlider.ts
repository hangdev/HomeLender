import SliderType from '../enums/SliderType';

export interface InputSliderProps {
  index?: number;
  type: SliderType;
  name: string;
  label: string;
  range: {
    min: number;
    max: number;
  }
  value: number;
  onValueChange: (value: number, index?: number) => void;
}
