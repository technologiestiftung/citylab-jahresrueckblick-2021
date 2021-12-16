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
      <div className={cn.iconWrapper}>
        <GlobeIcon fill="white"/>
      </div>
      <span onClick={() => setLang('de')} className={cx(cn.label, {[cn.active]: lang === 'de'})}>DE</span>
      <div className={cn.divider}/>
      <span onClick={() => setLang('en')} className={cx(cn.label, {[cn.active]: lang === 'en'})}>EN</span>
    </div>
  )
}

export default LanguageSwitch;