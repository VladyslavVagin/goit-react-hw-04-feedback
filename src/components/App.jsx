import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';
import { useState } from 'react';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = ['good', 'neutral', 'bad'];

  //================================ Increse Feedback function
  function onLeaveFeedback(option) {
    switch (option) {
      case 'good':
        setGood(prev => prev + 1);
        break;

      case 'neutral':
        setNeutral(prev => prev + 1);
        break;

      case 'bad':
        setBad(prev => prev + 1);
        break;

      default:
        return;
    }
  }

  // Calculate TOTAL quality of feedbacks
  function countTotalFeedback() {
    let summ = 0;
    const arrayOfFeedbacks = [good, neutral, bad];
    for (let i = 0; i < arrayOfFeedbacks.length; i++) {
      summ += arrayOfFeedbacks[i];
    }
    return summ;
  }

  //===================================== Calculate Percentage of Positive Feedbacks
  function countPositiveFeedbackPercentage(total) {
    const positivePercent = (good / total) * 100 || 0;
    return Math.round(positivePercent);
  }

  //=========================================== Render JSX of feedback form
  return (
    <div>
      <Section title="please, leave your feedback">
        <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
      </Section>
      <Section title="statistics">
        {countTotalFeedback() > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage(
              countTotalFeedback()
            )}
          />
        ) : (
          <Notification message="no feedback given" />
        )}
      </Section>
    </div>
  );
};
