import type { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const FormInput = ({ label, error, ...props }: InputProps) => {
  return (
    <div className="flex flex-col gap-3 w-full">
      <label className="text-white font-sans text-sm ">{label}</label>

      <input
        {...props}
        className={`
          w-full bg-[#15427E24] text-white text-base rounded-lg px-5 py-3.5
          border-[1.4px] border-[#15427E] outline-none transition-all duration-200
          placeholder:text-[#FFFFFF66] focus:border-blue-300   ${error ? "border-red-500" : ""}
        `}
      />

      {error && <span className="text-red-500 text-xs">{error}</span>}
    </div>
  );
};

export default FormInput;
