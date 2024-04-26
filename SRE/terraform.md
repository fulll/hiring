# Terraform Test for Solutions Architects

## General Instructions:
Please carefully read each question before starting.
Make sure to answer each question in the provided Terraform configuration file.
Use only the Terraform configuration language for all answers.
Ensure that your Terraform configuration is functional and deploys the expected resources.
You can use online documentation and available resources to assist in problem-solving.

## Question 1: Deployment of an EC2 Instance
Use Terraform to deploy an EC2 instance in the US East (N. Virginia) region with the following specifications:

Instance type: t2.micro
Operating system: Ubuntu 20.04 LTS
Name the instance "example_instance".

## Question 2: Security Group Configuration
Modify your Terraform configuration to add a rule to the security group of the EC2 instance deployed in the previous question, allowing SSH access from any IP address.

## Question 3: Variable Management
Refactor your Terraform configuration to use variables for the following information:

EC2 instance name
Instance type
Operating system
SSH port

## Question 4: Deployment of an S3 Bucket
Add a new resource to your Terraform configuration to deploy an S3 bucket named "example_bucket". Ensure the bucket is in the US East (N. Virginia) region.

## Question 5: Integration with Outputs
Modify your Terraform configuration to display the public IP address of the deployed EC2 instance as an output.

These questions cover various aspects of Terraform, including deploying EC2 instances, managing security groups, using variables, deploying S3 resources, and integrating with outputs. Make sure to provide functional and correct Terraform configurations for each question.
