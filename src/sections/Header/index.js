import LanguageSwitch from "../../components/LanguageSwitch";

import cn from 'Header.module.scss';

function Header() {
  return (
    <div className={cn.header}>
      <LanguageSwitch />
    </div>
  )
}

export default Header;