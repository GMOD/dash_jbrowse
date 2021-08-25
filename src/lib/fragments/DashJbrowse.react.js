import React, {Component} from 'react';
import {
    createViewState,
    JBrowseLinearGenomeView,
} from '@jbrowse/react-linear-genome-view';

import {defaultProps, propTypes} from '../components/DashJbrowse.react';

const tracks = [
    {
        type: 'FeatureTrack',
        trackId: 'ncbi_refseq_109_hg38',
        name: 'NCBI RefSeq (GFF3Tabix)',
        assemblyNames: ['GRCh38'],
        category: ['Annotation'],
        adapter: {
            type: 'Gff3TabixAdapter',
            gffGzLocation: {
                uri: 'https://s3.amazonaws.com/jbrowse.org/genomes/GRCh38/ncbi_refseq/GCA_000001405.15_GRCh38_full_analysis_set.refseq_annotation.sorted.gff.gz',
            },
            index: {
                location: {
                    uri: 'https://s3.amazonaws.com/jbrowse.org/genomes/GRCh38/ncbi_refseq/GCA_000001405.15_GRCh38_full_analysis_set.refseq_annotation.sorted.gff.gz.tbi',
                },
            },
        },
    },
];

const defaultSession = {
    name: 'My session',
    view: {
        id: 'linearGenomeView',
        type: 'LinearGenomeView',
        tracks: [
            {
                type: 'ReferenceSequenceTrack',
                configuration: 'GRCh38-ReferenceSequenceTrack',
                displays: [
                    {
                        type: 'LinearReferenceSequenceDisplay',
                        configuration:
                            'GRCh38-ReferenceSequenceTrack-LinearReferenceSequenceDisplay',
                    },
                ],
            },
            {
                type: 'FeatureTrack',
                configuration: 'ncbi_refseq_109_hg38',
                displays: [
                    {
                        type: 'LinearBasicDisplay',
                        configuration:
                            'ncbi_refseq_109_hg38-LinearBasicDisplay',
                    },
                ],
            },
        ],
    },
};

function View(assembly) {
    console.log(assembly);
    console.log(assembly.tracks);

    const state = createViewState({
        assembly: assembly.assembly,
        tracks,
        location: '10:29,838,737..29,838,819',
        defaultSession,
    });
    return <JBrowseLinearGenomeView viewState={state} />;
}

/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */
export default class DashJbrowse extends Component {
    render() {
        const {id, assembly, setProps} = this.props;

        console.log(this.props);

        return (
            <div id={id}>
                <View assembly={assembly} />
                <input
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
                        (e) => setProps({value: e.target.value})
                    }
                />
            </div>
        );
    }
}

DashJbrowse.defaultProps = defaultProps;
DashJbrowse.propTypes = propTypes;
