import React from 'react';
import Winner from './Winner';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass({
  mixins: [PureRenderMixin],

  getPair: function() {
    return this.props.pair || [];
  },
  isDisabled: function() {
    return !!this.props.hasVoted;
  },
  hasVotedFor: function(entry) {
    this.props.hasVoted === entry;
  },
  render: function() {
    return <div className="voting">
      {this.getPair().map(entry =>
        <button key={entry}
          onClick={() => this.props.vote(entry)} >
          <h1>{entry}</h1>
          { this.hasVotedFor(entry) ?
            <div className='label'> Voted </div> :
            null }
        </button>
      )}
    </div>;
  }
});
