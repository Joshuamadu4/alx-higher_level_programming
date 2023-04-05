#!/bin/bash
# This Script send a DELETE request to an URL with curl and display the body of the response
curl -s -X DELETE "$1"
