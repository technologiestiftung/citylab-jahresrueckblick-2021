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

function Navbar({items, lang}) {
  return (
    <>
    {items.map(d => (
      <span className={cn.label}>{d.topic[lang]}</span>
    ))}
    <div className={cn.navbar}>
      {items.map(d => (
        <>
          <div className={cn.iconWrapper}>
            {icons[d.id]}
          </div>
        </>
      ))}
    </div>
    </>
  )
}

export default Navbar