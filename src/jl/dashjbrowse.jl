# AUTO GENERATED FILE - DO NOT EDIT

export dashjbrowse

"""
    dashjbrowse(;kwargs...)

A DashJbrowse component.
DashJbrowse renders the JBrowse 2 React Linear Genome View.
Any JB2 LGV configuration is also valid configuration for this
component.
Keyword arguments:
- `id` (String; optional): The ID used to identify this component in Dash callbacks.
- `aggregateTextSearchAdapters` (Array; optional): The text search adapters to use for the browser
- `assembly` (Dict; optional): The configuration for the assembly to use for the browser.
- `configuration` (Dict; optional): The theme configuration object
- `defaultSession` (Dict; optional): The default session to use for the browser.
- `location` (String; optional): The location to use for the browser.
- `plugins` (Array; optional): List of plugin(external) configuration objects
- `tracks` (Array; optional): The tracks to use for the browser.
"""
function dashjbrowse(; kwargs...)
        available_props = Symbol[:id, :aggregateTextSearchAdapters, :assembly, :configuration, :defaultSession, :location, :plugins, :tracks]
        wild_props = Symbol[]
        return Component("dashjbrowse", "DashJbrowse", "dash_jbrowse", available_props, wild_props; kwargs...)
end

