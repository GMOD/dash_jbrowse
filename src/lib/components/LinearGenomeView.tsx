import React from 'react'
import {
  createViewState,
  JBrowseLinearGenomeView,
} from '@jbrowse/react-linear-genome-view'


/**
 * LinearGenomeView renders the JBrowse 2 React Linear Genome View.
 * Any JB2 LGV configuration is also valid configuration for this
 * component.
 */
export default function LinearGenomeView({
  id,
  assembly,
  tracks,
  defaultSession,
  location,
  aggregateTextSearchAdapters,
  configuration,
}: Record<string, unknown>) {

  const viewState = createViewState({
    assembly,
    tracks,
    defaultSession,
    location,
    aggregateTextSearchAdapters,
    configuration,
  })

  return (
    <div id={id}>
      <JBrowseLinearGenomeView viewState={viewState} />
    </div>
  )
}

