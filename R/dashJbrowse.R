# AUTO GENERATED FILE - DO NOT EDIT

dashJbrowse <- function(id=NULL, label=NULL, value=NULL) {
    
    props <- list(id=id, label=label, value=value)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'DashJbrowse',
        namespace = 'dash_jbrowse',
        propNames = c('id', 'label', 'value'),
        package = 'dashJbrowse'
        )

    structure(component, class = c('dash_component', 'list'))
}
