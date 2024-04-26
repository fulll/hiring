# Test on Bash Scripting for Solutions Architects

## General Instructions:
- Please read each question carefully before beginning.
- Ensure to answer each question in the provided script file.
- Use only the Bash scripting language for all answers unless specifically instructed to use another language.
- Ensure your script is functional and produces the expected results.
- You may use online documentation and available resources to assist in problem-solving.


## Question 1 : (Basic Scripts):
Write a Bash script that prompts the user for their first name and displays 'Hello, [first name]'.

## Question 2 :  (Advanced Scripts):
Write a Bash script that traverses a directory and counts the number of files and directories it contains.

## Question 3 : File Manipulation
Write a Bash script named `file_management.sh` that performs the following tasks:

- Create a directory named test_directory.
- Inside this directory, create three files named `file1.txt`, `file2.txt`, and `file3.txt`.
- Display the contents of each created file.
- Copy file in `save` directory and renames all files by adding '`.old`' to their name.
- Delete the test_directory and its contents at the end of the script.

## Question 4 : Text Processing
Write a Bash script named `text_processing.sh` that takes as input a text file named `input.txt` (see above). The script should:

- Count the total number of lines in the file.
- Display the first 5 lines of the file.
- Search for and display all lines containing the word "cloud".

## Question 5 : Variables and Conditions
Write a Bash script named `variable_conditions.sh` that:

- Declares a variable age and assigns a numerical value to it.
- Uses a conditional statement to check if the age is greater than or equal to 18.
- If so, display "You are an adult"; otherwise, display "You are a minor".

## Question 6 : Integration with AWS CLI
Write a Bash script named aws_integration.sh that uses the AWS CLI to:

- List all S3 buckets in your account.
- Display the total number of buckets.
- Display the name of the bucket with the most objects.

## Question 7 : Functions and Loops
Write a Bash script named `functions_loops.sh` that:

- Defines a function called print_numbers that takes a parameter n and displays all numbers from 1 to n.
- Uses a loop to call this function three times with the values 3, 5, and 7.

## Question 8 : String Manipulation
Write a Bash script named `string_manipulation.sh` that takes a string as input and:

- Displays the length of the string.
- Converts all characters to uppercase.
- Removes leading and trailing whitespace from the string.

## Question 9 : Prompt
Write a Bash script named `prompt.sh` that presents the following menu :

Select
1 - Check the existence of a user
2 - Get the UID of a user
q - Quit

Use passwd file for this exercise.
The user should be entered using a function. Their existence should be checked using another function.


------------------------
These questions cover various aspects of Bash scripting, including file manipulation, text processing, variables and conditions, integration with AWS CLI, functions and loops, as well as string manipulation. Make sure to provide accurate and functional answers to each question.

Note that for question 6, you will need to have a correctly configured AWS CLI setup on your system to interact with your AWS account.
