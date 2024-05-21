import css from './Options.module.css'

const Options = ({ updateFeedback, setFeedbackTypes, totalFeedback }) => {

  return (
      <div className={css.btn_list}>
          <button className={css.btn} onClick={() => updateFeedback('good') }>Good</button>
          <button className={css.btn} onClick={() => updateFeedback('neutral') }>Neutral</button>
          <button className={css.btn} onClick={() => updateFeedback('bad')}>Bad</button>
          {totalFeedback > 0 && <button className={css.btn} onClick={() => setFeedbackTypes({ good: 0, neutral: 0, bad: 0 })}>Reset</button>  }
    </div>
  )
}

export default Options;