import cn from './App.module.scss';

import content from './content';

import DigitalVereint from './sections/DigitalVereint';

function App() {
  return (
    <div className={cn.app}>
      <DigitalVereint content={content.cluster} ui={content.ui} />
    </div>
  );
}

export default App;
