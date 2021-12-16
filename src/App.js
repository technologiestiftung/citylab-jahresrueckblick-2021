import useStore from './hooks/useStore';

import cn from './App.module.scss';

import content from './content';

import FrischerWind from './sections/FrischerWind';
import SmartCity from './sections/SmartCity';
import StadtUndWir from './sections/StadtUndWir';
import Unterwegs from './sections/Unterwegs';
import HinterDenKulissen from './sections/HinterDenKulissen';

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
      <SmartCity lang={lang} content={content.smartCity} ui={content.ui} />
      <FrischerWind lang={lang} content={content.frischerWind} ui={content.ui} />
      <StadtUndWir lang={lang} content={content.stadtUndWir} ui={content.ui} />
      <HinterDenKulissen lang={lang} content={content.hinterDenKulissen} ui={content.ui} />
      <Unterwegs lang={lang} content={content.unterwegs} ui={content.ui} />
      <Footer content={content.footer} lang={lang}/>
    </div>
  );
}

export default App;
