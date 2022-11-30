import React, {Component} from 'react';
import {
    createViewState,
    JBrowseLinearGenomeView,
} from '@jbrowse/react-linear-genome-view';
import {defaultProps, propTypes} from '../components/LinearGenomeView.react';

/**
 * LinearGenomeView renders the JBrowse 2 React Linear Genome View.
 * Any JB2 LGV configuration is also valid configuration for this
 * component.
 */
export default class LinearGenomeView extends Component {
    render() {
        const {id, assembly, tracks, defaultSession, location, aggregateTextSearchAdapters, configuration, internetAccounts, plugins } = this.props;
        const viewState = createViewState({
            assembly,
            tracks,
            defaultSession,
            location,
            aggregateTextSearchAdapters,
            configuration,
            internetAccounts,
            plugins,
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
