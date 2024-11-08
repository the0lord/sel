import React from 'react';
import { useFormContext } from 'react-hook-form';
import getValFromObjByStrPath from 'shared/utils/react_hook_form/getValueFromObj';

const TextAreaField = ({
  label,
  readonly,
  required,
  name,
  placeholder,
  onChange = () => {},
  disabled = false,
  cols = 30,
  rows = 5
}) => {
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
    <div className={`form-group ${getValFromObjByStrPath(name, errors) && 'input-danger'}`}>
      <h4 className="text-center col-lg-12 mb-2">{label}</h4>
      <div className="col-lg-12 mb-2 form-group">
        <textarea
          {...methods.register(name, {
            required: requiredValue,
            onChange,
            readonly,
            disabled: disabled || readonly
          })}
          cols={cols}
          rows={rows}
          className="form-control input-default"
          {...(placeholder ? { placeholder } : {})}
        />
      </div>
    </div>
  );
};

export default TextAreaField;
