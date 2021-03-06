% Auto-generated: do not edit by hand
\name{linearGenomeView}

\alias{linearGenomeView}

\title{LinearGenomeView component}

\description{
LinearGenomeView renders the JBrowse 2 React Linear Genome View. Any JB2 LGV configuration is also valid configuration for this component.
}

\usage{
linearGenomeView(id=NULL, aggregateTextSearchAdapters=NULL, assembly=NULL,
configuration=NULL, defaultSession=NULL, location=NULL,
tracks=NULL)
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

\item{location}{Character | lists containing elements 'refname', 'start', 'end', 'assemblyname'.
those elements have the following types:
  - refname (character; required)
  - start (numeric; optional)
  - end (numeric; optional)
  - assemblyname (character; optional). The location to use for the browser.}

\item{tracks}{Unnamed list. The tracks to use for the browser.}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

