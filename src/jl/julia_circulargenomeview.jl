# AUTO GENERATED FILE - DO NOT EDIT

export julia_circulargenomeview

"""
    julia_circulargenomeview(;kwargs...)

A CircularGenomeView component.
CircularGenomeView renders the JBrowse 2 React Circular Genome View.
Any JB2 CGV configuration is also valid configuration for this
component.
Keyword arguments:
- `id` (String; required)
- `aggregateTextSearchAdapters` (Array of Bool | Real | String | Dict | Arrays; optional)
- `assembly` (Bool | Real | String | Dict | Array; required)
- `configuration` (Bool | Real | String | Dict | Array; optional)
- `createRootFn` (optional)
- `defaultSession` (Bool | Real | String | Dict | Array; optional)
- `hydrateFn` (optional)
- `internetAccounts` (Array of Bool | Real | String | Dict | Arrays; optional)
- `makeWorkerInstance` (optional)
- `onChange` (optional)
- `plugins` (Bool | Real | String | Dict | Array; optional)
- `tracks` (Array of Bool | Real | String | Dict | Arrays; required)
"""
function julia_circulargenomeview(; kwargs...)
        available_props = Symbol[:id, :aggregateTextSearchAdapters, :assembly, :configuration, :createRootFn, :defaultSession, :hydrateFn, :internetAccounts, :makeWorkerInstance, :onChange, :plugins, :tracks]
        wild_props = Symbol[]
        return Component("julia_circulargenomeview", "CircularGenomeView", "dash_jbrowse", available_props, wild_props; kwargs...)
end

