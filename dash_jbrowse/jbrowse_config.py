from dash_jbrowse.DashJbrowse import DashJbrowse
from dash_jbrowse.utils import *
import json

def create_jbrowse(**kwargs):
    if kwargs['viewType'] == 'view' and kwargs['genome'] == 'hg19':
        return DashJbrowse(
                id="view-demo",
                viewType="view",
                genome='hg19'
            )
    if (kwargs['viewType'] == 'JB2config'):
        with open(kwargs['path'], 'r') as file:  
            data = json.load(file)
        my_assembly = data['assembly']
        my_tracks = data['tracks']
        my_location = data['location']
        my_default_session = data['defaultSession']
        return DashJbrowse(
                id="view-demo",
                viewType='JB2config',
                assembly=my_assembly,
                tracks=my_tracks,
                defaultSession=my_default_session,
                location=my_location,
            )
    return DashJbrowse(
                id="json-demo",
                viewType='json',
                assembly=kwargs['assembly'],
                tracks=kwargs['tracks'],
                defaultSession=kwargs['defaultSession'],
                aggregateTextSearchAdapters=kwargs['aggregateTextSearchAdapters'],
                location=kwargs['location'],
            )

class JBrowseConfig:
    def __init__(self):
        self.assembly = {}
        self.tracks = []
        self.default_session = {}
        self.location = ""
        self.tracks_ids_map = {}
        self.aggregateTextSearchAdapters = []

    def addAssembly(self, name):
        # def assembly(self, file, name='', aliases=[], refNameAliases=''):
        # TODO infer the type of the adapter based on file name
        # TODO infer name of the assembly based on the file name
        self.assembly = createAssembly2(name)
