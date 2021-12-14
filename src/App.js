import useStore from './hooks/useStore';

import cn from './App.module.scss';

import content from './content';

import DigitalVereint from './sections/DigitalVereint';

const langSelector = (s) => s.lang;

function App() {
  const lang = useStore(langSelector);
  return (
    <div className={cn.app}>
      <DigitalVereint lang={lang} content={content.cluster} ui={content.ui} />
    </div>
  );
}

export default App;
