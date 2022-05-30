const questions = [
    {
        question: 'Who won the Nobel Prize in Physics in 1903 for her contribution to the understanding of radiation?',
        answers: [
            { text: 'Marie Curie', correct: true },
            { text: 'Rosalind Franklin', correct: false },
            { text: 'Lise Meitner', correct: false },
            { text: 'Barbara McClintock', correct: false }
        ],
        info: 'Marie Curie won the Nobel Prize in Physics in 1903 for her contribution to the understanding of radiation. She was also the first person to win two Nobel Prizes, and the only person to win in multiple sciences. Those prizes were the Nobel Prize in Physics in 1903, and the Nobel Prize in Chemistry in 1911.'
    },
    {
        question: 'Who is the only woman to have received, by herself (unshared), a Nobel Prize for Medicine?',
        answers: [
            { text: 'Rosalyn Sussman Yalow', correct: false },
            { text: 'Gerty Theresa Cori', correct: false },
            { text: 'Barbara McClintock', correct: true },
            { text: 'Rita Levi-Montalcini', correct: false }
        ],
        info: 'Barbara McClintock is the only woman to have received, by herself (unshared), a Nobel Prize for Medicine. She won the Nobel Prize in Physiology or Medicine in 1983 for the discovery of genetic transposition.'
    },
    {
        question: 'Who was the first woman to go to space?',
        answers: [
            { text: 'Kalpana Chawla', correct: false },
            { text: 'Valentina Tereshkova', correct: true },
            { text: 'Mae Carol Jemison', correct: false },
            { text: 'Ellen Ochoa', correct: false }
        ],
        info: 'At just 26 years old, Valentina Tereshkova became the first woman to fly in space. On June 16, 1963, she was launched in the spacecraft Vostok 6, which completed 48 orbits in 71 hours.'
    },
    {
        question: 'Who developed the signal flares that are still used today by the US Navy?',
        answers: [
            { text: 'Esther Conwell', correct: false },
            { text: 'Beatrice Hicks', correct: false },
            { text: 'Beulah Louise Henry', correct: false },
            { text: 'Martha Coston', correct: true }
        ],
        info: 'In 1859, Martha Coston created and patented a device for signaling at sea. Martha’s flares served as the basis of a system of communication that helped save lives and win battles during the Civil War.'
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
    },
    {
        question: 'Who invented signal hopping, which was a precursor to wi-fi, GPS, and Bluetooth?',
        answers: [
            { text: 'Hertha Ayrton', correct: false },
            { text: 'Emily Warren Roebling', correct: false },
            { text: 'Edith Clark', correct: false },
            { text: 'Hedy Lamar', correct: true }
        ],
        info: 'Not only did Hedy Lamar invent signal hopping, but she was also a well-known film actress.'
    },
    {
        question: 'Who is known as the inventor of the first compiler? (A compiler is a program that translates programming code to machine language).',
        answers: [
            { text: 'Grace Hopper', correct: true },
            { text: 'Anita Borg', correct: false },
            { text: 'Adele Goldstine', correct: false },
            { text: 'Marsha Rhea Williams', correct: false }
        ],
        info: 'Grace Hopper is an American computer scientist and US Navy rear admiral known for inventing the compiler in addition to her other contributions to computer science.'
    },
    {
        question: 'Who has been nicknamed “the mother of the internet”?',
        answers: [
            { text: 'Evelyn Boyd Granville', correct: false },
            { text: 'Beatrice Helen Worsley', correct: false },
            { text: 'Radia Perlman', correct: true },
            { text: 'Carol Shaw', correct: false }
        ],
        info: 'Radia Perlman is a computer programmer and network engineer most famous for her creation of the spanning-tree protocol, which was a contribution that led to our modern-day conception of the internet.'
    },
    {
        question: 'Who studied biology, started her career in healthcare finance and later went on to become CEO of a leading personal genomics company?',
        answers: [
            { text: 'Anne Wojcicki', correct: true },
            { text: 'Sheryl Sandberg', correct: false },
            { text: 'Susan Wojcicki', correct: false },
            { text: 'Jennifer Taubert', correct: false }
        ],
        info: 'Anne Wojcicki is the CEO of 23 and Me.'
    },
    {
        question: 'Who is the founder of Girls Who Code?',
        answers: [
            { text: 'Rachel Carson', correct: false },
            { text: 'Elizabeth Feinler', correct: false },
            { text: 'Bozoma Saint John', correct: false },
            { text: 'Reshma Saujani', correct: true }
        ],
        info: 'Reshma Saujani is the Founder and CEO of Girls Who Code, an international nonprofit organization working to close the gender gap in technology and change the image of what a computer programmer looks like and does.'
    }
];