import React, { useContext, useEffect, useState } from 'react';
import './CustomSelect.css';
import PropTypes from 'prop-types';
import { ThemeContext } from 'app/providers/ThemeContextProvider';
import useOutsideClick from 'shared/hooks/useOutsideClick';
import { useFormContext } from 'react-hook-form';
import getValFromObjByStrPath from 'shared/utils/react_hook_form/getValueFromObj';
import { useGetHandbookQuery } from 'store/reducers/HandbookReducer';
import { PAGE_SIZE } from 'constants/api';

const getErr = getValFromObjByStrPath;

function useUrlSelectWithHandbook({ setOptions, setLoading, url, name }) {
  let validatedUrl = ""
  let validatedUrl2 = ""
  if (typeof url === "object" && url?.second) {
    validatedUrl = url.first?.includes('?')
      ? url.first + '&page_size=' + PAGE_SIZE
      : url.first + '?page_size=' + PAGE_SIZE;
    validatedUrl2 = url.second?.includes('?')
      ? url.second + '&page_size=' + PAGE_SIZE
      : url.second + '?page_size=' + PAGE_SIZE;
  } else {
    validatedUrl = url?.includes('?')
      ? url + '&page_size=' + PAGE_SIZE
      : url + '?page_size=' + PAGE_SIZE;
  }

  const { data, isLoading = false } = useGetHandbookQuery(validatedUrl);
  const { data: data2, isLoading: isLoading2 = false } = useGetHandbookQuery(validatedUrl2);

  useEffect(() => {
    if (typeof url === "object") {
      data?.data && data2?.data && url && setOptions(data?.data.concat(data2?.data));
      setLoading(isLoading2);
    } else {
      data?.data && url && setOptions(data?.data);
      setLoading(isLoading);
    }
  }, [isLoading, url, data, isLoading2, data2]);

  return null;
}

function UrlSelect({
  label,
  name,
  url,
  list = [],
  mapFunction = (i) => i,
  required = false,
  readonly = false,
  disabled = false,
  rules = {}
}) {
  const methods = useFormContext();
  const selfRef = React.useRef(null);
  const [options, setOptions] = useState(list);
  const [loading, setLoading] = useState(false);
  const [isVisible, setVisible] = useState(false);
  const [selected, setSelected] = useState(null);
  const { background } = useContext(ThemeContext);
  const buttonClickHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setVisible((p) => !p);
  };
  useOutsideClick(selfRef, () => setVisible(!isVisible), isVisible);
  const {
    setValue,
    formState: { errors }
  } = useFormContext();
  const error = getErr(name, errors)?.message;
  function selectHandler({ currentTarget }) {
    const id = currentTarget.getAttribute('data-value');

    setValue(name, +id || id);
    setVisible((p) => !p);
  }

  // styles
  let isDark = background.value === 'dark';
  let dropDownStyle1 = ` dropdown__${isDark ? 'dark' : 'light'}`;
  let dropDownStyle2 = `${isVisible ? ' dropdown__list--visible' : ''}`;
  let errorStyle = `${error ? ' error' : ''}`;
  let btnStyle = { color: isDark ? 'white' : '#6e6e6e' };
  //styles

  let requiredValue = false;
  if (required) {
    requiredValue =
      typeof required === 'string' || required instanceof String
        ? required
        : 'Это обязательное поле';
  }

  useEffect(() => {
    const id = methods.watch(name);
    const defaultSelection = options?.map(mapFunction)?.find((item) => item?.id === id);
    if (defaultSelection?.title) {
      setSelected(defaultSelection?.title);
    } else {
      setSelected(null);
    }
  }, [methods.watch(name), options]);

  useUrlSelectWithHandbook({ setOptions, name, url, setLoading });

  return (
    <>
      {(
        <div className="form-group input-danger" ref={selfRef}>
          <div
            className="dropdown"
            ref={methods.register(name, { required: requiredValue, ...rules }).ref}
            tabIndex={-1}
          >
            <label className="overflow-hl">{label}</label>
            <button
              type={'button'}
              style={btnStyle}
              onClick={buttonClickHandler}
              disabled={readonly || disabled || !options.length}
              className={`dropdown__button ${(readonly || !options.length) && 'bg-light'}` + errorStyle}
            >
              {loading ? 'Загрузка...' : selected || (options.length ? 'Не выбрано' : "Нет данных")}
            </button>
            <ul className={'dropdown__list' + dropDownStyle2 + dropDownStyle1}>
              {options
                ?.map(mapFunction)
                .map(({ id, title, lastTitle, middleText, isDefault }, _) => {
                  return (
                    <li
                      key={id}
                      onClick={selectHandler}
                      className={
                        'dropdown__list-item' + ` ${isDefault && 'dropdown__list-item-active'}`
                      }
                      data-title={title}
                      data-value={id}
                    >
                      <div className={'d-flex justify-content-start'} style={btnStyle}>
                        <span className={`${middleText && lastTitle && 'w-50'}`}>{title}</span>
                        <span>{middleText}</span>
                        <span>{lastTitle}</span>
                      </div>
                    </li>
                  );
                })}
            </ul>
            <span className={'text-danger'}>{error}</span>
          </div>
        </div>
      )}
    </>
  );
}

UrlSelect.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string
};

export default UrlSelect;
