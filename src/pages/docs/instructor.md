---
layout: ../../layouts/Docs.astro
title: Instructor guide
description: Build a series in the Studio, from an empty screen to a published, assessed certificate, and keep track of what it earns.
---

As an instructor you build **series**. A series is one skill that ends in an assessment. Learners who pass it get a credential, and you earn a share of every sale. You do all of this in the **Studio**: write the series details and learning outcomes, add episodes with video and captions, set the assessment, then publish. Once a series is live, you change it by starting a new version, and you can see how it is doing on **Analytics** and **Payouts**.

## Before you start

| What you need | Who sets it up |
|---|---|
| An account with the instructor role. Without it, there is no **Studio** in the sidebar. | An academy admin |
| Topics such as "API-first" or "Foundation", if you want to file your series under one. Topics are optional. | An academy admin (see the [Academy admin guide](/docs/admin/)) |
| Your video files (MP4 or MOV, H.264) and a WebVTT caption file for every episode. | You |
| A list of learning outcomes. For a Fundamentals series, questions for each outcome too. | You |

Sign in. The sidebar shows **Studio** with two pages: **My series** and **Payouts**.

## 1. Create a series

**Why:** everything else (episodes, assessment, publishing) hangs off a series. A new series starts as a private draft, version 1.0. Nobody else sees it until you publish.

1. In the sidebar, click **Studio**, then **My series**.
2. Click **New series** (top right). If you have no series yet, you can also click **Create your first series** on the welcome card.
3. Fill in the **New series** form:
   - **Title**: name the skill, not the course. The web address (slug) is made from the title now and never changes.
   - **Topic (optional)**: pick one, or leave **No topic**.
   - **Level**: **Fundamentals** (4–6 h, quiz + guided lab), **Practitioner** (6–10 h, hands-on lab exam) or **Architect** (10–12 h, capstone + panel defence). The level sets the credential price and how it is assessed.
   - **Summary**: who it is for and what they can do afterwards. Up to 1,000 characters.
4. Click **Create and open editor**.

![The New series form with a title typed in, the Topic list, the three Level cards and the Summary box](/docs/screens/instructor-new-series.png)

**What you should see:** the series editor opens on the **Details** tab. The header shows **Draft** and **v1.0 · never published**, and the **Ready to publish** box on the right lists what is still missing.

![A new draft series in the editor, with every Ready to publish check still open and the Publish v1.0 button greyed out](/docs/screens/instructor-new-draft.png)

Every series has the same tabs along the top: **Details**, **Episodes**, **Captions**, **Assessment**, **Rubric**, **Analytics** and **Versions**. The **My series** page shows one card per series with its level, status, version and the same checklist.

![My series, with cards for API & Integration, Software Engineering Fundamentals and Solutions Architect, each showing its readiness checklist](/docs/screens/instructor.series.index.png)

## 2. Fill in the series details and learning outcomes

**Why:** the learning outcomes are the backbone of the series. Every assessment question maps to one, a learner who fails is told which outcomes they missed, and the credential lists them. You cannot publish without at least one.

The **Details** tab has three parts:

| Section | What it holds | When changes take effect |
|---|---|---|
| **The series** | **Title**, **Topic**, **Free preview episodes**, **Level**, **Summary** | Straight away on the catalogue, for every version |
| **Certification card** | **Track tag**, **Hands-on lab**, **Tagline**, **What you will learn** chips, **The project**, **When to take it**, **AI-assisted** | Straight away on the catalogue tile and series page |
| **This version** | **Competency**, **Repository**, **Learning outcomes** | Frozen when the version is published |

1. Check the title, topic and summary. **Free preview episodes** is how many of the first episodes anyone can watch without an account.
2. Fill in the **Certification card**. **Assessed by** and **Requires** are set by the level, so you cannot type into them. Add two to five short **What you will learn** chips with **Add**.
3. Under **This version**, write the **Competency**: what the credential will say the holder can do.
4. Paste the **Repository** link if the series is built on a code repository. Anyone who can watch an episode sees it.
5. Under **Learning outcomes**, write each outcome in the box ("The learner can…"). Click **Add an outcome** for the next one, or the **X** to remove one.
6. Click **Save draft**.

![The This version section with the Competency, Repository and two learning outcome rows, next to the Ready to publish checklist](/docs/screens/instructor-outcomes.png)

**What you should see:** a "Draft saved." message, and **Learning outcomes** ticked in the **Ready to publish** box. While you have unsaved edits, a dark bar at the top says **Unsaved changes. Nothing changes until you save.** with its own **Save draft** button.

