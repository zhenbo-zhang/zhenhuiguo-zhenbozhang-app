import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setFrequency } from '../actions/action';

class SetFrequency extends Component {
    render() {
        let input;
        return (
            <div className="option-container">
                <form
                    className="options"
                    onSubmit={e => {
                        e.preventDefault();
                        if (!input.value.trim()) {
                            return;
                        }
                        this.props.setFrequency(parseInt(input.value));
                    }}>
                    <input
                        className="option"
                        type="number"
                        min="50"
                        max="2000"
                        ref={node => (input = node)}
                        placeholder="Frequency"
                    />
                    <button className="button" type="submit">
                        {' '}
                        Set Frequency
                    </button>
                </form>
            </div>
        );
    }
}

SetFrequency.propTypes = {
    setFrequency: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
    setFrequency: value => {
        dispatch(setFrequency(value));
    },
});

export default connect(null, mapDispatchToProps)(SetFrequency);
