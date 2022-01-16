import React, {Component} from 'react';
import {
    createViewState,
    JBrowseCircularGenomeView,
} from '@jbrowse/react-circular-genome-view';

import {defaultProps, propTypes} from '../components/CircularGenomeView.react.js';

export default class CircularGenomeView extends Component {
    render() {
        const {id, assembly, tracks, defaultSession, aggregateTextSearchAdapters, configuration } = this.props;

        const viewState = createViewState({
            assembly,
            tracks,
            defaultSession,
            aggregateTextSearchAdapters,
            configuration,
        });

        return (
            <div id={id}>
                <JBrowseCircularGenomeView viewState={viewState} />
            </div>
        );
    }
}

CircularGenomeView.defaultProps = defaultProps;
CircularGenomeView.propTypes = propTypes;
