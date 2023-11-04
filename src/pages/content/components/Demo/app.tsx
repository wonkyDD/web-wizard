import { useEffect } from 'react';
import log from '@src/lib/log';

export default function App() {
  useEffect(() => {
    log('content view loaded');
  }, []);
  // return <div className="text-lime-400">content view</div>;
  return <div></div>;
}
