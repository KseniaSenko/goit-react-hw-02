import { useEffect, useState} from "react";

import Description from "./Description/Description";
import Options from "./Options/Options";
import Feedback from "./Feedback/Feedback";
import Notification from "./Notification/Notification";

const App = () => {

 
    const [feedbackTypes, setFeedbackTypes] = useState(() => {
        const savedFeedback = window.localStorage.getItem('saved-feedback');
        if (savedFeedback !== null) {
            return JSON.parse(savedFeedback);
        }
        return { good: 0, neutral: 0, bad: 0 }
    });
   
    useEffect(() => {
        window.localStorage.setItem('saved-feedback', JSON.stringify(feedbackTypes));
    }, [feedbackTypes]);

    const totalFeedback = Object.values(feedbackTypes).reduce((acc, current) => acc + current, 0);
    const positiveFeedback = Math.round((feedbackTypes.good / totalFeedback) * 100);


    const updateFeedback = feedbackType => {
    setFeedbackTypes({
      ...feedbackTypes,
      [feedbackType]: feedbackTypes[feedbackType] + 1 });
  }
    return (
        <>
            <Description />
            <Options updateFeedback={updateFeedback} setFeedbackTypes={setFeedbackTypes} totalFeedback={totalFeedback} />
            {totalFeedback !== 0 ? <Feedback feedbackTypes={feedbackTypes} totalFeedback={totalFeedback} positiveFeedback={positiveFeedback} /> : <Notification/>}
        </>
)
};

export default App;
