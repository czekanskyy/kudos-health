import Module from './Module.component';
import modules from '../../data/modules';
import { useState } from 'react';

const ModuleWrapper = ({ props, pass }) => {
  const [firstExpanded, setFirteExpanded] = useState(true);
  const [secondExpanded, setSecondExpanded] = useState(false);
  const [thirdExpanded, setThirdExpanded] = useState(false);

  const changeState = (first, second, third) => {
    setFirteExpanded(first);
    setSecondExpanded(second);
    setThirdExpanded(third);
  };

  const setExpanded = id => {
    switch (id) {
      case 1:
        changeState(true, false, false);
        break;
      case 2:
        changeState(false, true, false);
        break;
      case 3:
        changeState(false, false, true);
        break;

      default:
        changeState(false, false, false);
        break;
    }
  };

  return (
    <section className='flex flex-col items-center justify-start gap-4 order-1 md:order-2'>
      <h2 className='text-xl lg:text-2xl font-semibold text-slate-700'>Select additional Health Modules</h2>

      <Module name='BODY' addons={modules.body} props={props} passFunction={pass} fun={setExpanded} id={1} expanded={firstExpanded} />
      <Module name='DIET' addons={modules.diet} props={props} passFunction={pass} fun={setExpanded} id={2} expanded={secondExpanded} />
      <Module name='MIND' addons={modules.mind} props={props} passFunction={pass} fun={setExpanded} id={3} expanded={thirdExpanded} />
    </section>
  );
};

export default ModuleWrapper;

// ['Exercise', 'Weight loss', 'Workout', 'Sleep']
