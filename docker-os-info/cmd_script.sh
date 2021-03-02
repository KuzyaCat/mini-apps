#!/usr/bin/env bash

filename="sys_info.txt"

echo "The information about your operating system:" >> $filename
echo `cat /etc/*-release` >> $filename
echo $'\r' >> $filename
echo "The information about your kernel:" >> $filename
echo `uname -a` >> $filename