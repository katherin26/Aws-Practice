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

**IAM POLICIES INHERITANCE**

1. Example: We have a group of developers and we **attach** a policy at the group level.
   In that case **the policy will get applied to every single member of the group**, all they will get access and inherit this policy.
2. Now, if you have a second group with operations with a **different policy**, David and Edward will have a **different policy than the group of developers**.
3. If fred is a **user**, it has the possibility not to belong to a group, and we have the possibility to create what's called an **inline policy** which has a policy that's only attached to user.
   So that user could or could not belong to a group.
4. And finally, if **Charles and David both belong to another group called the Audit Team**, and you **attach a policy** to the audit team as well, **Charles and David will also inherit that policy from the audit team.**
   So in this case, **Charles has a policy from developers and a policy from audit team and david has a policy from audit team and a policy from the operation team.**
