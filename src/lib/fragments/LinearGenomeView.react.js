/* eslint-disable new-cap */
/* eslint-disable no-undef */
import React, {Component} from 'react';
import {
    createViewState,
    JBrowseLinearGenomeView,
} from '@jbrowse/react-linear-genome-view';
import { Plugin } from '@jbrowse/core';
import { ConfigurationSchema } from '@jbrowse/core/configuration';
import { InternetAccount } from '@jbrowse/core/pluggableElementTypes/models';
import InternetAccountType from '@jbrowse/core/pluggableElementTypes/InternetAccountType';
import { types } from 'mobx-state-tree';
import {defaultProps, propTypes} from '../components/LinearGenomeView.react';

// const notebookSchema = ConfigurationSchema(
//     'JupyterLocalFileInternetAccount',
//     {}
//   )
// const stateModelFactory = (
//     configSchema,
//   ) => {
//     return InternetAccount.named('JupyterLocalFileInternetAccount')
//       .props({
//         type: types.literal('JupyterLocalFileInternetAccount'),
//         configuration: ConfigurationReference(configSchema),
//       })
//       .actions(self => ({
//         getFetcher(
//             location,
//           ) {
//             return async (
//               input,
//               init,
//             ) => {
//                 if (location.uri.startsWith('file://')) {
//                     console.log(location.uri)
//                 } else {
//                     const authToken = await self.getToken(location)
//                     const newInit = self.addAuthHeaderToInit(init, authToken)
//                     return fetch(input, newInit)
//                 }
//             }
//           },
//       }))
//   }

const notebookColabSchema = ConfigurationSchema(
    'ColabLocalFileInternetAccount',
    {}
  )
const stateModelColabFactory = (
    configSchema,
  ) => {
    return InternetAccount.named('ColabLocalFileInternetAccount')
      .props({
        type: types.literal('ColabLocalFileInternetAccount'),
        configuration: ConfigurationReference(configSchema),
      })
      .actions(self => ({
        getFetcher(
            location,
          ) {
            return async (
              input,
              init,
            ) => {
                if (location.uri.startsWith('file://')) {
                    const args = (this.start === undefined) ?
                    [this.path] :
                    [this.path, this.start.toString(), this.end.toString()]

                    const result = await google.colab.kernel.invokeFunction(
                        'ReadFile', // The callback name.
                        args, // The arguments.
                        {}) // kwargs
                    const data = result.data["text/plain"]
                    const dataString = atob(data.substring(2, data.length - 1))
                    const bytes = new Uint8Array(dataString.length)
                    for (var i = 0; i < dataString.length; i++) {
                        bytes[i] = dataString.charCodeAt(i)
                    }
                    return new Response(bytes.buffer)
                } 
                    const authToken = await self.getToken(location)
                    const newInit = self.addAuthHeaderToInit(init, authToken)
                    return fetch(input, newInit)
                
            }
          },
      }))
  }
class NotebookPlugin extends Plugin {

    install(pluginManager) {
    //   pluginManager.addInternetAccountType(() => {
    //       return new InternetAccountType({
    //         name: 'JupyterLocalFileInternetAccount',
    //         configSchema: notebookSchema,
    //         stateModel: stateModelFactory(notebookSchema),
    //       })
    //     })
      pluginManager.addInternetAccountType(() => {
          return new InternetAccountType({
            name: 'ColabLocalFileInternetAccount',
            configSchema: notebookColabSchema,
            stateModel: stateModelColabFactory(notebookColabSchema),
          })
        })
      }
  }
/**
 * LinearGenomeView renders the JBrowse 2 React Linear Genome View.
 * Any JB2 LGV configuration is also valid configuration for this
 * component.
 */
export default class LinearGenomeView extends Component {
    render() {
        const {id, assembly, tracks, defaultSession, location, aggregateTextSearchAdapters, configuration } = this.props;

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
