import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {CircularGenomeView as RealComponent} from '../LazyLoader';


/**
 * CircularGenomeView renders the JBrowse 2 React Circular Genome View.
 * Any JB2 CGV configuration is also valid configuration for this
 * component.
 */
export default class CircularGenomeView extends Component {
    render() {
        return (
            <React.Suspense fallback={null}>
                <RealComponent {...this.props} />
            </React.Suspense>
        );
    }
}

CircularGenomeView.defaultProps = {};

CircularGenomeView.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,

    /**
     * The configuration for the assembly to use for the browser.
     */
    assembly: PropTypes.shape({
        name: PropTypes.string.isRequired,
        aliases: PropTypes.array,
        sequence: PropTypes.object,
        refNameAliases: PropTypes.object
    }),

    /**
     * The tracks to use for the browser.
     */
    tracks: PropTypes.array,

    /**
     * The default session to use for the browser.
     */
    defaultSession: PropTypes.shape({
        name: PropTypes.string.isRequired,
        view: PropTypes.object
    }),

    /**
     * The text search adapters to use for the browser
     */
    aggregateTextSearchAdapters: PropTypes.array,

    /**
     * The theme configuration object
     */
    configuration: PropTypes.shape({
        theme: PropTypes.object
    }),
    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func,
};

export const defaultProps = CircularGenomeView.defaultProps;
export const propTypes = CircularGenomeView.propTypes;
