# BIRTHDAY WEBSITE — FULL CREATIVE SCRIPT
### A cinematic interactive experience in 6 acts
*Written for AI implementation. User will supply photos and videos as reference.*

---

## HOW TO USE THIS SCRIPT

You are receiving this script along with photos and videos. Your job is to build the website exactly as described — not a cleaner version, not a "safer" version, this one. Each act is a separate "scene," built in sequence, the way a memory unfolds rather than the way a website is normally laid out. The photos and videos the user provides are **visual reference and source material** — embed them, animate them, or draw color palettes from them. Each scene tells you exactly where they go.

Nothing here is decorative for its own sake. Every pause, every fade, every "hold 3 seconds" exists because someone is going to be sitting on the other end of the screen, and the pacing is doing emotional work. Do not rush a hold to "improve" the UX. The slowness is the point.

**Stack:** React (single page, scroll-driven). No libraries except Framer Motion for animation and Howler.js for audio. Everything else is vanilla CSS and emotion.

**Typography:**
- Display / handwritten lines → `"Caveat"` (Google Fonts)
- Body narration → `"EB Garamond"` (Google Fonts)
- UI elements → `"DM Sans"` (Google Fonts)

**Color system — STRICT. Only these colors. No exceptions:**
- Primary background: deep purple `#1a0a2e`
- Secondary background: dark crimson `#2d0a1a`
- Accent 1: rich purple `#6b21a8`
- Accent 2: deep rose-red `#9f1239`
- Highlight: soft mauve `#c084fc`
- Text: warm white `#fdf4ff`
- Silence color: `#2a0f3a` (used on moments meant to breathe)
- Glow effect: `rgba(192, 132, 252, 0.15)` — used for soft halos around photos and Sanrio elements

**Sanrio elements — IMPORTANT:**
She loves Sanrio. Sprinkle Sanrio characters throughout the site as small floating decorations — NOT as main design elements, but as tiny companions that live at the edges of scenes. Use SVG illustrations or PNG stickers of: **My Melody, Kuromi, Cinnamoroll, Hello Kitty, Pompompurin**. Kuromi and My Melody especially — they fit the dark purple/red theme perfectly. Rules for Sanrio placement:
- Always small (48–80px max)
- Always slightly transparent (0.7–0.85 opacity)
- Always gently floating (slow sine-wave bob, 3–4s cycle)
- Never centered, never in the way of text
- Sprinkle 2–3 per act, tucked into corners or edges

**Audio:** Each act has a music cue noted. Crossfade between acts over 2 seconds. Fade to silence where noted.

**Principle:** She should feel *observed*, not performed at. Every line should feel like it was written by someone who was paying attention.

---

## PHASE 0 — PRE-BIRTHDAY WAITING SCREEN
### *Shows only if the site is opened BEFORE September 11. Hidden once her birthday arrives.*

**Condition:** Check today's date on load. If date < September 11 → show this screen and block all other content. If date >= September 11 → skip directly to the Lock Screen.

**Visual:**
- Full screen. Background: soft pink `#fce4ec` — warm, not hot. This is the ONLY scene that breaks the dark theme. It should feel like a wrapped gift before it's opened.
- Dead center: a large circle (280px diameter on mobile, 360px on desktop).
  - Border: 4px solid soft rose `#f48fb1`
  - Soft glowing shadow: `box-shadow: 0 0 40px rgba(244,143,177,0.4)`
  - Inside: **her photo** (user provides — best smiling photo, cropped to circle)
- Below the circle, in `Caveat` font, warm rose color `#c2185b`, large:

> *"jaanu 🎀"*

- Below that, in `DM Sans`, smaller, soft grey-pink:

> *"your something is waiting for you."*

- Below that: the countdown. Format it warmly, not like a timer widget:

> *"[X] days · [X] hours · [X] minutes"*

Update every second (JavaScript `setInterval`). No seconds shown — too anxious. Days/hours/minutes only.

- Below the countdown, in tiny `EB Garamond` italics:

> *"come back on September 11. 💗"*

**Sanrio:** 4–5 Sanrio characters float around the circle at the edges of the screen. My Melody top-left. Cinnamoroll top-right. Kuromi bottom-left. Hello Kitty bottom-right. Pompompurin somewhere mid-left. All gently bobbing.

**Confetti-but-make-it-cute:** Every 8 seconds, a small shower of tiny hearts (♡) and stars (✦) drifts down slowly from the top — in pink and rose tones only. Subtle. Like the page is quietly excited.

