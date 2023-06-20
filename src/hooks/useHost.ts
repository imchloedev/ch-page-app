import { hostState } from '@src/atoms';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

export const useHost = () => {
  const [hostName, setHostName] = useRecoilState(hostState);
  useEffect(() => {
    const { href } = window.location;
    const idx = href.indexOf('?');
    setHostName(href.slice(0, idx));
  }, []);
  return hostName;
};
