import React, { forwardRef } from "react";
import ReactDatePicker from "react-datepicker"
// import { useColorMode } from "@chakra-ui/react";
import { InputGroup, Input, InputRightAddon } from "@chakra-ui/react"
import { CalendarIcon } from "@chakra-ui/icons"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const customDateInput = ({ value, onClick, onChange }: any, ref: any) => (
  <Input
    size="sm"
    autoComplete="off"
    background="white"
    value={value}
    ref={ref}
    onClick={onClick}
    onChange={onChange}
  />
);
customDateInput.displayName = "DateInput";

const CustomInput = forwardRef(customDateInput);

const icon = <CalendarIcon/>;

interface Props {
  isClearable?: boolean;
  onChange: (date: Date) => unknown;
  selectedDate: Date | undefined;
  showPopperArrow?: boolean;
}


const DatePicker = ({ selectedDate, onChange, ...props }: Props) => {
  return (
    <>
      <InputGroup className="dark-theme" size="sm">
        <ReactDatePicker
          selected={selectedDate}
          onChange={onChange}
          className="react-datapicker__input-text"
          customInput={<CustomInput />}
          dateFormat="MM/dd/yyyy"
          {...props}
        />
        <InputRightAddon color="gray.500">
            {icon}
        </InputRightAddon>
      </InputGroup>
    </>
  );
};

// set className to "light-theme-original"
{
  /* <div className={isLight ? "light-theme" : "dark-theme"}>
<ReactDatePicker
  selected={selectedDate}
  onChange={onChange}
  isClearable={isClearable}
  showPopperArrow={showPopperArrow}
  className="react-datapicker__input-text"
  dateFormat="MM/dd/yyyy"
  customInput={<CustomInput />}
/>
</div> */
}

export default DatePicker
