% Auto-generated: do not edit by hand
\name{dashJbrowse}

\alias{dashJbrowse}

\title{DashJbrowse component}

\description{
DashJbrowse renders the JBrowse 2 React Linear Genome View. Any JB2 LGV configuration is also valid configuration for this component.
}

\usage{
dashJbrowse(id=NULL, aggregateTextSearchAdapters=NULL, assembly=NULL,
configuration=NULL, defaultSession=NULL, location=NULL,
plugins=NULL, tracks=NULL)
}

\arguments{
\item{id}{Character. The ID used to identify this component in Dash callbacks.}

\item{aggregateTextSearchAdapters}{Unnamed list. The text search adapters to use for the browser}

\item{assembly}{Named list. The configuration for the assembly to use for the browser.}

\item{configuration}{Named list. The theme configuration object}

\item{defaultSession}{Named list. The default session to use for the browser.}

\item{location}{Character. The location to use for the browser.}

\item{plugins}{Unnamed list. List of plugin(external) configuration objects}

\item{tracks}{Unnamed list. The tracks to use for the browser.}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

