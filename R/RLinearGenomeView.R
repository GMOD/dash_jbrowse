# AUTO GENERATED FILE - DO NOT EDIT

#' @export
RLinearGenomeView <- function(id=NULL, aggregateTextSearchAdapters=NULL, assembly=NULL, configuration=NULL, createRootFn=NULL, defaultSession=NULL, disableAddTracks=NULL, hydrateFn=NULL, internetAccounts=NULL, location=NULL, makeWorkerInstance=NULL, onChange=NULL, plugins=NULL, tracks=NULL) {
    
    props <- list(id=id, aggregateTextSearchAdapters=aggregateTextSearchAdapters, assembly=assembly, configuration=configuration, createRootFn=createRootFn, defaultSession=defaultSession, disableAddTracks=disableAddTracks, hydrateFn=hydrateFn, internetAccounts=internetAccounts, location=location, makeWorkerInstance=makeWorkerInstance, onChange=onChange, plugins=plugins, tracks=tracks)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'LinearGenomeView',
        namespace = 'dash_jbrowse',
        propNames = c('id', 'aggregateTextSearchAdapters', 'assembly', 'configuration', 'createRootFn', 'defaultSession', 'disableAddTracks', 'hydrateFn', 'internetAccounts', 'location', 'makeWorkerInstance', 'onChange', 'plugins', 'tracks'),
        package = 'dashJbrowse'
        )

    structure(component, class = c('dash_component', 'list'))
}