The **Level** can be changed until the first version is published. After that it is frozen, because issued credentials already name it.

![The Details tab of a published series: the "Version 1.0 is published" notice, the frozen Level cards and the Nothing to publish box](/docs/screens/instructor.series.edit.png)

## 3. Add episodes and upload the video

**Why:** every episode needs its video before the series can publish. The video goes straight from your browser to the video provider, not through the academy server.

1. Open the **Episodes** tab and click **Add episode**.
2. Type the **Title**: what the episode covers, in the words a learner would search for.
3. Click **Save and upload**. The episode is saved straight away.

![The Add episode form over the Episodes list, with "Rate limiting" typed as the title](/docs/screens/instructor-add-episode.png)

4. A blue panel appears: **Choose the video file for** your episode. Click the file button and pick the video (MP4 or MOV, H.264).
5. Keep the tab open until the progress bar reaches 100%. If the tab closes, the episode is still there. Click **Upload video** on its row and choose the file again.

**What you should see:** an "Upload received." message, then the episode's status changes from **Uploading** to **Transcoding** (with a percentage) to **Ready**. The page refreshes itself while something is transcoding. The length is read from the video, so you never type it.

![The Episodes tab for API & Integration: four episodes with their status, length, Free or Paid button and resource, chapter and caption counts](/docs/screens/instructor.episodes.png)

On each episode row you can:

