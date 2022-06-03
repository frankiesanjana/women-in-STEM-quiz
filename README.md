# Women in STEM Quiz

------

Women in STEM Quiz is a quiz site designed for users to test their level of knowledge about women in the fields of science,  technology, engineering and maths ("STEM"). The site aims to be entertaining but also educational, providing feedback and additional information on each answer as the user progresses through the quiz, and providing links at the end for users to find out more information should they so desire.

The site has been created for the second milestone project for Code Institute's Diploma in Full Stack Software Development.

You can visit the live website [here](https://frankiesanjana.github.io/women-in-STEM-quiz/).

[ add amiresponsive pic ]

## Concept
------

Women are still significantly underrepresented in the science, technology, engineering and maths (“STEM”) workforce. [A study](https://www.pnas.org/doi/pdf/10.1073/pnas.1914221117) published by PNAS in 2020 compared gender inequality across 83 countries and found the following:
- In scientific publications, there was an overall author gender ratio of 73% to 27%
- Male authors published a higher total number of papers over their career
- After a paper had been published for 10 years, male authors’ papers were cited 30% more on average than those by women

There are many reasons for this discrepancy, but one is that during their school years, girls and boys are treated differently, with girls often being steered towards studying “softer” subjects such as home economics at school, and boys towards, for example, computer science.

A greater awareness of women in STEM can help to provide positive female role models for both girls and boys from a young age. This can change girls’ and women’s attitudes towards and identification with maths and science, and increase their ability to consider STEM fields as viable career options. Knowledge of female role models has also been demonstrated to reduce the implicit biases that are shown via studies to be present in both men and women.

Much more detail on this topic is available [in this report](https://www.aauw.org/app/uploads/2020/03/Solving-the-Equation-report-nsa.pdf) by the AAUW, a non-profit organisation in the USA that advances equity for women and girls through advocacy, education, and research.

This Women in STEM quiz therefore aims to allow its users to test their knowledge about historical and current women in STEM fields in a manner that is entertaining and challenging, while also adding to users’ knowledge and demonstrating to them the importance of women in key scientific inventions and discoveries throughout history.

The site is designed to cater for a range of users. Parents, teachers and schoolchildren might all be interested in the site because of its educational properties. Adults working in STEM fields might also want to learn more about the role of women in their fields. These user stories are described in more detail below.

### User Stories

User stories are focused around specific needs that visitors to a quiz site on this topic might have, as mentioned above.

- As a parent of younger children, I would like my children to grow up with knowledge of a range of positive female role models in STEM fields,  but I am unsure whether I have this knowledge myself. I would like to test my own knowledge and find out about women in STEM who I may previously have been unaware of.
- As a parent of older children, I would like to find a quiz site for my children to use so that they gain greater awareness of women in STEM fields, both to inform their own choices about what subjects they study and also to help them gain a greater appreciation of women’s abilities in and historical contribution to science.
- As a teacher, I would like to find content and information for my lessons, potentially enhance my knowledge, and help to provide my pupils with information about women in STEM fields, in particular to encourage girls who are uncertain about their own choices or abilities to believe that science is a viable choice for them.
- As a younger child, I would like a quiz to entertain me and find out more about the scientists behind interesting discoveries.
- As an older child or teenager who is interested in science, I would like to test my knowledge with a quiz to know more about what women have done in STEM fields historically.
- As a female student in a science-related discipline, I would like to test and enhance my knowledge about women in science, and be able to provide information to others.
- As an adult female working in a science-related field, I would like to have better knowledge of other women who have been active in STEM over the years to enhance my own confidence and potentially help to inform others’ beliefs or challenge negative assertions about women in science.
- As an adult of either gender, I would like an entertaining and informative quiz to test my own knowledge, learn more about women in science and possibly share the information I learn with others.

### Owner Goals

- As the site owner, I want to fulfil the needs and wishes of these users.
- As the site owner, I want to provide clear and accurate information.
- As the site owner, I want to provide an enjoyable experience for users.
- As the site owner, I want users to be able to access the site from any size of device.
- As the site owner, I want users to be inspired to learn more about women in STEM. As such, I want to provide some basic information, but also link out to external sources from which users can find out more.
- As the site owner, I want users to enjoy the site and find it interesting enough that they think it is worth sharing with others.

## Design
------

The website was designed according to the five planes of content strategy. Using this structure provided a framework to develop the website. This is explained in more detail below.

### Plane 1: Strategy

The strategy of the website is largely defined by the user and owner goals listed above in the Concept section. The strategy is simply to provide solutions to the goals of the website's users and owners.

### Plane 2: Scope

The website includes the following features:

- A welcome page, to welcome users to the site and invite them to start the quiz.
- Ten questions, each with four possible answers. Questions are randomised each time a user loads the site and are displayed one at a time.
- User feedback on their answer: when a user selects an answer, each answer button turns green or red to show which was the correct answer. Extra information about each of the four answers is then loaded, displaying information about the correct answer first.
- A score tracker so that the user can see how many questions they have answered correctly and incorrectly as they progress through the quiz.
- User feedback at the end of the quiz, with a message tailored to their final score
- Links to further information at the end of the quiz so that users can find out more. These are chosen to link to one UK-based organisation, one US-based organisation and one global organisation, aiming to provide relevant detail for as many users as possible while also not overloading them with too many links.
- A restart button, so that users are invited to try the quiz again, to improve their score or look back over the questions and answers.

The following elements were considered but ultimately deemed to be out of scope of the current website. Some could be added to a future version:

- A contact form for users to get in touch with the site owner and submit questions or request further information.
- Highscore storage, a progress tracker during the quiz, sound feedback as the user selects answers and music that could be played during the quiz. I considered these features but ultimately felt that they were not a good fit for this type of content since they are more suited to games or competitive quizzes, whereas the aim of this quiz is to be more educational, and they could potentially distract users from the content that is the real focus of this project.
- A larger question bank, which could also have functionality to allow it to be updated as more questions are developed.

### Plane 3: Structure

The website consists of a single page, with all content being loaded on this one page. This keeps the user experience simple and prevents any navigation issues. Each question is loaded separately to break the content down for the user and prevent information overload, as well as keeping a clean look to the site.

- The landing page is deliberately kept very simple, so that starting the quiz is intuitive and easy.
- The questions page is also simple, with the title, question and answers and progress tracker displaying.
- The feedback page loaded when a user clicks on a question is only slightly more complex; it adds user feedback and extra information, as well as displaying the 'Next' button so that the user can progress to the next question. This button is deliberately placed after the extra information so that the user is more likely to see and read the extra information.
- The final page provides the user with their final score and some tailored feedback, links to further information, and a restart button so that they can repeat the quiz.

### Plane 4: Skeleton

Wireframes for the project can be seen [here](assets/wireframes/wireframes.pdf). The wireframes are designed for mobile and the same design is then rolled out to tablet and desktop; there are no differences in the code on different screen sizes.

There are a number of differences between the wireframes and the finished project, since the wireframes were designed before starting the build and some edits were made along the way. These are as follows:

- The logo that appears next to the page title in the wireframes was instead used in the favicon, with an alternative logo used for the title (see detail below in Surface section).
- As mentioned above, the progress bar was not included in the final version since it was deemed to be a poor fit for the content.
- The running total score was moved to the bottom of the screen so that it did not distract from the main content of the quiz, and the total number of incorrect answers was also added.
- The information on correct answers was removed from the final page and added to each question page. This breaks down the content into smaller sections, making it easier for the user to read.
- Further information about the incorrect answer options was also added. This enhances the educational aspect of the quiz by providing the user with much more information, some of which they may find more interesting, useful or relevant to their needs than the correct answer information.
- The ordering of information on the final page has also been adjusted, with the aim that the user will read more of the information.

### Plane 5: Surface