**Audio:** Soft, looping music box melody. Gentle. No lyrics. Something that sounds like a music jewelry box.

**When September 11 arrives:** The pink screen fades out over 2 seconds. The dark Lock Screen fades in. The gift is now open.

---

## LOCK SCREEN
### *The moment she opens it on her birthday.*

**Purpose:** Make the act of opening the site feel like untying a ribbon.

**Visual:**
- Full screen. Dark purple background `#1a0a2e`.
- Center: her name, in `Caveat`, large, warm white, handwritten-feeling. Not animated. Just present. Like it was already there.
- Below the name, in small `EB Garamond` italics, soft mauve `#c084fc`:

> *"this was made for you.*
> *it has been waiting."*

- Below that: a single small button. No heavy border — just a soft mauve outline, rounded:

> `[ open it 🎀 ]`

- Kuromi sits bottom-right corner, small, bobbing gently. My Melody sits top-left, equally small.
- Faint purple particle shimmer in the background — like stars, but slow and soft.

**Interaction:** When she clicks "open it" — her name exhales — fades to 0 opacity over 1.2 seconds. Act 1 fades in from darkness.

**Audio:** Silence. No music yet. The silence is intentional.

---

## ACT 1 — "THE CLOTHESLINE"
### *Emotional purpose: she existed before this story. All of it was already beautiful.*

**Visual setup:**
- Horizontal scroll section. A thread runs across the screen — deep rose-red color, slightly glowing.
- Polaroids hang from the thread with tiny clothespins. Each polaroid has a dark purple border, cream interior. Contains **one of her photos** (provided by user). 6–8 photos max.
- The thread sways very slightly — looping sine-wave animation, 2px movement. Barely there.
- Polaroids hang at slightly different heights. Slight random rotation (never more than ±4°).
- Small Kuromi and My Melody stickers peek out from behind 2 of the polaroids, like they snuck in.

**Entry narration** (appears word by word, top of screen, soft mauve, before scroll begins):

> *"before I say anything —*
> *look at all of these."*

Then it fades. And the clothesline is there.

**Interaction — polaroid flip:**
Each polaroid, when clicked, flips (card-flip animation, 0.6s, ease-in-out). The back of each polaroid is dark purple with warm white `Caveat` handwriting. Each message is a quiet observation — NOT a declaration.

**Messages for polaroid backs (customize with real moments):**
1. *"you don't know how good you look when you're not trying."*
2. *"I caught you doing this and I thought — there she is."*
3. *"you were somewhere else in your head here. I didn't interrupt."*
4. *"this is one of my favorites. you look like yourself."*
5. *"you laughed right after this. I know because I was there."*
6. *"I kept this one."*

**Audio cue:** Soft acoustic guitar. Single instrument. No percussion.

**Exit:** After all polaroids revealed (or 30 seconds inactivity), at the far right edge:

> *"there's more →"*

**Transition:** Thread tilts upward and off-screen. Background dissolves into Act 2.

---

## ACT 2 — "THE FLASHBACK"
### *Emotional purpose: her life has had dumb, sweet, embarrassing, gorgeous moments. He saw them. He kept them.*

**Visual setup:**
- Full screen, VHS aesthetic. Dark red-purple background.
- Slight grain overlay (CSS noise texture, 4% opacity — subtle, not retro-kitsch).
- Rounded-corner video frame with a dark crimson vignette on edges.
- A small VHS label on the corner in mauve: *"her, being her — [year]"*
- Cinnamoroll sits in the bottom-left corner of the VHS frame, small, like he's watching too.

**Video sequence:**
User provides videos (YouTube unlisted embeds or direct files). Play in sequence. Each autoplays when previous ends.

**Between videos:** 1.5-second dark frame. No text. Just darkness. Like the tape being paused.

**After the last video:** Screen holds 3 seconds. Then text types itself, slowly, in warm white `EB Garamond`:

> *"you went through all of that.*
> *and you're still you.*
> *I don't know how you do it.*
> *but you have to keep doing it.*
> *okay?"*

Hold 5 seconds after last character. Then:

Bottom right: `↺ watch again` (small, mauve)
Below: `or keep going ↓` (tiny, faded)

**Audio cue:** Nostalgic piano. Single hand. Slow.

**Transition:** VHS frame shrinks like being turned off. Screen goes dark. Act 3 fades in.

---

## ACT 3 — "THE GAMES"
### *Emotional purpose: a breath. Playful. She is allowed to just exist here.*

