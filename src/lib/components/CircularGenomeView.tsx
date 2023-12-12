import React from 'react'
import {
  createViewState,
  JBrowseCircularGenomeView,
} from '@jbrowse/react-circular-genome-view'

/**
 * CircularGenomeView renders the JBrowse 2 React Circular Genome View.
 * Any JB2 CGV configuration is also valid configuration for this
 * component.
 */
export default function CircularGenomeView({
  id,
  assembly,
  tracks,
  defaultSession,
  aggregateTextSearchAdapters,
  configuration,
}: Parameters<typeof createViewState>[0] & { id: string }) {
  const viewState = createViewState({
    assembly,
    tracks,
    defaultSession,
    aggregateTextSearchAdapters,
    configuration,
  })

  return (
    <div id={id}>
      <JBrowseCircularGenomeView viewState={viewState} />
    </div>
  )
}
