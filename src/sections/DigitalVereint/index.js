import ScrollableImages from '../../components/ScrollableImages';
import Quote from '../../components/Quote';
import Paragraph from '../../components/Paragraph';
import Headline from '../../components/Headline';

import cn from './DigitalVereint.module.scss';

function DigitalVereint({content, ui, lang}) {
  return (
    <section className={cn.layoutWrapper}>
      <div className={cn.wrapper}>
          <Headline lang={lang} content={content.blocks.intro.title} />
          <Paragraph lang={lang} content={content.blocks.intro.text} />
          <Quote lang={lang} content={content.blocks.quote}/>
      </div>
      <ScrollableImages lang={lang} content={content} ui={ui}/>
      <div className={cn.wrapper}>
          <Paragraph lang={lang} content={content.blocks.intro} />
          <Quote lang={lang} content={content.blocks.quote}/>
      </div>
    </section>
  )
}

export default DigitalVereint;