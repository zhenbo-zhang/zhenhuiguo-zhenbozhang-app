import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setNumRows } from '../actions/action';

class SetRows extends React.Component {
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
                        this.props.setNumRows(parseInt(input.value));
                    }}>
                    <input
                        className="option"
                        type="number"
                        min="10"
                        max="100"
                        ref={node => (input = node)}
                        placeholder="Rows"
                    />
                    <button className="button" type="submit">
                        {' '}
                        Set Rows
                    </button>
                </form>
            </div>
        );
    }
}

SetRows.propTypes = {
    setNumRows: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
    setNumRows: value => {
        dispatch(setNumRows(value));
    },
});

export default connect(null, mapDispatchToProps)(SetRows);
