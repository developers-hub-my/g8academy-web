---
layout: ../../layouts/Docs.astro
title: Assessor guide
description: Work through your submission queue, mark practicals against the rubric, review capstone proposals, record panel defences and raise integrity concerns.
---

As an assessor you mark the work a machine cannot. Fundamentals quizzes are marked automatically and never reach you. You handle three kinds of work: **Practitioner lab exams**, **Architect capstone proposals**, and **Architect capstones**, which also end in a panel defence. You mark each one against the rubric the instructor wrote, give feedback on every criterion, and aim to return it within **5 working days**.

## Before you start

| What you need | Who sets it up |
|---|---|
| An account with the assessor role. Without it, there is no **Assessing** section in the sidebar. | An academy admin |
| Lab exams and capstones assigned to you. You only see work that has been put on your queue. | An academy admin, on **Assessors & integrity** |
| To review capstone proposals: coverage of that Architect series. | An academy admin, on **Assessors & integrity** under **Proposal coverage** |
| A published series with a rubric | The series' instructor (see the [Instructor guide](/docs/instructor/)) |

### How work reaches your queue

Submissions are not shared out automatically. When a learner hands in a lab exam or capstone, it waits on the admin's **Assessors & integrity** page under **Waiting to be assigned**. The admin picks you in **Choose an assessor** and clicks **Assign**. Only then does it appear in your queue.

Capstone proposals work differently: a proposal goes to every assessor who covers its series, as listed under **Proposal coverage**, but never to the proposal's own author.

