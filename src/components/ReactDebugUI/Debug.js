import React, { useState } from 'react';
import cn from './classnames';
import ReactJson from './react-json-view';
import './Debug.scss';

export const Debug = ({
  data,
  componentName = '',
  trimmedStrings = true,
  collapsed = false,
  isDefaultMinimized = false,
  position = 'top-right', // top-right | bottom-right | top-left | bottom-left
  style = {},
}) => {
  const [isMinimized, setMinimize] = useState(isDefaultMinimized);
  const [isScrollbarVisible, setScrollbarVisibility] = useState(false);

  return (
    <div
      className={cn(
        `custom-debug custom-debug--${position}`,
        isMinimized && 'custom-debug--minimized',
        (!isScrollbarVisible || isMinimized) && 'custom-debug--hidden-scrollbar',
        trimmedStrings && 'custom-debug--collapsed-strings'
      )}
      onClick={() => isMinimized && setMinimize(false)}
      style={style}
    >
      <div className="custom-debug__button-box">
        <button type="button" className="custom-debug__button" onClick={() => setMinimize(true)}>
          Hide panel
        </button>
        <button type="button" className="custom-debug__button" onClick={() => setScrollbarVisibility((prev) => !prev)}>
          Toggle scrollbar
        </button>
      </div>
      {componentName && (
        <>
          component: <span className="custom-debug__title">{componentName}</span>
        </>
      )}
      <ReactJson
        src={data}
        theme="flat"
        iconStyle="square"
        indentWidth={4}
        collapseStringsAfterLength={trimmedStrings ? 30 : false}
        collapsed={collapsed}
        onEdit={() => {}}
        onDelete={() => {}}
      />
    </div>
  );
};

Debug.displayName = 'Debug';