| Control | What it does |
|---|---|
| Up and down arrows | Move the episode in the running order |
| **Free** / **Paid** | Moves the free preview boundary. Switching episode 3 to **Free** makes episodes 1–3 free; the preview is always the opening run. |
| **Upload video** / **Upload a new file** | Shown when an episode has no video yet, or the transcode **Failed** (the reason is shown under the status) |
| **...** > **Resources** | Add links for the episode: **Label**, **URL** (starting with https://) and **Kind** (**Source code**, **Notes**, **Reference** or **Lab**). Click **Add resource**. |
| **...** > **Captions & chapters** | Opens the caption page for this episode (next task) |
| **...** > **Replace video** | Upload new footage. The old video stays live until the new one lands. |

## 4. Add captions, approve them, and add chapters

**Why:** a version cannot publish until every episode has approved captions. Nothing is generated for you, and a learner sees no captions until you approve them.

1. Open the **Captions** tab (or **...** > **Captions & chapters** on an episode).
2. Pick the episode in **Episode** and the **Language**. The list shows each episode's state: no captions, to review, or approved.
3. Paste the caption file into the **WebVTT** box. It must start with `WEBVTT`, followed by timed cues. If your video provider already has captions, click **Fetch from the video provider** to load them instead.
4. Read and correct the text.
5. Click **Approve and publish**. Use **Save draft** if you want to come back to it later.

![The Captions tab: the episode and language pickers, the Approved status, the WebVTT text, the Approve and publish button, and the Chapters panel](/docs/screens/instructor.captions.png)

**What you should see:** "Approved. Learners can turn these on now.", the status chip changes to **Approved**, and the counter at the top right says how many episodes in this version are approved (for example **4 of 4 episodes**).

If you later edit approved captions and click **Save changes**, learners keep the approved text until you approve the edit.

**Chapters** are named moments a learner can jump to. In the **Chapters** panel, type the time in **At** (for example `4:20`, or `1:04:20` past the hour), a **Title**, and click **Add chapter**. Chapters are saved straight away and do not need approval.

## 5. Set the assessment

How a series is assessed depends on its level. You can see this on the **Rubric** tab, which carries a small label: **not required** for Fundamentals, **lab exam** for Practitioner.

| Level | Assessed by | Where you set it up |
|---|---|---|
| Fundamentals | Quiz + guided lab, marked automatically | **Assessment** tab (question bank) |
| Practitioner | Hands-on lab exam, marked by an assessor | **Rubric** tab (brief and rubric) |
| Architect | Capstone proposal, capstone and panel defence | **Rubric** tab (brief and rubric) |

### 5a. Fundamentals: build the question bank

**Why:** each attempt draws a random set of questions from the bank. The publish checks need every question mapped to an outcome and enough questions to draw a paper.

1. Open the **Assessment** tab.
2. Under **Exam settings**, set **Questions per attempt** and **Time limit (min)**. The **Pass mark** is set by the academy for every series (70%) and cannot be changed here.
3. Choose what learners see **After an attempt**: **Show outcome breakdown on fail** (on by default) and **Reveal correct answers** (off by default).
4. Click **Create the exam** (or **Save settings** once it exists).
5. Click **Import** (top right) or **Import Markdown**. Questions are added by pasting Markdown, not one at a time in a form.

![The Import questions panel: the format example, the Paste the bank box, the Replace the current bank option and the Import button](/docs/screens/instructor-import-questions.png)

6. Paste your questions in this format, then click **Import**:

```
## Outcome 0
- [ ] What does an empty collection sum to?
  * A: null
  * B: 0    <- correct
  > Sum over nothing is zero.
```

   - `## Outcome 0` maps the questions under it to your **first** learning outcome, `## Outcome 1` to the second, and so on. The numbers start at 0, but the screen shows them from 1, so `## Outcome 0` appears as **Outcome 1**.
   - `- [ ]` starts a question. Each `* A:` line is an option. Mark the right answer with `<- correct`. Mark more than one and it becomes a multi-select question.
   - A line starting with `>` is the explanation.
   - Tick **Replace the current bank** to swap the whole bank. The old questions are switched off, never deleted, so past attempts still grade.

**What you should see:** "12 questions imported" (or however many), the **Question bank** list, the **Pool** count with a meter, and **Coverage by outcome**. If anything is wrong, **Nothing was imported** lists every problem by line, and nothing is saved until you fix them all.

![The Assessment tab for Software Engineering Fundamentals: exam settings, the Ready to publish notice, the question bank, the Pool of 12 and coverage of 3 questions per outcome](/docs/screens/instructor-assessment-fundamentals.png)

Aim for a pool of at least double the draw, so two attempts rarely look alike. An outcome marked **too few** has fewer than 2 questions. To take a question out of the draw, click **...** on its row, then **Deactivate**.

### 5b. Practitioner and Architect: write the brief and rubric

**Why:** a person marks the practical against this rubric. An Architect series cannot publish without it, and a rubric is the only way to make a Practitioner series a hands-on lab exam.

1. Open the **Rubric** tab.
2. Write the **Lab exam brief** (Practitioner) or **Capstone brief** (Architect): what the candidate must build. The candidate sees it when they hand in, and the assessor sees it while marking.
3. For each **Criterion**, type its name, its **Weight**, and **What "met" looks like**. Be specific: the assessor marks against these words.
4. Click **Add criterion** for the next one.
5. Watch the **Weights** box. The weights must add up to exactly 100 before **Save rubric** unlocks.
6. Click **Save rubric**.

![The Rubric tab for a draft Practitioner series: the lab exam brief, one criterion weighted 60, and the Weights box showing 60 / 100 with Save rubric still locked](/docs/screens/instructor-rubric-builder.png)

**What you should see:** "Rubric saved." and **A rubric to mark the practical against** ticked in the checklist. Assessors mark each criterion 0–100. The final score is the weighted total, and 70 passes. Once published, the rubric is shown read-only:

![The published rubric for API & Integration: the lab exam brief and three criteria, It works 50, Operability 30 and Write-up 20](/docs/screens/instructor.rubric.png)

## 6. Check readiness and publish

**Why:** publishing puts the series on sale and freezes what this version attests. The **Publish** button stays locked until every check passes. You are not warned and allowed through; you are stopped.

The checks are:

| Check | How to fix it |
|---|---|
| **Learning outcomes** | Write at least one on **Details** |
| **Every episode has its video** | Upload a video for each episode on **Episodes** |
| **Every episode has approved captions** | Approve captions for each episode on **Captions** |
| **An assessment** | Create the exam (Fundamentals) or save a rubric (Practitioner, Architect) |
| **Every question maps to an outcome** | Fundamentals only. Deactivate or re-import questions for outcomes this version no longer has |
| **Enough questions to draw a paper** | Fundamentals only. Import more questions, or lower **Questions per attempt** |
| **A practical, as Architect requires** | Architect only. Save a rubric |
| **A rubric to mark the practical against** | Practitioner and Architect. Save a rubric with weights totalling 100 |

1. Open **Details** (or **Versions**) and look at the **Ready to publish** box. It counts the checks done, for example **4 of 4 checks**.
2. When every check is ticked, click **Publish v1.0**.
3. A confirmation asks **Publish v1.0?** and reminds you that publishing freezes what the version attests. Click **Publish v1.0** again.

**What you should see:** "Version published. Credentials already issued are unaffected." The series card on **My series** shows **Published** and "Live. Edits go into a new draft version, started on Versions." The series appears in the public catalogue straight away.

There is no separate approval step: once every check passes, you publish it yourself. An academy admin can still archive or unpublish a series from **Catalogue management**.

## 7. Change a live series: start a new version

**Why:** a credential is tied to the version the learner passed. If you could edit a published version, every credential already issued would quietly start meaning something else. So a published version is frozen, and changes to the competency, outcomes, episodes or assessment go into a new draft.

What you can still change on a live series without a new version: everything in **The series** (except the level) and the **Certification card**. Those show on the catalogue straight away.

For anything else:

1. Open the **Versions** tab.
2. Under **Start a new version**, check the **Version label**. It suggests the next minor version (for example **1.1**). Labels are written as major.minor.
3. Click **Start draft** and confirm.

![The Versions tab for API & Integration: what is copied forward and what is not, the version label 1.1 with Start draft, and the history showing v1.0 as Current with 0 credentials](/docs/screens/instructor.versions.png)

**What you should see:** "Draft 1.1 created from 1.0." The draft starts as a copy of the live version.

| Copied forward | Not copied |
|---|---|
| Episode titles, order and durations | Video: every episode needs a new upload |
| Learning outcomes and the competency | Captions, chapters and resources |
| The repository link | |
| The question bank, exam settings and rubric | |

Then work through the tabs as before. The live version stays on sale, unchanged, until you publish the draft. When you do, the catalogue and new attempts move to the new version, the old one shows as **Superseded**, and every credential issued on it still verifies. The **History** list shows how many credentials each version holds.

You can have only one draft at a time.

## 8. Read your analytics

**Why:** to find out where learners stop watching and which questions are not working.

Open the **Analytics** tab. It always shows the published version, because a draft has no learners.

| Section | What it shows | When it appears |
|---|---|---|
| **Learners started** / **Finished the series** | How many learners began, and how many reached the end | Always |
| **Where people stop** | The share of learners who reached each episode, as a **Chart** or **Table**, with the steepest drop named | Once at least 10 learners have started |
| **Item analysis** | For each question: **Difficulty**, **Discrimination**, how often it was **Asked**, and a **Verdict** (**Check the key**, **Too hard**, **Too easy** or **Normal**) | Once there are at least 20 graded attempts |

![The Analytics tab for API & Integration, with no learners yet: Not enough data yet and Not enough attempts yet](/docs/screens/instructor.analytics.png)

A question marked **Check the key** is usually a wrong answer key, not a hard question. Click **Open the bank** to go to it.

## 9. Check your payouts

**Why:** to see what you have earned. Your share is 70% of sales minus refunds, excluding SST.

1. In the sidebar, click **Payouts**.
2. The box at the bottom, for example **October 2026 so far**, is an estimate for the current month, per series, with sales, refunds and **Your share (70%)**. It can still go down if a learner is refunded.
3. On the 1st of each month a statement is made for the month before. It then shows in the list with **Period**, **Series**, **Net revenue**, **Your share** and **Status**. Click **View** for the detail, or **Download CSV**.

![Payouts with no statements yet, and the October 2026 estimate: API & Integration MYR 174.30 and Software Engineering Fundamentals MYR 104.30, MYR 278.60 in total](/docs/screens/instructor.payouts.png)

A statement never changes once it is issued. Statements are paid by bank transfer, and the bank reference then appears on the statement.

## Common questions

**I published by mistake. Can I take it back?**
Not from the Studio. Ask an academy admin: they can archive the series or change its status in **Catalogue management**. Credentials already issued are not affected.

**Why is Publish greyed out when everything looks done?**
Look at the **Ready to publish** box: each unticked line says what is missing. The most common one is captions: every episode needs approved captions, not just saved ones.

**I started a new version and now every episode says "Needs video". Is something broken?**
No. A new version copies the episode titles and order but not the videos, captions, chapters or resources. Upload each video and approve the captions again.

**Can I delete a series?**
Only a series nobody depends on yet. Click **...** on its card in **My series**, then **Delete**. If it has orders, issued credentials, learners with access, or a product on sale, **Delete** is greyed out with the reason under it; ask an admin to archive it instead.

**Can I change the level after publishing?**
No. Credentials already issued say the level, so it is frozen once any version is published.

**Who marks my Practitioner and Architect practicals?**
An assessor, not you. An academy admin assigns each submission to an assessor. See the [Assessor guide](/docs/assessor/).

## What's not available yet

- **Video links.** Every episode's video must be uploaded as a file. You cannot paste a YouTube or other video URL.
- **Typing questions in a form.** Questions are only added by importing Markdown on the **Assessment** tab.
- **Uploading a caption file.** Paste the WebVTT text into the box, or fetch it from the video provider.
- **Automatic captions.** Captions are never generated for you.
- **Discarding a draft version.** Once you start a draft, the only way forward is to finish and publish it.
