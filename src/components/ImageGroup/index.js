import { useEffect } from 'react';
import cx from 'classnames';

import cn from './ImageGroup.module.scss';

import { useImageGroupStore } from '../../hooks/useStore'

const activeSelector = (s) => s.active;

function ImageGroup({images}) {

  const active = useImageGroupStore(activeSelector);

  useEffect(() => {
    console.log(active);
  }, [active])

  return (
    <div className={cn.imageWrapper}>
      {images.map(d => (
        <img key={d.id} className={cx(cn.image, {[cn.active]: active === d.id})} src={d.img.src} alt={d.img.alt} />
      ))}
    </div>
  )
}

export default ImageGroup;