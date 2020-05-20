# Question 1

Suppose I have two entities in my DB: Objects, and Tags. Suppose also that I have a mapping table
ObjectTag which represents a many-to-many relationship between Objects and Tags. Now I wish to
find, given a finite input list of Tag ids, the set of Objects which map to (a) any of the input tags ,
and (b) all of the input tags. Can you do (a) and (b) with one query each?

# Question 2

In what situations would you use a View?

# Question 3

What's the difference between a LEFT OUTER JOIN, INNER JOIN and a RIGHT OUTER JOIN?

# Question 4

You have two tables:
A

## id|

1|
1|
1|
1|
1|

B

## id|

1|
1|

What will be the output of SQL mentioned below:
Select count(\*) from A INNER 1. JOIN B On A.id = B.Id

2. Select count(\*) from A LEFT OUTER JOIN B On A.id = B.Id
3. Select count(\*) from A RIGHT OUTER JOIN B On A.id = B.Id
4. Select count(\*) from A FULL JOIN B On A.id = B.Id

# Question 5

Suppose my enormous table X has a uniquely indexed string field "name". Now I want to find all records in X whose
name field starts with the prefix 'foo'. What's the fastest query possible?

# Question 6

Highschooler ( ID, name, grade ) English: There is a high school student with unique ID and a given first
name in a certain grade.
ID | name | grade
------ | -------- | --------
1510 | Jordan | 9
1689 | Gabriel | 9
1381 | Tiffany | 9
1709 | Cassandra | 9
1101 | Haley | 10
1782 | Andrew | 10
1468 | Kris | 10
1641 | Brittany | 10
1247 | Alexis | 11
1316 | Austin | 11
1911 | Gabriel | 11
1501 | Jessica | 11
1304 | Jordan | 12
1025 | John | 12
1934 | Kyle | 12
1661| Logan | 12

Friend ( ID1, ID2 ) English: The student with ID1 is friends with the student with ID2. Friendship is mutual, so
if (123, 456) is in the Friend table, so is (456, 123).

| ID1  | ID2  |
| ---- | ---- |
| 1510 | 1381 |
| 1510 | 1689 |
| 1689 | 1709 |
| 1381 | 1247 |
| 1709 | 1247 |
| 1689 | 1782 |
| 1782 | 1468 |
| 1782 | 1316 |
| 1782 | 1304 |
| 1468 | 1101 |
| 1468 | 1641 |
| 1101 | 1641 |
| 1247 | 1911 |
| 1247 | 1501 |
| 1911 | 1501 |
| 1501 | 1934 |
| 1316 | 1934 |
| 1934 | 1304 |
| 1304 | 1661 |
| 1661 | 1025 |
| 1381 | 1510 |
| 1689 | 1510 |
| 1709 | 1689 |
| 1247 | 1381 |
| 1247 | 1709 |
| 1782 | 1689 |
| 1468 | 1782 |
| 1316 | 1782 |
| 1304 | 1782 |
| 1101 | 1468 |
| 1641 | 1468 |
| 1641 | 1101 |
| 1911 | 1247 |
| 1501 | 1247 |
| 1501 | 1911 |
| 1934 | 1501 |
| 1934 | 1316 |
| 1304 | 1934 |
| 1661 | 1304 |
| 1025 | 1661 |

Likes ( ID1, ID2 ) English: The student with ID1 likes the student with ID2. Liking someone is not necessarily
mutual, so if (123, 456) is in the Likes table, there is no guarantee that (456, 123) is also present I
D1 | ID2
------ | -----
1689 | 1709
1709 | 1689
1782 | 1709
1911 | 1247
1247 | 1468
1641 | 1468
1316 | 1304
1501 | 1934
1934 | 1501
1025 | 1101

-- Question 1:
-- For every situation where student A likes student B, but student B likes a different student C, return the
names -- and grades of A, B, and C.

-- Question 2:
-- Find those students for whom all of their friends are in different grades from themselves. Return the
students' names -- and grades.

-- Question 3:
-- What is the average number of friends per student? (Your result should be just one number.)

-- Question 4:
-- Find the number of students who are either friends with Cassandra or are friends of friends -- of
Cassandra. Do not count Cassandra, even though technically she is a friend of a friend.

-- Question 5:
-- Find the name and grade of the student(s) with the greatest number of friends.

# Question 7

Table Movie ( mID, title, year, director ) Info - There is a movie with ID number mID, a title, a release year, and
a director.
Reviewer ( rID, name ) Info- The reviewer with ID number rID has a certain name.
Rating ( rID, mID, stars, ratingDate ) Info- The reviewer rID gave the movie mID a number of stars rating (1-5)
on a certain ratingDate.

-- Question 1 – For all cases where the same reviewer rated the same movie
twice and gave it a higher rating the second time, return the reviewer's name and the title of the movie

-- Question 2 – For each movie that has at least one rating, find the
highest number of stars that movie received. Return the movie title and number of stars. Sort by movie title.

-- Question 3 - Some reviewers didn't provide a date with their rating. Find the names of all
reviewers who have ratings with a NULL value for the date.
