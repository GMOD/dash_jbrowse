import React, {Component} from 'react';
import {
    createViewState,
    JBrowseLinearGenomeView,
} from '@jbrowse/react-linear-genome-view';

import {defaultProps, propTypes} from '../components/DashJbrowse.react';

/**
 * DashJbrowse renders the JBrowse 2 React Linear Genome View.
 * Any JB2 LGV configuration is also valid configuration for this
 * component.
 */
export default class DashJbrowse extends Component {
    render() {
        const {id, assembly, tracks, defaultSession, location, aggregateTextSearchAdapters, configuration } = this.props;

        const viewState = createViewState({
            assembly,
            tracks,
            defaultSession,
            location,
            aggregateTextSearchAdapters,
            configuration,
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
