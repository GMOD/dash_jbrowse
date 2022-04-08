# AUTO GENERATED FILE - DO NOT EDIT

#' @export
circularGenomeView <- function(id=NULL, aggregateTextSearchAdapters=NULL, assembly=NULL, configuration=NULL, defaultSession=NULL, tracks=NULL) {
    
    props <- list(id=id, aggregateTextSearchAdapters=aggregateTextSearchAdapters, assembly=assembly, configuration=configuration, defaultSession=defaultSession, tracks=tracks)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'CircularGenomeView',
        namespace = 'dash_jbrowse',
        propNames = c('id', 'aggregateTextSearchAdapters', 'assembly', 'configuration', 'defaultSession', 'tracks'),
        package = 'dashJbrowse'
        )

    structure(component, class = c('dash_component', 'list'))
}
