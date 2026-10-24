---
layout: ../../layouts/Docs.astro
title: Academy admin guide
description: Run the platform day to day, from settings, catalogue and prices to orders, payouts, credentials and moderation.
---

# Academy admin guide

The academy admin runs the platform. You set the rules (pass mark, SST, payment gateway), shape the catalogue (topics, series, pathways), decide what is sold and for how much, and look after what happens afterwards: orders and refunds, instructor payouts, issued credentials, reported posts and integrity concerns. Instructors build the content; you decide when it goes on sale and how.

## Before you start

| You need | Who sets it up |
| --- | --- |
| An account with the **Administrator** or **Superadmin** role | The superadmin, in **Administration → Identity → Users** |
| Two-factor turned on, if your platform requires it for staff | You, in **Settings → Two-Factor Auth** |
| The first-time setup in [Start here](/docs/) done, or under way | The owner |

Your screens live in two places in the sidebar switcher:

| Section | What is there |
| --- | --- |
| **Academy** | Catalogue management, Topics, Pathways, Products & prices, Coupons, Credential templates, Orders & refunds, Instructor payouts, Issuers, Credentials, Moderation, Assessors & integrity, Funnel & metrics, Academy settings |
| **Administration → Settings** | Academy, Video, Payment gateway (plus General, Authentication, Notifications and other system settings) |

The tasks below follow the order you will usually need them.

## 1. Check the Academy settings

**Why:** these are the numbers the whole platform runs on. Changing one affects future work only: credentials already issued, attempts already sat and invoices already filed keep the values they had.

1. Open **Academy → Academy settings** (or **Administration → Settings → Academy**).
2. Review each section, then click **Save settings**. **Discard changes** puts the form back as it was; the small reset beside a field puts that one value back to its default.

![The Academy settings page with the Assessment section and its pass mark, attempts and cooldown fields](/docs/screens/admin.settings.academy.png)

| Section | Field | Default | What it does |
| --- | --- | --- | --- |
| Assessment | **Pass mark** | 70% | Score needed to pass. Allowed 40 to 95. |
| Assessment | **Attempts included** | 3 | Shown to assessors as the attempt limit. It does not change how many attempts a purchase grants; that is set on each product. |
| Assessment | **Cooldown between attempts** | 24 hours | Wait after a failed attempt before the next one. |
| Learning & catalogue | **Completion threshold** | 90% | How much of an episode counts as watched. Every required episode must reach it before the assessment unlocks. |
| Learning & catalogue | **Free preview episodes** | 2 | Episodes anyone can watch without an account. |
| Invoicing & tax | **SST rate** | 8% | Added to every sale and itemised on the invoice. |
| Invoicing & tax | Seller details | From the install | Legal name, registration number, address, billing email, SST registration number and website, printed on every invoice and credit note. |
| Invoicing & tax | **Invoice prefix · next number** | Read-only | Invoices (DHA-INV) and credit notes (DHA-CN) are numbered without gaps and restart every 1 January. |
| Marketplace | Instructor revenue share | 70% | The instructor's share of net, ex-SST revenue on series they own. |
| Credentials | Signing key maximum age | 365 days | After this, the Issuers screen flags a key as due for rotation. Nothing rotates automatically. |

**What you should see after:** "Academy settings saved."

## 2. Choose the payment gateway

**Why:** checkout uses one gateway at a time. A fresh install uses **Test mode**, which marks every order paid without taking money. Use it only on staging.

1. Open **Administration → Settings → Payment gateway**.
2. Click **CHIP**, **Stripe** or **BayarCash**, and enter its keys.
3. Copy the **Webhook URL** into the gateway's dashboard.
4. Click **Save and activate**.

![The Payment gateway page with four gateway cards, Test mode active, and the webhook URL panel](/docs/screens/admin.settings.payment.png)