![The admin's Assessors & integrity page: no integrity concerns, one API & Integration submission from Aminah Rahman waiting to be assigned, and the proposal coverage of each assessor](/docs/screens/academy-admin.assessors.png)

An assessor never marks their own work. If a submission has been waiting for days and nothing is in your queue, ask the academy admin whether it has been assigned.

## 1. Work through your queue

**Why:** the queue is your to-do list. It is set up so you can finish it: oldest first, with anything overdue pinned to the top.

1. In the sidebar, open **Assessing** and click **Submission queue**.
2. Read the four counters: **Waiting for you**, **Overdue**, **Due today** and **Marked this month**.
3. Narrow the list if you need to: search by candidate name, or filter by series, by item type (**Lab exam**, **Proposal review**, **Capstone + defence**), by target (**Overdue**, **Due today**, **Within target**), or tick **Flagged only**.
4. Click the candidate's name to open the item.

![The Submission queue: one item waiting, a Solutions Architect capstone proposal from Faiz Ismail, handed in today with 5 days left](/docs/screens/assessor.queue.png)

Each row shows:

| Column | What it tells you |
|---|---|
| **Candidate** | The learner, and which attempt this is (for example **Attempt 1 of 2**; the limit is the candidate's own: 2 for a credential purchase, 3 with an add-on or an organisation seat), or **Capstone proposal** |
| **Certificate · item** | The series, the item type, and the series version they sat |
| **Handed in** | The date, and how many working days ago |
| **Target** | Days left, **Due today**, or **Overdue** with the date it was due |
| **Notes** | **Flagged** if an integrity concern is open |

**The marking target** is 5 working days from hand-in, counted Monday to Friday. Anything past it is pinned to the top with a notice saying who has waited longest. If you cannot get to overdue work this week, tell the academy team so they can reassign it.

When the queue is empty you see **Nothing waiting for you**, with how many you marked this month.

## 2. Mark a lab exam against the rubric

**Why:** the rubric decides the result, not your overall impression. Every criterion needs a mark and feedback, and a blank is never counted as zero.

1. Open the submission from your queue. The page shows everything on one screen:
   - **Submission**: the candidate's **Repository** link (opens in a new tab), or **Uploaded archive** with a **Download** link, plus any note **From the candidate**.
   - **Brief**: what they were asked to build.
   - **Integrity**: the button to raise a concern (task 5).
   - **Rubric**: one block per criterion, with its weight and what "met" looks like.
2. Open the repository or download the archive and review the work.
3. For each criterion, type a **Mark / 100** and write **Feedback to the candidate**: what worked and what to change. The candidate gets this feedback whatever the outcome.
4. Watch the **Weighted total** at the bottom. It shows the score so far against the pass mark (70) and how many criteria you have marked.
5. When every criterion has a mark and feedback, **Submit marks** unlocks. Click it.

![Grading the API & Integration lab exam: the submission and brief on the left, the rubric on the right with the first criterion marked 80 and feedback written, and the weighted total at 40.00 with 1 of 3 criteria marked](/docs/screens/assessor-grade-marking.png)

**What you should see:** you return to the queue with "Marked and returned to the candidate." The candidate gets the result and your feedback. A score of 70 or more passes and the credential is issued; below 70 is a failed attempt.

After you submit, the marks are locked. Opening the item again shows "Marked on [date] and returned to the candidate". Any change from then on goes through a platform admin.

## 3. Return work for revision instead of failing it

**Why:** sometimes work is close but incomplete, for example a missing file or a broken link. Returning it lets the candidate fix it without using up an attempt.

1. On the submission, click **Return for revision**.
2. In **What needs to change**, write exactly what the candidate must fix. It is sent to them as written. "Returned" on its own is not accepted.
3. Click **Return to** followed by the candidate's name.

![The Return for revision dialog for Aminah Rahman, explaining it uses none of her 3 attempts, with the What needs to change box](/docs/screens/assessor-return.png)

**What you should see:** "Returned to the candidate for revision." Any marks you had typed are discarded. When the candidate hands in again, the revised work comes back to your queue.

## 4. Review an Architect capstone proposal

**Why:** an Architect candidate must have an approved proposal before they can hand in a capstone. You decide whether the project is a fair test.

1. Open a row marked **Proposal review** in your queue.
2. Read the **Proposal**: **Working title**, **Summary** and **Repository**.
3. Work through the **Review checklist**:
   - A real brief from a real organisation, not a tutorial project
   - Big enough to need end-to-end design and trade-offs
   - Small enough to finish and defend within the series window
   - States what the candidate builds and where AI assistance will be used
4. Choose a **Decision**:
   - **Approve proposal**: you must tick every check. **Feedback to the candidate** is optional.
   - **Request changes**: feedback is required. Say what needs to change.
5. Click **Approve proposal** or **Send changes request**.

![A Solutions Architect capstone proposal from Faiz Ismail: the proposal on the left, the four-point review checklist, the Approve proposal and Request changes options, and the feedback box](/docs/screens/assessor-proposal-review.png)

**What you should see:** back in the queue, "Proposal approved. [Name] can hand in the capstone." or "Changes requested. The proposal is back with [Name]." Neither decision uses any of the candidate's attempts.

## 5. Mark an Architect capstone and record the panel defence

**Why:** an Architect credential needs two things: a capstone that reaches the pass mark on the rubric, and a panel that accepts the candidate's defence of it.

A capstone opens on the same marking page as a lab exam, labelled **Capstone + defence**, with the date the proposal was approved. Below the rubric there is an extra **Panel defence** section.

1. Mark every rubric criterion with a mark and feedback, as in task 2.
2. After the defence session, choose the **Defence outcome**: **Defended** (the panel accepts the design) or **Not defended** (counts as a failed attempt).
3. Add **Panel notes to the candidate** if you want to.
4. Click **Submit marks**. It stays locked until every criterion is marked and the defence outcome is chosen.

**What you should see:** the result is a pass only when both the rubric total reaches 70 and the panel outcome is **Defended**. The graded page then shows both: "Rubric: met / not met. Panel: passed / not passed."

## 6. Raise an integrity concern

**Why:** if work looks copied or not the candidate's own, you raise it, and a platform admin decides. You never rule on your own suspicion. Declared AI assistance is allowed and is not a concern on its own.

1. On the submission, click **Flag for integrity review**.
2. In **What looks wrong**, say what you saw and where: the file, the line, the link. The admin rules on evidence.
3. Click **Raise with admin**.

![The Flag for integrity review dialog with the What looks wrong box and the Raise with admin button](/docs/screens/assessor-flag.png)

**What you should see:** "Raised with platform admin. Marking is paused until they rule on it." The submission shows **Flagged** in your queue, and **Submit marks** is locked. You can still return it for revision. The candidate is not told unless the admin upholds the concern.

The admin records a ruling on **Assessors & integrity** with **Record and clear**. The submission stays on your queue either way. If the concern is upheld, you fail the attempt with the rubric as usual.

## Common questions

**A learner says they handed in days ago, but it is not in my queue.**
It has probably not been assigned yet. Submissions wait on the admin's **Assessors & integrity** page until an admin assigns them to an assessor.

**Can I change a mark after submitting?**
No. Marks are locked once submitted, because the candidate already has the result. Ask a platform admin.

**Does returning for revision cost the candidate an attempt?**
No. Returning for revision and reviewing a proposal never use an attempt. Only a marked fail does.

**What counts towards the 5 working days?**
Monday to Friday, starting from the day the work was handed in. The **Target** column shows the due date for each item.

**Why can't I submit marks on a flagged submission?**
A platform admin has to rule on the integrity concern first. Once they do, **Submit marks** unlocks.

**I am also the series' instructor. Can I mark it?**
Yes, as long as the work is assigned to you. What you can never do is mark your own submission or review your own proposal.
