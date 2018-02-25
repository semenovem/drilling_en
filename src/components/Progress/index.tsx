import * as React from 'react';
import './style.css';

interface Props {
  progress?: Number;
  duration?: number;
  onEnd(): void;
}

class Progress extends React.Component<Props> {
  private elIndicator: HTMLDivElement;

  public componentWillUnmount() {
    this.elIndicator.removeEventListener('animationend', this.animationEnd);
  }

  public render() {
    const props = this.props;

    return (
      <div className="cmp-progress">
        <div
          className="cmp-progress-indicator cmp-progress-indicator-animation"
          style={{
            animationDuration: `${props.duration}ms`,
          }}
          ref={this.indicator}
        />
      </div>
    );
  }

  private indicator = (el: HTMLDivElement) => {
    this.elIndicator = el;

    if (el) {
      this.elIndicator.addEventListener('animationend', this.animationEnd, false);
    }
  }

  private animationEnd = () => {
    this.props.onEnd();
  }
}

export default Progress;