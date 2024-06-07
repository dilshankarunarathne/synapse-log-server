# Synapse Logging Server 

This repository contains the source code for the Synapse Logging Server, a central component of the Synapse distributed 
task execution system. It provides real-time log collection, storage, and management for tasks running on edge devices.

## Features
Receives logs securely from Synapse clients running tasks.
Parses and formats log data with timestamps, client IDs, and task information.
Stores logs in a MongoDB database hosted on MongoDB Atlas Cloud (configurable).
Offers functionalities for authorized users to (optional):

- Search and filter logs based on various criteria.
- Visualize logs (future implementation).
