import useStore from '../../hooks/useStore';
import cx from 'classnames';

import {ReactComponent as GlobeIcon} from '../../icons/globe.svg';

import cn from './LanguageSwitch.module.scss';

const langSelector = (s) => s.lang;
const setLangSelector = (s) => s.setLang;

function LanguageSwitch() {
  const setLang = useStore(setLangSelector);
  const lang = useStore(langSelector);

  return (
    <div className={cn.wrapper}>
      <div onClick={() => setLang(lang === 'de' ? 'en' : 'de')} className={cn.iconWrapper}>
        <GlobeIcon fill="black"/>
      </div>
      <span>{lang}</span>
    </div>
  )
}

export default LanguageSwitch;