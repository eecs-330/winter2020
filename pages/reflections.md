---
layout: assignment-two-column
permalink: /reflections/
---

# Configuration and Installation
To run this course website locally, please install Jekyll and then do the following:

```bash
bundle install              # to install dependencies
bundle exec jekyll serve    # to run Jekyll from command line

# Then open link in a web browser:
# Server address: http://127.0.0.1:4000/winter2020/
```

# About the Course Materials
These HCI 330 course materials are based on the work of Mike Horn, Nell O'Rourke, and others. HCI 330 is a 10-week undergraduate course in the Department of Computer Science at Northwestern University that introduces some principles for designing and analyzing interactive, user-facing computer systems. Topics include user-centered design, prototyping and evaluation techniques, accessibility, and graphical design fundamentals. The course also reviews emerging areas of HCI research. 

As students learn these principles, they also work in teams to design and evaluate a web app, using HTML5, CSS, and JavaScript.

# Experimental Material (Winter 2020)
This quarter, I had a few experimental learning goals for students -- some relating to the design and analysis of human-computer systems, and some relating to practical/technical skill development. These two sets of learning goals came out of challenges I encountered while teaching the course previously (Winter, 2019), as elaborated below. I didn't formally evaluate any of these lessons, but in the sections below, I share some qualitative accounts of my own experiences, and some student reflections (as documented in a [post-course questionnaire](https://docs.google.com/forms/d/1RDIdkrb2kp8jtjZPRLWZxJaqaC6J2rt4lwzT0LGovo0/edit#responses) that I administered).

## Design Analysis Goals
In terms of analyzing the design of computing technologies, I wanted students to spend a little more time thinking about the social implications of computer-mediated systems, and how a designer's values and assumptions can have serious impacts on the world.

### Goal 1: A recognition that technologies shape individual behavior AND larger social systems
**Broad Question:** How do you help students (i.e. future technology designers) examine how computing technologies can and do impact on different groups of people -- both intentionally and unintentionally?

Some approaches I tried:
   1. Assigned 2 articles (Winner, 1980 and Morozov, 2013) on the politics / ideology underpinning various technologies, and discussed them in <a href="https://hci330.github.io/winter2020/lectures/02lecture" target="_blank">Lecture 2: Possibilities and Limits</a>.
   2. Created a homework assignment that asked them to analyze the politics of a technology, based on a similar activity assigned by Sepehr Vakil: <a href="https://hci330.github.io/winter2020/assignments/hw3" target="_blank">HW3: Sociopolitical Analysis</a>. I allowed students to resubmit if they really missed the mark on this one, since this was outside of their comfort zones.
   3. Created an <a href="https://hci330.github.io/winter2020/lectures/26lecture" target="_blank">Ethics Lecture</a> that considered some of the challenges of computer-mediated systems, and how the very same technologies that bring us so many wonderful things can be just as easily used in antisocial ways.

#### Reflection
* I found many of the HW3 essays to be fantastic. That said, many of the essays appeared to have taken no more than 20 minutes to write, with no demonstration that they understood the readings (or even did them). 
* That said, students seemed pretty engaged in the class discussion in Lecture 2 (IMO it was one of the better lectures I gave). 
* I'm pretty sure the ethics lecture bored people (radio silence in terms of class participation), but I don't have any metrics on that.
* When I asked students to rate the value of HW3 (N=33 out of 140), they gave the following feedback (see table below), which was pretty disappointing. While of course I do think that the spirit of the assignment is extremely valuable, there is obvious more work to be done in order to make these ideas land with students.

{:.small}
| How valuable did you find HW3? | Count |
|--|--|
| Not Valuable | 7 |
| Neutral | 11 |
| Somewhat Valuable | 11 |
| Very Valuable | 4 |

### Goal 2: A recognition of one's own assumptions and their impact on design
**Broad Question**: how do you turn assumptions about the world (and the role of computing within it) into questions, versus taking your own worldview as a given?

As future technology designers, I also wanted students to really think about how their unexamined beliefs and assumptions might impact their designs. While this is a key tenet of design research, actually being able to pinpoint one's own assumptions is difficult for everybody. 

Some approaches I tried:
   1. Deconstructing some of students’ individual project proposals in <a href="https://hci330.github.io/winter2020/lectures/04lecture" target="_blank">lecture</a>, in order to  pull out the assumptions about the problem space.
   2. Asking each team, in studio, to complete a <a href="https://hci330.github.io/winter2020/lectures/09lab" target="_blank">user research prep worksheet</a>. Teams were asked to name some of their implicit assumptions and turn each one into hypotheses that they could evaluate via user / internet research. 

#### Reflection
I observed two sections, and I think the design worksheet worked pretty well: I did see students discussing their assumptions and making some thoughtful plans about what they wanted to learn from user research. I also read some thoughtful reflections on what they learned from contextual inquiries and interviews. 

On the other hand, some students did not see the value of doing this at all, and completely skipped doing any kind of interview / observation, opting for a pretty shallow survey instead (which I found baffling). Overall, I wanted students to really spend more time in the problem space, but there wasn't time, given the scope of the class. If we were to split this class into two, this particular aspect of the class (understanding the problem space and how computing might be brought to bear on it) could be strengthened.

### Goal 3. Getting students to value the *process* and the artifact
**Broad Question**: how do you get students to genuinely iterate on their ideas without feeling like they're getting "behind"?

I wanted student to understand that trying something, reflecting on it, abandoning it, and trying something else was the point of the class -- not something to be avoided. This is already supported in studio, where user testing happens, but I wanted them to also reflect on their process a little more and get credit for pursuing different alternatives. 

One approach I tried:
* I re-weighted the write-up / final deliverable so that the report counted for more, and asked them to spend some time explaining the the rationale behind their design choices and iterations, what worked, and what didn't. For some of the students who were looking to build their UX portfolios, I also hoped that this could be an opportunity for them to showcase their "process work." While I think that the group presentation also achieves this, the report allowed for more elaboration, screenshots, etc. Also, because we didn't get to do presentations b/c of COVID-19, I was able to [share all of their reports online](https://hci330.github.io/winter2020/project-showcase/).

#### Reflections
I didn't get to ask students what they thought of this, but I definitely learned a lot from reading their reports. It made their process more visible, and helped me to see their end-to-end process (e.g. design rationale, and the various avenues they pursued, and how they viewed their final artifact). 

### Open question I keep coming back to...
One of the challenges in a project-based course is that once students go into "implementation mode," any question of *whether* the technology will actually solve the problem / meet the need goes out the window, and the focus narrows to buttons, filter options, color schemes, swipe effects, etc. While these things are very important to a well-designed app, there is no re-entry back into the 'real world' in order to actually validate the technology, and therefore no reflection of what role computing / apps might actually plays in the problem space. I'm not sure that I have any clear ideas regarding how this problem might be solved, but I wanted to name it here.

### Technical Skills
