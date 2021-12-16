import cx from 'classnames';
import cn from './Footer.module.scss';

function Footer({content, lang}) {
  return (
    <div className={cn.footer}>
      <div className={cn.logos}>
        {content.logos.map((d,i) => (
          <div key={`logo-key-${i}`} className={cx(cn.block, cn[d.className])}>
            <span className={cn.label}>{d.label}</span>
            <a className={cn.logoWrapper} href={d.href} target="_blank" rel="noreferrer">
              <img src={d.src} alt={d.alt} />
            </a>
          </div>
        ))}
      </div>
      <div className={cn.bottom}>
          <span className={cn.copyright}>{content.copyright}</span>
          <div className={cn.items}>
            <div className={cn.item}>
              <a href={content.privacy.href} rel="noreferrer" target="_blank">
                {content.privacy[lang]}
              </a>
            </div>
            <div className={cn.item}>
              <a href={content.impressum.href} rel="noreferrer" target="_blank">
                {content.impressum[lang]}
              </a>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Footer;