| Gateway | Fields | Refunds |
| --- | --- | --- |
| CHIP | Brand ID, Secret key | Through the app |
| Stripe | Secret key, Webhook signing secret | Through the app |
| BayarCash | Portal key, Personal access token, API secret key, sandbox switch | No refund API. Refund in the BayarCash console, then record it here. |

**What you should see after:** "*Gateway* is now active for checkout." If a required field is empty, the save is refused and checkout keeps the gateway it had. Secret keys are never shown again; leave a secret blank to keep the stored one.

## 3. Set up video hosting

**Why:** episodes are streamed from Bunny Stream. The default, **Local (no video, for development)**, does not play anything.

1. Open **Administration → Settings → Video**.
2. Set **Video host** to **Bunny Stream** and fill in **Library ID**, **Pull zone hostname**, **API key** and **Token authentication key**.
3. Click **Save video settings**.

![The Video settings page with the Video host dropdown](/docs/screens/admin.settings.video.png)

**What you should see after:** "Video settings saved." The change takes effect straight away, with no deploy.

## 4. Create topics

**Why:** topics are what learners filter the catalogue by. A series has at most one.

1. Open **Academy → Topics** and click **New topic**.
2. Enter a **Name** and a one-sentence **Description**, then **Save topic**.

![The Topics list with six topics, their slugs and how many series each holds](/docs/screens/academy-admin.topics.png)

**What you should see after:** the topic in the list. The slug is made from the name once and never changes. A topic that still holds a series cannot be deleted.

## 5. Manage the catalogue

**Why:** this is where every series lives and where you decide whether it is on sale. Instructors write the content in Studio; publication is your call.

1. Open **Academy → Catalogue management**.
2. To start a series, click **New series**. Enter the **Title**, choose a **Topic**, an **Owner** and a **Level**, write a **Summary**, then **Create series**.
3. To change a series, use its **⋯** menu: **Edit details**, **Publish**, **Return to draft**, **Archive**, **View public page** or **Delete**.

![Catalogue management listing eight published series with level, owner, status and version](/docs/screens/academy-admin.catalogue.png)

![The New series panel with title, topic, owner, level and summary](/docs/screens/admin-new-series.png)

Things to know:

- The **Owner** list shows everyone with the Instructor role. The owner edits the episodes and assessment and is paid a revenue share. **Platform (no instructor)** earns no payout.
- A new series starts as an empty draft version 1.0. **Publish** is refused until the instructor has published a version in Studio, because the version carries the outcomes and the assessment.
- **Delete** only works on a series nobody has bought, been granted or been credentialed against. Otherwise you are offered **Archive instead**: the series leaves the catalogue and everything already bought or issued keeps working.

**What you should see after:** the toast confirms the change, and the counters at the top (Published, Draft, Platform-owned, Archived) update.

## 6. Create credential templates

**Why:** a template says what a credential reads, who issues it and which series version it attests. Without an approved template for a version, a learner who passes it receives nothing.

1. Open **Academy → Credential templates** and click **New template**.
2. Choose the **Issuer**. The platform issuer is approved on creation. A partner is marked "needs their approval".
3. Choose the **Series** and its **Published version**.
4. Check the **Name** and, if the credential should lapse, set **Expires after (months)**.
5. Click **Create template** (for a partner: **Create and send for approval**).

![Credential templates listing one approved platform template per series](/docs/screens/academy-admin.templates.png)

![The New credential template panel with the platform issuer selected and a credential preview](/docs/screens/admin-new-template.png)

**What you should see after:** a platform template shows **Approved** at once. A partner template shows **Pending partner approval** until the partner's issuer admin approves it in their console. Editing a partner template sends it back for approval and pauses issuing under it. The issuer and version cannot change once a template exists; there is one template per issuer per version.

## 7. Set products and prices

**Why:** nothing can be bought until a product exists. Video is sold by subscription; the assessment and the credential are sold separately.

1. Open **Academy → Products & prices** and click **New product**.
2. Choose the **Kind**, enter a **Name**, check the **Entitlement source**, pick the **Series** where asked, enter the **Price** in ringgit, and leave **Active** on.
3. Click **Create product**.