**Implement Option A — "What Kind of Day Are You Today?"**

4 mood cards appear, dark purple background, rose-red borders, Sanrio character on each card:
- 🌸 My Melody card: *"soft and a little dreamy"*
- 🖤 Kuromi card: *"kinda moody but make it cute"*
- ☁️ Cinnamoroll card: *"floating somewhere far away"*
- ✨ Hello Kitty card: *"actually really good, actually"*

She taps one. A small personal note appears written for that mood. All 4 end the same way:

> *"whatever kind of day it is — you're allowed to have it."*

**Audio cue:** Ambient lo-fi. Light. Warm.

**Transition:** Soft paper-curl effect into Act 4a.

---

## ACT 4A — "THE WECHAT"
### *Emotional purpose: memory. Proof that they were there. The relationship, witnessed.*

**Visual setup:**
- A phone frame, centered. Dark purple bezel. WeChat-style chat UI inside with dark theme.
- `hisLover<3` — left, dark grey bubbles, mauve text
- `herlover<3` — right, deep rose-red bubbles `#9f1239`, warm white text
- No avatars. Just names and words.
- My Melody sits above the phone frame, tiny, watching.

**Behavior:** Messages appear one at a time, automatically. Each message:
1. Typing indicator (`···`) for 1–2 seconds
2. Message appears with soft pop-in
3. 1.5–3 second pause before next

**The conversation:**

```
hisLover<3:  kya krrhi hai?
             [pause 2s]

herlover<3:  aapse pyaar
             [pause 2s]

hisLover<3:  acha ji
             [pause 1.5s]

herlover<3:  hanjiiiiiiii
             [pause 2s]

hisLover<3:  birthday aa gaya tera aaj!
             [pause 2s]

herlover<3:  haa ab badi ho gayi main 18 ki
             [pause 1s]

herlover<3:  ab to aap pakka commit kar lo naa
             [pause 1s]

herlover<3:  dekho — dono 18 ke hain. you said no dating before 18.
             ab to main 18 hoon. 🙂
             [pause 5s — long pause. let him compose himself.]

hisLover<3:  ruk ruk ruk
             [pause 1.5s]

hisLover<3:  kya bol rahi ho aap
             [pause 3s]

hisLover<3:  haaaa shona.
             [pause 3s]

hisLover<3:  I am so thankful to have you by my side.
             [pause 2s]

hisLover<3:  I love you so much.
             [pause 2s]

hisLover<3:  Like I have said before — bonds don't shatter on tombs.
             They give tombs a reason to exist.
             [pause 3s]

hisLover<3:  Just like that, you became a reason for me to exist.
             [pause 4s]

hisLover<3:  You have seen and experienced so much this year.
             But you went through all of it.
             [pause 2s]

hisLover<3:  You held me just as dearly as you held your own life —
             maybe even more dearly.
             [pause 3s]

hisLover<3:  Your eyes shone with my name.
             And they never once hurt with it.
             It was just — love. Plain and simple.
             [pause 3s]

hisLover<3:  You kept going. You helped yourself.
             You accepted me as your partner and refused to see it
             any other way.
             [pause 2s]

hisLover<3:  You always cared for us.
             [pause 2s]

hisLover<3:  This relationship stands because of you.
             [pause 4s]

hisLover<3:  You stayed awake on nights I slept through.
             You hid your worries so I wouldn't panic.
             You cared for me the way only someone who truly loves
             you can.
             [pause 3s]

hisLover<3:  You were gentle from the very beginning.
             [pause 5s — the longest pause. everything leads here.]

hisLover<3:  I may not always be enough for someone like you.
             But these eyes — they shine for you.
             And this heart skips every time I get to look at you.
             [pause 3s]

hisLover<3:  So here's what I want to say.
             [pause 2s]

hisLover<3:  This dumb boy still wants to be your shelter.
             And he's asking — will you let him?
             [pause 2s — then TWO BUTTONS appear]
```

**Two buttons fade in, centered below the chat. Rounded. Dark red border, mauve text. `Caveat` font, large:**

```
[ YESSSSSSSSSSSSs ]          [ ABSolutelyyyyyyyyyyyyyyy yes ]
```

**When she taps either:** Both buttons fade. Kuromi does a tiny happy wiggle animation (1 second). Then:

```
hisLover<3:  finish this quickly.
             the boy is waiting. 🙂
             [END OF CHAT]
```

