type FormInputProps = {
   placeholder?: string;
   type?: string;
   required?: boolean;
   errorMsg?: string;
};

const FormInput = ({
   placeholder = "",
   type = "text",
   required = false,
   errorMsg = "Error",
}: FormInputProps) => {
   return (
      <div className="relative">
         <input
            type={type}
            placeholder={placeholder}
            required={required}
            className="form-input peer"
         />
         <p className="text-accent absolute top-0 right-0 mr-4 hidden text-sm font-light peer-invalid:block">
            {errorMsg || "This field is required."}
         </p>
      </div>
   );
};

export default FormInput;
