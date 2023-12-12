import React from 'react'
import {
  createViewState,
  JBrowseLinearGenomeView,
} from '@jbrowse/react-linear-genome-view'

export default function LinearGenomeView({
  id,
  assembly,
  tracks,
  defaultSession,
  location,
  aggregateTextSearchAdapters,
  configuration,
}: Parameters<typeof createViewState>[0] & { id: string }) {
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
