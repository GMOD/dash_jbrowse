# Roadmap

## Minimum Viable Package

-   docs (maybe website like readthedocs)
-   tests (Dash has integration test examples)
-   Maybe some clean up (not much)
-   Figure out builds/publishing (again Dash has tooling for this)

## Engineeering Problems/Opportunities
- Note: the python class system has been moved to a new repository.

-   a Python class system that abstracts away our config from the user (similar in spirit to JBrowseR)
    -   Could we even be smart and do indexing under the hood if just given a FASTA for example
-   local file support (I think this would be VERY important for adoption) this might require starting a Flask server behind the scenes to serve files to the browser
-   integration with other Python bioinformatics packages (like https://biopython.org/) for example could we save those data structures to a temporary file and serve them??
-   Python callbacks, I couldn't quite get it to work, but seems very possible and would be cool
