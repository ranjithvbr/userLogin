import React, { useState, useCallback } from "react";
import { Input } from "antd";
import "./input.scss";

export default function TextInput({
  value,
  suffix,
  placeholder,
  customClassName,
  onChange,
  onBlur,
  errMsg
}) {
  const [inputValue, setInputValue] = useState(value);
  const setInputValueFunc = useCallback((data) => {
    setInputValue(data);
    onChange(data);
  },[onChange]);

  return (
      <div className="inputContainer">
    <Input
      className={`inputStyle ${customClassName}`}
      value={inputValue}
      onChange={(e) => setInputValueFunc(e.target.value)}
      placeholder={placeholder}
      suffix={suffix}
      onBlur={onBlur}
    />
    {errMsg && <span className="errmsg">{errMsg}</span>}
    </div>
  );
}