**After final message:** Chat holds 4 seconds. Fades. Only the last line remains, large, centered, outside phone frame, `EB Garamond` italics, soft mauve:

> *"the boy is waiting."*

Hold 5 seconds. Fade gently to Act 4b.

**Audio cue:** Ambient lo-fi through conversation. When buttons appear — music drops to near-silence. When she clicks — single soft chime. Music breathes back in.

---

## ACT 4B — "THE KID PICTURE"
### *Emotional purpose: she was always going to be this person. This was always going to happen.*

**Visual setup:**
- Full screen. Dark purple background `#1a0a2e`.
- TWO photos, side by side, centered:
  - LEFT: her childhood photo (provided by user — earliest available, smiling)
  - RIGHT: a current photo of her (provided by user — same energy, candid)
  - Both softly glowing with purple halo. No frames. No labels. No explanation.
  - Very slow Ken Burns zoom on both: 100% → 108% over 8 seconds.
- Small Pompompurin sits between the two photos, tiny, looking left then right (2-frame animation).

**After 3 seconds, text appears below, letter by letter, `Caveat` font, warm white:**

> *"happy birthday, big me.*
> *you made it.*
> *live well.*
> *mwaaaaaah."*

Each line appears on its own. 1.5 seconds between lines.

**After last line:** 3 seconds silence. Then 5–7 small hearts drift upward slowly from the bottom. Soft, quiet. Rose-red and mauve colored hearts. The page exhales.

**Audio cue:** Music stops completely. Silence.
Then as hearts drift: a single piano note. Sustained. Fades.

**Transition:** Photos and text fade to near-black. Act 5 begins.

---

## ACT 5 — "THE POEM"
### *Emotional purpose: the thing that makes her cry. Everything builds to this.*

**Visual setup:**
- Background: dark purple `#1a0a2e`, slowly warming to deep crimson `#2d0a1a` by end.
- Lines appear one at a time as she scrolls. Each fades in from 0 opacity + 8px upward shift.
- Lines are LEFT-ALIGNED. Not centered. Left-alignment feels like a letter.
- Font: `EB Garamond`, 22–26px, line-height 2, warm white.
- Tiny Sanrio characters float at the far left margin — small, barely visible, like they wandered in to listen.

**Audio cue:** The main song begins. Full and warm. (User provides the song — instrumental preferred, or something meaningful to both of them.)

**THE POEM**
*(Render each `---` as a 2-second pause before the next line appears)*

```
there is a version of you that exists
in small, unwitnessed moments —

the way you hold your phone
when you're thinking about something else.

the sound you make
when something surprises you.

the exact way your face moves
before you decide how to react.

---

I have been paying attention.

---

I know how you carry yourself
when you're not sure anyone is watching.

I know which laugh is the real one.

I know the version of you
that doesn't perform for anyone —

and I want you to know:
that version is the one.

---

you have spent a lot of time
trying to be enough.

you already were.

---

the year you just lived
had weight in it.

I watched you carry it.
I don't think you know how strong you are.
I don't think anyone has said it plainly enough.

so:

you are strong.
not despite the soft parts.
because of them.

---

you turned 18 today.

which means you have spent 18 years
becoming the person
that I get to know.

I don't take that lightly.

---

happy birthday.

not as a celebration
of the day you arrived —

but as a celebration
of every day since
you chose to stay.

---

I'm glad you're here.

I'm glad you're you.

I'm glad I get to know you
in the ordinary moments —

which,
when they're yours,
are not ordinary at all.
```

**After last line:** 6 seconds. Music continues softly.

Then, smallest font on page (`DM Sans`, 11px, centered, faded mauve):

> *"there is more. but some of it doesn't need to be said."*

Hold 4 seconds. Transition to Finale.

---

## FINALE — "THE SIGN-OFF"
### *Emotional purpose: landing. Quiet. Real.*

**Visual setup:**
- Background: deep dark `#0d0014` — the darkest the site gets. Warm dark, not cold.
- 2 seconds of complete emptiness after transition.
- Then, `Caveat`, large, centered, warm white — unhurried:

> *"happy birthday, meri jaan."*

A small `💗` appears 0.5 seconds later. Not animated. Just appears.

**Hold.** 5 full seconds.

**Then, bottom center, very small, very quiet, `DM Sans` faded mauve:**

> *"made for [her name] · 11 september · with everything I have"*

