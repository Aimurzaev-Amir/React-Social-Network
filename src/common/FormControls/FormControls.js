import React from "react";
import stl from "./formControls.module.css"

const Component = ({ input, meta, ...restProps }) => {
    const Error = meta.touched && meta.error;
  return (
    <div>
      <restProps.type {...input} {...restProps} className={stl.formControl + " " + (Error ? stl.error : "") } />
      {Error && <span>{meta.error}</span>}
    </div>
  );
};

export default Component;
