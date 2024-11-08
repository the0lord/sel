import { Controller, useFormContext } from 'react-hook-form';
import getValFromObjByStrPath from 'shared/utils/react_hook_form/getValueFromObj';

const PhoneField = (props) => {
  const { label, required, name, placeholder, disabled = false, readonly } = props;
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
      <label>{label}</label>
      <Controller
        control={methods.control}
        name={name}
        rules={{
          required: requiredValue,
          minLength: { message: 'Неверный формат номера', value: 19 }
        }}
        render={({ field: { onChange, ...field } }) => (
          <>
            <input
              {...field}
              {...(placeholder ? { placeholder } : { placeholder: '+996 (000) 00-00-00' })}
              disabled={disabled || readonly}
              value={field?.value}
              type="tel"
              onChange={({ target, ...event }) => {
                var x = target.value
                  .replace(/\D/g, '')
                  .match(/(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})(\d{0,2})/);
                target.value = !x[2]
                  ? x[1]
                  : !x[3]
                  ? '+' + x[1] + ' (' + x[2]
                  : '+' +
                    x[1] +
                    ' (' +
                    x[2] +
                    ') ' +
                    x[3] +
                    (!x[4] ? '' : '-' + x[4] + (x[5] ? '-' + x[5] : ''));
                return onChange({ ...event, target: { ...target } });
              }}
              className={`form-control input-default ${readonly && 'bg-light'}`}
            />
          </>
        )}
      />
      <span className={'text-danger'}>{getValFromObjByStrPath(name, errors)?.message}</span>
    </div>
  );
};

export default PhoneField;
