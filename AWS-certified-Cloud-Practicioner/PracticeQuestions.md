# **CLOUD COMPUTING SECTION QUESTIONS**

1. Which are the 3 pricing Fundamentals of the AWS cloud?

   - Compute, Storage and Data transfer out of the AWS cloud.

2. Which of the following options is NOT a point of consideration when choosing an AWS Region?

   - Capacity Availability.

3. Which of the following is NOT an advantage of cloud computing?

   - Train your employes Less.

4. AWS Regions are compared of ?

   - Two or more availability zones.

5. You only want to manage Applications and Data which type of cloud computing model should you use?

   - Platform as a service. (PasS)

6. What is the pricing of cloud computing?

   - Pay as you go pricing. ( in cloud computing you are only charged for what you use).

7. Which of the following is NOT one of the five characteristics of cloud computing ?

   - Dedicated support agent to help you deploy applications.

8. A company would like to benefit from the advantages of the public Cloud but would like to keep sensitive assets in its own infrastructure. Which deployment model should the company use?

   - Hibryd Cloud.

9. What is NOT authorized to do on AWS according to the AWS acceptable use policy?

   - Run analitys on stolen content.

10. What defines the distribution of responsabilities for security in the AWS Cloud?

    - The shared Responsibility Model.

11. Which of the following is the definition of cloud computing?

    - On demand availability of computer system resources, specially data storage (cloud storage) and computer Power, withour direct active management by the user.

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
    - Share credentials so a collegue can perform a task for you.
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
