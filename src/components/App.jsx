import { Component } from "react";
import Container from 'components/Container';
import FeedbackOptions from 'components/FeedbackOptions';
import Section from "components/Section";
import Statistics from "components/Statistics";
import Notification from "components/Notification";

class App extends Component {
 state = {
  good: 0,
  neutral: 0,
  bad: 0
  }

  onLeaveFeedback = event => {
    const { name } = event.target;
    this.setState(prevState => {
      return { [name]: prevState[name] + 1 };
    });
  }

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    const positiveFeedback = Math.round(good * 100 / total);
    return !positiveFeedback ? 0 : positiveFeedback;
  }

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();

    return(
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions options={Object.keys(this.state)}  onLeaveFeedback={this.onLeaveFeedback}/>
        </Section>
        
        <Section title="Statistics">
          {total > 0 ? <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}></Statistics> : <Notification message="There is no feedback"></Notification>}
        </Section>
   </Container >
  )
 }
}

export default App;
