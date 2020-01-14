import React from 'react';
import { ToggleSwitch } from '@momentum-ui/react';
import { LightContext } from '../App';

const HomePage = () => {
  const lightStatus = React.useContext(LightContext);
  return (
    <div className="row">
      <ToggleSwitch
        checked={lightStatus.status}
        onChange={() => lightStatus.toggleFn()}
        label='Toggle Light'
        htmlId='testToggleSwitch1'
      />
    </div>
  );
};

export default HomePage;
