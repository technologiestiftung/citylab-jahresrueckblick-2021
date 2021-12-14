import ScrollableImages from '../../components/ScrollableImages';
import Quote from '../../components/Quote';
import Paragraph from '../../components/Paragraph';

import cn from './DigitalVereint.module.scss';

function DigitalVereint({content, ui, lang}) {
  return (
    <section>
      <div className={cn.wrapper}>
          <Paragraph lang={lang} content={content.blocks.intro} />
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