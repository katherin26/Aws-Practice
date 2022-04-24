# **ELASTIC LOAD BALANCING & AUTO SCALING GROUPS SECTION**

**SCALABILITY & HIGH AVAILABILITY**

1. Scalability means that an application / system can handle greater loads by adapting.
2. There are two kids of scalability :

   - Vertical Scalability.
   - Horizontal Scalability (= Elasticity).

3. Scalability is linked but different to High Availability.

4. Let's deep dive into the distinction, using a call center as an example.

**VERTICAL SCALABILITY**

1. Vertical Scalability means increasing the size of the instance.

NOTE: Example : for our call center, say we have a junior operator and say we were able to upgrade that operator we would get a
senior operator.
and for example this senior operator can handle a lot more calls than the junior operator, because it's more experienced.
So this would be what vertical scalability looks like in a call center.

2. For example, your application runs on a t2.micro.
3. Scaling that application vertically means running it on a t2.large.
4. Vertical scalability is very common for non distributed systems, sucs as a database.
5. There's usually a limit to how much you can vertically scale (hardware limit).

**HORIZONTAL SCALABILITY**

1. Horizontal Scalability means increasing the number of instances / systems for your application.
2. Horizontal scaling implies distributed systems.
3. THis is very common for web applications / modern applications.
4. It's easy to horizontally scale thanks the cloud offerings such as Amazon EC2.

NOTE: Example: we have an operator and we want to do horizontal scalability for that operator that means we will add another operator and if we need to handle more calls. we will add another operator and so on.
So maybe we can scale horizontally from one operator ALL THE way six operators.
So when you have horizontal scaling that implies as you can see on the right hand side, that you need to have a distributed system.
And for a call center, that makes sense.

(NOTE:So if you have a web application or a modern application, You usually design it with horizontal scalability in mind.)
