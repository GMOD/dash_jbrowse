% Auto-generated: do not edit by hand
\name{dashJbrowse}

\alias{dashJbrowse}

\title{DashJbrowse component}

\description{
DashJbrowse renders the JBrowse 2 React Linear Genome View. Any JB2 LGV configuration is also valid configuration for this component.
}

\usage{
dashJbrowse(id=NULL, aggregateTextSearchAdapters=NULL, assembly=NULL,
data=NULL, defaultSession=NULL, genome=NULL, location=NULL,
path=NULL, tracks=NULL, viewType=NULL)
}

\arguments{
\item{id}{Character. The ID used to identify this component in Dash callbacks.}

\item{aggregateTextSearchAdapters}{Unnamed list. The text search adapters to use for the browser}

\item{assembly}{Named list. The configuration for the assembly to use for the browser.}

\item{data}{Named list. The config object.}

\item{defaultSession}{Named list. The default session to use for the browser.}

\item{genome}{A value equal to: 'hg19', 'volvox', 'tomato'. genome for viewtype view}

\item{location}{Character. The location to use for the browser.}

\item{path}{Character. Path to config file.}

\item{tracks}{Unnamed list. The tracks to use for the browser.}

\item{viewType}{A value equal to: 'view', 'jb2config', 'json'. The type of the view}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

