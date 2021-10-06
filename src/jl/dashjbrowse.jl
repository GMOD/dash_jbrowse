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
- `data` (Dict; optional): The config object.
- `defaultSession` (Dict; optional): The default session to use for the browser.
- `genome` (a value equal to: 'hg19', 'volvox', 'tomato'; optional): genome for viewtype view
- `location` (String; optional): The location to use for the browser.
- `path` (String; optional): Path to config file.
- `tracks` (Array; optional): The tracks to use for the browser.
- `viewType` (a value equal to: 'view', 'JB2config', 'json'; optional): The type of the view
"""
function dashjbrowse(; kwargs...)
        available_props = Symbol[:id, :aggregateTextSearchAdapters, :assembly, :data, :defaultSession, :genome, :location, :path, :tracks, :viewType]
        wild_props = Symbol[]
        return Component("dashjbrowse", "DashJbrowse", "dash_jbrowse", available_props, wild_props; kwargs...)
end

