import ScrollableImages from '../../components/ScrollableImages';
import Quote from '../../components/Quote';

import cn from './DigitalVereint.module.scss';

function DigitalVereint({content, ui}) {
  return (
    <section>
      <ScrollableImages content={content} ui={ui}/>
      <div className={cn.wrapper}>
          <Quote content={content.blocks.quote}/>
      </div>
    </section>
  )
}

export default DigitalVereint;