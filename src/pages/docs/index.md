---
layout: ../../layouts/Docs.astro
title: Start here
description: What to set up first on a fresh DevHub Academy, in the order that works, and which guide each person should read.
---

# Start here

A fresh DevHub Academy is empty on purpose. The production install creates the roles and one superadmin account, and nothing else: no topics, no series, no prices. Only the platform issuer is created for you. That is why the first sign-in shows nothing to fill in. This page walks you through the setup in the order that works, because most steps need an earlier one to be done first.

You need about an hour for steps 1 to 5. Steps 6 to 10 happen as your instructors build content.

## Who reads which guide

| If you are… | Your role in the app | Read |
| --- | --- | --- |
| The owner or platform administrator | Superadmin or Administrator | This page, then the [Academy admin guide](/docs/admin/) |
| Someone who builds courses | Instructor | [Instructor guide](/docs/instructor/) |
| A learner buying and taking a certification | User (every account has it) | [Learner guide](/docs/learner/) |
| Someone who marks lab exams, proposals and capstones | Assessor | [Assessor guide](/docs/assessor/) |
| An employer or university running seats and cohorts | Org Admin | [Organisation guide](/docs/organisation/) |
| The person who approves credentials issued in an issuer's name | Issuer Admin | [Issuer guide](/docs/issuer/) |

One person can hold several roles. The switcher at the top of the sidebar (it reads **Learning**, **Studio**, **Academy**, **Administration** and so on) lists one section per role you hold.

## The setup order at a glance

| Step | What | Where | Needs first |
| --- | --- | --- | --- |
| 1 | Sign in, change the password, turn on two-factor | **Settings** (your name, bottom left) | Nothing |
| 2 | Seller details, SST, pass mark | **Administration → Settings → Academy** | Step 1 |
| 3 | Payment gateway | **Administration → Settings → Payment gateway** | Step 2 |
| 4 | Video hosting | **Administration → Settings → Video** | Step 1 |
| 5 | The platform issuer and its signing key | **Academy → Issuers** | Step 1 |
| 6 | Topics | **Academy → Topics** | Step 1 |
| 7 | Give people their roles | **Administration → Identity → Users** | Step 1 |
| 8 | Series are built and published | **Studio** (instructor) or **Academy → Catalogue management** | Steps 4, 6, 7 |
| 9 | A credential template for each published series | **Academy → Credential templates** | Steps 5, 8 |
| 10 | Products and prices, then pathways | **Academy → Products & prices**, **Academy → Pathways** | Step 8 |
| 11 | Learners sign up and buy | The public catalogue | Steps 3, 9, 10 |

## 1. Sign in and secure your account

**Why:** the superadmin can do everything, including revoking credentials and changing payment keys. Protect it before anything else.

1. Open the site and click **Log in**. Use the superadmin email and password your developer set during the install. If nobody changed them, they are `admin@example.com` and `password`, which you must change now.
2. Click your name at the bottom of the sidebar, then **Settings**.
3. Open **Password** and set a strong password.
4. Open **Two-Factor Auth**, click **Enable 2FA**, scan the QR code with an authenticator app (Google Authenticator, 1Password, Authy) and enter the six-digit code.
5. Click **View Recovery Codes** and store them in a password manager.

![The Two-Factor Auth settings page showing Enabled, a View Recovery Codes button and a Disable 2FA button](/docs/screens/start-two-factor.png)

**What you should see after:** a green **Enabled** badge. From now on, signing in asks for a code from your phone.

**Two-factor for staff.** Your developer can make two-factor compulsory for every staff account (superadmin, administrator, instructor, assessor, issuer admin) by setting `ACADEMY_REQUIRE_STAFF_2FA=true`. It is off by default. When it is on, a staff member without two-factor is sent straight to the setup page and cannot open anything else until they finish. Org admins and learners are never forced.

**If someone loses their phone:** a person with shell access to the server can run `php artisan academy:two-factor someone@example.com --reset`. They are asked to set two-factor up again at their next sign-in.

## 2. Academy settings: seller details, SST and pass mark

**Why:** every invoice prints the seller details and charges SST at the rate set here. Check them before the first sale, because an invoice keeps the values it was issued with.

1. In the sidebar switcher choose **Administration**, then **Settings → Academy**. The same screen also opens from **Academy → Academy settings**.
2. Under **Assessment**, check the **Pass mark** (70% by default) and **Cooldown between attempts** (24 hours).
3. Under **Learning & catalogue**, check the **Completion threshold** (90% of an episode counts as watched) and **Free preview episodes** (2).
4. Under **Invoicing & tax**, check the **SST rate** (8%) and every seller field: legal name, registration number, registered address, billing email, SST registration number and website. These may already be filled in from the install. Make sure they are your company's details.
5. Under **Marketplace**, set the instructor revenue share (70% by default).
6. Click **Save settings**.

