import React from 'react';
// import logo from '@assets/img/logo.svg';
// import useStorage from '@src/shared/hooks/useStorage';
// import exampleThemeStorage from '@src/shared/storages/exampleThemeStorage';
import '@pages/popup/Popup.css';
import '@src/globals.css';
import withSuspense from '@src/shared/hoc/withSuspense';
import withErrorBoundary from '@src/shared/hoc/withErrorBoundary';
import { Button } from '@src/components/ui/button';

const Popup = () => {
  // const theme = useStorage(exampleThemeStorage);
  return (
    <div className="App">
      <Button className="bg-slate-300">Button</Button>
      <div className="text-white py-10">hello</div>
    </div>
  );
};

export default withErrorBoundary(withSuspense(Popup, <div> Loading ... </div>), <div> Error Occur </div>);
