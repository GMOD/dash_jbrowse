import dash
import dash_jbrowse
from dash import html

print(dash_jbrowse.__version__)
app = dash.Dash(__name__)

my_assembly = {
    "name": "GRCh38",
    "sequence": {
        "type": "ReferenceSequenceTrack",
        "trackId": "GRCh38-ReferenceSequenceTrack",
        "adapter": {
            "type": "BgzipFastaAdapter",
            "fastaLocation": {
                "uri": "https://s3.amazonaws.com/jbrowse.org/genomes/GRCh38/fasta/GRCh38.fa.gz",
            },
            "faiLocation": {
                "uri": "https://s3.amazonaws.com/jbrowse.org/genomes/GRCh38/fasta/GRCh38.fa.gz.fai",
            },
            "gziLocation": {
                "uri": "https://s3.amazonaws.com/jbrowse.org/genomes/GRCh38/fasta/GRCh38.fa.gz.gzi",
            },
        },
    },
    "aliases": ["hg38"],
    "refNameAliases": {
        "adapter": {
            "type": "RefNameAliasAdapter",
            "location": {
                "uri": "https://s3.amazonaws.com/jbrowse.org/genomes/GRCh38/hg38_aliases.txt",
            },
        },
    },
}

my_tracks = [
    {
        "type": "FeatureTrack",
        "trackId": "ncbi_refseq_109_hg38",
        "name": "NCBI RefSeq (GFF3Tabix)",
        "assemblyNames": ["GRCh38"],
        "category": ["Annotation"],
        "adapter": {
            "type": "Gff3TabixAdapter",
            "gffGzLocation": {
                "uri": "https://s3.amazonaws.com/jbrowse.org/genomes/GRCh38/ncbi_refseq/GCA_000001405.15_GRCh38_full_analysis_set.refseq_annotation.sorted.gff.gz",
            },
            "index": {
                "location": {
                    "uri": "https://s3.amazonaws.com/jbrowse.org/genomes/GRCh38/ncbi_refseq/GCA_000001405.15_GRCh38_full_analysis_set.refseq_annotation.sorted.gff.gz.tbi",
                },
            },
        },
    },
    
]

my_default_session = {
    "name": "My session",
    "view": {
        "id": "linearGenomeView",
        "type": "LinearGenomeView",
        "tracks": [
            {
                "type": "ReferenceSequenceTrack",
                "configuration": "GRCh38-ReferenceSequenceTrack",
                "displays": [
                    {
                        "type": "LinearReferenceSequenceDisplay",
                        "configuration": "GRCh38-ReferenceSequenceTrack-LinearReferenceSequenceDisplay",
                    },
                ],
            },
            {
                "type": "FeatureTrack",
                "configuration": "ncbi_refseq_109_hg38",
                "displays": [
                    {
                        "type": "LinearBasicDisplay",
                        "configuration": "ncbi_refseq_109_hg38-LinearBasicDisplay",
                    },
                ],
            },
        ],
    },
}

my_aggregate_text_search_adapters = [
    {
        "type": "TrixTextSearchAdapter",
        "textSearchAdapterId": "hg38-index",
        "ixFilePath": {
            "uri": "https://s3.amazonaws.com/jbrowse.org/genomes/GRCh38/trix/hg38.ix"
        },
        "ixxFilePath": {
            "uri": "https://s3.amazonaws.com/jbrowse.org/genomes/GRCh38/trix/hg38.ixx"
        },
        "metaFilePath": {
            "uri": "https://s3.amazonaws.com/jbrowse.org/genomes/GRCh38/trix/meta.json"
        },
        "assemblyNames": ["GRCh38"],
    }
]
my_location = "10:29,838,737..29,838,819"
# my_location = {"refName": "10", "start": 1, "end": 800}

my_theme = {
    "theme": {
        "palette": {
            "primary": {
                "main": "#311b92",
            },
            "secondary": {
                "main": "#0097a7",
            },
            "tertiary": {
                "main": "#f57c00",
            },
            "quaternary": {
                "main": "#d50000",
            },
            "bases": {
                "A": {"main": "#98FB98"},
                "C": {"main": "#87CEEB"},
                "G": {"main": "#DAA520"},
                "T": {"main": "#DC143C"},
            },
        },
    },
}
app.layout = html.Div(
    [
        dash_jbrowse.LinearGenomeView(
            id="lgv-hg38",
            assembly=my_assembly,
            tracks=my_tracks,
            defaultSession=my_default_session,
            location=my_location,
            aggregateTextSearchAdapters=my_aggregate_text_search_adapters,
            configuration=my_theme
        ),
    ],
    id="test",
)

if __name__ == "__main__":
    app.run_server(port=8050, debug=True)
