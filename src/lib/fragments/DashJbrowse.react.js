import React, {Component} from 'react';
import {
    createViewState,
    loadPlugins,
    JBrowseLinearGenomeView,
} from '@jbrowse/react-linear-genome-view';

import {defaultProps, propTypes} from '../components/DashJbrowse.react';

/**
 * DashJbrowse renders the JBrowse 2 React Linear Genome View.
 * Any JB2 LGV configuration is also valid configuration for this
 * component.
 */
export default class DashJbrowse extends Component {
    constructor(props) {
        super(props);
        this.state = {loadedPlugins: []}
    }
    async componentDidMount() {
        const loaded = await loadPlugins(this.props.plugins)
        // console.log(loaded.map(p => p.plugin))
        this.setState({loadedPlugins: loaded.map(p => p.plugin)})
    }
    
    render() {
        const {id, assembly, tracks, defaultSession, location, aggregateTextSearchAdapters, configuration, plugins } = this.props;
        let viewState = createViewState({
            assembly,
            tracks,
            defaultSession,
            location,
            aggregateTextSearchAdapters,
            configuration,
        })
        if (this.state.loadedPlugins.length > 0) {
            const externalPlugins = this.state.loadedPlugins
            viewState = createViewState({
                assembly,
                tracks,
                defaultSession,
                location,
                aggregateTextSearchAdapters,
                configuration,
                externalPlugins,
            })
        }
        console.log('props', plugins)
        console.log('loaded', this.state.loadedPlugins)
        return (
            <div id={id}>
                <JBrowseLinearGenomeView viewState={viewState} />
            </div>
        );
    }
}

DashJbrowse.defaultProps = defaultProps;
DashJbrowse.propTypes = propTypes;
