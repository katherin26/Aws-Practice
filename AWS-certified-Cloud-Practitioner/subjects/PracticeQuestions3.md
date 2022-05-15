# **DEPLOYMENTS y MANAGING INFRASTRUCTURE AT SCALE**

1. CodeStar can be used to monitor and check the health of an evironment.

- True
- False ===> Correct One.

            NOTE: CodeStar is used to quickly develop, build, and deploy applications on AWS. Elastic Beanstalk can be used to monitor and to check the health of an enviroment.

2. Which AWS managed service allows to automate software deployments to an hybrid mix of EC2 Instances and On-premises servers?

- CodeDeploy ===> Correct One.

            NOTE: AWS CodeDeploy is a service that automates code deployments to any instance, including Amazon EC2 instances and instances running on-premises.

- CloudFormation
- Elastic Beanstalk
- CodeStar

3. A developer team would like to collaborate on code with versioning support. Which AWS service can help the developers.

- CodeDeploy
- CodeCommit ===> Correct One.

            NOTE: AWS CodeCommit is a secure, highly scalable, managed source control service that makes it easier for teams to collaborate on code. It also provides sofware version control.

- CodePipeline
- Cloud9

4. You need a unified user interface that gives you visibility, control, and patching capabilities for your EC2 Instances on AWS, as well as for servers running in your on-premises data centers. Which service should you use ?

- Storage Gateway
- OpsWorks
- Elastic Container Service
- Systems Manager ===> Correct One.

            NOTE: AWS Systems Manager gives you visibility and control of your infrastructure on AWS. It is used for patching systems at scale.

5. You need to use Chef or Puppet. Which AWS service should you use?

- Cloud Formation
- CodeDeploy
- OpsWorks ===> Correct One.

            NOTE: AWS OpsWorks is a configuration management service that provides managed instances of Chef and Puppet.

- CodeCommit

6. A developer would like to deploy infrastructure on AWS but only knows python. Which AWS service can assist him ?

- Software Development Kit(SDK)
- Cloud Development Kit (CDK) ===> Correct One.

            NOTE: The AWS Cloud Development Kit (AWS CDK) is an open source software development framework to define your cloud application resources using familiar programming languages.

- CloudFormation
- CodeBuild

7. Which of the following allows you to deploy any AWS Infrastructure as a Code?

- Elastic BeanStalk
- OpsWorks
- CloudFormation ===> Correct One.

            NOTE: AWS CloudFormation provides a common language for you to model and provision AWS and third party application resources is your Cloud environment. It allows you to deploy Infrastructure as a Code.

- Systems Manager

8. A new startup would like an online integrated development environment (IDE) to write, run, and debug code. Which AWS service can help with this task?

- Cloud 9 ===> Correct One

            NOTE: AWS Cloud9 is a cloud-based integrated development enviroment (IDE) that lets you write, run, and debug your code with just a browser.

- OpsWorks
- CodeArtifact
- CodeStar

9. Which service is referred to as a Platform as a Service (PaaS)?

- Elastic Beanstalk ===> Correct One

            NOTE: Elastic Beanstalk is a Platform as a Service (PaaS). You only manage data and applications. AWS Elastic Beanstalk makes it even easier for developers to quickly deploy and manage applications in the AWS cloud.

- OpsWorks
- CloudFormation
- EC2

10. What is called the declaration of the AWS resources that make up a stack?

- CloudFormation Schemas
- CloudFormation Diagrams
- CloudFormation Templates ===> Correct One.

            NOTE: AWS CloudFormation templates are JSON or YAML - formatted text files. they are declarations of the AWS resources that make up a stack.

- CloudFormation Models

11. Which of the following services can a developer use to store code dependencies?

- CodeBuild
- CodeCommit
- Cloud9
- CodeArtifact ===> Correct One

            NOTE: AWS CodeArtifact is a fully managed artifact repository(also called code deendencies) service that makes it easy for organizations of any suze to securely store, publish, and share software packages user in their software development process.

12. CodeStar can orchestrate the different steps to have code automatically pushed to production, while CodePipeline is a unified UI to easily manage software development activities in one place.

