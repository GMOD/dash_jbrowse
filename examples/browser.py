import dash
import dash_jbrowse
import json
from dash.dependencies import Input, Output
from dash import html
from dash import dcc

app = dash.Dash(__name__)

HOSTED_GENOME_DICT = [
    {"value": "hg38", "label": "Human (GRCh37)"},
    {"value": "hg19", "label": "Human (hg19)"},
]

app.layout = html.Div(
    [
        html.P("Select the genome to display below."),
        dcc.Dropdown(
            id="default-genome-select", options=HOSTED_GENOME_DICT, value="hg38"
        ),
        html.Hr(),
        dcc.Loading(id="default-container"),
    ]
)


# Return the IGV component with the selected genome.
@app.callback(
    Output("default-container", "children"), Input("default-genome-select", "value")
)
def return_jbrowse(genome):
    print(genome)
    with open('./test_data/' + genome + '.json', "r") as file:
            data = json.load(file)
    my_assembly = data["assembly"]
    # print(my_assembly)
    my_tracks = data["tracks"]
    my_location = data["location"]
    my_default_session = data["defaultSession"]
    return html.Div(
        [
            dash_jbrowse.LinearGenomeView(
                id='lgv',
                assembly=my_assembly,
                tracks=my_tracks,
                defaultSession=my_default_session,
                location=my_location,
            ),
        ]
    )


if __name__ == "__main__":
    app.run_server(debug=True)
