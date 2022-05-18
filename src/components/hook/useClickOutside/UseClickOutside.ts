import { MutableRefObject, useEffect, useState } from 'react';

export const useClickOutside = (
  dropdownRef: MutableRefObject<any>,
  chevronRef?: MutableRefObject<any>,
) => {
  const [isVisible, setIsVisible] = useState(false);
  const handleClickOutside = event => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target) &&
      !chevronRef.current.contains(event.target)
    ) {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  });
  return { isVisible, setIsVisible };
};