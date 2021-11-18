import json
from setuptools import setup


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
    install_requires=[
        "dash>=1.15.0",
    ],
    classifiers=[
        "Framework :: Dash",
        "Topic :: Scientific/Engineering :: Bio-Informatics",
        "Topic :: Scientific/Engineering :: Visualization",
        "License :: OSI Approved :: Apache Software License",
        "Programming Language :: Python :: 3",
        "Intended Audience :: Science/Research",
    ],
)
