import dash
from dash_jbrowse import JBrowseConfig, create_jbrowse
import dash_html_components as html


jbrowse_conf = JBrowseConfig()
aliases = ["hg38"]
ref_name_aliases = {
    "adapter": {
        "type": "RefNameAliasAdapter",
        "location": {
            "uri": "https://s3.amazonaws.com/jbrowse.org/genomes/GRCh38/hg38_aliases.txt",
        },
    },
}


jbrowse_conf.set_assembly("https://jbrowse.org/genomes/GRCh38/fasta/hg38.prefix.fa.gz", aliases, ref_name_aliases, True)
config = jbrowse_conf.get_config()
jb2_config_view = create_jbrowse('config', config=config)
print(jb2_config_view)
app = dash.Dash(__name__)

app.layout = html.Div(
    [jb2_config_view]
)

if __name__ == "__main__":
    app.run_server(debug=True)
