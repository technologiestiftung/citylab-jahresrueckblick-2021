import cx from 'classnames';
import useOnScreen from '../../hooks/useOnScreen';
import useStore from '../../hooks/useStore';
import {useRef, useEffect} from 'react';

import ScrollableImages from '../../components/ScrollableImages';
import Paragraph from '../../components/Paragraph';
import Headline from '../../components/Headline';
import Funfact from '../../components/Funfact';

import cn from './HinterDenKulissen.module.scss';

const setActiveTopicSelector = (s) => s.setActiveTopic;

function HinterDenKulissen({content, ui, lang}) {
  const elementRef = useRef(null);
  const isOnScreen = useOnScreen(elementRef);
  const setActiveTopic = useStore(setActiveTopicSelector)

  useEffect(() => {
    if (isOnScreen) {
      setActiveTopic(content.id)
    }
  }, [isOnScreen, content.id, setActiveTopic])

  return (
    <section>
        <div className="anchor" ref={elementRef} id={`anchor-${content.id}`} /> 
        <div className={cx(cn.wrapper, cn.layoutWrapper)}>
        <Headline lang={lang} content={content.blocks.intro.title} />
        <Paragraph lang={lang} content={content.blocks.intro.text} />
        <Funfact content={content.blocks.funfact} lang={lang}/>
      </div>
      <ScrollableImages lang={lang} content={content} ui={ui}/>
    </section>
  )
}

export default HinterDenKulissen;