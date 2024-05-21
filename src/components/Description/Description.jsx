import css from './Description.module.css';

const Description = () => {
  return (
      <div className={css.title_container}>
          <svg width="100%" height="100%">
              <text className={css.title} x="50%" y="70%">Sip Happens Café</text>
          </svg>
      <p className={css.title_subtext}>Please leave your feedback about our service by selecting one of the options below.
</p>
    </div>
  )
}

export default Description;