# **IAM : USERS & GROUPS**

1. IAM = stands for **Identity and access management** it is a **global service** because in IAM, we
   are going to create our users and assign them to group.
2. **root** accounts created by default, shouldn't be used or shared.
3. Users are people within your organization, and can **be grouped.**
   NOTE: Groups only contain users.
4. **Users don't have to belong to a group,** and user can belong to **multiple groups.**

**WHY DO WE CREATE USERS AND WHY DO WE CREATE GROUPS?**

Because, we want to allow them to use our AWS accounts and to allow them to do so, we have to give them permissions.

1. **IAM: PERMISSIONS**

- Users or Groups can be assigned JSON documents called policies.
- These policies define the permissions of the users.
- in AWS you apply the least privilege principle: don't give more permissions than a user needs.

  {
  "Version": "2012-10-17",
  "Statement":[
  {
  "Effect":"Allow",
  "Action":"ec2:Describe*",
  "Resource":"*"
  },
  {
  "Effect":"Allow"
  "Action":"elasticloadbalancing:Describe*",
  "Resource":"*"
  },
  {
  "Effect":"Allow"
  "Action":[
  "cloudwatch:ListMetrics",
  "cloudwatch:GetMetricStatistics",
  "cloudwatch:Describe*"
  ],
  "Resource":"\*"
  }
  ]
  }
