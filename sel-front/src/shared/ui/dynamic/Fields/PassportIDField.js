import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import getValFromObjByStrPath from 'shared/utils/react_hook_form/getValueFromObj';

export default function PassportIDField(props) {
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
        <div className={`form-group ${getValFromObjByStrPath(name, errors) && 'input-danger'}`}>
            <label>{label}</label>
            <Controller
                control={methods.control}
                name={name}
                rules={{
                    required: requiredValue,
                    ...rules
                }}
                render={({ field: { onChange, ...field } }) => (
                    <>
                        <input
                            {...field}
                            {...(placeholder ? { placeholder } : { placeholder: 'ID0000000' })}
                            disabled={disabled || readonly}
                            value={field?.value}
                            type="text"
                            onInput={({ target, ...event }) => {
                                    if (target.value.length <= 9) {
                                        return onChange({ ...event, target: { ...target } });
                                    }
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
