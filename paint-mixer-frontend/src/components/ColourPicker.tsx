import { Dispatch, SetStateAction } from 'react';

type ColourPickerProps = {
  chosenColour: string;
  setColour: Dispatch<SetStateAction<string>>;
};

export default function ColourPicker(props: ColourPickerProps) {
  const { chosenColour, setColour } = props;

  // const colourChangeEvent = (e) => {
  //   setColour(e.target.value);
  // };

  return (
    <div style={{ margin: '3rem' }}>
      <p>Pick your own colour</p>
      <input
        type="color"
        name="ColourPicker"
        id="ColourPicker"
        value={chosenColour}
        // onChange={colourChangeEvent}
      />
      <span style={{ color: chosenColour, marginLeft: '1rem' }}>
        {chosenColour}
      </span>
    </div>
  );
}
