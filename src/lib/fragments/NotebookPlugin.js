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
                    console.log(location)
                    if (location.uri.startsWith('file://')) {
                        console.log("IAMMMMM in colabbbbb")
                        console.log(location.uri)
                        // TODO: get data and invoke registered method
                        // eslint-disable-next-line no-undefined
                        const args = (this.start === undefined) ?
                            [this.path] :
                            [this.path, this.start.toString(), this.end.toString()]

                        // eslint-disable-next-line no-undef
                        const result = await google.colab.kernel.invokeFunction(
                            'ReadFile',
                            args,
                            {})
                        const data = result.data["text/plain"]
                        const dataString = Buffer.from(data.substring(2, data.length - 1), 'base64')
                        // const dataString = atob(data.substring(2, data.length - 1))
                        const bytes = new Uint8Array(dataString.length)
                        for (var i = 0; i < dataString.length; i++) {
                            bytes[i] = dataString.charCodeAt(i)
                        }
                        return new Response(bytes.buffer)
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
