#!/usr/bin/env bash
cp bootstrap-project.json node_modules/edge/lib/bootstrap/project.json
cd node_modules/edge/lib/bootstrap
dotnet restore
dotnet build -c Release