![The Academy settings page with the Assessment section showing pass mark 70%, attempts included 3 and cooldown 24 hours](/docs/screens/admin.settings.academy.png)

**What you should see after:** the message "Academy settings saved." Each value that differs from the shipped default loses its **Default** badge. The [admin guide](/docs/admin/) explains every field.

## 3. Choose the payment gateway

**Why:** a fresh install runs checkout in **Test mode**. Every order is marked paid with no money taken, so anyone could take a credential for free. Switch it before you open to the public.

1. Go to **Administration → Settings → Payment gateway**.
2. Click the card for **CHIP**, **Stripe** or **BayarCash**.
3. Paste the keys from that gateway's dashboard (CHIP: Brand ID and Secret key; Stripe: Secret key and Webhook signing secret; BayarCash: Portal key, Personal access token and API secret key).
4. Copy the **Webhook URL** shown on the right and add it in the gateway's own dashboard. The academy confirms payments through this webhook.
5. Click **Save and activate**.

![The Payment gateway page with CHIP, Stripe, BayarCash and Test mode cards, Test mode active](/docs/screens/admin.settings.payment.png)

**What you should see after:** the badge at the top right reads **Checkout uses** followed by your gateway's name. If a required key is missing, saving is refused and the old gateway stays active.

## 4. Set up video hosting

**Why:** a fresh install uses **Local (no video, for development)**. Episodes will not play for learners.

1. Go to **Administration → Settings → Video**.
2. Under **Video host**, choose **Bunny Stream** and enter the **Library ID**, **Pull zone hostname**, **API key** and **Token authentication key** from your Bunny account.
3. Click **Save video settings**.

![The Video settings page with Video host set to Local (no video, for development)](/docs/screens/admin.settings.video.png)

**What you should see after:** "Video settings saved." Instructors can now upload episodes that play.

## 5. The platform issuer and its signing key

**Why:** every credential is signed in the name of an issuer. The platform issuer is your own company. Without it there is nothing to sign with, and learners who pass receive nothing.

1. Go to the **Academy** section, then **Issuers**.
2. Look for a row with the **Platform** badge and an **Active key**.

![The Issuers screen listing Developers Hub Sdn. Bhd. with a Platform badge, 2 admins and an active key](/docs/screens/academy-admin.issuers.png)

**If the Platform row is there:** open it from the **⋯** menu, check the **Legal name** and **Registration number** exactly as they should be printed on every credential, upload a square logo, and click **Save identity**.

**If the list is empty:** the install was set up before the platform issuer was added to it. Ask your developer to run this once on the server; it creates the issuer from the seller details in Academy settings, plus its first signing key, and does nothing if one already exists:

```bash
php artisan db:seed --class=PlatformIssuerSeeder --force
```

Then refresh **Issuers** and finish the identity as above. Partner issuers, such as a college that awards credit, are added later; see the [Issuer guide](/docs/issuer/).

## 6. Create topics

**Why:** topics are the shelves learners filter the catalogue by. A series without a topic never appears when learners filter.

1. Go to **Academy → Topics** and click **New topic**.
2. Enter a **Name** (for example Foundation, Platform Engineering, API-first) and a one-sentence **Description**.
3. Click **Save topic**. Repeat for each subject area.

![The Topics list showing six topics with their slugs and series counts](/docs/screens/academy-admin.topics.png)

**What you should see after:** the topic in the list. Its slug is fixed from the name and never changes, because it is the public filter link.

## 7. Give people their roles

**Why:** instructors cannot build, assessors cannot mark, and issuer admins cannot approve until they hold the role.

1. Go to **Administration → Identity → Users**.
2. For a new person, click **Add User**, enter their **Name** and **Email**, and tick their roles: **Instructor**, **Assessor**, **Administrator**, **Issuer Admin** or **Org Admin**. Leave **Send password setup link** ticked so they set their own password.
3. Click **Create User**.
4. For someone who already signed up, find them in the list, open the row's actions and choose **Manage Access** to tick or untick roles.

![The Add User panel with Name, Email, the list of roles and Send password setup link ticked](/docs/screens/start-add-user.png)

**What you should see after:** the person in the list with their role badges. Every account also gets **User**, which is the learner role.

Two roles need one more step:

| Role | Extra step | Where |
| --- | --- | --- |
| Issuer Admin | Attach them to the issuer they act for. The role alone opens an empty console. | **Academy → Issuers**, open the issuer, **Attach admin** ([Issuer guide](/docs/issuer/)) |
| Org Admin | Attach them to their organisation. The role alone opens an empty console. | Not in the app yet. Ask your developer ([Organisation guide](/docs/organisation/)) |
| Assessor (Architect level) | Choose which Architect series they review proposals for | **Academy → Assessors & integrity → Proposal coverage** |

## 8. Build and publish the first series

**Why:** a series is one certification: its learning outcomes, episodes and assessment. Nothing can be sold until one is published.

There are two ways to start a series:

