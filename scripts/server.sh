#!/bin/bash
export $( cat .env|xargs)
node ../server.js