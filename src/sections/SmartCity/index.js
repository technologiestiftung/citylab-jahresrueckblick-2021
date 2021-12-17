import ScrollableImages from '../../components/ScrollableImages';
// import Quote from '../../components/Quote';
import Paragraph from '../../components/Paragraph';
import Headline from '../../components/Headline';

import cx from 'classnames';

import cn from './SmartCity.module.scss';
import Funfact from '../../components/Funfact';

function SmartCity({content, ui, lang}) {
  console.log(content.blocks)
  return (
    <section>
      <div className={cx(cn.wrapper, cn.layoutWrapper)}>
        <Headline lang={lang} content={content.blocks.intro.title} />
        <Paragraph lang={lang} content={content.blocks.intro.text} />
        <Funfact content={content.blocks.funfact} lang={lang}/>
      </div>
      <ScrollableImages lang={lang} content={content} ui={ui}/>
    </section>
  )
}

export default SmartCity;