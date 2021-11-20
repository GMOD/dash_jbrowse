import json
from setuptools import setup

# read the contents of your README file
from pathlib import Path
this_directory = Path(__file__).parent
long_description = (this_directory / "README.md").read_text()

# read contents of package.json
with open("package.json") as f:
    package = json.load(f)

package_name = package["name"].replace(" ", "_").replace("-", "_")

setup(
    name=package_name,
    version=package["version"],
    author=package["author"],
    author_email="eahershberg@gmail.com",
    maintainer="Teresa De Jesus Martinez",
    maintainer_email="tere486martinez@gmail.com",
    packages=[package_name],
    include_package_data=True,
    license=package["license"],
    description=package.get("description", package_name),
    url=package["homepage"],
    project_urls={
        "Tracker": "https://github.com/GMOD/dash_jbrowse/issues",
        "Source": "https://github.com/GMOD/dash_jbrowse/"
    },
    long_description=long_description,
    long_description_content_type='text/markdown',
    install_requires=[
        "dash>=1.15.0",
    ],
    classifiers=[
        "Framework :: Dash",
        "Programming Language :: Python :: 3",
        "Topic :: Scientific/Engineering :: Bio-Informatics",
        "Topic :: Scientific/Engineering :: Visualization",
        "License :: OSI Approved :: Apache Software License",
        "Intended Audience :: Science/Research",
    ],
)
