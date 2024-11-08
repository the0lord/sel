import { useFormContext } from 'react-hook-form';
import getValFromObjByStrPath from 'shared/utils/react_hook_form/getValueFromObj';

const DateField = ({
  label,
  name,
  required = false,
  readonly = false,
  disabled = false,
  rules = {}
}) => {
  const methods = useFormContext();
  const { errors } = methods.formState;

  return (
    <div className={`form-group ${getValFromObjByStrPath(name, errors) && 'input-danger'}`}>
      <label>{label}</label>
      <input
        {...methods.register(name, {
          required,
          disabled: disabled || readonly,
          ...rules
        })}
        style={readonly ? { pointerEvents: 'none' } : {}}
        type="date"
        className={`form-control input-default ${readonly && 'bg-light'}`}
      />
      <span className={'text-danger'}>{getValFromObjByStrPath(name, errors)?.message}</span>
    </div>
  );
};

export default DateField;
