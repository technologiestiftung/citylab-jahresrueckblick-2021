import cn from './Intro.module.scss';

function Intro({content, lang}) {
  const {img, headline} = content;
  return (
    <div className={cn.wrapper}>
      <img className={cn.image} src={img.src} alt={img.alt} />
      <div className={cn.textContainer}>
        <h2 className={cn.headline} dangerouslySetInnerHTML={{__html: headline[lang]}}/>
      </div>
    </div>
  )
}

export default Intro;