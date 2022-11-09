/* eslint-disable new-cap */
import Plugin from '@jbrowse/core/Plugin';
import { types } from 'mobx-state-tree';
import { InternetAccount, BaseInternetAccountConfig } from '@jbrowse/core/pluggableElementTypes/models';
import { ConfigurationSchema, ConfigurationReference } from '@jbrowse/core/configuration';
import InternetAccountType from '@jbrowse/core/pluggableElementTypes/InternetAccountType';

const notebookColabSchema = ConfigurationSchema(
    'ColabLocalFileInternetAccount',
    {},
    {
        baseConfiguration: BaseInternetAccountConfig,
        explicitlyTyped: true,
    }
)
const stateModelColabFactory = (
    configSchema,
) => {
    return InternetAccount.named('ColabLocalFileInternetAccount')
        .props({
            type: types.literal('ColabLocalFileInternetAccount'),
            configuration: ConfigurationReference(configSchema),
        })
        .actions(() => ({
            getTokenFromUser(resolve) {
                resolve('')
            },
            getFetcher(
                location,
            ) {
                return async (
                    input,
                    init,
                ) => {
                    if (location.uri.startsWith('file://')) {
                        console.log(location.uri)
                        // TODO: get data and invoke registered method
                    } else {
                        console.log(location)
                    }
                    console.log("This is a test")
                    return fetch(input, init)
                }
            },
        }))
}

export default class NotebookPlugin extends Plugin {
    name = 'NotebookPlugin'

    install(pluginManager) {
        pluginManager.addInternetAccountType(() => {
            return new InternetAccountType({
                name: 'ColabLocalFileInternetAccount',
                configSchema: notebookColabSchema,
                stateModel: stateModelColabFactory(notebookColabSchema),
            })
        })
    }
    configure() { }
}
