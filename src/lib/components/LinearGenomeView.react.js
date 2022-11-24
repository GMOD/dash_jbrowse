import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {LinearGenomeView as RealComponent} from '../LazyLoader';

/**
 * LinearGenomeView renders the JBrowse 2 React Linear Genome View.
 * Any JB2 LGV configuration is also valid configuration for this
 * component.
 */
export default class LinearGenomeView extends Component {
    render() {
        return (
            <React.Suspense fallback={null}>
                <RealComponent {...this.props} />
            </React.Suspense>
        );
    }
}

LinearGenomeView.defaultProps = {};

LinearGenomeView.propTypes = {
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
     * The location to use for the browser.
     */
    location: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.shape({
            refName: PropTypes.string.isRequired,
            start: PropTypes.number,
            end: PropTypes.number,
            assemblyName: PropTypes.string
        })
    ]),

    /**
     * The text search adapters to use for the browser
     */
    aggregateTextSearchAdapters: PropTypes.array,

    /**
     * The internet accounts to use for the browser
     */
     internetAccounts: PropTypes.array,
    /**
     * The inline plugins to use for the browser
     */
    plugins: PropTypes.array,
    /**
     * The theme configuration object
     */
    configuration: PropTypes.shape({
        theme: PropTypes.object
    }),
    window: PropTypes.shape({
        google: PropTypes.object
    }),
    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func,
};

export const defaultProps = LinearGenomeView.defaultProps;
export const propTypes = LinearGenomeView.propTypes;
