import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {DashJbrowse as RealComponent} from '../LazyLoader';

/**
 * DashJbrowse renders the JBrowse 2 React Linear Genome View.
 * Any JB2 LGV configuration is also valid configuration for this
 * component.
 */
export default class DashJbrowse extends Component {

    
    render() {
        return (
            <React.Suspense fallback={null}>
                <RealComponent {...this.props} />
            </React.Suspense>
        );
    }
}

DashJbrowse.defaultProps = { viewType: 'genome', genome: 'hg19'};

DashJbrowse.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,
    /**
     * The type of the view
     */
    viewType: PropTypes.oneOf(['view', 'JB2config', 'json']),
    /**
     * genome for viewtype view
     */
    genome: PropTypes.oneOf(['hg19', 'volvox', 'tomato']),

     /**
     * Path to config file.
     */
    path: PropTypes.string,
     /**
     * The config object.
     */
    data: PropTypes.object,
    /**
     * The configuration for the assembly to use for the browser.
     */
    assembly: PropTypes.object,

    /**
     * The tracks to use for the browser.
     */
    tracks: PropTypes.array,

    /**
     * The default session to use for the browser.
     */
    defaultSession: PropTypes.object,

    /**
     * The location to use for the browser.
     */
    location: PropTypes.string,

    /**
     * The text search adapters to use for the browser
     */
    aggregateTextSearchAdapters: PropTypes.array,
    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func,
};

export const defaultProps = DashJbrowse.defaultProps;
export const propTypes = DashJbrowse.propTypes;