![Products & prices grouped into subscriptions and credentials, each with what it grants and its price](/docs/screens/academy-admin.products.png)

![The New product panel with the Subscription kind, attempts locked at 0 and duration 30 days](/docs/screens/admin-new-product.png)

| Kind | Grants | Rules |
| --- | --- | --- |
| **Subscription** (monthly, annual, lifetime) | All-access video | Attempts are locked at 0. Monthly and annual need a **Duration (days)**; lifetime has none. |
| **Credential** | One series, 2 attempts and the credential | Needs a series. Priced by level: RM149 Fundamentals, RM249 Practitioner, RM399 Architect. |
| **Assessment attempt** | 1 more attempt on one series | Checkout refuses it unless the buyer already holds that series' credential product. |
| **Seat pack** | Seats for an organisation, 3 attempts each | Bought by an organisation, minimum 20 seats. |

SST is added at checkout on top of the price. Once a product has orders, its kind, entitlement source and series are locked; you can still change the price, and existing orders keep what they paid. **Deactivate** stops new purchases without taking anything from people who bought it. **Delete** is only possible while it has no orders.

## 8. Create coupons

**Why:** a discount code for a meetup, campaign or alumni group.

1. Open **Academy → Coupons** (or **Coupons** on the Products screen) and click **New coupon**.
2. Enter the **Code** learners will type, choose **Percent off** (1 to 100; 100 makes it free) or **Fixed amount** in RM.
3. Optionally set **Max redemptions** and **Expires at (MYT)**. Leave them empty for no limit or no expiry.
4. Click **Save coupon**.

![The Coupons screen with no coupons yet and a New coupon button](/docs/screens/academy-admin.coupons.png)

**What you should see after:** the code listed as **Active**. A code works on every product and never takes a total below zero. It becomes **Expired** after its expiry date and **Exhausted** when it reaches its limit. **Deactivate** expires it immediately; to bring it back, edit it and set a future expiry.

## 9. Build pathways

**Why:** a pathway puts published series in a learning order. Learners follow it, and organisations assign it to cohorts.

1. Open **Academy → Pathways** and click **New pathway**.
2. Enter the **Title**, a **Summary** and the **Level** (usually the highest level among its series).
3. Under **Series, in learning order**, use **Add a published series…** to add at least two, and the up and down buttons to order them.
4. Switch **Published** on when it is ready, then **Save pathway**.

![Pathways listing five published tracks with level, number of series and state](/docs/screens/academy-admin.pathways.png)

**What you should see after:** the pathway in the list. **Pathway credential** reads "None yet: browsing aid only" until a pathway template exists. To retire a pathway, use **Unpublish (archive)**: learners already on it keep their progress.

## 10. Add partner issuers

**Why:** Developers Hub is not a higher-education provider. A credit-bearing credential needs a partner, such as a college, that holds the academic approval.

1. Open **Academy → Issuers** and click **Add partner issuer**.
2. Enter the **Legal name** exactly as it should read on the credential, and the optional **Registration number**. Click **Create issuer**. Its first signing key is created at the same time.
3. In the panel that opens, type the email of the partner's staff member in **Email of an existing account** and click **Attach admin**. They must already have an account. Attaching them gives them the Issuer Admin role and opens their issuer console.
4. Upload the partner's square logo (PNG, JPG or WebP, at least 256 px, up to 1 MB) and click **Save identity**.
5. Create a credential template for the partner (task 6). It waits for the partner's approval.

![The Add partner issuer panel with Kolej Digital Johor typed in as the legal name](/docs/screens/admin-add-partner-issuer.png)

![The issuer panel for Kolej Digital Johor with its identity, logo upload and one attached administrator](/docs/screens/admin-issuer-attach-admin.png)

**What you should see after:** the partner listed with a **Partner** badge, its admin count and an active key. **Keys due rotation** counts issuers whose active key is older than the maximum age in Academy settings; use **Rotate key** in the issuer's panel. Old keys are kept so everything they signed still verifies. The [Issuer guide](/docs/issuer/) covers the partner's side.

