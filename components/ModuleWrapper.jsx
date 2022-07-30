import Module from './Module';
import modules from '../data/modules';

const ModuleWrapper = ({ props, pass }) => {
  return (
    <section className='flex flex-col items-center justify-start gap-4'>
      <h2 className='text-2xl font-semibold text-slate-700'>Select additional Health Modules</h2>

      <Module name='BODY' addons={modules.body} props={props} passFunction={pass} />
      <Module name='DIET' addons={modules.diet} props={props} passFunction={pass} />
      <Module name='MIND' addons={modules.mind} props={props} passFunction={pass} />
    </section>
  );
};

export default ModuleWrapper;

// ['Exercise', 'Weight loss', 'Workout', 'Sleep']
