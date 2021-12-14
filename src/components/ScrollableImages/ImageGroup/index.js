import cx from 'classnames';

import cn from './ImageGroup.module.scss';

import { useImageGroupStore } from '../../../hooks/useStore'

const activeSelector = (s) => s.active;

function ImageGroup({images, theme}) {

  const active = useImageGroupStore(activeSelector);

  return (
    <div className={cn.imagesWrapper}>
      {images.map(d => (
        <div className={cn.imageWrapper}>
          <img 
            key={d.id} 
            className={cx(cn.image, {[cn.active]: active === d.id})} 
            src={d.img.src} 
            alt={d.img.alt} 
          />
          {d.img.copyright && <span className={cx(cn.copyright, cn[theme])}>{d.img.copyright}</span>}
        </div>
      ))}
    </div>
  )
}

export default ImageGroup;