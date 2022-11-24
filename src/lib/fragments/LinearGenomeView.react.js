/* eslint-disable new-cap */
import React, {Component} from 'react';
import {
    createViewState,
    JBrowseLinearGenomeView,
} from '@jbrowse/react-linear-genome-view';
import NotebookPlugin from './NotebookPlugin';

import {defaultProps, propTypes} from '../components/LinearGenomeView.react';

/**
 * LinearGenomeView renders the JBrowse 2 React Linear Genome View.
 * Any JB2 LGV configuration is also valid configuration for this
 * component.
 */
export default class LinearGenomeView extends Component {
    render() {
        // eslint-disable-next-line no-unused-vars
        const {id, assembly, tracks, defaultSession, location, aggregateTextSearchAdapters, configuration, internetAccounts, plugins, window } = this.props;
        console.log("the window", window)
        const google = window.google
        console.log("google", google)
        const viewState = createViewState({
            assembly,
            tracks,
            defaultSession,
            location,
            aggregateTextSearchAdapters,
            configuration,
            internetAccounts,
            plugins: [NotebookPlugin],
        });

        return (
            <div id={id || "lgv-id"}>
                <JBrowseLinearGenomeView viewState={viewState} />
            </div>
        );
    }
}

LinearGenomeView.defaultProps = defaultProps;
LinearGenomeView.propTypes = propTypes;
