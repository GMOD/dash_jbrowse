/* eslint-disable no-undefined */
/* eslint-disable new-cap */
import Plugin from '@jbrowse/core/Plugin';
import { types } from 'mobx-state-tree';
import { InternetAccount, BaseInternetAccountConfig } from '@jbrowse/core/pluggableElementTypes/models';
import { ConfigurationSchema, ConfigurationReference } from '@jbrowse/core/configuration';
import InternetAccountType from '@jbrowse/core/pluggableElementTypes/InternetAccountType';


const ColabNotebookSchema = ConfigurationSchema(
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
                    // eslint-disable-next-line no-unused-vars
                    input,
                    // eslint-disable-next-line no-unused-vars
                    init,
                ) => {
                    console.log("ColabPlugin", location)
                    console.log("window", window)
                    // eslint-disable-next-line no-magic-numbers
                    await new Promise(r => setTimeout(r, 2000))
                    // const isColab =  window.google !== undefined && window.google.colab
                    // console.log("isColab: ", isColab)
                    // if (isColab) {
                    console.log("IAMMMMM in colabbbbb")
                    console.log(location.uri)
                    // TODO: get data and invoke registered method
                    // eslint-disable-next-line no-undefined
                    const args = (this.start === undefined) ?
                        [this.path] :
                        [this.path, this.start.toString(), this.end.toString()]

                    // eslint-disable-next-line no-undef
                    
                    const result = await google.colab.kernel.invokeFunction(
                        'ColabLocalFile',
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
                    // return fetch(input, init)
                }
            },
        }))
}

const JupyterNotebookSchema = ConfigurationSchema(
    'JupyterNotebookLocalFileInternetAccount',
    {},
    {
        baseConfiguration: BaseInternetAccountConfig,
        explicitlyTyped: true,
    }
)
const stateModelJupyterNotebookFactory = (
    configSchema,
) => {
    return InternetAccount.named('JupyterNotebookLocalFileInternetAccount')
        .props({
            type: types.literal('JupyterNotebookLocalFileInternetAccount'),
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
                    console.log("JupyterPlugin", location)
                    const isColab = window.google !== undefined && window.google?.colab
                    const isJupyter = !isColab &&  window.Jupyter !== undefined
                    console.log("isColab: ", isColab)
                    console.log("isJupyter: ", isJupyter)
                    if (location.uri.startsWith('file://') && isJupyter) {
                        if (isJupyter) {
                            console.log("IAMMMMM in JUpyteeeerrrr")
                        }
                        console.log(location.uri)
                        // TODO: get data and invoke registered method                
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
                configSchema: ColabNotebookSchema,
                stateModel: stateModelColabFactory(ColabNotebookSchema),
            })
        })
        pluginManager.addInternetAccountType(() => {
            return new InternetAccountType({
                name: 'JupyterNotebookLocalFileInternetAccount',
                configSchema: JupyterNotebookSchema,
                stateModel: stateModelJupyterNotebookFactory(JupyterNotebookSchema),
            })
        })
    }
    configure() { }
}
