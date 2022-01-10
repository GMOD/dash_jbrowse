% Auto-generated: do not edit by hand
\name{circularGenomeView}

\alias{circularGenomeView}

\title{CircularGenomeView component}

\description{
CircularGenomeView renders the JBrowse 2 React Circular Genome View. Any JB2 circular genome view configuration is also valid configuration for this component.
}

\usage{
circularGenomeView(id=NULL, aggregateTextSearchAdapters=NULL, assembly=NULL,
configuration=NULL, defaultSession=NULL, tracks=NULL)
}

\arguments{
\item{id}{Character. The ID used to identify this component in Dash callbacks.}

\item{aggregateTextSearchAdapters}{Unnamed list. The text search adapters to use for the browser}

\item{assembly}{Lists containing elements 'name', 'aliases', 'sequence', 'refnamealiases'.
those elements have the following types:
  - name (character; required)
  - aliases (unnamed list; optional)
  - sequence (named list; optional)
  - refnamealiases (named list; optional). The configuration for the assembly to use for the browser.}

\item{configuration}{Lists containing elements 'theme'.
those elements have the following types:
  - theme (named list; optional). The theme configuration object}

\item{defaultSession}{Lists containing elements 'name', 'view'.
those elements have the following types:
  - name (character; required)
  - view (named list; optional). The default session to use for the browser.}

\item{tracks}{Unnamed list. The tracks to use for the browser.}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

