export const required = (value) => {
  if (value) return undefined;
  return "Field is required";
};

export const maxFieldLength = (maxLength) => {
  return (value) => {
    if (value.length > maxLength)
      return `Max length for this field is ${maxLength}`;
    return undefined;
  };
};
