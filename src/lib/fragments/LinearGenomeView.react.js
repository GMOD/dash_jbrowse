import React, {Component} from 'react';
import {
    createViewState,
    JBrowseLinearGenomeView,
} from '@jbrowse/react-linear-genome-view';
import Plugin from '@jbrowse/core/Plugin';

import {defaultProps, propTypes} from '../components/LinearGenomeView.react';

class HighlightRegionPlugin extends Plugin {
  name = 'HighlightRegionPlugin'

  install(pluginManager) {
    pluginManager.addToExtensionPoint(
      'Core-extendPluggableElement',
      (pluggableElement) => {
        if (pluggableElement.name === 'LinearGenomeView') {
          const { stateModel } = pluggableElement
          const newStateModel = stateModel.extend(self => {
            const superRubberBandMenuItems = self.rubberBandMenuItems
            return {
              views: {
                rubberBandMenuItems() {
                  return [
                    ...superRubberBandMenuItems(),
                    {
                      label: 'Console log selected region',
                      onClick: () => {
                        const { leftOffset, rightOffset } = self
                        const selectedRegions = self.getSelectedRegions(
                          leftOffset,
                          rightOffset,
                        )
                        // console log the list of potentially multiple
                        // regions that were selected
                        console.log(selectedRegions)
                      },
                    },
                  ]
                },
              },
            }
          })

          pluggableElement.stateModel = newStateModel
        }
        return pluggableElement
      },
    )
  }

  configure() {}
}
/**
 * LinearGenomeView renders the JBrowse 2 React Linear Genome View.
 * Any JB2 LGV configuration is also valid configuration for this
 * component.
 */
export default class LinearGenomeView extends Component {
    render() {
        // eslint-disable-next-line no-unused-vars
        const {id, assembly, tracks, defaultSession, location, aggregateTextSearchAdapters, configuration, plugins } = this.props;

        // console.log("location", location)
        // let formatted = location
        // if (typeof location !== 'string' || !(location instanceof String)) {
        //     const {refName, start, end} = location
        //    formatted = `${refName}:${start}..${end}`
        // }
        const viewState = createViewState({
            assembly,
            tracks,
            defaultSession,
            location,
            aggregateTextSearchAdapters,
            configuration,
            plugins: [HighlightRegionPlugin],
        });

        return (
            <div id={id}>
                <JBrowseLinearGenomeView viewState={viewState} />
            </div>
        );
    }
}

LinearGenomeView.defaultProps = defaultProps;
LinearGenomeView.propTypes = propTypes;
