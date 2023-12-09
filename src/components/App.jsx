import { Component, useState } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  //================================ Increse Feedback function
  onLeaveFeedback = (option) => {
      this.setState((prevState) => {
        return {
          [option]: prevState[option] + 1,
        }
      })
  }

  // Calculate TOTAL quality of feedbacks
  countTotalFeedback = () => {
    let summ = 0;
    const arrayOfFeedbacks = Object.values(this.state);
    for (let i = 0; i < arrayOfFeedbacks.length; i++) {
      summ += arrayOfFeedbacks[i];
    }
    return summ;
  };

  //===================================== Calculate Percentage of Positive Feedbacks
  countPositiveFeedbackPercentage = total => {
    const positivePercent = (this.state.good / total) * 100 || 0;
    return Math.round(positivePercent);
  };

  //=========================================== Render JSX of feedback form
  render() {
    const options = Object.keys(this.state);
    return (
      <div>
        <Section title="please, leave your feedback">
          <FeedbackOptions options={options} onLeaveFeedback={this.onLeaveFeedback}/>
        </Section>
        <Section title="statistics">
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage(
                this.countTotalFeedback()
              )}
            />
          ) : (
            <Notification message="no feedback given" />
          )}
        </Section>
      </div>
    );
  }
}
