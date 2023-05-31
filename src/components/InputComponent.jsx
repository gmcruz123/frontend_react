/* eslint-disable react/prop-types */
export const InputComponent = ({ onChangeHandler, title, type}) => {
  return (
    <>
      <label htmlFor='name'>{title}</label>
      <input
        type={type}
        onChange={(e) => onChangeHandler(e.target.value)}
      />
    </>
  );
};