- **The instructor starts it.** In **Studio → Series**, the instructor clicks **New series**. They own it and earn the revenue share.
- **You start it for them.** In **Academy → Catalogue management**, click **New series**, enter the **Title**, pick the **Topic**, the **Owner** (anyone with the Instructor role, or **Platform (no instructor)**) and the **Level**, then **Create series**.

![The New series panel with Title, Topic, Owner, Level cards and Summary](/docs/screens/admin-new-series.png)

Either way the series starts as an empty draft version 1.0. The instructor then adds the learning outcomes, uploads every episode, adds approved captions to every episode, and builds the assessment. Fundamentals is a quiz plus a guided lab, Practitioner is a hands-on lab exam marked against a rubric, and Architect is a capstone proposal, the capstone and a panel defence. The [Instructor guide](/docs/instructor/) covers each step.

Publishing is blocked until every check passes. When it does, the instructor publishes the version from the series editor. The series then shows **Published** in **Catalogue management**.

## 9. Create a credential template for each published series

**Why:** this is the step people miss. A learner who passes a series with no approved template receives nothing.

1. Go to **Academy → Credential templates** and click **New template**.
2. Choose the issuer (your platform issuer is selected for you).
3. Choose the **Series** and its **Published version**. Only published versions are listed.
4. Check the **Name** (it defaults to the series title) and leave **Expires after (months)** empty for no expiry.
5. Click **Create template**.

![The New credential template panel with the platform issuer selected and a live credential preview](/docs/screens/admin-new-template.png)

**What you should see after:** the template with an **Approved** badge. Platform templates are approved on creation. A partner issuer's template waits as **Pending** until the partner approves it.

## 10. Set prices, then pathways

**Why:** learners can watch free previews, but cannot subscribe or buy a credential until a product exists.

1. Go to **Academy → Products & prices** and click **New product**.
2. Choose the **Kind**:
   - **Subscription**: all-access video. Never includes an assessment attempt.
   - **Credential**: one series, 2 assessment attempts and the credential. Price by level: RM149 Fundamentals, RM249 Practitioner, RM399 Architect.
   - **Assessment attempt**: one extra attempt for someone who already bought that series' credential.
   - **Seat pack**: seats for an organisation, 3 attempts per seat.
3. Fill in the **Name**, choose the **Series** where asked, enter the **Price** in ringgit (SST is added at checkout) and click **Create product**.

![The New product panel with the Subscription kind selected, attempts locked at 0 and a duration of 30 days](/docs/screens/admin-new-product.png)

Once at least two series are published, group them in **Academy → Pathways** so learners follow them in order and organisations can assign them to cohorts.

## 11. How learners buy

With the gateway live, a template approved and a product active, the platform is open for business:

1. A visitor browses the **Catalogue** and watches the free preview episodes without an account.
2. They register, pick a series and buy its credential (or a subscription to watch everything).
3. They pay through your gateway. The invoice is emailed and appears under **Billing**.
4. They watch the episodes, sit the assessment, and on a pass the signed credential appears in their **Credential wallet** with a public verify link.

You will see each order in **Academy → Orders & refunds**. The [Learner guide](/docs/learner/) shows the learner's side step by step.

## Trying it out with demo data

On a local or staging copy, your developer can load a complete demo:

```bash
php artisan seed:demo
```

It loads the full launch catalogue (the 8 DevHub certificates with topics, pathways, products and approved templates), a platform issuer with a signing key, a sample organisation, and demo accounts for every role on `devhub.my` (for example `tech@devhub.my` as superadmin, `instructor@devhub.my`, `learner@devhub.my`). Every demo account uses the password `password`.

**Never run it on production.** It creates real accounts with a known password, including a superadmin, and fills the catalogue with sample content and learners. On a production server the command stops and asks for confirmation; answer no, and never pass `--force` there.

## Common questions

**I signed in and the dashboard says "Nothing in flight yet". Is something broken?**
No. That is the learner panel every account sees. Use the sidebar switcher to open **Academy** or **Administration**.

**I don't see the Academy section in the sidebar.**
Your account needs the Superadmin or Administrator role. Ask the superadmin to tick it for you in **Administration → Identity → Users**.

**A learner passed but has no credential.**
The series version has no approved credential template. Create one (step 9). If it belongs to a partner issuer, ask the partner to approve it. The credential is not created retroactively; your developer can check the log for "Passed assessment with no approved credential template".

**Can I change the price later?**
Yes. Edit the product. Existing orders keep the price they paid. Once a product has orders, its kind and series are locked; deactivate it and create a new one instead.

**Why can't a subscription include an assessment attempt?**
By design. A subscription buys watching. The assessment and the credential are always bought separately, so a monthly subscriber cannot assemble a credential cheaply.

## What's not available yet

| Missing | Workaround |
| --- | --- |
| Creating an organisation and attaching its Org Admin from the app | Your developer sets it up |
