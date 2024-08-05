## Intermediate Data Engineer test
### Context
A supermarket stores its transaction data in a relational database for further analysis. The transaction data is uploaded to the system as a CSV file multiple times per day. Each transaction has a unique `id`. As a data engineer, your task is to implement and maintain a pipeline to store the transaction data in the database.

### Elements
For the test, the following elements are provided:
- A sqlite database contains historical transactions data
- A csv file `retail_15_01_2022.csv` contains transaction data of 15/01/2022.
- The tax for all products is 20%.

### Requirements
#### Implement the ETL workflow
Your task is to implement the Python code to store the data from the CSV in the database.

As implementation is only half of the work for a Data Engineer, you're also asked to implement test cases to verify things work as expected. An example of test is provided in the file `test.py`. You need to complete it. Do not hesitate to add more relevant test cases.

#### Explore the data using SQL
After loading the data into the system, the stakeholder wants to extract some information. As a data engineer, you're in charge of the task. Please write the SQL query to answer the following questions:
- What is the number of transactions on 14/01/2022?
- What is the total amount, including tax, of all `SELL` transactions?
- Consider the product `Amazon Echo Dot`:
  - What is the balance (`SELL` - `BUY`) by date?
  - (Optional) What is the cumulated balance (`SELL` - `BUY`) by date?

#### Deployment (optional)
Of course, the workflow cannot run on the developer's machine, we need to deploy it and automate the process. Can you list the necessary elements of such a system ?

### Evaluation
We look into the following elements:
- The correctness of the solution
- The quality of the code
- Usage of good practices and modern Python
- For the deployment part: The way you reason to choose suitable components for the system 