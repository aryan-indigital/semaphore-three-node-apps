# Semaphore three Node.js apps

This repository contains three dependency-free Node.js HTTP services for a
small Semaphore UI CI/CD test.

| Service | Port | Health check |
| --- | ---: | --- |
| `node-app-1` | 3001 | `http://slave:3001/health` |
| `node-app-2` | 3002 | `http://slave:3002/health` |
| `node-app-3` | 3003 | `http://slave:3003/health` |

Semaphore runs `ansible/deploy.yml` from this repository. The playbook installs
Node.js on the managed host, deploys each service under `/opt/semaphore-node-apps`,
creates systemd units, and verifies all three health endpoints.