## 11. Handle orders and refunds

**Why:** every order from every gateway, its invoice and any refund are here.

1. Open **Academy → Orders & refunds**. Search by order reference, invoice number, buyer email or PO, or filter by status, gateway and date.
2. Open an order's **⋯** menu for **Order details**, **Download invoice**, **Resend invoice email**, **Refund…** or, for an LHDN e-Invoice that failed, **Retry submission**.
3. To refund, choose **Refund…**. The panel says whether the order is **Eligible under BR-06**. Choose **Through the gateway**, or **Record a manual refund** if the money already went back another way (always the case for BayarCash), enter the **Reason** and click **Record refund**.
4. For a seat pack paid by bank transfer, use **Mark paid** once the money arrives. The seats then become available to the organisation.
5. **Export CSV** downloads the filtered list.

![Orders & refunds with paid and refunded totals for the month and three paid orders with their invoice numbers](/docs/screens/academy-admin.orders.png)

The refund rule (BR-06):

| Situation | Refund? |
| --- | --- |
| Within 7 days and under 20% of any series watched | Yes |
| Within 7 days but 20% or more watched | No |
| An assessment attempt has started | No |
| More than 7 days after purchase | No |

For a fault on your side you can tick **Override BR-06 for this refund** and give a reason; it is printed on the credit note and kept in the audit trail. Every refund produces a credit note against the invoice.

## 12. Pay instructors

**Why:** instructors who own a series earn a share of its net, ex-SST revenue. Each month gets one frozen statement per instructor.

1. Open **Academy → Instructor payouts**.
2. Pick the **Closed month** and click **Generate statements**. (They are also generated automatically on the 1st of each month.)
3. Open a statement with **View** to see the sales, refunds and share. **Download CSV** gives the detail.
4. Pay the instructor by bank transfer or DuitNow, then click **Mark as paid**, enter the **Payment reference** and confirm with **Mark paid**.

![Instructor payouts with a closed-month picker and no statements yet](/docs/screens/academy-admin.payouts.png)

**What you should see after:** the statement shows **Paid**, and the instructor sees the reference on their own statement. A statement is never regenerated, because it is what was paid. Platform-owned series earn no payout. All amounts exclude SST.

## 13. Watch issued credentials and revoke when needed

**Why:** every credential issued, and how often employers have checked it. Revoking changes the public verify page for everyone holding the link.

1. Open **Academy → Credentials**. Search by holder or credential ID, or use the **All**, **Verified**, **Expired** and **Revoked** tabs.
2. To see who checked a credential, open its **⋯** menu; **Third-party checks** counts views by anyone other than the holder.
3. To revoke, choose **Revoke…**, pick the reason, add an optional factual **Note**, and click **Revoke credential**.

![Credentials listing four issued credentials with holder, certificate, issue date, third-party checks and Verified status](/docs/screens/academy-admin.credentials.png)

| Reason | Shown on the verify page as |
| --- | --- |
| Assessment integrity | The assessment result could not be relied upon. |
| Issued in error | Issued incorrectly by the platform or issuer. |
| Learner request | Withdrawn at the holder's request. |
| Issuer withdrawal | The issuer withdrew its endorsement. |

**What you should see after:** "Credential revoked. The verify page now says so." The credential is never deleted. **Withdraw revocation…** puts it back to Verified; both events stay on the record.

## 14. Assign assessors and rule on integrity concerns

**Why:** practical submissions are marked by a person, and an assessor never rules on their own suspicion.

1. Open **Academy → Assessors & integrity**.
2. Under **Waiting to be assigned**, choose an assessor for each submission and click **Assign**. It goes onto their queue.
3. Under **Integrity concerns**, open **Review and rule** for a flagged submission, write **What was decided** and click **Record and clear**. Grading is held until you rule.
4. Under **Proposal coverage**, choose an Architect series for each assessor and click **Cover**. A capstone proposal only reaches assessors who cover its series, and never its author.

