# AUTO GENERATED FILE - DO NOT EDIT

linearGenomeView <- function(id=NULL, aggregateTextSearchAdapters=NULL, assembly=NULL, configuration=NULL, defaultSession=NULL, location=NULL, plugins=NULL, tracks=NULL) {
    
    props <- list(id=id, aggregateTextSearchAdapters=aggregateTextSearchAdapters, assembly=assembly, configuration=configuration, defaultSession=defaultSession, location=location, plugins=plugins, tracks=tracks)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'LinearGenomeView',
        namespace = 'dash_jbrowse',
        propNames = c('id', 'aggregateTextSearchAdapters', 'assembly', 'configuration', 'defaultSession', 'location', 'plugins', 'tracks'),
        package = 'dashJbrowse'
        )

    structure(component, class = c('dash_component', 'list'))
}
