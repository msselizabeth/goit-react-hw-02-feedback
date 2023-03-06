import PropTypes from 'prop-types';

import { Component } from "react";
import {Section} from './Section/Section'
import {FeedbackOptions} from './FeedbackOptions/FeedbackOptions';
import { Statistics } from "./Statistics/Statistics";
import {Notification} from './Notification/Notification'

export class App extends Component {
  
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  handleFeedbackClick = (event) => {
    const { name } = event.currentTarget;
    
    this.setState(prevState => {
      return {[name]: prevState[name] + 1}
    })

   };
  
  countTotalFeedback = ({ good, neutral, bad }) => good + neutral + bad;

  countPositiveFeedbackPercentage = (good, total) => total && (good / total * 100).toFixed();
  
 
  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedbacks = this.countTotalFeedback(this.state);
    const positivePercentage = this.countPositiveFeedbackPercentage(good, totalFeedbacks);
  

    return (
      <div>
        <Section title={'Please, leave feedback'}>
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleFeedbackClick}
          />
        </Section>
        
        <Section title={'Statistics'}>
          {totalFeedbacks ?
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedbacks}
              positive={positivePercentage} />
            : <Notification text="There is no feedback" />
          }
        </Section>
        
      
    </div>
    );
  }
    static propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    evt: PropTypes.object,
  }
  
};