![Assessors & integrity with no integrity concerns, one submission waiting for an assessor, and proposal coverage for three assessors](/docs/screens/academy-admin.assessors.png)

**What you should see after:** "Assigned. It is on their queue now." If an upheld concern means a credential was already issued, revoke it in **Credentials** with "Assessment integrity". Fundamentals quizzes are marked automatically and never appear here.

## 15. Moderate discussions

**Why:** learners can report posts under an episode. The most-reported posts come first.

1. Open **Academy → Moderation**. The **Waiting** tab lists reported posts.
2. Choose **Remove…** and give a **Reason** to hide a post, or **Nothing wrong, clear reports** to keep it.
3. The **Recently removed** tab shows the last 20 removals. **Restore…** puts a post back.

![Moderation with the Waiting and Recently removed tabs and nothing reported](/docs/screens/academy-admin.moderation.png)

**What you should see after:** "Removed, with the reason on the record." or "Reports cleared. The post stands."

## 16. Read the funnel

**Why:** shows whether people move from browsing to buying to earning a credential, and whether employers check the credentials.

1. Open **Academy → Funnel & metrics** and pick **7 days**, **30 days** or **90 days**.
2. **Verifications per credential issued** divides third-party checks by credentials issued in the window.
3. The **Learner funnel** shows each step (catalogue viewed, preview watched, paid, series finished, credential issued) and the share of the step before. **Show as a table** gives the numbers.

![Funnel & metrics with verifications per credential issued and the five-step learner funnel for the last 30 days](/docs/screens/academy-admin.funnel.png)

Steps are counted independently from the event stream, so a later step can exceed an earlier one (for example, seat holders finish series without a paid order of their own).

## Common questions

**I changed the pass mark. Do learners who already sat the assessment get re-marked?**
No. Every setting applies to future work only.

**Why can't I delete this series or product?**
Somebody has bought it, been granted it or been credentialed against it. Archive the series or deactivate the product instead; everything already sold keeps working.

**A learner passed but has no credential.**
There is no approved template for the version they passed. Create one in **Credential templates**, or ask the partner to approve theirs.

**Can a refund be undone?**
No. A refund always issues a credit note, and issued documents never change.

**Can I approve a partner's template for them?**
No. Only the partner's own issuer admin can approve, from their console. That is the promise made to the partner.

## Set up an organisation and its seats

**Why:** an employer or university gets an Organisation console only once you create it here, and its seats only once a seat pack is paid.

1. Go to **Academy → Organisations** and click **Add organisation**.
2. Enter the **Name**, the **Verified email domain** (one per organisation; single sign-on and domain sign-in trust it, so two organisations can never share one) and, optionally, the **Registration number** printed on its invoices. Click **Create organisation**.

![The Organisations list: one organisation with its verified domain, admins, seats and seat-pack status, and the Add organisation button](/docs/screens/academy-admin.organisations.png)

3. Open it from the **⋯** menu with **Manage organisation**.
4. Under **Administrators**, type the **Email of an existing account** and click **Attach admin**. That person gets the Org Admin role and the **Organisation** console. Nothing else opens it.
5. Under **Seat packs**, choose the **Seat pack** product, who it is **Invoice to** (one of the organisation's admins), the number of **Seats** (at least 20), an optional **Negotiated price per seat (RM)** and **PO reference**, then click **Record seat-pack order**. The order shows as **Awaiting payment**.
6. When the payment arrives, confirm it in **Academy → Orders & refunds**. The seats are added to the organisation's pool and the internal invoice is issued.

![Manage organisation: details, one attached administrator, and the seat-pack order form](/docs/screens/admin-manage-organisation.png)

A pathway credential template is made the same way as a series one: in **Credential templates**, choose to attest a pathway and pick the published pathway.

## What's not available yet

| Not in the app | What to do |
| --- | --- |
