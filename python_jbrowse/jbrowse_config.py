from jupyter_dash import JupyterDash
import dash_jbrowse
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
    
    def init_tracks(self, tracks = []):
        self.tracks = tracks
    
    def init_session(self, name="", view={}):
        self.default_session = {
            "name": name,
            "view": view
        }
    
    def init_location(self, location=""):
        self.location = location
    
    
