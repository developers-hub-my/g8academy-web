---
layout: ../../layouts/Docs.astro
title: Issuer guide
description: Approve the credentials issued in your organisation's name, revoke one when you must, and look after the key that signs them.
---

# Issuer guide

An issuer is the organisation whose name a credential carries. As an issuer admin you decide what may be issued in that name: nothing goes out until you approve its credential template. You can also revoke a credential issued in your name, and you look after the signing key that proves each credential is genuine. Your console only ever shows your own issuer.

## Platform issuer and partner issuer

There are two kinds of issuer, and they work slightly differently.

| | Platform issuer | Partner issuer |
| --- | --- | --- |
| Who | Developers Hub Sdn. Bhd., which runs DevHub Academy | An outside institution that lends its name to a credential, for example a college such as Kolej Digital Johor that holds the academic approval for credit-bearing awards |
| How it is created | Once, when the platform is set up | By the academy admin, with **Add partner issuer** |
| Credential templates | Approved the moment the academy team creates them | Wait as **Pending** until the partner's issuer admin approves them |
| If the academy edits a template | It stays approved | It comes back to the partner for approval, and issuing under it pauses |
| Who signs | The platform holds the key | The platform by default; the partner can choose to hold its own key |
| Badge on the academy's screens | **Platform** | **Partner** |

Most of this guide matters most to partner issuers, because approval is their job. Platform issuer admins use the same console to revoke credentials and rotate keys.

## Before you start

| You need | Who sets it up |
| --- | --- |
| An account on DevHub Academy | You, by signing up (or the academy admin creates one for you) |
| To be attached as an administrator of your issuer | The academy admin, in **Academy → Issuers**, with **Attach admin**. This also gives you the Issuer Admin role. |
| Two-factor authentication, if the platform requires it for staff | You, in **Settings → Two-Factor Auth** |
| A credential template sent to you | The academy admin, in **Academy → Credential templates** |

If you open the console and see "No issuer", your account has the role but nobody has attached you to an issuer yet. Ask the academy admin.

Open the console from the sidebar switcher by choosing **Issuer**.

## 1. See what is issued in your name

**Why:** the dashboard is the record of everything that has gone out under your name, and the one number that needs action: what is waiting for your approval.

1. Choose **Issuer** in the sidebar switcher, then **Issuer**.
2. Read the four counters: **Awaiting your approval**, **Approved templates**, **Credentials issued** and **Revocations in force**.
3. **Recently issued** lists the latest credentials with holder, certificate, credential ID and status. Click a credential ID to open its public verify page.

![The issuer dashboard for Developers Hub Sdn. Bhd. with four counters, recently issued credentials and the signing key card](/docs/screens/issuer.dashboard.png)

**What you should see:** your legal name and registration number at the top, and the **Signing** card on the right showing which key is in force.

## 2. Approve or reject a credential template

**Why:** a template is exactly what the credential will say: its name, level, series version and expiry. Approving it means you stand behind that wording. Until you approve, learners who pass that series receive nothing under your name.

1. Open **Credential templates**. The **Pending** tab lists what is waiting, oldest first.

   ![The issuer's Credential templates screen with one template pending approval](/docs/screens/issuer-pending-template.png)

2. Click **Review** on a template. The panel shows the credential exactly as a holder and an employer will see it.

   ![The review panel showing a preview of the Software Engineering Fundamentals credential issued by Kolej Digital Johor, with Reject and Approve buttons](/docs/screens/issuer-review-template.png)

3. Check the name, level, series version and expiry on the preview.
4. To approve, click **Approve**, tick **I have checked the name, level and expiry on the preview**, and confirm.
5. To reject, click **Reject**, write in **Reason** what needs to change, and confirm. The academy team sees your reason.

**What you should see after:** approving shows "Approved. Learners who pass now receive this credential." and the template moves to the **Approved** tab. Rejecting moves it to **Rejected** with your reason. Both decisions are recorded in the audit log with your name.

If the academy team later edits an approved template, it comes back to **Pending** and issuing under it pauses until you approve it again.

## 3. Revoke a credential

**Why:** if a credential was issued in error, or its assessment cannot be relied on, you can withdraw it. The verify link keeps working but says "Revoked" with your reason, for everyone who holds it.

1. Open **Revocations** and click **Revoke a credential**.
2. In **Credential**, type at least 3 characters of the credential ID, holder name or email. Only credentials issued in your name are searched.

   ![The Revoke a credential panel with "Faiz" typed in and two matching credentials listed](/docs/screens/issuer-revoke-search.png)

3. Click the credential you mean.
4. Choose a **Reason · shown on the verify page**: **Assessment integrity**, **Issued in error**, **Learner request** or **Issuer withdrawal**.
5. Optionally add a **Note**. It is public, so state facts, not judgements about the person (280 characters at most).
6. Tick the confirmation that names the holder and credential, then click **Revoke credential**.

![The Revocations screen with no credential revoked yet and a Revoke a credential button](/docs/screens/issuer.revocations.png)

**What you should see after:** "Revoked. The verify page now says so, and the holder has been emailed." The revocation appears in the register, which you can filter by reason and status.

**Made a mistake?** Find it in the register and choose **Withdraw revocation**. The verify page goes back to Verified, unless the credential has expired since. The original revocation and the withdrawal both stay on the record.

## 4. Rotate the signing key

**Why:** every credential is signed with your issuer's key, and the verify page checks that signature. Rotate after a suspected leak, when a staff member with access leaves, or on a yearly schedule.

1. Open **Signing keys**.
2. Click **Rotate key** and confirm.

![The Signing keys screen showing a platform-held key in force, the key table, and the Hold your own key form](/docs/screens/issuer.keys.png)

**What you should see after:** "New key in use. Everything signed by the old one still verifies." The old key is marked **Retired · still verifies**. Keys are never deleted, so every credential ever issued stays verifiable.

## 5. Hold your own key (optional)

**Why:** some institutions must keep their private key in-house. By default DevHub Academy holds the key, encrypted, and signs for you. If you need to, your IT team can run a signing service instead, and DevHub Academy only ever stores the public half.

1. Open **Signing keys** and scroll to **Hold your own key**.
2. Enter **Your signing service** (an HTTPS address) and the **Bearer token** your service expects.
3. Click **Save signing service**.
4. Click **Rotate key**. Your service creates the new key and signs from then on.

Your service must create an Ed25519 key when asked and return the public half with its key ID, sign credentials on `POST /sign` with the key ID named, and never reuse or delete a key ID.

**What you should see after:** saving does not switch who signs. The switch happens on the next rotation. To go back, click **Hand signing back to** DevHub Academy; that also takes effect on the next rotation.

## Common questions

**I approved a template. Do learners who already passed get a credential now?**
No. Credentials are issued at the moment someone passes. Learners who pass from now on receive it.

**Can I edit a template's wording myself?**
No. Reject it with a reason that says what should change. The academy team edits it and sends it back to you.

**Can I see or revoke credentials issued by another issuer?**
No. The console is limited to the issuer you are attached to.

**What does a holder see when I revoke their credential?**
They receive an email. Their verify page shows "Revoked" with the reason category and your note.

**I administer two issuers. How do I switch between them?**
You can't yet. The console opens the first issuer you are attached to, in alphabetical order. Ask the academy admin to attach a different account for the second issuer.

## What's not available yet

| Not in the app | What to do |
| --- | --- |
| Editing your issuer's legal name or logo from your console | The academy admin changes it in **Academy → Issuers** |
