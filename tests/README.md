# Running the Tests

- Write tests for your component.
    - A sample test is available in `tests/test_usage.py`, it will load `usage.py` and you can then automate interactions with selenium.
    - The Dash team uses these types of integration tests extensively. Browse the Dash component code on GitHub for more examples of testing (e.g. https://github.com/plotly/dash-core-components)

1. $ pip install -r tests/requirements.txt
2. Download chromedriver
3. Run the tests with `$ pytest tests`.
