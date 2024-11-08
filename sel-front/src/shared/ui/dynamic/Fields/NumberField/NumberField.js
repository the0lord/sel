import React from 'react';
import getValFromObjByStrPath from 'shared/utils/react_hook_form/getValueFromObj';
import { useFormContext, Controller } from 'react-hook-form';
import CurrencyField from './CurrencyField';

const requiredMessage = 'Это обязательное поле!';
const NumberField = ({
  name,
  label,
  disabled = false,
  required = false,
  min = -1e9,
  max = 1e9,
  onChange = () => { },
  isZero = false,
  isCurrency = false,
  isPhoneNumber = false,
  placeholder = '',
  round,
  readonly = false,
  valueAsNumber = true,
  positiveOnly = true,
  rules
}) => {
  const methods = useFormContext();

  const { errors } = methods.formState;
  let requiredValue = false;
  if (required) {
    requiredValue =
      typeof required === 'string' || required instanceof String ? required : requiredMessage;
  }

  if (isCurrency) {
    return (
      <CurrencyField
        name={name}
        label={label}
        disabled={disabled || readonly}
        required={requiredValue}
        onChange={onChange}
        isZero={isZero}
        readonly={readonly}
        positiveOnly={positiveOnly}
      />
    );
  }

  if (readonly) {
    return (
      <div>
        <label>{label}</label>
        <input
          disabled
          className="form-control input-default bg-light"
          value={methods.watch(name)}
        />
      </div>
    );
  }

  return (
    <div className={`form-group ${getValFromObjByStrPath(name, errors) && 'input-danger'}`}>
      <label>{label}</label>
      <Controller
        name={name}
        rules={{
          required: requiredValue,
          validate: (v) => {
            if (v < 0 && positiveOnly) {
              return 'Значение не может быть отрицательным!';
            }
            if (required && v === 0 && !isZero) {
              return requiredValue;
            }
          },
          ...rules
        }}
        render={({ field: { onChange, value, ...field } }) => {
          return (
            <input
              {...field}
              disabled={disabled}
              value={value && (round ? Math.round(value * round) / round : value)}
              onChange={(e) => {
                const val = e?.target?.value;
                if (val.length <= max || max <= 0) {
                  return onChange({
                    ...e,
                    target: { ...e.target, value: val && valueAsNumber ? +val : val }
                  });
                }
              }}
              step="0.01"
              min={min}
              max={max}
              type="number"
              className="form-control input-default"
              onWheel={(e) => e.target.blur()}
              placeholder={placeholder}
            />
          );
        }}
      />
      <span className={'text-danger'}>{getValFromObjByStrPath(name, errors)?.message}</span>
    </div>
  );
};

export default NumberField;
