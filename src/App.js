import useStore from './hooks/useStore';

import cn from './App.module.scss';

import content from './content';

import DigitalVereint from './sections/DigitalVereint';

import Header from './sections/Header';
import Footer from './sections/Footer';

import Intro from './components/Intro';

const langSelector = (s) => s.lang;

function App() {
  const lang = useStore(langSelector);
  return (
    <div className={cn.app}>
      <Header />
      <Intro content={content.intro} lang={lang} />
      <DigitalVereint lang={lang} content={content.cluster} ui={content.ui} />
      <Footer content={content.footer} lang={lang}/>
    </div>
  );
}

export default App;
