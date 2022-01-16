import dash
import dash_html_components as html
from dash_jbrowse import CircularGenomeView 

app = dash.Dash(__name__)

my_assembly = {
    "name": "hg19",
    "aliases": ["GRCh37"],
    "sequence": {
        "type": "ReferenceSequenceTrack",
        "trackId": "Pd8Wh30ei9R",
        "adapter": {
            "type": "BgzipFastaAdapter",
            "fastaLocation": {
                "uri": "https://jbrowse.org/genomes/hg19/fasta/hg19.fa.gz",
                "locationType": 'UriLocation',
            },
            "faiLocation": {
                "uri": "https://jbrowse.org/genomes/hg19/fasta/hg19.fa.gz.fai",
                "locationType": 'UriLocation',
            },
            "gziLocation": {
                "uri": "https://jbrowse.org/genomes/hg19/fasta/hg19.fa.gz.gzi",
                "locationType": 'UriLocation',
            },
        },
    },
    "refNameAliases": {
        "adapter": {
            "type": "RefNameAliasAdapter",
            "location": {
                "uri": "https://s3.amazonaws.com/jbrowse.org/genomes/hg19/hg19_aliases.txt",
                "locationType": 'UriLocation',
            },
        },
    },
}

my_tracks = [
    {
        "type": "VariantTrack",
        "trackId": "pacbio_sv_vcf",
        "name": "HG002 Pacbio SV (VCF)",
        "assemblyNames": ["hg19"],
        "category": ["GIAB"],
        "adapter": {
            "type": "VcfTabixAdapter",
            "vcfGzLocation": {
                "uri": 'https://s3.amazonaws.com/jbrowse.org/genomes/hg19/pacbio/hs37d5.HG002-SequelII-CCS.bnd-only.sv.vcf.gz',
                "locationType": 'UriLocation',
            },
            "index": {
                "location": {
                    "uri": 'https://s3.amazonaws.com/jbrowse.org/genomes/hg19/pacbio/hs37d5.HG002-SequelII-CCS.bnd-only.sv.vcf.gz.tbi',
                    "locationType": 'UriLocation',
                },
            },
        },
    },
]

my_default_session = {
    "name": "My session",
    "view": {
        "id": "circularView",
        "type": "CircularView",
        "bpPerPx": 5000000, 
    },
}


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
        CircularGenomeView(
            id="circular-hg19",
            assembly=my_assembly,
            tracks=my_tracks,
            defaultSession=my_default_session
        ),
    ],
    id="test",
)

if __name__ == "__main__":
    app.run_server(port=3002, debug=True)
