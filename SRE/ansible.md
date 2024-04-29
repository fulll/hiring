# Ansible Test for Solutions Architects

## General Instructions:
Please carefully read each question before starting.
Make sure to answer each question in the provided Ansible playbook file.
Use only Ansible syntax for all answers.
Ensure that your Ansible playbook is functional and executes the expected tasks.
You can use online documentation and available resources to assist in problem-solving.

## Question 1: Installation of Packages on EC2 Instances
Use Ansible to write a playbook that installs the following packages on EC2 instances:

- nginx
- docker
- python3

Ensure that the packages are installed with their latest available versions.

## Question 2: Nginx Configuration
Add a new task to your Ansible playbook to start and enable the Nginx service on all instances where it is installed. 

You need to copy the file `nginx.conf` (see exercices files) on  `/etc/nginx/nginx.conf` destination and restart the nginx service after that

## Question 3: Deployment of a Docker Application
Write an Ansible role to deploy a Docker application on an EC2 instance. Ensure that the role:

- Downloads the Docker image from Docker Hub (`nginx:latest`).
- Exposes the appropriate port to access the application (`"8080:80"`).
- Starts the Docker container with the necessary options.


These questions cover various aspects of Ansible, including package installation, service configuration, variable usage, Docker application deployment, and EC2 tag management. Make sure to provide functional and correct Ansible playbooks for each question.
