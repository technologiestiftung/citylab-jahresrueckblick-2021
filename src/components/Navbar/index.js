import { useRef, useState } from 'react';
import useStore from '../../hooks/useStore';
import cx from 'classnames';
import LanguageSwitch from '../LanguageSwitch';

import cn from './Navbar.module.scss';

import {ReactComponent as HinterDenKulissenIcon } from '../../icons/backstage.svg';
import {ReactComponent as SmartCityIcon } from '../../icons/smart-city.svg';
import {ReactComponent as UnterwegsIcon } from '../../icons/on-the-way.svg';
import {ReactComponent as FrischerWind } from '../../icons/projects.svg';
import {ReactComponent as StadtUndWir } from '../../icons/city-and-us.svg';

const icons = {
  smartCity: <SmartCityIcon />,
  frischerWind: <FrischerWind />,
  stadtUndWir: <StadtUndWir />,
  unterwegs: <UnterwegsIcon />,
  hinterDenKulissen: <HinterDenKulissenIcon />,
}

const activeTopicSelector = (s) => s.activeTopic;

function Navbar({items, lang}) {

  const [activeLabel, setActiveLabel] = useState(null)
  
  const elementRef = useRef(null);
  const activeTopic = useStore(activeTopicSelector);

  function handleMouseEnter(label) {
    setActiveLabel(label);
  } 

  function handleMouseLeave() {
    setActiveLabel(null);
  } 

  function handleClick(id) {
    document.getElementById(`anchor-${id}`).scrollIntoView({ behavior: 'smooth', block: 'center' }); 
  }

  return (
    <>
    <div className={cn.navbar}>
      {activeLabel && <div className={cn.labelWrapper}>
        {activeLabel}
      </div>}
      {items.map(d => (
        <>
          <div 
            ref={elementRef} 
            onMouseLeave={() => handleMouseLeave()} 
            onMouseEnter={() => handleMouseEnter(d.topic[lang])} 
            onClick={() => handleClick(d.scrollId)} 
            className={cx(cn.iconWrapper, {[cn.active]: activeTopic === d.scrollId})
          }>
            {icons[d.id]}
          </div>
        </>
      ))}
      <div className={cn.divider} />
      <LanguageSwitch />
    </div>
    </>
  )
}

export default Navbar