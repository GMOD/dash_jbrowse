from jupyter_dash import JupyterDash
import sys
sys.path.append('../')
import dash_jbrowse
import dash_html_components as html

class JBrowseConfig():

    def __init__(self):
        self.assembly = {}
        self.tracks = []
        self.default_session = {}
        self.location = ""
        self.tracks_ids_map = {}
    
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
    
    def init_assembly(self, name="", sequence="", aliases=[], ref_name_aliases = {}):
        self.assembly = {
            "name": name,
            "sequence": sequence,
            "aliases": aliases, 
            "refNameAliases": ref_name_aliases, 
        }
    
    def set_assem_name(self, name):
        self.assembly["name"] = name
    
    def set_assem_seq(self, sequence):
        self.assembly["sequence"] = sequence
    
    def set_assem_aliases(self, aliases):
        self.assembly["aliases"] = aliases
    
    def set_assembly_ref_name(self, ref_name_aliases):
        self.assembly["refNameAliases"] = ref_name_aliases

    ############## TRACKS #################
    def init_tracks(self, tracks = []):
        self.tracks = tracks
    
    def add_track(self, track={}):
        self.tracks.append(track)
    
    def add_track(self, type="", track_id="", name="", assembly_names = [], category=[], adapter={}):
        new_track = {
            "type": type,
            "trackId": track_id, 
            "name": name,
            "assemblyNames":assembly_names,
            "category":category,
            "adapter":adapter
        }
        self.tracks.append(new_track)

    ############## SESSIONS ################
    # https://github.com/GMOD/jbrowse-components/blob/main/products/jbrowse-react-linear-genome-view/stories/DefaultSessions.stories.mdx
    
    # Deprecated
    def init_session(self, name="", view={}):
        self.default_session = {
            "name": name,
            "view": view
        }
    # This is essential for state, to determine which vies are open.
    def init_default_session(self, name="", id="", type="", tracks=[]):
        self.default_session = {
            "name": name,
            "view": {
                "id": id,
                "type": type,
                "tracks": tracks
            }
        }
    
    def set_session_name(self, name=""):
        self.default_session["name"] = name
    
    def set_session_id(self, id=""):
        self.default_session["view"]["id"] = id
    
    def set_session_type(self, type=""):
        self.default_session["view"]["type"] = type
    
    def init_session_tracks(self, tracks=[]):
        self.default_session["view"]["tracks"] = tracks
        count = 0
        for track in tracks:
            self.tracks_ids_map[track] = count
            count += 1

    # Tracks are essential for the default session
    # TODO: create a function to add displays as well to track.
    def add_session_track(self, type="", config="", displays=[]):
        new_track = {
            "type": type,
            "configuration": config,
            "displays": displays
        }
        self.tracks_ids_map[new_track] = len(self.default_session["view"]["tracks"])
        self.default_session["view"]["tracks"].append(new_track)
    # TODO: minimize amount to modify per function, dont pass in objects
    def remove_session_track(self, track = {}):
        index = self.tracks_ids_map[track]
        self.default_session["view"]["tracks"].pop(index)
  
   # def set_session_track(self, type="", c)
    ############## LOCATION ################

    def init_location(self, location=""):
        self.location = location
    
    
