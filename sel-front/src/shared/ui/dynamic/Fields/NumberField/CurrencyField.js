import React from 'react';
import getValFromObjByStrPath from 'shared/utils/react_hook_form/getValueFromObj';
import { useFormContext, Controller } from 'react-hook-form';
import { formatCurrency, formatNumber } from 'shared/utils/formatters/currencyFormatter';

const requiredMessage = 'Это обязательное поле!';
const CurrencyField = ({
  name,
  label,
  disabled,
  required,
  isZero,
  readonly,
  positiveOnly = true
}) => {
  const methods = useFormContext();
  const { errors } = methods.formState;
  return (
    <div className={`form-group ${getValFromObjByStrPath(name, errors) && 'input-danger'}`}>
      <label>{label}</label>
      <Controller
        render={({ field: { onChange, ...field } }) => {
          return (
            <>
              <input {...field} onChange={onChange} type="number" hidden={true} />
              <input
                value={((v) => {
                  if (typeof v === "string" && v.includes('.')) {
                    return formatNumber(v.substring(0, v.indexOf('.'))) + v.substring(v.indexOf('.'))
                  } else {
                    return formatNumber(v)
                  }
                })(field.value)}
                disabled={disabled}
                onChange={({ target, ...event }) => {
                  if (!target.value) {
                    return onChange({
                      ...event,
                      target: { ...target, value: 0 }
                    });
                  }
                  target.value = target.value.replace(/[^0-9.]/g, '').replace(/\.+/g, (m, offset, str) => offset === str.indexOf('.') ? '.' : '');
                  let value
                  // target.value.substring(target.value.indexOf('.')).length > 2
                  if (!!target.value && target.value.substring(target.value.indexOf('.')).length > 1) {
                    value = parseFloat(target.value)
                  } else {
                    value = target.value
                  }
                  return onChange({
                    ...event,
                    target: { ...target, value }
                  });
                }}
                type="text"
                onBlur={(e) => formatCurrency(e, 'blur')}
                className={`form-control input-default ${readonly && 'bg-light'}`}
                pattern="^\d{1,3}(?:[ ]?\d{3})*(?:\.\d{1,2})?$"
                datatype="currency"
              />
            </>
          );
        }}
        name={name}
        rules={{
          pattern: "^\d+(\.\d{1,2})?$",
          required: required && requiredMessage,
          validate: (v) => {
            if (required && v === 0 && !isZero) {
              return required;
            }
          }
        }}
        control={methods.control}
      />
      <span className={'text-danger'}>{getValFromObjByStrPath(name, errors)?.message}</span>
    </div>
  );
};

export default CurrencyField;
