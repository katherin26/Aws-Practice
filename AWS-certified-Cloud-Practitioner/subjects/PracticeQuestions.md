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

# **EC2 INSTANCE STORAGE QUESTIONS**

1. Which EC2 Storage would you use to create a shared network file system for your EC2 Isntances?

   - EBS Volume.
   - EC2 Instance Store.
   - EBS Snapshots
   - EFS (Amazon EFS is a fully managed service that makes it easy to set up, scale, and cost-optimize file storage in the
     amazon cloud.) ===> NOTE: Correct one

2. Which service can be used to automate image management processes?

- AMI
- EC2 Image Builder (EC2 Image Builder is an automated pipeline for the creation, maintenance, validation, sharing, and deployment of linux or Windows images for use on AWS and on-premises.) ===> Correct one
- EBS Snapshots
- IAM

3. Which of the following is a fully managed native Microsoft Windows file system?

- EFS
- FSx (Amazon FSx makes it easy and cost effective to launch and run popular file systems that are fully managed by AWS. It comes in two offerings: FSx for Windows File Server ( used for business applications), and FSx for Lustre (used for high-performance computing.)) ===> NOTE: Correct one.
- EBS

4. You cannot use AMIs to add your IP addresses. IP addresses are added to an instance as you create it.

- Add your own software license.
- Add your own configuration.
- Add your own operating-system.
- Add your own IP addresses . ===> Correct one.

           NOTE: You cannot use AMIs to add your IP addresses. IP addresses are added to an instance as you create it.

5. EBS Volumes CANNOT be attached to multiple EC2 instances at a time.

- True ===> Correct one.

           NOTE: EBS Volumes can be attached to only one EC2 instance at a time, but EC2 Instances can have multiple EBS Volumes attached to them.

- False

6. An EBS Volume is a network drive you can attach to your instances while they run, so your instances' data persist even after their termination.

