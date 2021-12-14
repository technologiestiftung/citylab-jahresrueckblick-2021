import useStore, { useImageGroupStore } from '../../hooks/useStore'
import { useMemo } from 'react';
import cx from 'classnames';

import cn from './ScrollableImages.module.scss';

import ImageGroup from './ImageGroup';
import ImageNav from './ImageNav';
import Tile from './Tile';
import Button from '../Button';

const langSelector = (s) => s.lang;
const activeSelector = (s) => s.active;

function ScrollableImages({content, ui}) {
  const {items, topic} = content;

  const lang = useStore(langSelector);
  const active = useImageGroupStore(activeSelector);
  const activeItem = useMemo(() => {
    return items.find(d => d.id === active)
  }, [active, items])

  return (
    <div className={cn.scrollContainer}>
      <ImageGroup theme={activeItem.theme} images={items} />
      <ImageNav theme={activeItem.theme}  images={items} />
      {items.map(d => (
        <div key={d.id} className={cn.tileWrapper}>
          <Tile align={d.align} theme={d.theme} id={d.id}>
            <div className={cx(cn.topline, cn[d.theme])}>
              <span className={cn.id}>{d.id}</span>
              <span className={cn.label}>{topic[lang]}</span>
            </div>
            <h3 className={cn.title}>{d.text.title[lang]}</h3>
            <p className={cn.text}>{d.text.paragraph[lang]}</p>
            <Button theme={d.theme} to={d.text.link} label={ui.btnProject[lang]}/>
          </Tile>
        </div>
      ))}
    </div>
  )
}

export default ScrollableImages;