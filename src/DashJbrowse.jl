
module DashJbrowse
using Dash

const resources_path = realpath(joinpath( @__DIR__, "..", "deps"))
const version = "1.2.0-dev2"

include("jl/circulargenomeview.jl")
include("jl/lineargenomeview.jl")

function __init__()
    DashBase.register_package(
        DashBase.ResourcePkg(
            "dash_jbrowse",
            resources_path,
            version = version,
            [
                DashBase.Resource(
    relative_package_path = "async-LinearGenomeView.js",
    external_url = "https://unpkg.com/dash_jbrowse@1.2.0-dev2/dash_jbrowse/async-LinearGenomeView.js",
    dynamic = nothing,
    async = :true,
    type = :js
),
DashBase.Resource(
    relative_package_path = "async-CircularGenomeView.js",
    external_url = "https://unpkg.com/dash_jbrowse@1.2.0-dev2/dash_jbrowse/async-CircularGenomeView.js",
    dynamic = nothing,
    async = :true,
    type = :js
),
DashBase.Resource(
    relative_package_path = "async-LinearGenomeView.js.map",
    external_url = "https://unpkg.com/dash_jbrowse@1.2.0-dev2/dash_jbrowse/async-LinearGenomeView.js.map",
    dynamic = true,
    async = nothing,
    type = :js
),
DashBase.Resource(
    relative_package_path = "async-CircularGenomeView.js.map",
    external_url = "https://unpkg.com/dash_jbrowse@1.2.0-dev2/dash_jbrowse/async-CircularGenomeView.js.map",
    dynamic = true,
    async = nothing,
    type = :js
),
DashBase.Resource(
    relative_package_path = "dash_jbrowse.min.js",
    external_url = "https://unpkg.com/dash_jbrowse@1.2.0-dev2/dash_jbrowse/dash_jbrowse.min.js",
    dynamic = nothing,
    async = nothing,
    type = :js
),
DashBase.Resource(
    relative_package_path = "dash_jbrowse.min.js.map",
    external_url = "https://unpkg.com/dash_jbrowse@1.2.0-dev2/dash_jbrowse/dash_jbrowse.min.js.map",
    dynamic = true,
    async = nothing,
    type = :js
)
            ]
        )

    )
end
end
