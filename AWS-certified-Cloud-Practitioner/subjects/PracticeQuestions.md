1. Which AWS service would simplify the migration of a database to AWS?

   ```
   A) AWS Storage Gateway.
   B) AWS Database Migration Service. ===> NOTE:Correct Answer.
   C) Amazon EC2.
   D) Amazon Appstream 2.0.
   ```

# **CLOUD COMPUTING SECTION QUESTIONS**

1.  Which are the 3 pricing Fundamentals of the AWS cloud?

    - Compute, Storage and Data transfer out of the AWS cloud.

                NOTE: Compute, Storage, and data transfer out of the AWS cloud are the pricing fundamentals of the AWS Cloud.

2.  Which of the following options is NOT a point of consideration when choosing an AWS Region?

    - Capacity Availability.

                NOTE: Capacity is unlimited in the cloud, you do not need to worry about it. The 4 points of consideration
                    when choosing an AWS Region are: compliance with data governance and legal requirements, proximity to customers, available services and features within a Region and pricing.

3.  Which of the following is NOT an advantage of cloud computing?

    - Train your employes Less.

                NOTE: You must train your employees more so they can use the cloud effectively.

4.  AWS Regions are composed of ?

    - Two or more availability zones.

                NOTE: AWS regions consist of multiple, isolated, and physically separate availability zones within a geographic area.

5.  You only want to manage Applications and Data which type of cloud computing model should you use?

    - Platform as a service. (PasS)

                NOTE: //In the platform as a service model, You only manage the data and the applications.

6.  What is the pricing of cloud computing?

    - Pay as you go pricing.

                NOTE: in cloud computing you are only charged for what you use.

7.  Which of the following is NOT one of the five characteristics of cloud computing ?

    - Dedicated support agent to help you deploy applications.

                NOTE: This is not one of the five characteristics of cloud computing. in the cloud,everything is self-service.

8.  A company would like to benefit from the advantages of the public Cloud but would like to keep sensitive assets in its own infrastructure. Which deployment model should the company use?

    - Hibryd Cloud.

                NOTE: Using a  hybrid cloud deployment model allows you to benefit from the flexibility, scalability and on demand storage access while keeping security and performance of your own infracstructure.

9.  What is NOT authorized to do on AWS according to the AWS acceptable use policy?

    - Run analitys on stolen content.

                NOTE: You can run analytics in AWS, but you cannot run analytics on fraudulent content. Refer to the AWS acceptable use policy to see what is not authorized to do on AWS.

10. What defines the distribution of responsabilities for security in the AWS Cloud?

    - The shared Responsibility Model.

                NOTE: The shared responsability model defines who is responsible for what in the AWS cloud.

11. Which of the following is the definition of cloud computing?

    - On demand availability of computer system resources, specially data storage (cloud storage) and computer Power, withour direct active management by the user.

12. Which Global Infrastructure identity is composed of one or more discrete data centers with redundant power, networking and connectivity, and are used to deploy infrastructure?

    - Availability Zones

                NOTE: This is the definition of Availability Zones.

13. Which of the following services has a global scope?

    - IAM

                NOTE: IAM is a global service (encompasses all regions).

# **IAM SECTION QUESTIONS**

1.  What is a proper definition of IAM Roles?

    - An IAM entity that defines a set of permissions for making AWS service requests, that will be used by AWS services. -(Correct one)

                  NOTE: Some AWS service will need to perform actions on your behalf, to do so , you assign permissions to AWS services with IAM ROles.

    - IAM Users in multiple Groups
    - A password policy
    - Permisssions assigned to Users to perform actions

2.  Which of the following is an IAM Security Tool?

    - IAM Credentials Report. - (Correct One)

                    NOTE: IAM credentials report list all your account's users an the status of their various credentials. The other IAM Security Tool is IAM Access Advisor, It shows the service permissions granted to a user and when those services were last accessed.

    - IAM Root Account Manager.
    - IAM Services Report.
    - IAM Security Advisor.

3.  Which asnwer is INCORRECT regarding IAM Users?

    - IAM Users access AWS with the root account credentials. -Correct one.

                    NOTE: IAM Users access AWS Using a username and a password.

    - IAM Users can belong to multiple groups.
    - IAM Users don't have to belong to a group.
    - IAM Users can have policies assigned to them.

