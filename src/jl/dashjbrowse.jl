# AUTO GENERATED FILE - DO NOT EDIT

export dashjbrowse

"""
    dashjbrowse(;kwargs...)

A DashJbrowse component.
ExampleComponent is an example component.
It takes a property, `label`, and
displays it.
It renders an input with the property `value`
which is editable by the user.
Keyword arguments:
- `id` (String; optional): The ID used to identify this component in Dash callbacks.
- `assembly` (Dict; optional): The configuration for the assembly to use for the browser.
- `tracks` (Array; optional): The tracks to use for the browser.
"""
function dashjbrowse(; kwargs...)
        available_props = Symbol[:id, :assembly, :tracks]
        wild_props = Symbol[]
        return Component("dashjbrowse", "DashJbrowse", "dash_jbrowse", available_props, wild_props; kwargs...)
end

