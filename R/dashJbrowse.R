# AUTO GENERATED FILE - DO NOT EDIT

dashJbrowse <- function(id=NULL, aggregateTextSearchAdapters=NULL, assembly=NULL, defaultSession=NULL, location=NULL, tracks=NULL) {
    
    props <- list(id=id, aggregateTextSearchAdapters=aggregateTextSearchAdapters, assembly=assembly, defaultSession=defaultSession, location=location, tracks=tracks)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'DashJbrowse',
        namespace = 'dash_jbrowse',
        propNames = c('id', 'aggregateTextSearchAdapters', 'assembly', 'defaultSession', 'location', 'tracks'),
        package = 'dashJbrowse'
        )

    structure(component, class = c('dash_component', 'list'))
}
