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
        const {viewType, genome, id, assembly, tracks, defaultSession, location, aggregateTextSearchAdapters } = this.props;

        if (viewType === 'view' && genome === 'hg19' ) {
            const hg19 = createViewState({
                assembly: {
                    "name": "hg19",
                    "aliases": [
                        "GRCh37"
                    ],
                    "sequence": {
                        "type": "ReferenceSequenceTrack",
                        "trackId": "Pd8Wh30ei9R",
                        "adapter": {
                            "type": "BgzipFastaAdapter",
                            "fastaLocation": {
                                "uri": "https://jbrowse.org/genomes/hg19/fasta/hg19.fa.gz"
                            },
                            "faiLocation": {
                                "uri": "https://jbrowse.org/genomes/hg19/fasta/hg19.fa.gz.fai"
                            },
                            "gziLocation": {
                                "uri": "https://jbrowse.org/genomes/hg19/fasta/hg19.fa.gz.gzi"
                            }
                        }
                    },
                    "refNameAliases": {
                        "adapter": {
                            "type": "RefNameAliasAdapter",
                            "location": {
                                "uri": "https://s3.amazonaws.com/jbrowse.org/genomes/hg19/hg19_aliases.txt"
                            }
                        }
                    }
                },
                defaultSession: {
                    "name": "Runtime plugins",
                    "view": {
                        "id": "aU9Nqje1U",
                        "type": "LinearGenomeView",
                        "offsetPx": 22654,
                        "bpPerPx": 108.93300653594771,
                        "displayedRegions": [
                            {
                                "refName": "1",
                                "start": 0,
                                "end": 249250621,
                                "reversed": false,
                                "assemblyName": "hg19"
                            }
                        ],
                        "tracks": [],
                        "hideHeader": false,
                        "hideHeaderOverview": false,
                        "trackSelectorType": "hierarchical",
                        "trackLabels": "overlapping",
                        "showCenterLine": false
                    }
                },
                location: "1:2,467,681..2,667,681",
            })
            return (
                <div id={id}>
                    <JBrowseLinearGenomeView viewState={hg19} />
                </div>
            ); 
        }
        console.log('type of view: ', viewType)
        const viewState = createViewState({
            assembly,
            tracks,
            defaultSession,
            location,
            aggregateTextSearchAdapters,
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
