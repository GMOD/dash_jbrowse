import React, {Component} from 'react';
import {
    createViewState,
    JBrowseLinearGenomeView,
} from '@jbrowse/react-linear-genome-view';

import {defaultProps, propTypes} from '../components/DashJbrowse.react';

/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */
export default class DashJbrowse extends Component {
    render() {
        const {id, assembly, tracks, defaultSession, location} = this.props;

        const viewState = createViewState({
            assembly,
            tracks,
            defaultSession,
            location,
        });

        return (
            <div id={id}>
                <JBrowseLinearGenomeView viewState={viewState} />
            </div>
        );
    }
}

DashJbrowse.defaultProps = defaultProps;
DashJbrowse.propTypes = propTypes;

/* 
    onChange={
        /*
         * Send the new value to the parent component.
         * setProps is a prop that is automatically supplied
         * by dash's front-end ("dash-renderer").
         * In a Dash app, this will update the component's
         * props and send the data back to the Python Dash
         * app server if a callback uses the modified prop as
         * Input or State.
         */
// (e) => setProps({value: e.target.value})
