---
layout: ../../layouts/Docs.astro
title: Organisation guide
description: Hand out seats, group people into cohorts with a target date, track progress, and connect sign-on and your LMS.
---

# Organisation guide

As an organisation admin you look after a pack of seats your employer or university bought. You hand a seat to each person who should learn, group people into cohorts working through the same certificates by the same date, and watch their progress. You can also let people sign in with your own identity provider and push completions into your HR system or LMS. You never see anyone's answers or scores beyond their progress and the credentials they earned.

## Before you start

Two things are set up by DevHub, not by you:

- **Your organisation and your admin access.** DevHub creates the organisation and makes you its administrator. Until then, every organisation screen says **No organisation**: "Nobody has made you an administrator of one yet." Ask your DevHub contact.
- **Your seats.** Seats are sold as a seat pack (from 20 seats), paid on invoice or purchase order. There is no "buy seats" button for you in the app: you arrange the pack with DevHub, the academy records it against your organisation, and once your payment is confirmed the seats appear in your pool, ready to hand out.

What a seat gives the person holding it:

- Access to watch every certificate's episodes.
- **3 assessment attempts.**
- Every credential they earn stays theirs, even after the seat is reclaimed or they leave.

Open the organisation screens from **Organisation** in the sidebar.

## 1. Check your seats on the organisation dashboard

**Why:** this is where you see at a glance how many seats are in use and which cohorts are slipping.

1. Click **Organisation** in the sidebar.
2. **Seat pack** shows how many seats are **In use**, **Invited** (reserved for someone who has not registered yet) and **Available**.
3. **Credentials earned** and **People with a seat** sit beside it.
4. **Cohorts** lists every cohort, at risk first. The bar is the cohort's average progress; the tick is where it should be today to finish by its target date.

![The organisation dashboard: seat pack with 9 of 20 in use, credentials earned, people with a seat, and two cohorts, one at risk and one on track](/docs/screens/org.dashboard.png)

**What you should see after:** if you have no seats or cohorts yet, the dashboard shows a short **Get your first cohort learning** list instead: invite people, create a cohort, connect single sign-on.

When every seat is taken, the dashboard warns you that the next person you invite will be listed as an import error rather than invited. Reclaim a seat from someone who has finished, or arrange more seats with DevHub.

## 2. Create a cohort and assign a pathway

**Why:** a cohort gives a group the certificates to earn and a date to finish by, so progress is measured against something. Creating the cohort first lets you put people straight into it when you invite them.

1. Click **Cohorts** in the sidebar, then **New cohort**.
2. Type a **Name** (for example "Graduate Intake 2027").
3. Under **Certificates**, choose one published pathway. Each option lists its certificates in order. Choose **Decide later** if you have not picked one yet; a cohort with no certificates always counts as on track.
4. Pick a **Target completion date**. Learners see this date on their dashboard, and expected progress rises evenly from today to that date.
5. Click **Create cohort**.

![The New cohort panel: name, a choice of published pathways with their certificates in order, Decide later, and a target completion date](/docs/screens/organisation-new-cohort.png)

**What you should see after:** the cohort appears in the **Cohorts** list with its certificates, status, progress, target date and how many people have **Finished**.

![The cohorts list: each cohort with its certificate numbers, at-risk or on-track status, average progress against expected, target date and finished count](/docs/screens/org.cohorts.index.png)

To change the pathway or the date later, open the cohort and click **Edit cohort**. Expected progress is recalculated straight away. Clear the date to stop tracking against one.

## 3. Invite people

**Why:** each person you invite takes one seat.

1. Click **Members & seats** in the sidebar, then **Invite people**.
2. Either:
   - type or paste work email addresses into **Email addresses**, one per line or separated by commas (you can paste a spreadsheet column straight in), or
   - under **Or upload a CSV**, choose a .csv or .txt file up to 1 MB. The email column is found by its header (for example "email" or "Work email"), or by whichever cell holds an address.
3. Under **Put them in a cohort**, choose the cohort, or leave **No cohort**.
4. Click **Invite**.

![The Invite people panel: seats available, an email list box, a CSV upload, a cohort choice, and the Invite button](/docs/screens/organisation-invite.png)

