import Module from './Module';
import modules from '../data/modules';

const ModuleWrapper = () => {
  return (
    <section className='flex flex-col items-center justify-start gap-4'>
      <h2 className='text-3xl font-semibold'>Select additional Health Modules</h2>

      <Module name='BODY' addons={modules.body} />
      <Module name='DIET' addons={modules.diet} />
      <Module name='MIND' addons={modules.mind} />
    </section>
  );
};

export default ModuleWrapper;

// ['Exercise', 'Weight loss', 'Workout', 'Sleep']