**Sanrio finale:** After 3 seconds of the sign-off being visible, all five Sanrio characters — My Melody, Kuromi, Cinnamoroll, Hello Kitty, Pompompurin — slowly drift in from the edges of the screen, tiny, and settle quietly around the text. Like they came to witness. They don't dance or animate dramatically. They just arrive. And stay.

**Audio:** Music fades completely over 4 seconds. By the time only the sign-off remains — silence.

**No scroll prompt. No button. No share widget. No social links.**

The site ends here, in silence and darkness, with her name and five small friends.

**Optional easter egg (light effort, high payoff):** if she scrolls back up after the sign-off, let the darkened screen hold one very small, very quiet last line, `DM Sans`, barely visible, bottom corner:

> *"still here. always was."*

Nothing else changes. It's not a new scene — just a whisper for anyone who goes looking.

That's the gift.

---

## IMPLEMENTATION NOTES FOR AI BUILDER

### Photos provided by user:
- Childhood photo → Act 4b (LEFT position)
- Current candid photo → Act 4b (RIGHT position)
- 6–8 candid photos → Act 1 polaroids (prefer unposed, real moments)
- Best smiling photo → Pre-birthday waiting screen (circle crop)

### Videos provided by user:
- YouTube unlisted embeds or direct files for Act 2
- Each clip ideally under 60 seconds
- Direct files → `<video>` tags

### Sanrio assets:
- Source SVGs or PNGs for: My Melody, Kuromi, Cinnamoroll, Hello Kitty, Pompompurin
- All must be small (48–80px), semi-transparent (0.7–0.85), gently bobbing
- Kuromi and My Melody are the primary pair — use them most

### Color reminder — STRICT:
Only dark purple, deep crimson, mauve, rose-red, warm white. No blue. No green. No orange. No yellow. No light backgrounds inside the main site (only the pre-birthday screen is pink).

### What NOT to do:
- Do not add confetti (except the heart/star drift on the pre-birthday screen)
- Do not use red as a standalone bright color — always deep/dark red
- Do not autoplay music on the lock screen — silence is intentional
- Do not center-align the poem
- Do not add a share button anywhere
- Do not use Comic Sans — use `Caveat` for all handwriting
- Do not make Sanrio characters large or centered — they are small companions, not mascots
- Do not put his name on the site visually — his presence is felt, not labeled
- Do not use jump-cut transitions — everything crossfades, everything breathes

### Responsive:
- Mobile-first. She will open this on her phone.
- Clothesline horizontal scroll must work with touch/swipe
- Phone frame in WeChat scene should fill ~85% of mobile screen width
- All font sizes tested at 375px width
- Sanrio characters repositioned for mobile (never blocking text)

### The one rule above all others:
> Every word on this site should feel like it was written by someone who was paying attention.
> If a line could have been written by anyone, rewrite it until it couldn't.

---

## ZERO-COST EXECUTION PLAN
### *Everything below can be done without spending a rupee.*

**1. The code itself — free.**
React, Framer Motion, and Howler.js are all free, open-source npm packages. There's no license fee anywhere in the stack you specified.

**2. Sanrio assets — one thing to be careful about.**
Official My Melody / Kuromi / Cinnamoroll / Hello Kitty / Pompompurin art is Sanrio's copyrighted IP. For a private gift that only she will ever open, the practical risk is close to zero — nobody's scanning a personal link. But if you want this to be genuinely worry-free (and future-proof, in case you ever want to show it off publicly or repost a clip):
- Use fan-made "kawaii companion" SVG packs that are explicitly free-for-personal-use (search "kawaii ghost/bunny sticker pack SVG free" on sites like Flaticon or unDraw), recolored to fit the palette.
- Or — and this fits the site's spirit even better — commission nothing, draw nothing, just describe the *vibe* of each character (Kuromi's mischief, My Melody's softness) to your AI builder and let it design 5 small original companion mascots inspired by that energy. It becomes yours instead of borrowed.
Either path costs $0.

**3. Photo & video hosting — free.**
- Photos: bundle directly into the project as local image files. A repo full of compressed images costs nothing to host.
- Videos: embed as **unlisted YouTube links** (unlimited, free, no bandwidth cost to you) exactly as the script already specifies. Unlisted means it's not searchable or on your channel — only someone with the exact link can see it.
- If you'd rather not touch YouTube at all: Cloudinary's free tier (25GB storage + bandwidth) hosts direct video/image files and gives you a clean embeddable URL.

