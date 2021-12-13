import cn from './ScrollableImages.module.scss';

import ImageGroup from './ImageGroup';
import ImageNav from './ImageNav';
import Tile from './Tile';
import Button from '../Button';

import useStore from '../../hooks/useStore'

const langSelector = (s) => s.lang;

function ScrollableImages({content, ui}) {
  const lang = useStore(langSelector)
  const {items, topic} = content;
  return (
    <div className={cn.scrollContainer}>
      <ImageGroup images={items} />
      <ImageNav images={items} />
      {items.map(d => (
        <div key={d.id} className={cn.tileWrapper}>
          <Tile id={d.id}>
            <div className={cn.topline}>
              <span className={cn.id}>{d.id}</span>
              <span className={cn.label}>{topic[lang]}</span>
            </div>
            <h3 className={cn.title}>{d.text.title[lang]}</h3>
            <p className={cn.text}>{d.text.paragraph[lang]}</p>
            <Button to={d.text.link} label={ui.btnProject[lang]}/>
          </Tile>
        </div>
      ))}
    </div>
  )
}

export default ScrollableImages;