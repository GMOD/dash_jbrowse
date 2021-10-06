# AUTO GENERATED FILE - DO NOT EDIT

dashJbrowse <- function(id=NULL, aggregateTextSearchAdapters=NULL, assembly=NULL, data=NULL, defaultSession=NULL, genome=NULL, location=NULL, path=NULL, tracks=NULL, viewType=NULL) {
    
    props <- list(id=id, aggregateTextSearchAdapters=aggregateTextSearchAdapters, assembly=assembly, data=data, defaultSession=defaultSession, genome=genome, location=location, path=path, tracks=tracks, viewType=viewType)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'DashJbrowse',
        namespace = 'dash_jbrowse',
        propNames = c('id', 'aggregateTextSearchAdapters', 'assembly', 'data', 'defaultSession', 'genome', 'location', 'path', 'tracks', 'viewType'),
        package = 'dashJbrowse'
        )

    structure(component, class = c('dash_component', 'list'))
}
