from jupyter_dash import JupyterDash
import sys
sys.path.append('../')
import dash_jbrowse
import dash_html_components as html

# TODO: similar to leaflet
    # get, return everything you're setting, sets everything individually
    # give structure or a lot of methods ?? 
# TODO: look at bare minimum needed for every object
# TODO: assembly: do we want users to create the sequence first, and then add it or do we

# func that creates track, and then adds it, or just pass in obj
# one big object or smaller objects? << one big object

class JBrowseConfig():

    def __init__(self):
        self.assembly = {}
        self.tracks = []
        self.default_session = {}
        self.location = ""
        # above should be deprecated
        self.config = {
            "assembly": {},
            "tracks": [],
            "defaultSession": {}, 
            "location": ""
        }
        self.tracks_ids_map = {}
    # dont want to launch server for this 
    def get_config(self):
        return self.config
    
    # not sure how to edit launch jbrowse
    # TODO: question! should this package just return the object, and DashJbrowse will pass in + launch
    def launch_jbrowse(self):
        app = JupyterDash(__name__)

        app.layout = html.Div(
            [
                dash_jbrowse.DashJbrowse(
                    id="input",
                    assembly=self.assembly,
                    tracks=self.tracks,
                    defaultSession=self.default_session,
                    location=self.location,
                ),
            ]
        )
        
        app.run_server(mode="inline")
    ########## ASSEMBLIES #############
    # TODO: get rid of all objects and arrays passed in? teresas example only has one function for assem
    # this can also be used to update, may want to change the name
    def init_assembly(self, name="", sequence={}, aliases=[], ref_name_aliases = {}):
        self.config["assembly"] = {
            "name": name,
            "sequence": sequence,
            "aliases": aliases, 
            "refNameAliases": ref_name_aliases, 
        }
    
    def set_assem_name(self, name):
        self.config["assembly"]["name"] = name
    
    #def set_assem_seq(self, sequence):
        #self.assembly["sequence"] = sequence
    
    def set_assem_seq(self, seq_type, seq_track_id, seq_adapt_type, seq_fasta_loc, seq_fai_loc, seq_gzi_loc):
        new_sequence = {
            "type": seq_type,
            "trackId": seq_track_id,
            "adapter": {
                "type": seq_adapt_type,
                "fastaLocation": {
                    "uri": seq_fasta_loc,
                },
                "faiLocation": {
                    "uri": seq_fai_loc,
                },
                "gziLocation": {
                    "uri": seq_gzi_loc,
                }, 
            },
        }
        self.config["assembly"]["sequence"] = new_sequence

    # completely resets aliases
    def set_assem_aliases(self, aliases=[]):
        self.config["assembly"]["aliases"] = aliases
    
    def add_assem_aliases(self, alias):
        self.config["assembly"]["aliases"].append(alias)
    
    def remove_assem_aliases(self, alias):
        self.config["assembly"]["aliases"].remove(alias)
    
    def clear_assem_aliases(self):
        self.config["assembly"]["aliases"] = []
    
    # object 
    def set_assembly_ref_name(self, ref_name_aliases):
        self.config["assembly"]["refNameAliases"] = ref_name_aliases

    # we probably want to use this one
    def set_assem_ref_name(self, adapt_type="", adapt_loc_uri=""):
        self.config["assembly"]["refNameAliases"] = {
            "adapter": {
                "type": adapt_type,
                "location":{
                    "uri": adapt_loc_uri
                }
            }
        }
    
    # TODO: do we want to add functions to edit the specific adapt type or uri?

    ############## TRACKS #################
    # dont use
    def init_tracks(self, tracks):
        self.config["tracks"] = tracks
    
    #dont use
    def add_track_complete(self, track):
        self.config["tracks"].append(track)
    
    # TODO: warn if something is not added
    def add_track(self, track_type="", track_id="", name="", assembly_names = [], category=[], adapter={}):
        new_track = {
            "type": track_type,
            "trackId": track_id, 
            "name": name,
            "assemblyNames":assembly_names,
            "category":category,
            "adapter":adapter
        }
        self.config["tracks"].append(new_track)
    
    def remove_track(self, track_id=""):
        for track in self.config["tracks"]:
            if track["trackId"] == track_id:
                self.config["tracks"].remove(track)
    
    # TODO: flush this out a bit more, check which ones are not edited
    def update_track(self, track_type="", track_id="", name="", assembly_names = [], category=[], adapter={}):
        for track in self.config["tracks"]:
            if track["trackId"] == track_id:
                new_track = {
                    "type": track_type,
                    "trackId": track_id, 
                    "name": name,
                    "assemblyNames":assembly_names,
                    "category":category,
                    "adapter":adapter
                }
                track = new_track # ?
    
    #TODO: test this
    # set or change the track type of an existing track
    # use this to update track
    def set_track_type(self, track_id, new_type):
        for track in self.config["tracks"]:
            if track["trackId"] == track_id:
                track["type"] = new_type
    
    #TODO: test this
    def set_track_id (self, track_id, new_track_id):
        for track in self.config["tracks"]:
            if track["trackId"] == track_id:
                track["trackId"] = new_track_id
    
    #TODO: test this
    def set_track_name (self, track_id, new_track_name):
        for track in self.config["tracks"]:
            if track["trackId"] == track_id:
                track["name"] = new_track_name
    #TODO: test this 
    def set_track_assemblies (self, track_id, new_assemblies):
        for track in self.config["tracks"]:
            if track["trackId"] == track_id:
                track["assemblyNames"] = new_assemblies
    #TODO: test this 
    def add_track_assemblies (self, track_id, new_assembly):
        for track in self.config["tracks"]:
            if track["trackId"] == track_id:
                track["assemblyNames"].append(new_assembly)
    #TODO: test this 
    def set_track_categories (self, track_id, new_categories):
        for track in self.config["tracks"]:
            if track["trackId"] == track_id:
                track["category"] = new_categories
    #TODO: test this 
    def add_track_category (self, track_id, new_category):
        for track in self.config["tracks"]:
            if track["trackId"] == track_id:
                track["category"].append(new_category)
    
    # what do the adapters actually look like? 
    # add a way to edit the adapters? 
    # TODO: check if the newly added id is in the tracks, if not, add it
    def add_track_adapter(self, track_id, adapt_type, gff_gz_location_uri, index_loc_uri):
        new_adapter = {
            "type": adapt_type,
            "gffGzLocation": {
                "uri": gff_gz_location_uri,
            },
            "index": {
                "location": {
                    "uri": index_loc_uri,
                },
            },
        }
        for track in self.config["tracks"]:
            if track["trackId"] == track_id:
                track["adapter"].append(new_adapter)


    ############## SESSIONS ################
    # https://github.com/GMOD/jbrowse-components/blob/main/products/jbrowse-react-linear-genome-view/stories/DefaultSessions.stories.mdx
    
    # Deprecated
    def init_session(self, name="", view={}):
        self.config["defaultSession"] = {
            "name": name,
            "view": view
        }
    # This is essential for state, to determine which vies are open.
    #TODO: test this 
    def init_default_session(self, name="", id="", type="", tracks=[]):
        self.config["defaultSession"] = {
            "name": name,
            "view": {
                "id": id,
                "type": type,
                "tracks": tracks
            }
        }
    
    def set_session_name(self, name=""):
        self.config["defaultSession"]["name"] = name
    
    def set_session_id(self, id=""):
        self.config["defaultSession"]["view"]["id"] = id
    
    def set_session_type(self, type=""):
        self.config["defaultSession"]["view"]["type"] = type
    
    def init_session_tracks(self, tracks=[]):
        self.config["defaultSession"]["view"]["tracks"] = tracks
        count = 0
        for track in tracks:
            self.tracks_ids_map[track] = count
            count += 1
    # TODO: test this
    # Tracks are essential for the default session
    # TODO: create a function to add displays as well to track.
    def add_session_track(self, type="", config="", displays=[]):
        new_track = {
            "type": type,
            "configuration": config,
            "displays": displays
        }
        self.tracks_ids_map[new_track] = len(self.default_session["view"]["tracks"])
        self.config["defaultSession"]["view"]["tracks"].append(new_track)
    # TODO: test this
    # TODO: minimize amount to modify per function, dont pass in objects
    def remove_session_track(self, track = {}):
        index = self.tracks_ids_map[track]
        self.config["defaultSession"]["view"]["tracks"].pop(index)
  
   # def set_session_track(self, type="", c)
    ############## LOCATION ################

    def init_location(self, location=""):
        self.config["location"] = location
    
    
