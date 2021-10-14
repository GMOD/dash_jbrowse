from dash_jbrowse.assembly import *
class JBrowseConfig:
    def __init__(self):
        self.assembly = {}
        self.tracks = []
        self.default_session = {}
        self.location = ""
        self.tracks_ids_map = {}
        self.aggregateTextSearchAdapters = []

    def addAssembly(self,name):
        # def assembly(self, file, name='', aliases=[], refNameAliases=''):
        # TODO infer the type of the adapter based on file name
        # TODO infer name of the assembly based on the file name
        self.assembly = createAssembly2(name)
