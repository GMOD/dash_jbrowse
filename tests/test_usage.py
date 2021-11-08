from dash.testing.application_runners import import_app


# Basic test for the component rendering.
# The dash_duo pytest fixture is installed with dash (v1.0+)
def test_render_component(dash_duo):
    # Start a dash app contained as the variable `app` in `usage.py`
    app = import_app('usage')
    dash_duo.start_server(app)

    # The html input will be a children of the #input dash component.
    dash_duo.find_element('#test')
    dash_duo.wait_for_element_by_id('lgv-hg38')
    #  shoudl contain no errors
    assert dash_duo.get_logs() == []