**4. Music — free, with one caveat.**
If the "main song" in Act 5 is a copyrighted track you both love, that's fine for a private, unshared gift — just don't host it on a public bandwidth-metered CDN or upload the site publicly indexed. Keep the file local to the project or on a private Cloudinary link. If you'd rather sidestep the question entirely, Pixabay Music and the YouTube Audio Library both have instrumental, royalty-free tracks in similar emotional registers (piano/acoustic) that cost nothing and carry zero risk.

**5. Hosting the finished site — free.**
Deploy to **Vercel**, **Netlify**, or **GitHub Pages** — all have permanent free tiers for a static/React site like this, with HTTPS and a subdomain (e.g. `yourproject.vercel.app`) included. None of them require a credit card for this tier. Skip a custom domain unless you want one (that's the one piece with a small annual cost, ~$10–12/yr, and entirely optional).

**6. Keeping it private.**
You don't need a login system. The site being on an unlisted, un-indexed subdomain that only she has the link to is enough. If you want a lightweight extra layer, Netlify and Vercel both offer simple password-protection on their free tiers.

**Total cost: $0**, unless you choose to buy a custom domain later.

---

## WHICH AI MODEL SHOULD ACTUALLY BUILD THIS

This is a long, sequential, emotionally-timed script — the hard part isn't generating "a nice website," it's holding all six acts, the exact color rules, the pacing, and Hinglish dialogue faithfully across one long build without drifting or simplifying it into something generic. That favors whichever tool can hold the whole script in context and follow it literally, not whichever makes the flashiest demo.

**Best fit: Claude, directly.**
Since this script already lives here, the most efficient path is to have Claude build the actual React project from it — either right here (Claude can generate the full app), or in **Claude Code** (the desktop app), which is built for exactly this kind of "take a real spec, produce a real codebase" work, and lets you keep iterating scene-by-scene without losing earlier acts.

**If you want a browser-based, deploy-in-one-click option instead:**
- **Bolt.new** — free tier, runs a full React project in-browser, one-click deploy. Good at faithfully following a long detailed prompt like this one; paste the whole script in as the starting instruction.
- **v0.dev** — produces very clean React/Tailwind code and is excellent for polish, but leans toward compressing long narrative specs into something tidier and more "component-library" — riskier for a script this specific and emotionally paced.

**Recommendation:** build it with Claude first (here, or in Claude Code) since it already has full fidelity to this exact document, then deploy the output to Vercel or Netlify's free tier. If you want a second visual pass purely on polish afterward, Bolt.new or v0 can refine specific components — but the emotional backbone should come from a build that actually read the whole script.

---

## HOW TO GIVE YOUR PHOTOS, VIDEOS & OTHER INPUTS

Whoever builds this needs everything organized and named so it maps cleanly onto the script — scattered, unlabeled files are the #1 reason AI builders misplace or skip assets.

**Set up one folder (Google Drive, free, is fine) structured like this:**
```
/birthday-site-assets
  /lockscreen        → her single best smiling photo (this becomes the pre-birthday circle photo too)
  /act1-clothesline   → 6–8 candid, unposed photos, numbered act1-01.jpg, act1-02.jpg...
  /act2-flashback     → video files OR a list of YouTube unlisted links, in the order they should play
  /act4b-then-now     → exactly 2 photos: her earliest childhood photo, and a recent candid one with similar energy
  /act5-song          → the instrumental or meaningful track for the poem section
```

**A few practical specs that save rebuild time later:**
- **Photos:** JPG or PNG, compress to under ~1MB each first (squoosh.app is free and takes 10 seconds per image) — large uncompressed photos are the most common reason a "free" host quietly hits a limit.
- **Aspect ratio:** doesn't need to be perfect — square-ish photos work best for the polaroids and the circle crop; the then/now photos in Act 4b look best if both are roughly the same crop (portrait, waist-up or closer).
- **Videos:** keep each clip under 60 seconds as the script specifies. Either upload as **unlisted YouTube links** (simplest, free, no file-size stress) or send the raw files if you want them embedded directly.
- **The song:** just the audio file itself, or a link to it — whatever format you have is fine, it'll get compressed appropriately during the build.
- **Her real name:** needed in two places — the Lock Screen and the Finale sign-off line — plus double-check "jaanu," "shona," and "meri jaan" are all names you actually want kept, since the AI will use them exactly as written.

**Delivery:** once the folder's organized, either share the Drive link directly in the chat with whichever AI tool is building this, or — if using Claude or Claude Code — just attach the photos/videos straight into the conversation; both accept image uploads natively, and Claude Code can read local files directly from a project folder.

---

*End of script.*
