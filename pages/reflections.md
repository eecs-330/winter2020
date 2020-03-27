---
layout: assignment-two-column
permalink: /reflections/
---
<style>
    article h1 {
        display: block;
        margin-top: 40px;
        padding-top: 0px;
        border-bottom: solid 1px #88a5b3;
        padding-bottom: 5px;
        color: black;
        text-transform: initial;
        font-weight: 600;
    }
    article h2 {
        border-bottom: none !important;
        padding-bottom: 5px;
        font-weight: 500;
        font-size: 1.3em;
        color: #222;
        /* text-transform: uppercase; */
    }
</style>

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

## Experimental Materials & Lessons (Winter 2020)
This quarter, I had a few experimental learning goals for students -- some relating to the design and analysis of human-computer systems, and some relating to practical/technical skill development. These two sets of learning goals came out of challenges I encountered while teaching the course previously (Winter, 2019), as elaborated below. I didn't formally evaluate any of these lessons, but in the sections below, I share some qualitative accounts of my own experiences, and some student reflections (as documented in a [post-course questionnaire](https://docs.google.com/forms/d/1RDIdkrb2kp8jtjZPRLWZxJaqaC6J2rt4lwzT0LGovo0/edit#responses) that I administered).

# Activities Related to Design Analysis
In terms of analyzing the design of computing technologies, I wanted students to spend a little more time thinking about the social implications of computer-mediated systems, and how a designer's values and assumptions can have serious impacts on the world.

## Goal 1: A recognition that technologies shape individual behavior AND larger social systems
**Broad Question:** How do you help students (i.e. future technology designers) examine how computing technologies can and do impact on different groups of people -- both intentionally and unintentionally? Note: this class *has* already been doing this (and this goes for the other questions as well), but I wanted to keep this question present by adding some additional activities.

Some approaches I tried:
   1. Assigned 2 articles (Winner, 1980 and Morozov, 2013) on the politics / ideology underpinning various technologies, and discussed them in <a href="https://hci330.github.io/winter2020/lectures/02lecture" target="_blank">Lecture 2: Possibilities and Limits</a>.
   2. Created a homework assignment that asked them to analyze the politics of a technology, based on a similar activity assigned by Sepehr Vakil: <a href="https://hci330.github.io/winter2020/assignments/hw3" target="_blank">HW3: Sociopolitical Analysis</a>. I allowed students to resubmit if they really missed the mark on this one, since this was outside of their comfort zones.
   3. Created an <a href="https://hci330.github.io/winter2020/lectures/26lecture" target="_blank">Ethics Lecture</a> that considered some of the challenges of computer-mediated systems, and how the very same technologies that bring us so many wonderful things can be just as easily used in antisocial ways.

