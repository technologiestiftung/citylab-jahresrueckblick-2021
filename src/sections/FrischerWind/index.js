import ScrollableImages from '../../components/ScrollableImages';
// import Quote from '../../components/Quote';
import Paragraph from '../../components/Paragraph';
import Headline from '../../components/Headline';
import Funfact from '../../components/Funfact';

import cn from './FrischerWind.module.scss';

function FrischerWind({content, ui, lang}) {
  return (
    <section>
      <div className={cn.wrapper}>
        <Headline lang={lang} content={content.blocks.intro.title} />
        <Paragraph lang={lang} content={content.blocks.intro.text} />
      </div>
      <ScrollableImages lang={lang} content={content} ui={ui}/>
      <Funfact content={content.blocks.funfact} lang={lang}/>
      {/* <div className={cn.wrapper}>
          <Paragraph lang={lang} content={content.blocks.intro} />
      </div> */}
    </section>
  )
}

export default FrischerWind;