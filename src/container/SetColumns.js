import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setNumColumns } from '../actions/action';

class SetColumns extends Component {
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
                        this.props.setNumColumns(parseInt(input.value));
                    }}>
                    <input
                        className="option"
                        type="number"
                        min="10"
                        max="100"
                        ref={node => (input = node)}
                        placeholder="Columns"
                    />
                    <button className="button" type="submit">
                        Set Columns
                    </button>
                </form>
            </div>
        );
    }
}

SetColumns.propTypes = {
    setNumColumns: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
    setNumColumns: value => {
        dispatch(setNumColumns(value));
    },
});

export default connect(null, mapDispatchToProps)(SetColumns);