- True
- False ===> Correct One

            NOTE: AWS CodePipeline is a fully managed continuos delivery service that helps you automate your release pipelines for fast and reliable application and infrastructure updates. CodeStar is used to quickly develop, build, and deploy applications on AWS with a unified user interface.

13. Which serverless service can be used to build code and run tests?

- CodeStar
- Cloud Development Kit (CDK)
- CodePipeline
- CodeBuild ===> Correct One

            NOTE: AWS CodeBuild is a fully managed continuos integration service that compiles source code, runs tests, and produces software packages that are ready to deploy. With codebuild, you don't need to provision, manage, and scale your own build servers, it is serverless.

14. CloudFormation and Elastic BeanStalk are free of use.

- True ===> Correct One

            NOTE: CloudFormation and Elastic Beanstalk are free of use, but you do pay for the resources created.

- False

# **LEVERAGING THE AWS GLOBAL INFRASTRUCTURE**

1. Which Route 53 Routing Policies would you use to route traffic to multiple resources that you specify?

- Simple Routing Policy.
- Weighted Routing Policy. ===> Correct One.

            NOTE: Weighted Routing Policy is used to route traffic to multiple resources in proportions that you specify.

- Latency Routing Policy.
- Failover Routing Policy.

2. Which service is optimized to deploy ultra-low latency applications to 5G devices?

- WaveLength ===> Correct One.

            NOTE: AWS WaveLength is an AWS Infrastructure offering optimized for mobile edge computing applications. Wavelength combines the high bandwidth and ultra-low latency of 5G networks with AWS compute and storage services to enable developers to innovate and build a whole new class of applications.

- Route 53
- CloudFront

3. You need to enable fast, easy, and secure transfers of files over long distances on S3. Which service would you use ?

- AWS Global Accelerator.
- S3 Transfer Acceleration. ===> Correct One.

            NOTE: Amazon S3 Transfer Acceleration enabkes fast, easy and secure transfers of files over long distances betweeen your client and an S3 bucket. Transfer Acceleration takes advantage of Amazon CloudFront's globally optimized network path.

- S3 Cross-Region Replication.

4. What does AWS CloudFront use to improve read performance?

- DDoS Protection.
- S3 Buckets Fast-Read.
- Caching Content in Edge Locations. ===> Correct One.

            NOTE: CloudFront uses Edge Location to cache content, and therefore bring more of your content closer to your viewers to improve read performance.

- Caching Content in Edge Regions.

5. Which service can be used to run AWS infrastructure and services on-premises for an hybrid cloud architecture?

- CloudFront
- OutPosts ===> Correct One.

            NOTE: AWS Outposts bring native AWS Services, infrastructure and operating models to virtually any data center, co-location space, or on-premises facility.

- DMS
- Storage Gateway

6. Which of the following statements is NOT a reason for a global application?

- Decreased Latency.
- Disaster Recovery.
- Scale Elastically On Demand. ===> Correct One.

            NOTE: A global application is not specifically used to scale elastically on demand. You can use Auto Scaling Groups for example if you want to elastically scale based on demand.

- Attack Protection.

7. Which features are available with Route53?

- Health Checks, Auto Scaling, Routing Polocy, DNS.
- Load Balancing, DNS, Domain Registration, Monitoring.
- Domain Registration, DNS, Health Checks, DDoS Protection.
- Domain Registration, DNS, Health Checks, Routing Policy. ===> Correct One.

            NOTE: Route 53 features are (Non exhaustive list) : Domain Registration, DNS, Health Checks, Routing Policy.

8. With which services does CloudFront integra to protect against web attacks?

- WAF & SHIELD ===> Correct One.

            NOTE: You can use AWS WAF web access control lists (web ACLs) to help minimize the effects of a distributed denial of service (DDoS) attack. For additional protection against DDoS attacks, AWS also provides AWS Shield Stardard and AWS Shield Advanced.

- WAF & IAM
- IAM & SHIELD
- SECURITY GROUPS & WAF
