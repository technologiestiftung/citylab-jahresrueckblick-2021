import cx from 'classnames';
import cn from './Link.module.scss'

import {ReactComponent as ArrowIcon} from '../../icons/arrow-right.svg';

function Link({content, lang, theme}) {
  return (
    <a className={cx(cn.link, cn[theme])} href={content.href} alt="" target="blank">
      {content[lang]}
      <div className={cn.iconWrapper}>
        <ArrowIcon fill="white" />
      </div>
    </a>
  )
}

export default Link;