import ScrollableImages from '../../components/ScrollableImages';
// import Quote from '../../components/Quote';
import Paragraph from '../../components/Paragraph';
import Headline from '../../components/Headline';

import cn from './SmartCity.module.scss';
import Funfact from '../../components/Funfact';

function SmartCity({content, ui, lang}) {
  console.log(content.blocks)
  return (
    <section>
      <div className={cn.wrapper}>
          <Headline lang={lang} content={content.blocks.intro.title} />
          <Paragraph lang={lang} content={content.blocks.intro.text} />
      </div>
      <ScrollableImages lang={lang} content={content} ui={ui}/>
      <Funfact content={content.blocks.funfact} lang={lang}/>
    </section>
  )
}

export default SmartCity;