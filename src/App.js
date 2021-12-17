import useStore from './hooks/useStore';

import cx from 'classnames'

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
import Paragraph from './components/Paragraph';
import Headline from './components/Headline';

const langSelector = (s) => s.lang;

function App() {
  const lang = useStore(langSelector);
  return (
    <div className={cn.app}>
      <Header />
      <Intro content={content.intro} lang={lang} />
      <section className={cn.layoutWrapper}>
        <Headline lang={lang} content={content.intro.headline} />
        <Paragraph lang={lang} content={content.intro.text} />
      </section>
      <SmartCity lang={lang} content={content.smartCity} ui={content.ui} />
      <FrischerWind lang={lang} content={content.frischerWind} ui={content.ui} />
      <StadtUndWir lang={lang} content={content.stadtUndWir} ui={content.ui} />
      <HinterDenKulissen lang={lang} content={content.hinterDenKulissen} ui={content.ui} />
      <Unterwegs lang={lang} content={content.unterwegs} ui={content.ui} />
      <section className={cx(cn.layoutWrapper, cn.layoutMargin)}>
        <Paragraph lang={lang} content={content.outtro} />
      </section>
      <Footer content={content.footer} lang={lang}/>
    </div>
  );
}

export default App;
