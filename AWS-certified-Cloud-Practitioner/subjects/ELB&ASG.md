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
