const questions = [
    {
        question: 'Who won the Nobel Prize in Physics in 1903 for her contribution to the understanding of radiation?',
        answers: [
            { text: 'Marie Curie', correct: true },
            { text: 'Rosalind Franklin', correct: false },
            { text: 'Lise Meitner', correct: false },
            { text: 'Barbara McClintock', correct: false }
        ],
        info: 'Marie Curie won the Nobel Prize in Physics in 1903 for her contribution to the understanding of radiation. She was also the first person to win two Nobel Prizes, and the only person to win in multiple sciences. Those prizes were the Nobel Prize in Physics in 1903, and the Nobel Prize in Chemistry in 1911.',
        other1: 'Rosalind Franklin was a chemist whose work was important to understanding the molecular structure of DNA.',
        other2: 'Lise Meitner was an Austrian-Swedish physicist who discovered the radioactive isotope protactinium-237.',
        other3: 'Barbara McClintock won the Nobel Prize in Physiology or Medicine in 1983 for the discovery of genetic transposition.'
    },
    {
        question: 'Who is the only woman to have received, by herself (unshared), a Nobel Prize for Medicine?',
        answers: [
            { text: 'Rosalyn Sussman Yalow', correct: false },
            { text: 'Gerty Theresa Cori', correct: false },
            { text: 'Barbara McClintock', correct: true },
            { text: 'Rita Levi-Montalcini', correct: false }
        ],
        info: 'Barbara McClintock is the only woman to have received, by herself (unshared), a Nobel Prize for Medicine. She won the Nobel Prize in Physiology or Medicine in 1983 for the discovery of genetic transposition.',
        other1: 'Rosalyn Sussman Yalow was an American medical physicist, and a co-winner of the 1977 Nobel Prize in Physiology or Medicine (together with Roger Guillemin and Andrew Schally) for development of the radioimmunoassay technique.',
        other2: 'Gerty Theresa Cori was the third woman to win a Nobel Prize (which she shared with Carl Ferdinand Cori and Bernardo Houssay) in science. She was also the first woman to be awarded the Nobel Prize in Physiology or Medicine, for her significant role in the "discovery of the course of the catalytic conversion of glycogen".',
        other3: 'Rita Levi-Montalcini was an Italian Nobel laureate honored for her work in neurobiology. She was awarded the 1986 Nobel Prize in Physiology or Medicine jointly with colleague Stanley Cohen for the discovery of nerve growth factor (NGF).'
    },
    {
        question: 'Who was the first woman to go to space?',
        answers: [
            { text: 'Kalpana Chawla', correct: false },
            { text: 'Valentina Tereshkova', correct: true },
            { text: 'Mae Carol Jemison', correct: false },
            { text: 'Ellen Ochoa', correct: false }
        ],
        info: 'At just 26 years old, Valentina Tereshkova became the first woman to fly in space. On June 16, 1963, she was launched in the spacecraft Vostok 6, which completed 48 orbits in 71 hours.',
        other1: 'Kalpana Chawla was an American astronaut, engineer, and the first woman of Indian origin to go to space. She first flew on Space Shuttle Columbia in 1997 as a mission specialist and primary robotic arm operator.',
        other2: 'Mae Carol Jemison is an American engineer, physician, and former NASA astronaut. She became the first black woman to travel into space when she served as a mission specialist aboard the Space Shuttle Endeavour in 1992.',
        other3: 'Ellen Ochoa is an American engineer, former astronaut and former director of the Johnson Space Center. In 1993 Ochoa became the first Hispanic woman to go to space when she served on a nine-day mission aboard the Space Shuttle Discovery.'
    },
    {
        question: 'Who developed the signal flares that are still used today by the US Navy?',
        answers: [
            { text: 'Esther Conwell', correct: false },
            { text: 'Beatrice Hicks', correct: false },
            { text: 'Beulah Louise Henry', correct: false },
            { text: 'Martha Coston', correct: true }
        ],
        info: 'In 1859, Martha Coston created and patented a device for signaling at sea. Martha’s flares served as the basis of a system of communication that helped save lives and win battles during the Civil War.',
        other1: 'Esther Conwell was a pioneer in electrical engineering. Her research explaining how electrons travel through semiconductors changed the field of computing.',
        other2: 'Beatrice Hicks worked on aircraft technology and co-founded the Society of Women Engineers.',
        other3: 'Beulah Louise Henry was an American inventor. In 1912 she received her first patent for a more efficient ice cream machine.'
    },
    {
        question: 'Who was the first girl on the Iranian Mathematical Olympics team?',
        answers: [
            { text: 'Hypatia', correct: false },
            { text: 'Mariam Mirzakhani', correct: true },
            { text: 'Shakuntala Devi', correct: false },
            { text: 'Maria Gaetana Agnesi', correct: false }
        ],
        info: 'Mariam Mirzakhani later went on to get a PhD at Harvard focused on Reiman surfaces, with implications for quantum physics.'
        other1: 'Hypatia was a mathematician, astronomer, and philosopher who lived in Alexandria, Egypt. Born around 360 AD, she is the earliest female mathematician whose life and work is well known.',
        other2: 'Shakuntala Devi proved her exceptional talent in arithmetic through her math shows worldwide at a very young age. Her ability to multiply large numbers in her head has given her the nickname “Human-Computer.”',
        other3: 'Maria Gaetana Agnesi wrote one of the first calculus textbooks in 1748.'
    },
    {
        question: 'Who invented signal hopping, which was a precursor to wi-fi, GPS, and Bluetooth?',
        answers: [
            { text: 'Hertha Ayrton', correct: false },
            { text: 'Emily Warren Roebling', correct: false },
            { text: 'Edith Clark', correct: false },
            { text: 'Hedy Lamar', correct: true }
        ],
        info: 'Not only did Hedy Lamar invent signal hopping, but she was also a well-known film actress.',
        other1: 'Hertha Ayrton was a British engineer who was awarded the Hughes medal for her work. She was also a suffragette.',
        other2: 'Emily Warren Roebling was an engineer who is famous for her contribution to the Brooklyn Bridge.',
        other3: 'Edith Clark was a pioneer in electrical engineering and the first female professor of electrical engineering in the US.'
    },
    {
        question: 'Who is known as the inventor of the first compiler? (A compiler is a program that translates programming code to machine language).',
        answers: [
            { text: 'Grace Hopper', correct: true },
            { text: 'Anita Borg', correct: false },
            { text: 'Adele Goldstine', correct: false },
            { text: 'Marsha Rhea Williams', correct: false }
        ],
        info: 'Grace Hopper is an American computer scientist and US Navy rear admiral known for inventing the compiler in addition to her other contributions to computer science.',
        other1: 'Anita Borg was an American computer scientist who founded the Institute for Women and Technology, and the annual Grace Hopper Celebration of Women in Computing.',
        other2: 'Adele Goldstine was an American mathematician and computer programmer who wrote the manual for ENIAC, which was the first electronic digital computer.',
        other3: 'Marsha Rhea Williams is a professor and researcher and is known for being the first African-American woman to earn a Ph.D. in computer science.'
    },
    {
        question: 'Who has been nicknamed “the mother of the internet”?',
        answers: [
            { text: 'Evelyn Boyd Granville', correct: false },
            { text: 'Beatrice Helen Worsley', correct: false },
            { text: 'Radia Perlman', correct: true },
            { text: 'Carol Shaw', correct: false }
        ],
        info: 'Radia Perlman is a computer programmer and network engineer most famous for her creation of the spanning-tree protocol, which was a contribution that led to our modern-day conception of the internet.',
        other1: 'Evelyn Boyd Granville was a computer programmer and professor and was the second African-American woman to receive a Ph.D. in mathematics from an American university.',
        other2: 'Beatrice Helen Worsley was a Canadian pioneer in computer science and the first person to be granted a Ph.D. in computer science.',
        other3: 'Carol Shaw is one of the first female game designers and programmers in the video game industry and is best known for her work on Atari 2600 (River Raid).'
    },
    {
        question: 'Who studied biology, started her career in healthcare finance and later went on to become CEO of a leading personal genomics company?',
        answers: [
            { text: 'Anne Wojcicki', correct: true },
            { text: 'Sheryl Sandberg', correct: false },
            { text: 'Susan Wojcicki', correct: false },
            { text: 'Jennifer Taubert', correct: false }
        ],
        info: 'Anne Wojcicki is the CEO of 23 and Me.',
        other1: 'Sheryl Sandberg is the COO of Facebook.',
        other2: 'Susan Wojcicki is the CEO of You Tube.',
        other3: 'Jennifer Taubert is Worldwide Chairman of Pharmaceuticals for Johnson and Johnson.'
    },
    {
        question: 'Who is the founder of Girls Who Code?',
        answers: [
            { text: 'Rachel Carson', correct: false },
            { text: 'Elizabeth Feinler', correct: false },
            { text: 'Bozoma Saint John', correct: false },
            { text: 'Reshma Saujani', correct: true }
        ],
        info: 'Reshma Saujani is the Founder and CEO of Girls Who Code, an international nonprofit organization working to close the gender gap in technology and change the image of what a computer programmer looks like and does.',
        other1: 'Rachel Carson was an American marine biologist, writer, and conservationist whose influential book Silent Spring (1962) and other writings are credited with advancing the global environmental movement.',
        other2: 'Elizabeth Feinler is an American information scientist. From 1972 until 1989 she was director of the Network Information Systems Center at the Stanford Research Institute.',
        other3: 'Bozoma Saint John is an American businessperson and marketing executive who was the chief marketing officer (CMO) at Netflix'
    }
];