- True ===> Correct one.

           NOTE: (EBS Volumes allows instances' data to persist even after their termination).

- False

7. Which statement is CORRECT regarding EC2 Instance Store??

- It is not good to use as a disk to cache content.
- It has a better I/O performance, but the data is lost if the EC2 instance is terminated. ===> Correct one.

            NOTE: It has a better I/O Performance. But the data is lost if the  EC2  Instance is terminated.

- Your data is always safe with EC2 instance store.

8. What is an EBS Snapshot?

- The operating system on an EC2 Instance.
- A backup of your EBS Volume at a point in time. ==> Correct One

            NOTE: EBS Snapshots are used to backup data on your EBS Volumes at a point in time.

- The amount of CPU and RAM of an EC2 Instance.

9. Where can you find a third party's AMI so you can use it to launch your EC2 Instance?

- Public AMIs
- My own AMIs
- AWS Marketplace AMIs ===> Correct one

            NOTE: You can use AWS MarketPlace AMIs to use someone else's AMI.

10. What is an EBS Volume tied to ?

- A region.
- A data center.
- An edge location.
- An availability zone. ==> Correct one .

            NOTE: EBS Volumes are tied to only one availability zone.

# **ELB & ASG QUESTIONS**

1. What is the main purpose of High Availability in the cloud?

- Increase scalability.
- Application Thriving even in case of a disaster. ==> Correct one.

            NOTE: High availability means applications running at least in two AZs to survive a data center loss.

- Access on computers and smartphones.
- Handle greater loads by launching EC2 instances based on the demand.

2. Which AWS offered Load Balancer should you use to handle hundreds of thounsands of connections with low latency?

- Application Load Balancer.
- Network Load Balancer. ==> Correct one.

            NOTE: a network Load Balancer can handle millions of request per second with low-latency. It operates at Layer 4,
            and is best suited for load balancing TCP, UDP, and TLS traffic ultra high performance.

- Elastic Load Balancer

3. Changing an EC2 instance type from a t3a.medium to a t3a.2Xlarge is an example of?

- Horizontal scaling.
- High Availability.
- Agility.
- Vertical Scaling ===> Correct One.

            NOTE: Vertical scaling means increasing the size of the instance. Changing from t3a.2xlarge is an example of size increase.

4. What can you use to handle quickly and automatically the changing load on your websites and applications by adding compute resources?

- An Elastic Load Balancer.
- A bigger instance type.
- An auto scaling group. ==> Correct one

            NOTE: An auto scaling group (ASG) can automatically and quickly scale in and scale out to match the changing load on your applications and websites.

- Health Checks on your EC2 Instances.

5. Which of the following statements is INCORRECT regarding Auto Scalling Groups??

- Replace unhealthy instances.
- Are cost effective by running at optimal capacity.
- Automatically register new instances to a load balancer.
- Automatically changing the EC2 Instances types. ==> Correct one

            NOTE: Auto scaling groups can add or remove instances, but from the same type. they cannot change the EC2 instances types on the fly.

6. Which Load Balancer is best suited for HTTP/HTTPS load balancing traffic?

- Network Load Balancer.
- Classic Load Balancer.
- Elastic Load Balancer.
- Application Load Balancer. ==> Correct One.

            NOTE: Application Load Balancers are used for HTTP and HTTPS load balancing. They are the best suited for this kind of traffic.

7. Which of the following is NOT an auto scaling strategy??

- Manual Scaling.
- Dynamic Scaling.
- Active Scaling. ==> Correct One.

            NOTE: This is not a scaling strategy. Auto scaling strategys include :

                    - Manual Scaling
                    - Dynamic Scaling (simple/step scaling, target tracking scaling, scheduled scaling),
                    - Predictive Scaling

8. Which AWS service offers easy horizontal scaling of compute capacity?

- EBS
- AMI
- IAM
- ASG ===> Correct one.

            NOTE: Auto Scaling Groups (ASG) offers the capacity to scale out and scale in by adding or removing instances based on demand.

9. Which of the following statements is NOT a feature of LOAD BALANCERS?

- Do regular health checks to your instances.
- Spread load across multiple downstream instances.
- Handle failures of downstream instances.
- Back-end autoscaling. ==> Correct one

            NOTE: Load balancers cannot help with backend autoscaling . You should use Auto Scaling Groups.

# **S3 QUESTIONS**

1. Which S3 Storage Class is the msot cost-effective for archiving data with no retrieval time requirement?

- Amazon Glacier.
- Amazon Glacier Deep Archive. ===> Correct One

            NOTE: Amazon Glacier Deep Archive is the most cost-effective option if you want to archive data and do not have a retrieval time requirement. You can retrieve data in 12 or 48 hours.

- Amazon S3 Standard-Infrequent Access.
- Amazon S3 Intelligent Tiering.

2. Which S3 Feature should you use if you want to make sure that a policy will no longer be changed??

- S3 Lifecycle Rules.
- S3 Object Lock.
- S3 Standard - Infrequent Access (IA).
- S3 Glacier Vault Lock. ==> Correct One.

            NOTE: S3 Glacier Vault Lock allows you to easily deploy and enforce compliance controls for individual S3 Glacier vaults with a vault lock policy. You can specify controls such as "Write once read many" (WORM) in a vault lock policy and lock the policy from future edits. Once locked, the policy can no longer be changed.

3. Which hybrid AWS Service is used to allow on-premises servers to seamlessly use the AWS Cloud at the storage layer??

- Elastic Block Store.
- Snowball.
- S3.
- Storage Gateway ===> Correct One.

            NOTE: AWS storage gateway is a hybrid cloud storage service that gives you on-premises access to virtually unlimited cloud storage.

4. Which of the following services is a petabyte-scale data moving service (as a fleet) in or out of AWS with computing capabilities??

- Snowcone.
- Snowball Edge. ===> Correct One.

            NOTE: Snowball Edge is best-suited to move petabytes of data and offers computing capabilities. Be careful, it's recommended to use a fleet of Snowballs to move less than 10 PBs of data. Over this quantity, it's better-suited to use Snowmobile.

- Snowmobile.

5. Which of the following is an exabytes-scale data moving service in our out of AWS???

- Snowcone.
- Snowball Edge.
- Snowmobile. ===> Correct One.

            NOTE: Snowmobile is used to move exabytes of data in or out of AWS (1EB=1,000 PBs=1,000,000 TBs).

6. What are Objects NOT composed of???

- Key.
- Value.
- Access Keys. ==> Correct One.

            NOTE: Access Keys are used to sign programmatic requests to the AWS CLI or AWS API.

- Metadata.

7. Where are objects stored in Amazon S3??

- Folders.
- Buckets. ===> Correct One.

            NOTE: Buckets store objects in Amazon S3.

- Files.
- Bin.

8. A research team deployed in a location with low-internet connection would like to move 5 TBs of data to the CLoud. Which service can it use ??

- Storage Gateway.
- Snowball Edge.
- Snowcone. ===> Correct One.

            NOTE: AWS Snowcone is a small, portable, rugged and secure edge computing and data transfer device. It provides up to 8 TB of usable storage.

- OpsHub.

9. What can you use to define actions to move S3 Objects between different storage Classes??

- Scaling Policy.
- Bucket Policies.
- Lifecycle Rules. ==> Correct One.

            NOTE: Lifecycle Rules can be used to define when S3 objects should be transitioned to another storage class or when objects should be deleted after some time.

- Replication.

10. A non-profit organization needs to regurlaly transfer petabytes of data to the cloud and to have access to local computing capacity. which service can help with this task??

- Snowball Edge - storage optimized. ===> Correct One.

            NOTE: Snowball  Edge Storage Optimized devices are well suited for large-scale data migrations and recurring transfer workflows, as well as local computing with higher capacity needs.

11. Which S3 Storage Class is suitable for less frequently accessed data, but with rapid access when needed, while keeping a high durability and allowing an Availability Zone Failure.

- Amazon S3 Standard - General Purpose.
- Amazon Glacier.
- Amazon S3 One Zone-Infrequent Access.
- Amazon S3 Standard-Infrequent Access. ===> Correct One.

            NOTE: Amazon S3 Standard Infrequent Access Allow you to store infrequently accessed data, with rapid access when needed. has a high durability and is sored in several Availability zones to avoid data loss in case of a disaster. It can be used to store data for disaster recovery, backups etc...

# **DATABASES**

1. You want to create a decentralized blockchain on AWS. Which AWS service would you use?

- DocumentDB.
- QLDB.
- Managed Blockchain. ===> Correct One.

            NOTE: Amazon Managed Blockchain is a fully managed service that makes it easy to create and manage scalable blockchain networks using the popular open source frameworks Hyperledger Fabric and Ethereum. It allows multiple parties to execute transactions without the need of a trusted, central authority.

- QuickSight.

2. Which AWS database is a data warehouse?

- DynamoDB.
- ElastiCache.
- Redshift. ===> Correct One.

            NOTE: Amazon Redshift is a fully managed, petabyte-scale data warehouse service in the cloud.

- RDS.

3. Which AWS service is always serverless and has SQL capabilities?

- RDS.
- Aurora.
- DynamoDB.
- Athena. ===> Correct One.

            NOTE: Amazon Athena is an interactive query service that makes it easy to analize data in Amazon S3 using standard SQL. Athena is serverless, so there is no infrastructure to manage, and you pay only for the queries that you run.

4. You would like to use a serverless service to prepare data so it can be loaded for analytics. Which service would you use?

- Athena.
- RDS.
- Glue. ===> Correct One.

            NOTE: AWS Glue is a fully managed extract, transform, and load(ETL) service that makes it easy for customers to prepare and load their data for analytics.

- ElastiCache.

5. Which relational database is a proprietary techology from AWS and is cloud-optimized?

- DynamoDB.
- Oracle.
- Athena.
- Aurora. ===> Correct One.

            NOTE: Amazon Aurora is a MySQL and PostgreSQL-compatible relational database built for the cloud, that combines the performance and availability of traditional enterprise databases with the simplicity and cost-effectiveness of open source databases. It is a proprietary technology from AWS.

6. You would like to migrate databases to AWS, while still being able to use the database during the migration. What service allows you to do this?

- Elastic MapReduce(EMR).
- Database Migration Service(DMS). ===> Correct one.

            NOTE: AWS Database Migration Service helps you migrate databases to AWS quickly and securely. The source database remains fully operational during the migration, minimizing downtime to applications that rely on the database.

- AWS Storage Gateway.
- Snowball.

7. How can you create Hadoop clusters to analyze and process a vast amount of data?

- EMR. ===> Correct One.

            NOTE: Amazon EMR is a web service that enables businesses, researchers, data analysts, and developers to easily and cost-effectively process vast amounts of data. EMR helps creating Hadoop clusters (Big Data) to analyze and process vast amount of data.

- Athena.
- EC2 Instances.
- Redshift.

8. Which in-memory AWS database can you use to reduce the load off databases and has high performance, low latency?

- Redshift.
- ElastiCache. ===> Correct One.

            NOTE: Amazon ElastiCache is a web service that makes it easy to deploy and run Memcached or REdis protocol-compliant server nodes in the cloud. ElastiCache caches are in-memory databases with high performance, low latency. They help reduce load off databases for read intensive workloads.

- RDS.
- DynamoDB.

9. What is the name of a central repository to store structural and operational metadata for data assets in AWS Glue?

- Glue Data Table.
- Glue Data Dictionary.
- Gle Data Catalog. ===> Correct One.

            NOTE: The AWS Glue Data Catalog is a central repository to store structural and operational metadata for all your data assets. For a given data set, you can store its table definition, physical location, add business relevant attributes, as well as tracj how this data has changed over time.

10. Which of the following databases is a managed service with SQL capability suited for Online Transaction processing(OLTP)?

- DynamoDB.
- Redhshift.
- RDS ===> Correct One.
- MySQL on EC2.

            NOTE: Amazon Relational Database Service (Amazon RDS) is a SQL managed service that makes it easy to set up, operate, and scale a relational database in the cloud. It is suited for OLTP workloads.

11. Which AWS service is an immutable ledger database?

- QLDB. ===> Correct One.

            NOTE: Amazon QLDB is a fully managed ledger database that provides a transparent, immutable, and cryptographically verifiable transaction log owned by a central trusted authority. Amazon QLDB tracks each and every application data change and maintains a complete and verifiable history of changes over time.

- EMR.
- Managed Blockchain.
- Inspector.

12. You would like to set up a NoSQL database that can scale with no downtime and can handle millions of requests per second. Which AWS database is best suited for this work?

- DynamoDB. ===> Correct One.

            NOTE: DynamoDB is a fast and flexible non-relational database service for any scale. It can scale with no downtime, it can process millions of requests per second, and is fast and consistent in performance.

- RDS.
- Redshift.
- Athena.

13. Which AWS service can create complex graphs for fraud detection?

- Redshift.
- Neptune. ===> Correct One.

            NOTE: Amazon Neptune is a fast, reliable, fully-managed graph database service that makes it easy to build and run applications that work highly connected datasets. It can be used for knowledge graphs, fraud detection, recommendations engines, social networking, etc.

- QLDB.
- Glue.

14. Which AWS serverless service can use machine learing-powered business intelligence to create interactive dasboards such as business analytics?

- QuickSight. ===> Correct One.

            NOTE: Amazon QuickSight is a fast, cloud-powered business intelligence (BI) service that makes it easy for you to deliver insights to everyone in your organization. You can create and publish interactive dashboards.

- Aurora.
- Athena.
- Managed Blockchain.

15. A company would like to set up a fully managed MongoDB database. Which AWS database is best-suited for this task?

- DocumentDB. ===> Correct One.

            NOTE: Amazon DocumentDB (with MongoDB compatibility) ias a fast, calable, highly available, and fully managed document dabase service that supports MongoDB workloads.

- ElastiCache.
- RDS.
- Neptune.

16. Which exclusive DynamoDB feature is an in-memory cache that can improve your performance up to 10x?

- ElastiCache.
- Edge Locations.
- DynamoDB Accelerator. ===> Correct One.

            NOTE: Amazon DynamoDB Accelerator (DAX) is a fully managed, highly available, in memory cache for amazon DynamoDB that delivers up to a 10 times performance improvement--from milliseconds to microsecond--even at millions of requests per second.

- Snowball Edge.

17. RDS Multi-AZ deployments’ main purpose is high availability, while RDS Read replicas’ main purpose is scalability.

- True ===> Correct One.

            NOTE: RDS Multi-AZ deployments’ main purpose is high availability, and RDS Read replicas’ main purpose is scalability. Moreover, Multi-Region deployments’ main purpose is disaster recovery and local performance.

- False
