# AUTO GENERATED FILE - DO NOT EDIT

export lineargenomeview

"""
    lineargenomeview(;kwargs...)

A LinearGenomeView component.
LinearGenomeView renders the JBrowse 2 React Linear Genome View.
Any JB2 LGV configuration is also valid configuration for this
component.
Keyword arguments:
- `id` (String; optional): The ID used to identify this component in Dash callbacks.
- `aggregateTextSearchAdapters` (Array; optional): The text search adapters to use for the browser
- `assembly` (optional): The configuration for the assembly to use for the browser.. assembly has the following type: lists containing elements 'name', 'aliases', 'sequence', 'refNameAliases'.
Those elements have the following types:
  - `name` (String; required)
  - `aliases` (Array; optional)
  - `sequence` (Dict; optional)
  - `refNameAliases` (Dict; optional)
- `configuration` (optional): The theme configuration object. configuration has the following type: lists containing elements 'theme'.
Those elements have the following types:
  - `theme` (Dict; optional)
- `defaultSession` (optional): The default session to use for the browser.. defaultSession has the following type: lists containing elements 'name', 'view'.
Those elements have the following types:
  - `name` (String; required)
  - `view` (Dict; optional)
- `internetAccounts` (Array; optional): The internet accounts to use for the browser
- `location` (optional): The location to use for the browser.. location has the following type: String | lists containing elements 'refName', 'start', 'end', 'assemblyName'.
Those elements have the following types:
  - `refName` (String; required)
  - `start` (Real; optional)
  - `end` (Real; optional)
  - `assemblyName` (String; optional)
- `plugins` (Array; optional): The inline plugins to use for the browser
- `tracks` (Array; optional): The tracks to use for the browser.
"""
function lineargenomeview(; kwargs...)
        available_props = Symbol[:id, :aggregateTextSearchAdapters, :assembly, :configuration, :defaultSession, :internetAccounts, :location, :plugins, :tracks]
        wild_props = Symbol[]
        return Component("lineargenomeview", "LinearGenomeView", "dash_jbrowse", available_props, wild_props; kwargs...)
end

