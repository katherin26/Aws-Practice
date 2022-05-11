# **Other compute services: ECS, LAMBDA, BATCH, LIGHSAIL**

1. How do you get charged in AWS Lambda?

- Per programming language.
- Per number of functions.
- Per call and per duration. ===> Correct One.

           NOTE: In AWS Lambda, You are charged per request and compute time.

- Per inactive time.

2. You would like a serverless service to launch Docker containers with no infrastructure to provision. Which AWS service should you use ?

- ECS
- Fargate ===> Correct One.

            NOTE: Fargate allows you to launch Docker Containers on AWS, and you don't need to provision and maintain the infrastructure (=no EC2 instances to manage). It is serverless.

- ECR
- Lambda

3. A complete cloud beginner would like to create a simple application with predictable pricing. What service should this person use ?

- EC2
- Lambda
- Lightsail ===> Correct One.

            NOTE: Amazon LighSail is designed to be the easiest way to launch and mange a virtual private server with AWS.
            Lightsail plans include everything you need to jumpstart your project, a virtual machine, SSD -based storage, data transfer, DNS management, and a static IP address- for a low, predictable price. It can be used to create a simple web application, a website or a dev/test enviroment.

- EasyStart

4. What is the name of the sofware development platform that allows you to run applications the same way, regardless of where they are run ?

- Dolphin
- Shark
- Docker ===> Correct One.

        NOTE: Docker is a software development platform that allows you to run applications the same way, regardless of where they are run. It can scale containers up and down within seconds.

- ECS

5. How would you best describe 'event driven' in AWS Lambda?

- Happens on a certain day.
- Happens at a certain time.
- Happens on a regular basis.
- Happens when needed. ===> Correct One.

        NOTE: Event Driven in Lambda means that functions are invoked when needed. They are triggered.

6. Which AWS service allows you to launch DOcker containers on AWS, but requires you to provision and maintain the infrastructure.

- ECR
- EC2
- ECS ===> Correct One.

        NOTE: ECS allows you to launch Docker containers on AWS, but you must provision and maintain the infrastructure(i.e. EC2 instances).

- FARGATE

7. Which of the following statements is INCORRECT regarding the definition of the term "serverless"?

- Serverless allows you to deploy functions as a service.
- There are no servers. ===> Correct One.

         NOTE: Serverless does not mean that there are no servers, you just do not manage, provision and see them, but they do exist.

- You don't need to manage servers.
- Lambda is the serverless pioneer.

8. Which of the following statements is NOT a feature of AWS Lambda?

- Integration with the whole AWS suite of services.
- Virtual functions.
- Automated and continuos scaling.
- Definition of a minimun and maximun of EC2 Instances running. ===> Correct One.

        NOTE: This is a feature of AutoScalingGroups, not AWS Lambda.

9. A company needs to run thousands of jobs but would like to NOT manage the compute resources. What service can it use ?

- ECS
- EC2 Spot Instances
- EC2 Instances
- Batch ===> Correct One.

        NOTE: AWS Batch enables developers, scientists, and engineers to easily and efficiently run hundreds of thousands of batch computing jobs on AWS. AWS Batch dynamically provisions the optimal quantity and type of compute resources (e.g CPU or memory - optimized instances) based on the volume and specific resource requirements of the batch jobs submitted.

10. Where should you store your private Docker images so they can be run by ECS or Fargate?

- Elastic Docker Registry.
- Elastic Docker File Registry.
- Elastic Container Registry. ===> Correct One.

        NOTE: Elastic Container Registry(ECR) is a service where you store your docker image so they can be run by ECS or Fargate.

- Elastic Private Container Registry.

11. Which AWS serverless service can be used by developers to create APIs?

- ECR
- Lambda
- API Gateway ===> Correct One.

        NOTE: Amazon API Gateway is a fully managed serverless service that makes it easy for developers to create, publish, maintain, monitor and secure APUs at any scale.
