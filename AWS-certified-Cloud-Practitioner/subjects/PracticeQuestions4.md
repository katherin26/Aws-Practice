# **VPC & NETWORKING QUIZ**

1. Your private subnets need to connect to the internet while still remaining private. Which AWS-managed VPC component allows you to do this?

- NAT Instances
- Internet Gateway
- Security Groups
- NAT Gateways ===> Correct One

        NOTE: NAT Gateways allow your instances in your private subnets to access the internet while remaining private, and are managed by AWS.

2. A public subnet is accessible from the Internet while a private subnet is not accessible from the internet.

- Yes ===> Correct One

        NOTE: A public subnet is accessible from the Internet while a private subnet is not accessible from the Internet.

- No, all subnets are accessible from the Internet.
- No, all subnets are not accessible from the Intenet.

3. Which type of firewall has both ALLOW and DENY rules and operates at the subnet level?

- Network Access Control List(NACL) ===> Correct One

        NOTE: A network access control list (NACL) is an optional layer of security for your VPC that acts as a firewall for controlling traffic in and out of one or more subnets. They have both ALLOW and DENY rules.

- Web Application Firewall (WAF)
- Security Groups
- GuardDuty

4. You would like to connect hundreds of VPCs and your on-premises data centers together. Which AWS service allows you to do link all these together efficiently?

- Site to Site VPN
- Transit Gateway ===> Correct One

        NOTE: Transit Gateway connects thousands of VPC and on premises networks together in a single gateway.

- Internet Gateway
- Direct Connect

5. A company needs two VPCs to communicate with each other. What can they use?

- VPC Endpoints
- AWS Direct Connect
- Internet Gateway
- VPC Peering ===> Correct One

        NOTE: VPC Peering connection is a networking connection between two VPCs using AWS' network.

6. You need a logically isolated section of AWS, where you can launch AWS resources in a private network that you define. What should you use ?

- Subnets
- Availability Zones
- A VPC ===> Correct One

        NOTE: A virtual

- NAT Instances

7. A company needs to have a private, secure, and fast connection between its on-premises data centers and the AWS Cloud. Which connection should they used?

- AWS Connect
- Site to Site VPN
- VPC Peering
- AWS Direct Connect ===> Correct ONe

        NOTE: AWS Direct Connect is a cloud service solution that makes it wasy to establish a dedicated private network connection from your premises to AWS.

8. An internet gateway is a horizontally scaled, redundant and higly available VPC COmponent that allows communication between your VPC and the internet.

- NAT Gateway
- NAT Instances
- Network ACL
- Internet Gateway

        NOTE: An Internet gateway is a horizontally scaled, redundant, and highly available VPC component that allows communication between your VPC and the internet.
