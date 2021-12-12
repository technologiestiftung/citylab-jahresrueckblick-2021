import cn from './App.module.scss';

import content from './content';

import DigitalVereint from './views/DigitalVereint';

function App() {
  return (
    <div className={cn.app}>
      <DigitalVereint content={content.cluster}/>
    </div>
  );
}

export default App;
