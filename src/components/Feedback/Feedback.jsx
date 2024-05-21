import css from './Feedback.module.css'

const Feedback = ({ feedbackTypes, totalFeedback, positiveFeedback }) => {
  return (
      <ul className={css.feedback_list}>
          <li className={css.feedback_item}>Good: {feedbackTypes.good}</li>
          <li className={css.feedback_item}>Neutral: {feedbackTypes.neutral}</li>
          <li className={css.feedback_item}>Bad: {feedbackTypes.bad}</li>
          <li className={css.feedback_item}>Total: {totalFeedback}</li>
          <li className={css.feedback_item}>Positive feedback: {positiveFeedback}%</li>
     </ul>
  )
}

export default Feedback;