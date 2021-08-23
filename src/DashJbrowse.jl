
module DashJbrowse
using Dash

const resources_path = realpath(joinpath( @__DIR__, "..", "deps"))
const version = "0.0.1"

include("jl/dashjbrowse.jl")

function __init__()
    DashBase.register_package(
        DashBase.ResourcePkg(
            "dash_jbrowse",
            resources_path,
            version = version,
            [
                DashBase.Resource(
    relative_package_path = "async-DashJbrowse.js",
    external_url = "https://unpkg.com/dash_jbrowse@0.0.1/dash_jbrowse/async-DashJbrowse.js",
    dynamic = nothing,
    async = :true,
    type = :js
),
DashBase.Resource(
    relative_package_path = "async-DashJbrowse.js.map",
    external_url = "https://unpkg.com/dash_jbrowse@0.0.1/dash_jbrowse/async-DashJbrowse.js.map",
    dynamic = true,
    async = nothing,
    type = :js
),
DashBase.Resource(
    relative_package_path = "dash_jbrowse.min.js",
    external_url = "https://unpkg.com/dash_jbrowse@0.0.1/dash_jbrowse/dash_jbrowse.min.js",
    dynamic = nothing,
    async = nothing,
    type = :js
),
DashBase.Resource(
    relative_package_path = "dash_jbrowse.min.js.map",
    external_url = "https://unpkg.com/dash_jbrowse@0.0.1/dash_jbrowse/dash_jbrowse.min.js.map",
    dynamic = true,
    async = nothing,
    type = :js
)
            ]
        )

    )
end
end