**What you should see after:**

- People who **already have an account** get their seat at once and show as **Active**.
- Everyone else holds a **reserved seat** and shows as **Invited**. The seat becomes theirs when they register with that exact address.
- Any row that could not be invited (a bad address, or no seats left) is listed by its row number in your file. Fix those rows and invite again; nobody is invited twice.

> **Each person you invite gets an email** naming your organisation, with a link to sign in (if they already have an account) or to register. A new account claims its seat once the person confirms their email address. See the [Learner guide](/docs/learner/).

### Invite everyone on your domain

Once single sign-on has a verified domain (see step 6), **Members & seats** shows **Invite from** *your domain*. It gives a seat to every person who already has an account on that domain and does not hold one yet. People without an account get their seat the first time they sign in through single sign-on.

## 4. Manage members and seats

**Why:** to see who holds a seat, move people between cohorts, and take back seats that are no longer needed.

The **Members & seats** page lists everyone holding or reserving a seat, with their cohort, seat status, progress and credentials earned. Use the search box, **All seats** (Active or Invited) and **All cohorts** to narrow the list.

![Members & seats: seat counts, search and filters, and a table of members with cohort, seat status, progress and credentials](/docs/screens/org.members.png)

Click **⋯** at the end of a row to:

- **Open cohort**: go to that person's cohort.
- **Reclaim seat**: the person loses the access that came with the seat, and the seat goes back to your pool. Reclaiming a seat never revokes a credential.
- **Withdraw invitation** (for someone still **Invited**): they will no longer get a seat when they register, and the seat goes back to your pool.

A reclaimed seat also leaves its cohort, so the next holder does not inherit someone else's programme.

## 5. Track a cohort's progress

**Why:** to spot who is falling behind before the target date.

1. Click **Cohorts**, then the cohort's name.
2. **Average against expected** shows the cohort's average progress, where it should be today, and how far behind or ahead it is.
3. The right-hand card shows the **Certificates**, **Target date** and how many people have **Finished**.
4. **People in this cohort** is sorted slowest first.

![A cohort: average progress against expected, the certificates and target date, and the people in the cohort sorted slowest first](/docs/screens/org.cohorts.show.png)

From here you can:

