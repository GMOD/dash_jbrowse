import dash_jbrowse
import dash
import dash_html_components as html
import sys
sys.path.append('./python_jbrowse')
from jbrowse_config import JBrowseConfig

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

my_location = "10:29,838,737..29,838,819"

app.layout = html.Div(
    [
        dash_jbrowse.DashJbrowse(
            id="input",
            assembly=my_assembly,
            tracks=my_tracks,
            defaultSession=my_default_session,
            location=my_location,
        ),
    ]
)

if __name__ == "__main__":

    jbrowse_conf = JBrowseConfig()
    aliases = ["hg38"]
    ref_name_aliases = {
            "adapter": {
                "type": "RefNameAliasAdapter",
                "location": {
                    "uri": "https://s3.amazonaws.com/jbrowse.org/genomes/GRCh38/hg38_aliases.txt",
                },
            },
        }
    # print(len("./GRCh38.fa.gz"))
    # for i in range(0, len("./GRCh38.fa.gz")):
    #     print("./GRCh38.fa.gz"[i: i + 1])
    jbrowse_conf.set_assembly("https://s3.amazonaws.com/jbrowse.org/genomes/GRCh38/fasta/GRCh38.fa.gz", aliases, ref_name_aliases, True)
    print(jbrowse_conf.get_config()["assembly"]["sequence"]["adapter"]["fastaLocation"]["uri"])

    app.run_server(debug=True)
