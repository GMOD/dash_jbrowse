# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class CircularGenomeView(Component):
    """A CircularGenomeView component.
CircularGenomeView renders the JBrowse 2 React Circular Genome View.
Any JB2 CGV configuration is also valid configuration for this
component.

Keyword arguments:

- id (string; required)

- aggregateTextSearchAdapters (list of boolean | number | string | dict | lists; optional)

- assembly (boolean | number | string | dict | list; required)

- configuration (boolean | number | string | dict | list; optional)

- createRootFn (optional)

- defaultSession (boolean | number | string | dict | list; optional)

- hydrateFn (optional)

- internetAccounts (list of boolean | number | string | dict | lists; optional)

- makeWorkerInstance (optional)

- onChange (optional)

- plugins (boolean | number | string | dict | list; optional)

- tracks (list of boolean | number | string | dict | lists; required)"""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'dash_jbrowse'
    _type = 'CircularGenomeView'
    @_explicitize_args
    def __init__(self, assembly=Component.REQUIRED, tracks=Component.REQUIRED, internetAccounts=Component.UNDEFINED, aggregateTextSearchAdapters=Component.UNDEFINED, configuration=Component.UNDEFINED, plugins=Component.UNDEFINED, makeWorkerInstance=Component.UNDEFINED, hydrateFn=Component.UNDEFINED, createRootFn=Component.UNDEFINED, defaultSession=Component.UNDEFINED, onChange=Component.UNDEFINED, id=Component.REQUIRED, **kwargs):
        self._prop_names = ['id', 'aggregateTextSearchAdapters', 'assembly', 'configuration', 'createRootFn', 'defaultSession', 'hydrateFn', 'internetAccounts', 'makeWorkerInstance', 'onChange', 'plugins', 'tracks']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'aggregateTextSearchAdapters', 'assembly', 'configuration', 'createRootFn', 'defaultSession', 'hydrateFn', 'internetAccounts', 'makeWorkerInstance', 'onChange', 'plugins', 'tracks']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        for k in ['id', 'assembly', 'tracks']:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')

        super(CircularGenomeView, self).__init__(**args)
