import React from 'react';
import { useFormContext } from 'react-hook-form';

const TextField = (props) => {
  const {
    label,
    required,
    name,
    placeholder,
    onChange = () => { },
    disabled = false,
    readonly = false,
    rules = {}
  } = props;
  const methods = useFormContext();
  const { errors } = methods.formState;
  let requiredValue = false;
  if (required) {
    requiredValue =
      typeof required === 'string' || required instanceof String
        ? required
        : 'Это обязательное поле';
  }
  return (
    <div className={`space-y-3 pb-3`}>
      <label
        className="text-lg font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        htmlFor={name}>{label}</label>
      <input
        {...methods.register(name, {
          required: requiredValue,
          onChange,
          disabled: disabled || readonly,
          ...rules
        })}
        disabled={disabled || readonly}
        id={name}
        type="text"
        className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        {...(placeholder ? { placeholder } : {})}
      />
      {/* <span className={'text-danger'}>{getValFromObjByStrPath(name, errors)?.message}</span> */}
    </div>
  );
};

export default TextField;