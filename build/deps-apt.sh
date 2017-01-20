#!/bin/bash
set -o errexit

# Coffee counter
#
# LICENSE:    MIT
#
# @project    coffee
# @package    deployment
# @author     André Lademann <vergissberlin@googlemail.com>

# Directories
mkdir -p ~/.ssh

# Install dependencies
apt-get update &&\
apt-get install \
    git-core \
    firmware-ralink \
    festival \
    festival-doc \
    festival-freebsoft-utils \
    libsox-fmt-all \
    mc \
    nodered \
    python-rpi.gpio \
    sox \
    vim \
    wireless-tools

# Configure dependencies
echo -e "\nsyntax on\nset background=dark\nset mouse=a\n" >> /etc/vim/vimrc
update-alternatives --set editor /usr/bin/vim.basic
