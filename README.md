# Synapse Logging Server 

This repository contains the source code for the Synapse Logging Server, a central component of the Synapse distributed 
task execution system. It provides real-time log collection, storage, and management for tasks running on edge devices.

[![Version](https://img.shields.io/badge/version-0.1-brightgreen.svg)](https://pypi.org/project/ad-topic-recommender/)
[![License](https://img.shields.io/badge/license-CC%20BY--NC--SA%204.0-blue.svg)](https://creativecommons.org/licenses/by-nc-sa/4.0/)
[![Python](https://img.shields.io/badge/python-3.11-blue.svg)](https://www.python.org/downloads/)                                +

[//]: # ([![Build Status]&#40;https://travis-ci.com/dilshan/synapse.svg?branch=main&#41;]&#40;https://travis-ci.com/dilshan/synapse&#41;)

## Features

- Receives logs securely from Synapse clients running tasks.
- Parses and formats log data with timestamps, client IDs, and task information.
- Stores logs in a MongoDB database hosted on MongoDB Atlas Cloud (configurable).
- Offers functionalities for authorized users to (optional):
  - Search and filter logs based on various criteria.
  - Visualize logs (future implementation).

## License

This work is licensed under a
[Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License][cc-by-nc-sa].
[![CC BY-NC-SA 4.0][cc-by-nc-sa-shield]][cc-by-nc-sa]  
[![CC BY-NC-SA 4.0][cc-by-nc-sa-image]][cc-by-nc-sa]

[cc-by-nc-sa]: http://creativecommons.org/licenses/by-nc-sa/4.0/
[cc-by-nc-sa-image]: https://licensebuttons.net/l/by-nc-sa/4.0/88x31.png
[cc-by-nc-sa-shield]: https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey.svg

## Contact Information

For questions or feedback, please contact the author:

- Author: Dilshan M. Karunarathne
- Email: ceo@altier.me
- Website: [http://altier.me](http://altier.me)
