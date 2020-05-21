# Technical challenges for Software Engineer position

> Please create a Git Repository for this challenge and commit all answers to it. Please keep this organised and commit with clear messages. Share the link with us once complete.

## Basics

> These questions have multiple correct answers. They are meant to test your knowledge.

1. What is "N + 1" problem in REST APIs and how would you solve it?
    This problem occurs when the code needs to load the children of a parent-child relationship (the “many” in the “one-to-many”). 
    In case of web APIs, N+1 problem is a situation where client applications are required to call the server N+1 times to fetch 1 collection resource + N client resources, 
    mostly because of collection resource not had enough information about child resources to build its user interface completely.
    Example a book collection also need the references of the authors of the book.As authors are different collection if we fire one more request to the server 
    for the author details it would lead to N requests for the collection of the books.
    Thus to solve this problem we should return the collection as in one request with all the objects.
    Technically with GraphQL we can solve this problem using DataLoader object.
    DataLoader is a generic utility to be used as part of your application's data fetching layer to provide a consistent 
    API over various backends and reduce requests to those backends via batching and caching.
2. When do you stop writing unit tests?
    If you are using TDD, then you stop unit testing when all the tests in the test list have succeeded.
    Also When the code coverage is 100% we stop writing the unit tests.
3. Why would one use monorepos?
    One should use monorepos for the following advantages:
        1. Code Reuesabillity
        2. Multiple third party dependency management.
        3. Large Scale code refactoring
        4. Collabration across teams.
4. What is Liskov substitution principle?
    If S is a subtype of T, then any term of type S can be safely used in a context where a term of type T is expected.
    Subtypes must be substitutable for their base types.
    Example Problem Statement :
            public class Bird{
                public void fly(){}
            }
            public class Duck extends Bird{}
            The duck can fly because of it is a bird, But what about this:

            public class Ostrich extends Bird{}
            Ostrich is a bird, But it can't fly, Ostrich class is a subtype of class Bird, But it can't use the fly method, that means that we are breaking LSP principle.

            Solution :

            public class Bird{
            }
            public class FlyingBirds extends Bird{
                public void fly(){}
            }
            public class Duck extends FlyingBirds{}
            public class Ostrich extends Bird{} 

5. How do you avoid race conditions?

    To avoid race condition we need Mutual Exclusion. Mutual Exclusion is someway of making sure
    that if one process is using a shared variable or file, the other processes will be excluded from doing the
    same things.

    That part of the program where the shared memory is accessed is called the critical region or critical
    section. If we could arrange matters such that no two processes were ever in their critical regions at the
    same time, we could avoid race conditions. 

    1. No two processes may be simultaneously inside their critical regions. (Mutual Exclusion)
    2. No assumptions may be made about speeds or the number of CPUs.
    3. No process running outside its critical region may block other processes.
    4. No process should have to wait forever to enter its critical region.
    6. What is the first thing you do when you encounter a bug?




## "Why would anyone do drugs when they can just mow a lawn?"

> For this challenge, user authentication is **not** required. There is no time limit. Assume that the frontend is handled by another developer.

- **Language**: _JavaScript_ (TypeScript is preferrable, but not required)
- **Framework**: _NestJS_
- **Database**: _MongoDB_

Hank likes to mow the lawn. Back in the day, he would offer his services to his neighbors for a fee. Now, he wishes to start a company around this.
As his friend, he asked if you can help him digitize the business. Users would register on the website, then book visits from their dashboard. 
One of the requirements he specified is to have scalable pricing; 
To mow 1 square metre, the client will have to pay £1. 
If the area is bigger than 15 square metres, a discount of 10% will be applied. 
If the area is bigger than 25 square metres, a discount of 15% will be applied. 
To acquire new clients, Billy wants to have a coupon system in place as well.

## Future of lawn mowing endeavours

## Create an appointment

localhost:3000/appointment

This will create a new appointment. Due to time constraints validations not handled like dupl;icate apponitment or overlapping appointment.

POST /appointment HTTP/1.1
Host: localhost:3000
Content-Type: application/json

{
	"user_id":1,
	"appointment_name":"azhar's first appointment",
	"start_date_time":"21-05-2020 13:00:00",
	"end_date_time":"21-05-2020 15:00:00",
	"mow_size":"18"
}

## GET ALL APPOINTMENTS
GET /appointment HTTP/1.1
Host: localhost:3000

This request will return all the appointments.

## GET ALL APPOINTMENTS with appointment ID
GET /appointment/5ec0e72a9898f8a770ae15ed HTTP/1.1
Host: localhost:3000

The above request will take an id as params and return only the appointment of the particular appointment :_id


## GET SCALABLE PRICING AS PER THE INPUT SIZE
localhost:3000/pricing/52

The above request will take an mow_size as params and return the price according to the scalable pricing as specified in the above requirements
I have used the params get technique

## Regster a coupon
POST /coupon/registerCoupon HTTP/1.1
Host: localhost:3000
Content-Type: application/json

{
	"coupon_code":"MAY25",
	"discount":58,
	"is_active":true
}

The above request will take the coupon code,discount and is_active as the parameter and register the coupon in the database.
This api is generally used by the admin team.
We can have an put request as well to make is_active flag false so when the offer is no longer active we can disallow the discounts.

## Apply a coupon input coupon code and the total price after scalable price API

localhost:3000/coupon/applyCoupon/:couponcode/:totalPrice
Example 
GET /coupon/applyCoupon/MAY25/355 HTTP/1.1
Host: localhost:3000

The above api takes the coupon code and price as an input and returns the total amount after applying the coupon.
The price to be passed by the front end developer here should be the price after the calling the scalable pricing  api disscussed above.


## Option questions answer
> This section has no correct answers. Albeit optional, your answers will help us understand your thinking process.

1. What other features would you like to add?
    There are many features that can be added.
    1. Validation on the total size of the lawn. This also includes the number of users mowing at the same date and time.
    2. Calender view of all the appointments of the user.
    3. Notifications if the lawn is free.
    4. User Managemend

2. How would you handle user authentication?
    As per the official website of the Nest.js they have given a detail of how we can implement the passport authentication.
    I would also recommend the same as it is most user friendly.
3. How would you deploy the solution in an enterprise environment?
    To deploy the solution in an enterpise environment I would recommend the most trusted cloud providers like 
        1. Microsoft Azure
        2. AWS
        3. .. etc.