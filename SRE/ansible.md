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

## Question 3: Variable Management
Refactor your Ansible playbook to use variables for package names and services to install and configure.

## Question 4: Deployment of a Docker Application
Write an Ansible role to deploy a Docker application on an EC2 instance. Ensure that the role:

- Downloads the Docker image from Docker Hub.
- Exposes the appropriate port to access the application.
- Starts the Docker container with the necessary options.

## Question 5: EC2 Tag Management
Add a new task to your Ansible playbook to add tags to deployed EC2 instances with specific values.

These questions cover various aspects of Ansible, including package installation, service configuration, variable usage, Docker application deployment, and EC2 tag management. Make sure to provide functional and correct Ansible playbooks for each question.
