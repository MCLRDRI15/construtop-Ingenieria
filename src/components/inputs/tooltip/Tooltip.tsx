import React, { useEffect, useRef, useState } from 'react';

export type TooltipProps = {
  direction: 'right' | 'left' | 'bottom' | 'top';
  content: JSX.Element;
  children: JSX.Element;
  additionalCss?: string;
  additionalCssActive?: string;
  additionalCssToolTip?: string;
  mode: string;
};

export const Tooltip = ({
  children,
  direction,
  content,
  additionalCss,
  additionalCssToolTip,
  additionalCssActive,
  mode,
}: TooltipProps): JSX.Element => {
  let timeout;
  const [active, setActive] = useState<boolean>(false);
  const ref: React.RefObject<HTMLDivElement> = useRef();

  const setTimeoutLogic = (): void => {
    timeout = setTimeout(() => {
      setActive(true);
    });
  };

  const actionTipClick = (): void => {
    if (active) {
      clearInterval(timeout);
    } else {
      setTimeoutLogic();
    }
    setActive(!active);
  };
  const actionTipHover = (hover: boolean): void => {
    if (hover) {
      setTimeoutLogic();
    } else {
      clearInterval(timeout);
      setActive(false);
    }
  };

  useEffect(() => {
    if (active && mode === 'click') {
      const checkIfClickedOutside = e => {
        if (active && ref.current && !ref.current.contains(e.target)) {
          setActive(false);
        }
      };
      document.addEventListener('mousedown', checkIfClickedOutside);
      return () => {
        document.removeEventListener('mousedown', checkIfClickedOutside);
      };
    }
  }, [active, mode]);

  const directionXCommon = 'transformYTranslateNegative  top-1/2';

  const directions = {
    bottom: 'transformXTranslateNegative -top-8 ',
    top: ' transformXTranslateNegative bottom-8',
    left: `${directionXCommon}  right-9`,
    right: `${directionXCommon} left-6`,
  };

  const handleClick = (e, mode) => {
    e.stopPropagation();
    if (mode === 'click') {
      actionTipClick();
    } else {
      e.preventDefault();
    }
  };

  return (
    <>
      <div
        draggable={true}
        onDragStart={e => e.preventDefault()}
        ref={ref}
        data-cy='tooltip-actions'
        id='tooltip'
        className={`
            cursor-pointer 
            transition
            duration-250
            ${additionalCss && additionalCss}
            ${active && additionalCssActive && additionalCssActive}
            rounded-full
            justify-center
            items-center
            relative
            p-1
            `}
        onClick={e => handleClick(e, mode)}
        onMouseEnter={e =>
          mode === 'hover' ? actionTipHover(true) : e.preventDefault()
        }
        onMouseLeave={e =>
          mode === 'hover' ? actionTipHover(false) : e.preventDefault()
        }
      >
        {children}
        {active && (
          <div
            draggable={true}
            onDragStart={e => e.preventDefault()}
            className={`absolute
            z-50
            leading-3  
            ${direction == 'bottom' || direction == 'top' ? 'left-1/2' : ''}
            text-sm
            rounded-md  
            ${additionalCssToolTip && additionalCssToolTip}
            ${
              direction == 'bottom'
                ? directions[`${direction}`]
                : directions[`${'top'}`]
            }`}
          >
            {content}
          </div>
        )}
      </div>
    </>
  );
};

export default Tooltip;