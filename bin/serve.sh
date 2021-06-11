#!/bin/bash
deno run --allow-net --allow-read https://deno.land/std@0.98.0/http/file_server.ts ../public -p 31337 --host 127.0.0.1 --cors
