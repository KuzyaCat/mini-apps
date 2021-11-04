import { useEffect, useState } from 'react';
import { isIosDevice } from '../helpers/isIosDevice';

export const useDeviceOrientation = () => {
  const [orientation, setOrientation] = useState(isIosDevice ? '' : window.screen.orientation.type);
  const [iosOrientation, setIosOrientation] = useState(isIosDevice ? window.orientation : 0);

  const setOrienatation = () => {
    if (isIosDevice) {
      setIosOrientation(window.orientation)
    } else {
      setOrientation(window.screen.orientation.type);
    }
  };

  useEffect(() => {
    window.addEventListener("orientationchange", setOrienatation);

    return () => {
      window.removeEventListener("orientationchange", setOrienatation);
    };
  }, []);

  if (iosOrientation !== 0 || orientation.includes('landscape')) {
    return { isPortraitOrientation: false };
  } else {
    return { isPortraitOrientation: true };
  }
}
