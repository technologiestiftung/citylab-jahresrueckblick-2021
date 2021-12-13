import cn from './Button.module.scss'

function Button({to, label}) {
  return (
    <a className={cn.btn} href={to} rel="noreferrer" target="_blank" >{label}</a>
  )
}

export default Button;