import React, { useState } from "react";

const InputJsonData = props => {
  const [value, setvalue] = useState("");

  const handleChange = event => {
    props.setDataInput(event.currentTarget.value);
    setvalue(event.currentTarget.value);
  };

  return (
    <textarea
      type="text"
      value={value}
      placeholder="put some Json Data"
      onChange={handleChange}
    />
  );
};

export default InputJsonData;
