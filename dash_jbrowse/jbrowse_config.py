from dash_jbrowse.DashJbrowse import DashJbrowse
from dash_jbrowse.utils import *
import json


def create_jbrowse(viewType, **kwargs):
    print(viewType)
    if viewType == "view":
        if "genome" in kwargs:
            genome = kwargs["genome"]
            if genome == "hg19":
                hg19 = defaults("hg19")
                return DashJbrowse(
                    id="jb2-config-demo",
                    assembly=hg19["assembly"],
                    tracks=hg19["tracks"],
                    defaultSession=hg19["defaultSession"],
                    location=hg19["location"],
                )
            elif genome == "hg38":
                hg38 = defaults("hg38")
                return DashJbrowse(
                    id="jb2-config-demo",
                    assembly=hg38["assembly"],
                    tracks=hg38["tracks"],
                    defaultSession=hg38["defaultSession"],
                    location=hg38["location"],
                )
            else:
                raise NameError(genome, "is not a valid default genome to view")
        else:
            raise TypeError("genome is required for viewType=view")
    elif viewType == "JB2config":
        with open(kwargs["path"], "r") as file:
            data = json.load(file)
        my_assembly = data["assembly"]
        my_tracks = data["tracks"]
        my_location = data["location"]
        my_default_session = data["defaultSession"]
        return DashJbrowse(
            id="jb2-config-demo",
            assembly=my_assembly,
            tracks=my_tracks,
            defaultSession=my_default_session,
            location=my_location,
        )
    elif viewType == "config":
        conf = kwargs["config"]
        return DashJbrowse(
            id="config-demo",
            assembly=conf["assembly"],
            tracks=conf["tracks"],
            defaultSession=conf["defaultSession"],
            location=conf["location"],
        )
    else:
        raise TypeError("invalid view type")


class JBrowseConfig:
    def __init__(self):
        self.config = {
            "assembly": {},
            "tracks": [],
            "defaultSession": {
                "name": "default-session",
                "view": {
                    "id": 'linearGenomeView',
                    "type": 'LinearGenomeView',
                    "tracks":[]
                }
            },
            "location": "",
        }
        self.tracks_ids_map = {}

    def get_config(self):
        return self.config

    # def addAssembly(self, name):
    #     # def assembly(self, file, name='', aliases=[], refNameAliases=''):
    #     # TODO infer the type of the adapter based on file name
    #     # TODO infer name of the assembly based on the file name
    #     self.assembly = createAssembly2(name)
    def set_assembly(self, assembly_data, aliases, refname_aliases, bgzip=False):
        if not bgzip:
            self.unzipped_assembly(assembly_data, aliases, refname_aliases)
        else:
            self.zipped_assembly(assembly_data, aliases, refname_aliases)

    def unzipped_assembly(self, assembly_data, aliases=[], refname_aliases=[]):
        name = self.get_name(assembly_data)

        self.config["assembly"] = {
            "name": name,
            "sequence": {
                "type": "ReferenceSequenceTrack",
                "trackId": name + "-ReferenceSequenceTrack",
                "adapter": {
                    "type": "BgzipFastaAdapter",
                    "fastaLocation": {
                        "uri": assembly_data,
                    },
                    "faiLocation": {
                        "uri": assembly_data + ".fai",
                    },
                },
            },
            "aliases": aliases,
            "refNameAliases": refname_aliases,
        }

    def zipped_assembly(self, assembly_data, aliases, refname_aliases):
        name = self.get_name(assembly_data)
        print("name:" + name)
        self.config["assembly"] = {
            "name": name,
            "sequence": {
                "type": "ReferenceSequenceTrack",
                "trackId": name + "-ReferenceSequenceTrack",
                "adapter": {
                    "type": "BgzipFastaAdapter",
                    "fastaLocation": {
                        "uri": assembly_data,
                    },
                    "faiLocation": {
                        "uri": assembly_data + ".fai",
                    },
                    "gziLocation": {
                        "uri": assembly_data + ".gzi",
                    },
                },
            },
            "aliases": aliases,
            "refNameAliases": refname_aliases,
        }

    def get_name(self, assembly_file):
        name_end = 0
        name_start = 0
        for i in range(0, len(assembly_file)):
            if (
                assembly_file[len(assembly_file) - i - 1 : len(assembly_file) - i]
                == "/"
            ):
                name_start = len(assembly_file) - i
                break
        for i in range(name_start, len(assembly_file)):
            if assembly_file[i : i + 1] == ".":
                name_end = i
                break

        return assembly_file[name_start:name_end]
