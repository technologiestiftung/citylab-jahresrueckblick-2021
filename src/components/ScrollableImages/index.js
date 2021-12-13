import cn from './ScrollableImages.module.scss';

import ImageGroup from './ImageGroup';
import ImageNav from './ImageNav';
import Tile from './Tile';

import useStore from '../../hooks/useStore'

const langSelector = (s) => s.lang;

function ScrollableImages({content}) {
  const lang = useStore(langSelector)
  return (
    <div className={cn.scrollContainer}>
      <ImageGroup images={content} />
      <ImageNav images={content} />
      {content.map(d => (
        <div key={d.id} className={cn.tileWrapper}>
          <Tile id={d.id}>
            <h3>{d.text.title[lang]}</h3>
            <p>{d.text.paragraph[lang]}</p>
          </Tile>
        </div>
      ))}
    </div>
  )
}

export default ScrollableImages;