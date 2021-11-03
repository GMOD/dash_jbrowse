def createAssembly(name):
    print("hello", name)
    return {"hello": name}


def createAssembly2(name):
    print("hello", name)
    return {"hello0000": name}


def defaults(name):
    if name == "hg19":
        return {
            "assembly": {
                "name": "hg19",
                "aliases": ["GRCh37"],
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
                        },
                    },
                },
                "refNameAliases": {
                    "adapter": {
                        "type": "RefNameAliasAdapter",
                        "location": {
                            "uri": "https://s3.amazonaws.com/jbrowse.org/genomes/hg19/hg19_aliases.txt"
                        },
                    }
                },
            },
            "tracks": [],
            "defaultSession": {
                "name": "test",
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
                            "reversed": False,
                            "assemblyName": "hg19",
                        }
                    ],
                    "tracks": [],
                    "hideHeader": False,
                    "hideHeaderOverview": False,
                    "trackSelectorType": "hierarchical",
                    "trackLabels": "overlapping",
                    "showCenterLine": False,
                },
            },
            "location": "1:2,467,681..2,667,681",
        }

    if name == "hg38":
        return {
            "assembly": {
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
            },
            "tracks": [
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
                }
            ],
            "location": "10:29,838,737..29,838,819",
            "defaultSession": {
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
            },
        }
