import dash_jbrowse
import dash
import dash_html_components as html

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        dash_jbrowse.DashJbrowse(
            id="input",
            viewType='view',
            genome='hg19'
        ),
    ]
)

if __name__ == "__main__":
    app.run_server(debug=True)
