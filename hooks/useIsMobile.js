import { useMedia } from 'react-use';

export default function useIsMobile() {
  const isMobile = useMedia('(max-width: 768px)');
  return isMobile;
}
