# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class LinearGenomeView(Component):
    """A LinearGenomeView component.


Keyword arguments:

- id (string; required)

- aggregateTextSearchAdapters (list of boolean | number | string | dict | lists; optional)

- assembly (boolean | number | string | dict | list; required)

- configuration (boolean | number | string | dict | list; optional)

- createRootFn (optional)

- defaultSession (boolean | number | string | dict | list; optional)

- disableAddTracks (boolean | number | string | dict | list; optional)

- hydrateFn (optional)

- internetAccounts (list of boolean | number | string | dict | lists; optional)

- location (string; optional)

- makeWorkerInstance (optional)

- onChange (optional)

- plugins (boolean | number | string | dict | list; optional)

- tracks (list of boolean | number | string | dict | lists; required)"""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'dash_jbrowse'
    _type = 'LinearGenomeView'
    @_explicitize_args
    def __init__(self, assembly=Component.REQUIRED, tracks=Component.REQUIRED, internetAccounts=Component.UNDEFINED, aggregateTextSearchAdapters=Component.UNDEFINED, configuration=Component.UNDEFINED, plugins=Component.UNDEFINED, location=Component.UNDEFINED, defaultSession=Component.UNDEFINED, disableAddTracks=Component.UNDEFINED, onChange=Component.UNDEFINED, makeWorkerInstance=Component.UNDEFINED, hydrateFn=Component.UNDEFINED, createRootFn=Component.UNDEFINED, id=Component.REQUIRED, **kwargs):
        self._prop_names = ['id', 'aggregateTextSearchAdapters', 'assembly', 'configuration', 'createRootFn', 'defaultSession', 'disableAddTracks', 'hydrateFn', 'internetAccounts', 'location', 'makeWorkerInstance', 'onChange', 'plugins', 'tracks']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'aggregateTextSearchAdapters', 'assembly', 'configuration', 'createRootFn', 'defaultSession', 'disableAddTracks', 'hydrateFn', 'internetAccounts', 'location', 'makeWorkerInstance', 'onChange', 'plugins', 'tracks']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        for k in ['id', 'assembly', 'tracks']:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')

        super(LinearGenomeView, self).__init__(**args)
