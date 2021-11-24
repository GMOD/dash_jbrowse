# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class LinearGenomeView(Component):
    """A LinearGenomeView component.
LinearGenomeView renders the JBrowse 2 React Linear Genome View.
Any JB2 LGV configuration is also valid configuration for this
component.

Keyword arguments:

- id (string; optional):
    The ID used to identify this component in Dash callbacks.

- aggregateTextSearchAdapters (list; optional):
    The text search adapters to use for the browser.

- assembly (dict; optional):
    The configuration for the assembly to use for the browser.

    `assembly` is a dict with keys:

    - aliases (list; optional)

    - name (string; required)

    - refNameAliases (dict; optional)

    - sequence (dict; optional)

- configuration (dict; optional):
    The theme configuration object.

    `configuration` is a dict with keys:

    - theme (dict; optional)

- defaultSession (dict; optional):
    The default session to use for the browser.

    `defaultSession` is a dict with keys:

    - name (string; required)

    - view (dict; optional)

- location (dict; optional):
    The location to use for the browser.

    `location` is a string | dict with keys:

    - assemblyName (string; optional)

    - end (number; optional)

    - refName (string; required)

    - start (number; optional)

- tracks (list; optional):
    The tracks to use for the browser."""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, assembly=Component.UNDEFINED, tracks=Component.UNDEFINED, defaultSession=Component.UNDEFINED, location=Component.UNDEFINED, aggregateTextSearchAdapters=Component.UNDEFINED, configuration=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'aggregateTextSearchAdapters', 'assembly', 'configuration', 'defaultSession', 'location', 'tracks']
        self._type = 'LinearGenomeView'
        self._namespace = 'dash_jbrowse'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'aggregateTextSearchAdapters', 'assembly', 'configuration', 'defaultSession', 'location', 'tracks']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(LinearGenomeView, self).__init__(**args)