4.  Which of the following is an IAM best practice ?

    - Don't use the root user account. -Correct One.

                    NOTE: You only want to use the root account to create your first IAM User, and ofr a few account and service management tasks. For every day and administration tasks, use an IAM user with permissions.

    - Create Several users for a physical person.
    - Share credentials to a colleague can perform a task for you.
    - Do not enable MFA for easier access.

5.  What are IAM Policies?

    - JSON documents to define Users, Groups or Roles' Permissions. (Correct one).

                    NOTE: An IAM policy is an entity that, when attached to an identity or resource, defines their permissions.

    - AWS services perfomable actions.
    - Rules to set up a password for IAM Users.

6.  Under the shared responsibility model, what is the customer responsible for in IAM?

    - Assignning users proper IAM Policies. - Correct one.

                    NOTE: Customers are responsible for defining and using IAM policies.

    - Infrastructure security.
    - Compliance Validation.
    - Configuration and Vulnerability analysis.

7.  Which of the following statements is TRUE?

    - The AWS CLI can interact with AWS using commands in your command-line shell, while the AWS SDK can interact with AWS programmatically. -Correct one.

    - The AWS SDK can interact with AWS using commands in your command-line shell, while the AWS CLI can interact with AWS programmatically.

8.  Which principle should you apply regarding IAM Permissions?

    - Grant Least Privilege. - Correct One.

                     NOTE: That's right, Don't give more permissions than the user needs.

    - Grant Most Privilege.
    - Grant Permissions if your employee asks you to.
    - Restrict root account permissions.

9.  What should you do to increase your root account security?

    - Enable Multi-Factor Authentication (MFA). -Correct One.

                    NOTE: You want to enable MFA In order to add a layer of security, so even if your password is stolen, lost or hacked your account is not compromised.

    - Remove Permissions from the root account.
    - Use AWS only through the Command Line Interface (CLI).

# **EC2 SECTION QUESTION**

1.  Which EC2 Purchasing Option can provide the biggest discount, but is not suitable for critical jobs or databases??

    - Scheduled Instances
    - Convertible Instances
    - Dedicated Hosts
    - Spot Instances - (Correct One)

                     NOTE: Spot instances are good for short workloads, but are less reliable.

2.  Which network security tool can use to control traffic in and out of EC2 Instances?

    - Network Access Control List (Correct one)

                    NOTE: Security groups operate at instance level and can control traffic.

    - Identify and Management Access (IAM)
    - GuardDuty
    - Security Groups

3.  Under the Shared Responsibility Model, Who is responsible for operating-system patches and updates on EC2 Instances?

    -The customer (Correct one).

                    NOTE: The customer is responsible for operating-system patches and updates on EC2 Instancesm as well as data security on the instances, Security Groups rules, etc.

    - AWS.
    - Both AWS and the customer.

4.  How long can you reserve an EC2 Reserved Instance?

    - 1 or 3 years (Correct one)

                    NOTE: 1 year or 3 years terms are available for EC2, Reserved Instances.

    - 2 or 4 years .
    - 6 months or 1 year .
    - Anytime between 1 and 3 years.

5.  A company would like to deploy a high-performance computing (HPC) application on EC2. Which EC2 instance type should it choose?

    - Compute Optimized (Correct one).

                    NOTE: Compute Optimized EC2 instances are great for compute- intensive workloads requiring high performance processors, such as batch processing, media transcoding, high performance web servers, high performance computing, scientific modeling & machine learning, and dedicated gaming servers.

    - Storage Optimized
    - Memory Optimized
    - General Purpose

6.  Which of the following is NOT an EC2 Instance Purchasing Option?

    - Spot Instances
    - Reserved Intances
    - On-demand Instances
    - Connect Instances

7.  Which of the following is NOT an EC2 Instance Purchasing Option?

    - Spot Instances.
    - Reserved Instances.
    - On-demand Instances.
    - Connect Instances. (Correct one)

                    NOTE: This EC2 Instance purchasing option does not exist.

8.  Which EC2 Purchasing Option should you use for an application you plan on running on a server continuosly for 1 year?

    - Reserved Instances (Correct One)

                    NOTE: Reserved Instances are good for long workloads. You can reserve instances for 1 to 3 years.

    - Spot Instances
    - On-demand Instances
    - Convertible Instances

9.