**Reflections**<br>
* I found many of the HW3 essays to be fantastic. That said, many of the essays appeared to have taken no more than 20 minutes to write, with no demonstration that they understood the readings (or even did them). 
* That said, students seemed pretty engaged in the class discussion in Lecture 2 (IMO it was one of the better lectures I gave). 
* I'm pretty sure the ethics lecture bored people (radio silence in terms of class participation), but I don't have any metrics on that.
* When I asked students to rate the value of HW3, most students were neutral towards it or saw it as "not valuable" (see students' questionnaire at the bottom), which was pretty disappointing. Less than half found it "somewhat valuable" or "very valuable." While of course I do think that the spirit of the assignment is extremely valuable, there is obvious more work to be done in order to make these ideas land with students.

Yet, there were some promising quotes from students in the post-course questionnaires:

{:.quote.slim}
> I enjoyed being introduced to concepts in HCI like accessibility and ethics that I haven’t been exposed to in this context. 

{:.quote.slim}
> In a future HCI class, I'd like to see more in ethics in AI, more social-justice oriented stuff (I’m not sure exactly what’s currently offered).

{:.quote.slim}
> The sociopolitical analysis, design aspects, accessibility, etc. helped me gain a perspective which I wouldn't have gained just through web dev.

## Goal 2: A recognition of one's own assumptions and their impact on design
**Broad Question**: how do you help students identify their assumptions about the world (and the role of computing within it), and translate these into questions that can be explored through user research?

As future technology designers, I also wanted students to really think about how their unexamined beliefs and assumptions might impact their designs. While this is a key tenet of design research, actually being able to pinpoint one's own assumptions is difficult for everybody. 

Some approaches I tried:
   1. Deconstructing some of students’ individual project proposals in <a href="https://hci330.github.io/winter2020/lectures/04lecture" target="_blank">lecture</a>, in order to  pull out the assumptions about the problem space.
   2. Asking each team, in studio, to complete a <a href="https://hci330.github.io/winter2020/lectures/09lab" target="_blank">user research prep worksheet</a>. Teams were asked to name some of their implicit assumptions and turn each one into hypotheses that they could evaluate via user / internet research. 

**Reflections**<br>
I observed two sections, and I think the design worksheet worked pretty well: I did see students discussing their assumptions and making some thoughtful plans about what they wanted to learn from user research. I also read some thoughtful reflections on what they learned from contextual inquiries and interviews. 

On the other hand, some students did not see the value of doing this at all, and completely skipped doing any kind of interview / observation, opting for a pretty shallow survey instead (which I found baffling). Overall, I wanted students to really spend more time in the problem space, but there wasn't time, given the scope of the class. If we were to split this class into two, this particular aspect of the class (understanding the problem space and how computing might be brought to bear on it) could be strengthened.

## Goal 3. Getting students to value the *process* and the artifact
**Broad Question**: how do you get students to genuinely iterate on their ideas without feeling like they're getting "behind"?

I wanted students to understand that trying something, reflecting on it, abandoning it, and trying something else was the point of the class -- not something to be avoided. This is already supported in studio, where user testing happens, but I wanted them to also reflect on their process a little more and get credit for pursuing different alternatives. 

One approach I tried:
* I re-weighted the write-up / final deliverable so that the report counted for more, and asked them to spend some time explaining the the rationale behind their design choices and iterations, what worked, and what didn't. For some of the students who were looking to build their UX portfolios, I also hoped that this could be an opportunity for them to showcase their "process work." While I think that the group presentation also achieves this, the report allowed for more elaboration, screenshots, etc. Also, because we didn't get to do presentations b/c of COVID-19, I was able to [share all of their reports online](https://hci330.github.io/winter2020/project-showcase/).

**Reflections**<br>
I didn't get to ask students what they thought of this, but I definitely learned a lot from reading their reports. It made their process more visible, and helped me to see their end-to-end process (e.g. design rationale, and the various avenues they pursued, and how they viewed their final artifact). In other words, it is unclear whether or not this achieved anything...I'd have to do more research.

## Open question I keep coming back to...
I've noticed that once students go into "implementation mode," any question of *whether* the technology will actually solve the problem / meet the need goes out the window, and the focus narrows to buttons, filter options, color schemes, swipe effects, etc. While these things are very important to a well-designed app, there is no re-entry back into the 'real world' in order to actually validate the technology, and therefore no reflection of what role computing / apps might actually plays in the problem space. I'm not sure that I have any clear ideas regarding how this problem might be solved, but I wanted to name it here.

# Activities Related to Web Development
I also wanted to provide students with more support in terms of learning HTML / CSS / JavaScript, and specifically:
* How to make responsive layouts (CSS)
* Some support with ES6 syntax
* Some support using the fetch API and working with API Endpoints.

Cooper Barth also designed a lecture and activity on accessibility

While self-learning is an important skill, I think that providing some early

## Goal 1: Making a responsive layout

## Goal 2: Working with the DOM

## Goal 3: REST APIs & Fetch

## Goal 4: Hands-On Accessibility

{:.quote.slim}
> Cooper’s lecture on accessibility was very interesting to me, so a course focusing on tools to make websites/apps more accessible or a project course with a focus on accessibility would be cool.


# Accountability
Student accountability to (a) doing the readings, (b) attending the lectures, and (c) being accountable to other members of the group remains a challenge. I made a few decisions in this regard:
1. As an experiment, I dropped the in-class quizzes (thus making attendance optional). Attendance was pretty poor during the second half of the quarter and hovered around 40-60 students. In some regards, this made students less accountable, but it also made it feel like only the students who wanted to attend actually attended, which felt like a relief (in relation to last year, where students communicated to me in many different ways that they didn't want to be there). For me, lectures remain a challenge, and I need to dedicate a lot more attention to making them more interactive and engaging.
2. There were some issues with group accountability (which surfaced in a variety of anonymous Piazza posts), so I implemented a policy where students had to [allocate 100 points across their teammates](https://hci330.github.io/winter2020/assignments/p9) based on their relative contributions. These were anonymous. I think this worked pretty well. I took 10-20 points away from any student who clearly did not contribute, depending on the circumstances.
3. In the future, I will add this to the syllabus with a strong emphasis that free-riding will will not be tolerated.

# Student Reflections
I gave students a questionnaire on the last day of class. Of 140 people, 33 filled it out. Moreover, there is an overrepresentation of people who actually attend lecture who have filled out the form.

## Strengths
What did you see as the strengths of the class?
* Good practice with GitHub, HTML/CSS/JavaScript, teamwork skills
* None
* Individual Assignments
* I really thought that the group project was essential to the course. It was awesome to be able to develop an app/website from ground up and present it to our peers.
* The fact that we are learning these skills (HTML, CSS, JavaScript) in a legitimate project environment is super helpful, and the ability to choose to implement back end or not created good freedom on the difficulty level of the project. Also, learning key design techniques are helpful for general knowledge, even if the skills are not directly applicable to back end/other software work. 
* Getting hands-on with relevant technologies on a "real" project
* The hands-on coding homeworks helped me learn a lot. I also liked the accessibility unit, it gave me a wholly new perspective. Learning GitHub is also massively helpful
* Good overview. 
* Learning HTML, CSS, Javascript on my own. Watching YouTube video to figure out how everything works.
* I thought HW4 and HW5 really taught me HTML/CSS and Javascript comprehensively. * The project, for the most part, was also a good way for me to learn more about these languages.
* In general, it was a very solid introduction to the basics of user interfaces, and it gave a good general overview of HCI.
* The teaching method, the instructors support and encouragement, Group Assignments, lectures, assignments, all of them were great
* Learning about the different design principles and the design process. 
* I really liked the mix of coding vs non-coding conceptual balance in the class. * The sociopolitical analysis, design aspects, accessibility, etc. helped me gain a perspective which I wouldn't have gained just through web dev.
* I think the project aspect of the course is a strength. I learned a lot about working with a team on Github, which is something that I never had done before. I think Github/collaboration skills will be really valuable in the future. I think that Sarah and the TA's office hours were always really helpful. 
* I learned a lot about how websites are designed and how they should be designed that I didn't know before so the class was definitely very informative.
* I like that we get to learn by doing. I am an aspiring web developer with an internship coming up and by taking this class, my JavaScript skills went from beginner to proficient.
* I really enjoyed creating a prototype based on a problem that we selected. It made the content more relevant, enjoyable, and applicable.
* I think this course is fairly unique, at least compared to the other CS courses I've taken so far. I've definitely learned about a lot of things I otherwise wouldn't have considered. 
* Learning the javascript and HTML and CSS was valuable, however i did not feel we were taught it adequately and were more just expected to know it for the assignments
* The balance between lecture and studio. I love it. 
* Strengths would definitely be the iterative process to build a prototype, however, making it functional should be an important aspect of it. 
* Learning about HTML/CSS/JS and working in a team to coordinate a group project. Especially using Git. Iterating over a quarter-long project was a big strength, although being forced to work in teams was an issue at times. Maybe allowing people to work individually would help. Also, a personal suggestion would be to create an online personal portfolio using HTML/CSS/JS instead of creating a website application. That would've been awesome to be able to show employers. Also, thank you for making attendance in lecture optional and making the readings optional as well.
* I enjoyed being introduced to concepts in HCI like accessibility and ethics that I haven’t been exposed to in this context. The programming assignments were mostly very useful for learning those skills. 
* I thought this course gave a lot of freedom to get what you wanted out of it. I liked that there was a mixture of technical and theoretical/ethical topics included as well.
* It gives an introduction to a broad range of useful topics.
* I think the main strength of the course is that the projects can be very open ended, which allows each group to go as far in to the development process as they want. Additionally I liked the discussion of the theory of UX and UI (visual design lectures) and felt like they were the main part of the course that made it unique.
* I thought the course was best when talking about design principles/the theoretical side of HCI, i feel like i learned a lot from that
* Trying out/working on the content ourselves. Easy to follow along.
* I think the main strength of this course was the studio sessions and the homework assignments related to coding 
* This course taught me a lot about the basics of how a website is put together, and a lot about HCI in general, which is a really interesting topic.

## Limitations
What do you wish were different about the course?
* Lectures were not much help in terms of coding assignments
* Everything
* more focused on technical details
* I think that we could have been better prepared for some of the individual assignments during lecture/studio.  
* I think that the course was super helpful to learning programming skills and design, and all I can really think to suggest is more opportunities to practice those (even though there were many as is). For example, maybe adding in quizzes each week on HackerRank or LeetCode to learn smaller skills before the larger HW assignments. 
* Could get a lot more out of studios, though it doesn't help when most students are apathetic towards the projects
* Not much, it was a chill class and I was able to learn a lot of basic coding skills like GitHub and Javascript.
* More technical challenges/coding 
* More technical content covered during lecture, instead of talking about higher-level concepts.
* I thought studio was unnecessary. Each week was very disorganized and I found myself not learning much and being bored.
* Some of the assignments felt like there was a large gap between what we did in lecture/studio and the assignment itself, especially the CSS and Javascript assignments. It makes sense that there would be some learning curve, but especially with the CSS assignment it was incredibly intimidating to open it and just have blank code pages with no guidance. Again, this obviously wasn't a deal breaker, but it would be nice to perhaps get a little more guidance.
* The number of assignments that are offered should be reduced, as they are mostly done in a hurry. If there were more time to practice the skills required, that would be really beneficial
* Either more focus on HTML or much less focus on HTML
* I wish the coding started a little early parallely because during the end a lot of things came up all at once together. Especially while building the website.
* I wish that there were more creative projects besides the big group project. I think this is the best way to learn and sometimes the homeworks didn't seem too valuable since we were trying to copy something, not doing our own HCI. I think if this were a technical coding course, this would be really helpful but it is a lot to squeeze into a quarter with HCI. I think that there should be a prereq for HTML/JS/CSS, since there are varying levels coming into the class. 
* I wish lectures went a little more in depth with html, css, and javascript. I think it was good to learn about HCI concepts and that's obviously more of the focus of this class than the coding skills but sometimes I felt like it would be nice to see more coding tips in class rather than just watching videos and looking things up outside of class.
* I wish that we had less writing assignments and more coding. The skills I am looking to develop are web development skills, and writing long, tedious papers for every project deliverable really just impedes my progress and my team's progress. We could have more time to code if there was less writing.
* I wish there was more instruction around the coding. I think the assignments could either be very easy or very challenging depending on your background, but even a little more time in lecture would probably go a long way for those with less experience.
* I wish this course put more of a focus onto teaching HTML, CSS, and Javascript. I understand that it's hard to dedicate class time to this, however now that the course is over I still feel as if I've not be adequately prepared to use these languages. I wish there was either some other CS course as a pre-requisite that taught these languages more thoroughly, or i wish maybe that HCI would spend more time teaching it (perhaps if HCI was expanded to be a sequence of 2 classes, then the first could focus more on those languages and then the second on using them for HCI?). Also as far as studio goes I wish they explained github more. I still don't know how to use it. Every time I need to work on my project I just re-download the whole thing into a new folder somewhere in my downloads. My group tried to show me how to use it with terminal but it wasn't really working, so I've just kept on doing it this way, which obviously isn't ideal.
* The group project was frustrating and did not add any value to the class. Being matched with random people is never fun, especially when they do not take the project seriously. The project was focused on learning things that i do not believe were valuable
* Class room and the system to usher student come to lecture.
* I felt that some studio sessions could be skipped and instead the time from that can be spent to make the group projects more functional.
* The lecture should be replaced with smaller, more interactive sessions. Think studio, but more emphasis on interactivity alongside lecture. I also wish there were two HCI classes - one that focused more heavily on the theory and another that focused more on the coding. I would've liked more hands-on experience with JS, and I feel as though taking the later course would've been much more beneficial to me.
* I came in having no experience with html, css, or JavaScript, and I think many others were in the same boat. I don’t think that lecture gave me a great foundation in learning these and I think a bit more of a focus on those skills upfront may have been nice. Others may not agree, but maybe some small but lore frequent assignments in addition to more cumulative ones to help us build up these skills would be nice. Alternatively, perhaps splitting up the course into a web programming course where we learn those hard skills and then an HCI design course where we learn about the design process and integrate it into a large final project may work. 
* I think a lot of the individual assignments seemed unorganized and although they helped me learn valuable skills for the rest of the quarter/project,  I don’t feel as though we were well prepared enough to do a lot of things that were necessary for the actual project. For example, my group had a few members who really struggled to use github and javascript which set us back a bit.
* I think the course definitely tried to do too much in one quarter. I would have liked to focus more on the project and understand what the final assignment would be from the beginning. There were times that I was going through the process but didn't understand where it was going.
* Additionally, learning the design process when the only way you can solve your problem is through an app is difficult. At the beginning we were expected to explore our problem space without considering a solution, but since the final project had to be a website or app, it felt like our decisions were limited so it was difficult to avoid having solutions in mind.
* I also think that the brief introductions to HTML, CSS, and JavaScript did not work in lecture format. I definitely learned way more on the topic in studio and teaching myself when doing the homework. I think the homework assignments are a sufficient way to learn the web programming you need for this course.
* Ultimately I think the different aspects of this course (web programming, the design process, UI design principles, tech ethics) could each be their own course. I didn't feel like I got deep enough into any of them.
* I really liked the lectures that focused on ethics and design principles -- they were interesting and gave me a lot to think on, however because much of the lecture could just be read straight from the slides, I found myself reading ahead and then not focusing well in class. When the rubber met the road with other classes, I wound up doing those assignments in HCI class instead of paying attention cuz I knew I could just read the slides in 5-10 min and get the main takeaways. 
* I think something that made the lectures more engaging (I liked the demos!) would be helpful. Maybe also putting less on the slides to encourage paying attention? I'm not sure what the best practice would be here. 
* Also, I found the components part of the Project to be a hindrance -- our group had to bend around to meet component criteria instead of developing the web app out to its full creative potential. 
* Overall I really appreciate your teaching though, and I do feel like I learned a lot in this course!"
* I think the biggest issue with the course is that it needs to decide what it wants to be. It felt like the class was simultaneously trying to be a web development class and a visual design class. We would be told on our prototypes "just focus on the UX, UI, and front end, that's all that matters" but then all of the components we're asked to implement can all take a significant amount of back end to actually work. It felt like a significant portion of my time was spent doing things that weren't actually going to be graded, but were still needed in order to make the prototype actually work. I think the class would be more valuable if it focused more on the theory of design aspect, like the visual design and UX lectures, and used interface/prototyping platforms that handle the back end for us while we just focus on the front end.
* the assignments (especially spotify one) were pretty rough especially since the amount of time we spent on webdev topics felt like not enough to prepare us. i would've preferred more html/js activities to help us learn and more instruction regarding those vs just a large assignment we had to do a lot of things for
* More organized, it seems to try to be many things at once, accomplishing not as much as it could. Like I feel like I learned a bit on design/UI, but not much, and some stuff about HTML, CSS, and JS, but not much. I think that this course should try to find its identity.
* The project and homework were good at reinforcing what we know, but I felt that it was either something easy so I didn't have to spend much time on it, or something where I don't understand why it doesn't work. I would like that some more of the class time was spent explaining technical concepts in coding, like something for me that was confusing was why there were so many ways to do an onclick type of thing. There was the intext onclick='something' or something with the eventHandler in JS. When using one, it would work, but if I replaced it with the other, it wouldn't work.
* This kind of relates to why I think not many people come to lectures. It's not entirely because the slides are posted, but because there's nothing taught in lectures that is necessarily useful, because everything we learn comes from the project. That being said, I'm not sure what exactly could be added in the class to make students feel the need to come to class."
* I wish that the material in Lecture was more code focused and that we would honestly have less lectures and more studio like sessions
* I wish there was more emphasis on how to build a website, as I found this to be a challenge once we actually began working on the prototype. The assignments helped, but they didn't really teach us how to put together everything from the ground up. 

## Future Course Offerings?
What would you like to see in the HCI track that is not currently offered?

* Something beyond web dev lol
* Robot interaction
* I think it would be cool for more specific classes to be introduced. For example, having specific classes on app development or website development would be awesome.
* Ideally a sequence that builds on ideas through a few classes, maybe something that links back end and front end more succinctly (i.e. in the first class of the sequence, design the idea and the front end. then in the second course, learn about databases and design the backend. now can present a fully functional product). 
* Designing iOS apps
* More HCI design courses.
* I would like to see more courses centered around interactive media.
* Not much, I feel like this was a good diverse intro!
* Absolutely, it is a very important track that is offered at several universities, so this would be great if it were present at Northwestern
* A class purely on interface design and using more examples, activities to illustrate how best to do them. 
* Advanced concepts of website development?
* I haven't read all of the course descriptions so some of these ideas may be offered but I wish that there were more classes with projects like this one. I also think that there should be a technical class for learning HTML, CSS & JS. I had some previous experience so the homeworks/project weren't too bad, but I think people who had never used them struggled. 
* I would like to see a class that uses more modern web development tools such as React, Swift and React Native. Yes, Agile Development teaches these things, but I would like to see these technologies first introduced at a lower-level class that students could take earlier in their academic career. Knowing only vanilla HTML, CSS, and JavaScript simply isn't enough any more to have a career in this field. That being said, I do think that starting off with the basics is very important in order to develop web development skills.
* I think it would be valuable to teach very basic backend development for at least part of a course, which could then lead into how to display data in a clear and useful way. I think this would allow for the design and creation of more meaningful sites. 
* Again. I like this course. 
* I feel that the course is well crafted but it would help to decrease the number of assignments. I would have liked to see more lectures on developing products keeping in mind people with different accessibility needs.
* N/A
* A class focused entirely on accessibility would definitely be interesting to me. Like mentioned above, maybe a separate course focused on the hard skills (css, js, html) and a course on the design process / a capstone website project could  be cool. Web security. UI/UX. Servers / back end stuff. 
* Cooper’s lecture on accessibility was very interesting to me, so a course focusing on tools to make websites/apps more accessible or a project course with a focus on accessibility would be cool.
* More in ethics in AI, more social-justice oriented stuff (I'm not sure exactly what's currently offered)
* I would like to see more focus on UX and UI courses, since that is what I thought was most valuable from the course and would most want to take going forward.
* more webdev/etc

## Reflections on assignments / lecture / studio
I also asked students to rank how valuable the felt the various assignments / course meetings were to their learning.

| How valuable did you find...| [HW3](https://hci330.github.io/winter2020/assignments/hw3) | [HW4](https://hci330.github.io/winter2020/assignments/hw4) | [HW5](https://hci330.github.io/winter2020/assignments/hw5) | [HW6](https://hci330.github.io/winter2020/assignments/hw6) | Lectures | Studio | [Team Project](https://hci330.github.io/winter2020/project-showcase/) | 
|--|--|--|--|--|--|--|--|
| Not Valuable      | 7  | 1  | 0  | 3  | 3  | 4  | 1  | 
| Neutral           | 11 | 0  | 1  | 5  | 14 | 5  | 2  |  
| Somewhat Valuable | 11 | 13 | 9  | 14 | 12 | 16 | 11 | 
| Very Valuable     | 4  | 19 | 23 | 11 | 3  | 8  | 19 | 

<img style="margin-left:auto;margin-right:auto;width:600px;display:block;" src="/winter2020/assets/images/reflections/summary_chart.svg" />