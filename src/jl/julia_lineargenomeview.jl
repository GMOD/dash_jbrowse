# AUTO GENERATED FILE - DO NOT EDIT

export julia_lineargenomeview

"""
    julia_lineargenomeview(;kwargs...)

A LinearGenomeView component.

Keyword arguments:
- `id` (String; required)
- `aggregateTextSearchAdapters` (Array of Bool | Real | String | Dict | Arrays; optional)
- `assembly` (Bool | Real | String | Dict | Array; required)
- `configuration` (Bool | Real | String | Dict | Array; optional)
- `createRootFn` (optional)
- `defaultSession` (Bool | Real | String | Dict | Array; optional)
- `disableAddTracks` (Bool | Real | String | Dict | Array; optional)
- `hydrateFn` (optional)
- `internetAccounts` (Array of Bool | Real | String | Dict | Arrays; optional)
- `location` (String; optional)
- `makeWorkerInstance` (optional)
- `onChange` (optional)
- `plugins` (Bool | Real | String | Dict | Array; optional)
- `tracks` (Array of Bool | Real | String | Dict | Arrays; required)
"""
function julia_lineargenomeview(; kwargs...)
        available_props = Symbol[:id, :aggregateTextSearchAdapters, :assembly, :configuration, :createRootFn, :defaultSession, :disableAddTracks, :hydrateFn, :internetAccounts, :location, :makeWorkerInstance, :onChange, :plugins, :tracks]
        wild_props = Symbol[]
        return Component("julia_lineargenomeview", "LinearGenomeView", "dash_jbrowse", available_props, wild_props; kwargs...)
end

