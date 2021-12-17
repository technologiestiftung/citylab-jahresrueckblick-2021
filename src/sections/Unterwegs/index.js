import ScrollableImages from '../../components/ScrollableImages';
// import Quote from '../../components/Quote';
import Paragraph from '../../components/Paragraph';
import Headline from '../../components/Headline';

import cn from './Unterwegs.module.scss';

import cx from 'classnames';

function Unterwegs({content, ui, lang}) {
  return (
    <section>
      <div className={cx(cn.wrapper, cn.layoutWrapper)}>
        <Headline lang={lang} content={content.blocks.intro.title} />
        <Paragraph lang={lang} content={content.blocks.intro.text} />
      </div>
      <ScrollableImages lang={lang} content={content} ui={ui}/>
      {/* <div className={cn.wrapper}>
          <Paragraph lang={lang} content={content.blocks.intro} />
      </div> */}
    </section>
  )
}

export default Unterwegs;