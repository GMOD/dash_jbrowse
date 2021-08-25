import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {DashJbrowse as RealComponent} from '../LazyLoader';

/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
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

DashJbrowse.defaultProps = {};

DashJbrowse.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,

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
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func,
};

export const defaultProps = DashJbrowse.defaultProps;
export const propTypes = DashJbrowse.propTypes;
