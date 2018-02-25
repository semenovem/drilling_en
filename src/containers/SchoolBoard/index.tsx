import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect, Dispatch } from 'react-redux';

import { State as GlobalState } from '../../reducers';
import Numeric from '../../components/schoolBoard/Numeric';
import NumericRange from '../../components/schoolBoard/NumericRange';
import { Range, Item } from '../../modules/numeric/types';
import { getCurrectItem } from '../../modules/numeric/selectors';
import { next as numericNext, prev as numericPrev } from '../../modules/numeric/actions';
import Progress from '../../components/Progress';
import SpeakNumber from '../../components/SpeakNumber';

import './style.css';

interface StateProps {
  range: Range;
  currentItem: Item;
}

interface DispatchProps {
  actions: typeof actionCreators;
}

interface Props extends StateProps, DispatchProps {}

enum Status {
  animation,
  speak,
}

interface State {
  status: Status;
}

const actionCreators = {
  numericNext,
  numericPrev,
};

class SchoolBoard extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      status: Status.animation,
    };

    window.addEventListener('keydown', this.onKeyDown);
  }

  public componentWillReceiveProps(nextProps: Props) {
    if (nextProps.currentItem.number !== this.props.currentItem.number) {
      this.setState({
        status: Status.animation,
      });
    }
  }

  public componentWillUnmount() {
    window.removeEventListener('keydown', this.onKeyDown);
  }

  public render() {
    const { range, currentItem } = this.props;

    return (
      <div className="cnt-school-board">
        School Board
        <NumericRange
          start={range.start}
          end={range.end}
        />
        <Numeric
          number={currentItem.number}
        />

        <Progress
          key={currentItem.number}
          duration={currentItem.duration}
          onEnd={this.handlerEndAnimation}
        />

        {this.state.status === Status.speak &&
          <SpeakNumber
            number={currentItem.number}
            onEnd={this.handlerSpeak}
          />
        }
      </div>
    );
  }

  private onKeyDown = (e: KeyboardEvent): void => {
    const key = e.keyCode;

    if (key === 37 || key === 38) {
      this.props.actions.numericPrev();
      return;
    }

    if (key === 39 || key === 40 || key === 13 || key === 32) {
      this.nextNumber();
    }
  }

  private handlerEndAnimation = () => {
    this.setState({
      status: Status.speak,
    });
  }

  private handlerSpeak = () => {
    this.nextNumber();
  }

  private nextNumber = () => {
    this.props.actions.numericNext();
  }
}

function mapStateToProps(state: GlobalState): StateProps {
  return {
    range: state.numeric.range,
    currentItem: getCurrectItem(state.numeric),
  };
}

function mapDispatchToProps(dispatch: Dispatch<DispatchProps>): DispatchProps {
  return {
    actions: bindActionCreators(actionCreators, dispatch),
  };
}

export default connect<StateProps, DispatchProps>(mapStateToProps, mapDispatchToProps)(SchoolBoard);
