import cx from 'classnames';

import ScrollableImages from '../../components/ScrollableImages';
// import Quote from '../../components/Quote';
import Paragraph from '../../components/Paragraph';
import Headline from '../../components/Headline';
import Funfact from '../../components/Funfact';

import cn from './StadtUndWir.module.scss';

function StadtUndWir({content, ui, lang}) {
  return (
    <section>
      <div className={cx(cn.wrapper, cn.layoutWrapper)}>
        <Headline lang={lang} content={content.blocks.intro.title} />
        <Paragraph lang={lang} content={content.blocks.intro.text} />
        <Funfact content={content.blocks.funfact} lang={lang}/>
      </div>
      <ScrollableImages lang={lang} content={content} ui={ui}/>
      {/* <div className={cn.wrapper}>
          <Paragraph lang={lang} content={content.blocks.intro} />
      </div> */}
    </section>
  )
}

export default StadtUndWir;