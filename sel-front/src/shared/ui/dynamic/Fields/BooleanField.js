import React, { useEffect } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import getValFromObjByStrPath from 'shared/utils/react_hook_form/getValueFromObj';

const BooleanField = ({ name, label, callback = () => {}, labels = [] }) => {
  const methods = useFormContext();
  const { errors } = methods.formState;

  useEffect(() => {
    callback();
  }, []);

  return (
    <div className={`form-group ${getValFromObjByStrPath(name, errors) && 'input-danger'}`}>
      <label>{labels.length ? label : ''}</label>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {labels.length ? (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              alignItems: 'flex-start'
            }}
          >
            <Controller
              name={name}
              control={methods.control}
              render={({ field }) => {
                const checkedStyle = {
                  width: '20px',
                  height: '20px',
                  borderRadius: '20%',
                  background:
                    "url('data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%278%27 height=%278%27 viewBox=%270 0 8 8%27%3e%3cpath fill=%27%23fff%27 d=%27M6.564.75l-3.59 3.612-1.538-1.55L0 4.26l2.974 2.99L8 2.193z%27/%3e%3c/svg%3e') #3185b7 no-repeat 50% / 50% 50%"
                };
                const noneCheckedStyle = {
                  width: '20px',
                  height: '20px',
                  borderRadius: '20%',
                  backgroundColor: '#d4d7da'
                };
                return (
                  <label
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      gap: '20px',
                      alignItems: 'center'
                    }}
                  >
                    <input
                      className="form-check-input ml-3"
                      type="checkbox"
                      {...field}
                      checked={field.value}
                      style={{ position: 'relative', display: 'none' }}
                    />
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: '5px',
                        alignItems: 'center'
                      }}
                    >
                      <div style={field.value ? checkedStyle : noneCheckedStyle}></div>
                      <span>{labels[0]}</span>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: '5px',
                        alignItems: 'center'
                      }}
                    >
                      <div style={!field.value ? checkedStyle : noneCheckedStyle}></div>
                      <span>{labels[1]}</span>
                    </div>
                  </label>
                );
              }}
            />
          </div>
        ) : (
          <div style={{ width: '14px', height: '35px' }}>
            <Controller
              name={name}
              control={methods.control}
              render={({ field }) => {
                return (
                  <input
                    className="form-check-input ml-2"
                    type="checkbox"
                    checked={field.value}
                    {...field}
                  />
                );
              }}
            />
          </div>
        )}
        <label className="ml-4">{!labels.length && label}</label>
      </div>
      <span className={'text-danger'}>{getValFromObjByStrPath(name, errors)?.message}</span>
    </div>
  );
};

export default BooleanField;
