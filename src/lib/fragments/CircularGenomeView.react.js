import React, {Component} from 'react';
import {
    createViewState,
    JBrowseCircularGenomeView,
} from '@jbrowse/react-circular-genome-view';
import NotebookPlugin from './NotebookPlugin';

import {defaultProps, propTypes} from '../components/CircularGenomeView.react.js';

/**
 * CircularGenomeView renders the JBrowse 2 React Circular Genome View.
 * Any JB2 CGV configuration is also valid configuration for this
 * component.
 */
export default class CircularGenomeView extends Component {
    render() {
        // eslint-disable-next-line no-unused-vars
        const {id, assembly, tracks, defaultSession, aggregateTextSearchAdapters, configuration, plugins } = this.props;
        const viewState = createViewState({
            assembly,
            tracks,
            defaultSession,
            aggregateTextSearchAdapters,
            configuration,
            plugins: [NotebookPlugin],
        });

        return (
            <div id={"cgv-id" || id}>
                <JBrowseCircularGenomeView viewState={viewState} />
            </div>
        );
    }
}

CircularGenomeView.defaultProps = defaultProps;
CircularGenomeView.propTypes = propTypes;
