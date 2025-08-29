import React from "react";

interface LoginInputProps {
  labelText: string;
  placeholder?: string;
  type: string;
}

const loginInput: React.FC<LoginInputProps> = ({
  labelText,
  placeholder,
  type,
}) => {
  return (
    <fieldset className="flex flex-col-reverse gap-2 items-start justify-start group">
      <input
        className="flex items-center text-sm peer w-full h-default p-3 rounded-lg border-2 border-black/15 focus:border-gray-600 placeholder:text-black/25 outline-none font-semibold transition-all ease-in duration-300 group"
        type={type}
        id="mail"
        placeholder={placeholder}
      />
      <label
        className="font-josefin tracking-wide font-semibold text-black/25 group-focus-within:text-gray-600 transition-all ease-in duration-300 login-button-anim "
        htmlFor="mail"
      >
        {labelText}
      </label>
    </fieldset>
  );
};

export default loginInput;
