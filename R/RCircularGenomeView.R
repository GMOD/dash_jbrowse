# AUTO GENERATED FILE - DO NOT EDIT

#' @export
RCircularGenomeView <- function(id=NULL, aggregateTextSearchAdapters=NULL, assembly=NULL, configuration=NULL, createRootFn=NULL, defaultSession=NULL, hydrateFn=NULL, internetAccounts=NULL, makeWorkerInstance=NULL, onChange=NULL, plugins=NULL, tracks=NULL) {
    
    props <- list(id=id, aggregateTextSearchAdapters=aggregateTextSearchAdapters, assembly=assembly, configuration=configuration, createRootFn=createRootFn, defaultSession=defaultSession, hydrateFn=hydrateFn, internetAccounts=internetAccounts, makeWorkerInstance=makeWorkerInstance, onChange=onChange, plugins=plugins, tracks=tracks)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'CircularGenomeView',
        namespace = 'dash_jbrowse',
        propNames = c('id', 'aggregateTextSearchAdapters', 'assembly', 'configuration', 'createRootFn', 'defaultSession', 'hydrateFn', 'internetAccounts', 'makeWorkerInstance', 'onChange', 'plugins', 'tracks'),
        package = 'dashJbrowse'
        )

    structure(component, class = c('dash_component', 'list'))
}
