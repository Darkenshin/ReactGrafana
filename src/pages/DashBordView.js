import React from "react";

const DashBordView = props => {
  return (
    <div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          id={props.prop.title}
          onChange={props.onClickHandler}
          uid={props.prop.uid}
        />
        <label className="form-check-label" htmlFor={props.prop.title}>
          {props.prop.title}
        </label>
      </div>
    </div>
  );
};

export default DashBordView;
