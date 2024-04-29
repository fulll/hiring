# Terraform Test for Solutions Architects

## General Instructions:
Please carefully read each question before starting.
Make sure to answer each question in the provided Terraform configuration file.
Use only the Terraform configuration language for all answers.
Ensure that your Terraform configuration is functional and deploys the expected resources.
You can use online documentation and available resources to assist in problem-solving.

## Question 1: Create S3 Bucket
Use Terraform to create a S3 Bucket in the US East (N. Virginia) region with the following specifications:
 
- AES256 Encryption
- Private ACL 
  
## Question 2: Deployment of an EC2 Instance
Use Terraform to deploy an EC2 instance in the US East (N. Virginia) region with the following specifications:

- Instance type: t3.micro
- Operating system: Ubuntu 20.04 LTS use datasource (see data.tf)
- Name the instance "example_instance".

## Question 3: Security Group Configuration
Modify your Terraform configuration to add a rule to the security group of the EC2 instance deployed in the previous question, allowing SSH access from any IP address.


## Question 4: Integration with Outputs
Modify your Terraform configuration to display the public IP address of the deployed EC2 instance as an output, and the Id of the S3 Bucket as an output. 

These questions cover various aspects of Terraform, including deploying EC2 instances, managing security groups, using variables, deploying S3 resources, and integrating with outputs. Make sure to provide functional and correct Terraform configurations for each question.
