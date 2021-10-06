# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class DashJbrowse(Component):
    """A DashJbrowse component.
DashJbrowse renders the JBrowse 2 React Linear Genome View.
Any JB2 LGV configuration is also valid configuration for this
component.

Keyword arguments:

- id (string; optional):
    The ID used to identify this component in Dash callbacks.

- aggregateTextSearchAdapters (list; optional):
    The text search adapters to use for the browser.

- assembly (dict; optional):
    The configuration for the assembly to use for the browser.

- data (dict; optional):
    The config object.

- defaultSession (dict; optional):
    The default session to use for the browser.

- genome (a value equal to: 'hg19', 'volvox', 'tomato'; default 'hg19'):
    genome for viewtype view.

- location (string; optional):
    The location to use for the browser.

- path (string; optional):
    Path to config file.

- tracks (list; optional):
    The tracks to use for the browser.

- viewType (a value equal to: 'view', 'JB2config', 'json'; default 'genome'):
    The type of the view."""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, viewType=Component.UNDEFINED, genome=Component.UNDEFINED, path=Component.UNDEFINED, data=Component.UNDEFINED, assembly=Component.UNDEFINED, tracks=Component.UNDEFINED, defaultSession=Component.UNDEFINED, location=Component.UNDEFINED, aggregateTextSearchAdapters=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'aggregateTextSearchAdapters', 'assembly', 'data', 'defaultSession', 'genome', 'location', 'path', 'tracks', 'viewType']
        self._type = 'DashJbrowse'
        self._namespace = 'dash_jbrowse'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'aggregateTextSearchAdapters', 'assembly', 'data', 'defaultSession', 'genome', 'location', 'path', 'tracks', 'viewType']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(DashJbrowse, self).__init__(**args)
