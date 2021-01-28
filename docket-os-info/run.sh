#!/usr/bin/env bash

docker build --tag "sys_info:1.0.0" .
docker run --volume `pwd`:/system_info --name sys_info sys_info:1.0.0

docker rm sys_info
docker rmi --force sys_info:1.0.0