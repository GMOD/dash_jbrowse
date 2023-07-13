## Publishing

You can create a new release of the package by creating a new tag on the repo
and pushing it. This will trigger the release.yml workflow which will create a
build and publish it to production PyPI

### Steps:

1. Once main is ready to go, create a new tag with the latest version of the
   package. You can find this in the [package.json](package.json)
2. Create a description of your release and publish it.
3. Checkout the `Publish Python distributions` workflow. Once that is completed,
   you can checkout the latest release here
   https://pypi.org/project/dash-jbrowse/
4. Verify that you can install your package and you are done! :)