- **Add people**: pick seat holders who are not in any cohort yet.
- **Remove from cohort** (from a person's **⋯** menu): they keep their seat, progress and credentials, and simply stop counting towards this cohort.
- **Edit cohort** or **Change target date** if the plan changed.
- **Report**: open the report filtered to this cohort.

Learners in a cohort see your target date and their own pace on **My learning**. Falling behind never locks anything for them.

## 6. Export a report

**Why:** to share completion and credential figures with HR or management.

1. Click **Reports** in the sidebar.
2. Choose a **Cohort**, or leave **All cohorts**.
3. Click **Export CSV**.

![Reports: a cohort filter, an Export CSV button, and a table of seat holders with cohort, seat status, progress and credentials](/docs/screens/org.reports.png)

**What you should see after:** a file named like `utm-report-2026-10-24.csv` downloads. It holds only your own seat holders, one row each, with these columns:

| Column | What it holds |
|---|---|
| `name` | The person's name |
| `email` | Their email address |
| `organisation` | Your organisation's identifier, on every row |
| `cohort` | Their cohort, if any |
| `status` | Their seat status |
| `progress_percent` | The furthest they have watched |
| `credentials_earned` | How many credentials they hold |

The header row is always included, even when there is no data.

## 7. Connect single sign-on

**Why:** your people sign in with the identity provider you already run, and can get a seat on their first sign-in with no action from you.

1. Click **Single sign-on** in the sidebar. **OpenID Connect** is selected.
2. Under **Who may sign in**, enter your **Verified email domain** (for example `utm.my`). Only addresses on this domain are accepted; single sign-on stays off until it is set.
3. Tick **Give first-time arrivals a seat** if you want anyone on your domain who signs in for the first time to get an account and a seat automatically. If every seat is taken they still get in, without a seat.
4. Copy the **Redirect URI** and **Scopes** from **Register these with your provider** into a new app registration in your identity provider (Azure AD, Google Workspace, Keycloak or G8ID).
5. Back here, under **Identity provider**, fill in the **Issuer discovery URL** (it ends in `/.well-known/openid-configuration`), the **Client ID** and the **Client secret** from that registration. The secret is stored encrypted and never shown again.
6. Check the **Email claim** and **Name claim**, and set the **Button label** shown on the sign-in page.
7. Click **Save single sign-on** with **Allow sign-in** still off. The status shows **Ready to test**.
8. Click **Test sign-in**. It opens your provider's sign-in in a new tab, checks the provider answers with an address on your verified domain, and records the result. It signs nobody in, so it is safe while sign-in is off.
9. When the test works, switch **Allow sign-in** on, save, and give your people the **Sign-in link for your people**.

![Single sign-on: status Not configured, the OpenID Connect tab, the verified domain and first-time seat option, the identity provider fields, and the redirect URI and sign-in link to register with your provider](/docs/screens/org.sso.png)

**What you should see after:** the status at the top changes from **Not configured** to **Configured**, with the last successful sign-in. If a sign-in is refused, it shows **Verification failed** with the reason; fix the setting, save, and test again.

## 8. Connect your HR system or LMS (API, webhooks, LTI)

**Why:** to pull seats, cohorts and credentials into an HRIS, or have completions pushed to your LMS the moment they happen.

Click **API & webhooks** in the sidebar. The page has three parts. **OpenAPI spec** at the top right opens the API description for your developers.

![API & webhooks: no API clients yet, no webhooks yet, and the start of the LTI 1.3 section](/docs/screens/org.api.png)

### API clients

1. Click **New API client**, give it a **Name** that says what will use it (for example "SuccessFactors sync"), and click **Create client**.
2. Copy the **Client ID** and **Client secret** shown. The secret is stored hashed and cannot be shown again. Click **I have copied it**.
3. Your system exchanges the ID and secret for a one-hour bearer token (open **How a client gets a token** for the details). Each client reads only your own seats, cohorts and credentials.

Create one client per system, so you can **Revoke** one without breaking the others. Revoking stops it working immediately.

### Webhooks

1. Click **Add webhook**, give it a **Name** and an **Endpoint** that accepts a POST over HTTPS, and save.
2. Copy the signing secret shown. Your receiver checks the `X-Webhook-Signature` header with it.

The academy then calls your endpoint when one of your seat holders earns a credential or finishes a series. Failed deliveries are retried with backoff; if deliveries keep failing, the page warns you and **See failed deliveries** lists the last 10. Use **Pause** for a break, or **Delete** to remove the webhook.

### LTI 1.3 (Moodle, Canvas)

Give your LMS administrator the **Tool details** shown. To register your platform, send DevHub your platform's issuer, client ID, deployment ID, and its keyset, token and auth URLs; DevHub registers it for you and it appears under **Registered platforms**. A launch only works for learners whose email is on your verified domain.

## Common questions

**How do I get more seats?**
Contact DevHub. Seat packs start at 20 seats and are paid on invoice or purchase order. The seats appear in your pool once the academy confirms payment.

**Someone I invited says they have no access.**
Check **Members & seats**. If they show as **Invited**, they have not registered yet, or registered with a different address. They must register with the exact address you invited, or you can withdraw that invitation and invite the address they used.

**Does reclaiming a seat take away their credential?**
No. Reclaiming removes the access that came with the seat. Credentials they earned stay theirs and keep verifying.

**How many assessment attempts does a seat include?**
3. If a person needs more, they can buy an extra attempt themselves.

**Can I see people's scores or answers?**
No. You see progress and the number of credentials earned. Each credential has its own public verify page.

**Can we use SAML instead of OpenID Connect?**
Not yet. You can store a SAML connection, but every sign-in through it is refused for now. Azure AD, Google Workspace, Keycloak and G8ID all support OpenID Connect.

## What's not available yet

- **SAML 2.0 sign-in.** The tab is marked **not available yet**; use OpenID Connect.
- **Buying seats in the app.** Seat packs are arranged with DevHub and paid on invoice.
- **Invitation emails.** Inviting someone reserves a seat but does not email them; tell them to register with the invited address.
- **Creating an organisation or adding another organisation admin** is done by DevHub, not from these screens.
