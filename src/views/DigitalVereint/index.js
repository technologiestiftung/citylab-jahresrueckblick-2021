import cn from './DigitalVereint.module.scss';

import ImageGroup from '../../components/ImageGroup';
import Tile from '../../components/Tile';

import useStore from '../../hooks/useStore'

const langSelector = (s) => s.lang;

function DigitalVereint({content}) {
  const lang = useStore(langSelector)
  return (
    <div className={cn.scrollContainer}>
      <ImageGroup images={content} />
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

export default DigitalVereint;