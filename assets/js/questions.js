let questions = [
    {
        question: "Which of the following is an example of a non-contact force?",
        options: ["Magnetic force", "Friction", "Gravity", "Tension"],
        answer: "Magnetic force"
    },
    {
        question: "What is the capital of Italy?",
        options: ["Paris", "Berlin", "Rome", "Madrid"],
        answer: "Rome"
    },
    {
        question: "What is the largest mammal on Earth?",
        options: ["Elephant", "Giraffe", "Blue whale", "Dolphin"],
        answer: "Blue whale"
    },
    {
        question: "Which element has the chemical symbol 'H'?",
        options: ["Helium", "Hydrogen", "Hassium", "Hafnium"],
        answer: "Hydrogen"
    },
    {
        question: "What is the square root of 64?",
        options: ["4", "6", "8", "10"],
        answer: "8"
    },
    {
        question: "Which planet is known as the 'Red Planet'?",
        options: ["Earth", "Mars", "Venus", "Jupiter"],
        answer: "Mars"
    },
    {
        question: "In what year did Christopher Columbus reach the Americas?",
        options: ["1492", "1607", "1776", "1812"],
        answer: "1492"
    },
    {
        question: "What is the capital of Japan?",
        options: ["Seoul", "Tokyo", "Beijing", "Bangkok"],
        answer: "Tokyo"
    },
    {
        question: "What is the main gas responsible for the greenhouse effect?",
        options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Methane"],
        answer: "Carbon dioxide"
    },
    {
        question: "Which of the following is a prime number?",
        options: ["9", "15", "7", "12"],
        answer: "7"
    },
    {
        question: "What is the capital of Australia?",
        options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
        answer: "Canberra"
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["Charles Dickens", "Jane Austen", "William Shakespeare", "Mark Twain"],
        answer: "William Shakespeare"
    },
    {
        question: "What is the speed of light in a vacuum?",
        options: ["300,000 km/s", "150,000 km/s", "500,000 km/s", "750,000 km/s"],
        answer: "300,000 km/s"
    },
    {
        question: "Which ocean is the largest?",
        options: ["Atlantic", "Indian", "Southern", "Pacific"],
        answer: "Pacific"
    },
    {
        question: "What is the capital of China?",
        options: ["Beijing", "Shanghai", "Guangzhou", "Hong Kong"],
        answer: "Beijing"
    },
    {
        question: "What is the square of 9?",
        options: ["27", "81", "64", "49"],
        answer: "81"
    },
    {
        question: "Which country is known as the 'Land of the Rising Sun'?",
        options: ["China", "Japan", "South Korea", "Thailand"],
        answer: "Japan"
    },
    {
        question: "What is the chemical symbol for gold?",
        options: ["Au", "Ag", "Fe", "Cu"],
        answer: "Au"
    },
    {
        question: "Who painted the Mona Lisa?",
        options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Michelangelo"],
        answer: "Leonardo da Vinci"
    },
    {
        question: "What is the smallest prime number?",
        options: ["Zero", "One", "Two", "Three"],
        answer: "Two"
    },
    {
        question: "Which of the following is a continent?",
        options: ["Mexico", "Africa", "Greenland", "New Zealand"],
        answer: "Africa"
    },
    {
        question: "Who is known as the 'Father of Computer Science'?",
        options: ["Bill Gates", "Alan Turing", "Steve Jobs", "Mark Zuckerberg"],
        answer: "Alan Turing"
    },
    {
        question: "What is the capital of Canada?",
        options: ["Toronto", "Ottawa", "Vancouver", "Montreal"],
        answer: "Ottawa"
    },
    {
        question: "Which gas do plants absorb during photosynthesis?",
        options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
        answer: "Carbon dioxide"
    },
    {
        question: "What is the main component of Earth's atmosphere?",
        options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Argon"],
        answer: "Nitrogen"
    },
    {
        question: "Who developed the theory of relativity?",
        options: ["Isaac Newton", "Galileo Galilei", "Albert Einstein", "Stephen Hawking"],
        answer: "Albert Einstein"
    },
    {
        question: "Which is the longest river in Africa?",
        options: ["Nile", "Amazon", "Congo", "Niger"],
        answer: "Nile"
    },
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        answer: "Paris"
    },
    {
        question: "What is the powerhouse of the cell?",
        options: ["Nucleus", "Mitochondria", "Endoplasmic reticulum", "Ribosome"],
        answer: "Mitochondria"
    },
    {
        question: "Which planet is known as the 'Morning Star'?",
        options: ["Venus", "Mars", "Jupiter", "Mercury"],
        answer: "Venus"
    },
    {
        question: "What is the main function of the kidneys?",
        options: ["Digestion", "Circulation", "Filtration", "Respiration"],
        answer: "Filtration"
    },
    {
        question: "What is the square root of 100?",
        options: ["8", "10", "12", "14"],
        answer: "10"
    },
    {
        question: "Which is the largest desert in the world?",
        options: ["Sahara", "Arctic", "Gobi", "Karakum"],
        answer: "Sahara"
    },
    {
        question: "What is the capital of Brazil?",
        options: ["Buenos Aires", "Lima", "Brasília", "Rio de Janeiro"],
        answer: "Brasília"
    },
    {
        question: "What is the main component of bones?",
        options: ["Calcium", "Iron", "Potassium", "Sodium"],
        answer: "Calcium"
    },
    {
        question: "Which is the largest planet in our solar system?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: "Jupiter"
    },
    {
        question: "What is the capital of South Africa?",
        options: ["Cape Town", "Durban", "Johannesburg", "Pretoria"],
        answer: "Pretoria"
    },
    {
        question: "What is the chemical symbol for water?",
        options: ["H2O", "CO2", "O2", "N2"],
        answer: "H2O"
    },
    {
        question: "Which is the largest moon in our solar system?",
        options: ["Io", "Europa", "Ganymede", "Callisto"],
        answer: "Ganymede"
    },
    {
        question: "What is the capital of Russia?",
        options: ["St. Petersburg", "Moscow", "Kiev", "Minsk"],
        answer: "Moscow"
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        options: ["Jane Austen", "Harper Lee", "Charles Dickens", "Mark Twain"],
        answer: "Harper Lee"
    },
    {
        question: "Which of the following is a programming language?",
        options: ["Java", "Cucumber", "Lemon", "Tomato"],
        answer: "Java"
    },
    {
        question: "What is the main function of the liver?",
        options: ["Digestion", "Circulation", "Detoxification", "Respiration"],
        answer: "Detoxification"
    },
    {
        question: "What is the square of 7?",
        options: ["21", "35", "49", "64"],
        answer: "49"
    },
    {
        question: "Which is the smallest bone in the human body?",
        options: ["Femur", "Stapes", "Radius", "Tibia"],
        answer: "Stapes"
    },
    {
        question: "What is the currency of Japan?",
        options: ["Yuan", "Yen", "Won", "Ringgit"],
        answer: "Yen"
    },
    {
        question: "Which gas do plants release during photosynthesis?",
        options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
        answer: "Oxygen"
    },
    {
        question: "Who discovered penicillin?",
        options: ["Alexander Fleming", "Louis Pasteur", "Marie Curie", "Albert Einstein"],
        answer: "Alexander Fleming"
    },
    {
        question: "What is the capital of Argentina?",
        options: ["Rio de Janeiro", "Buenos Aires", "Lima", "Montevideo"],
        answer: "Buenos Aires"
    },
    {
        question: "What is the main component of the Earth's atmosphere?",
        options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Argon"],
        answer: "Nitrogen"
    },
    {
        question: "Which is the largest ocean on Earth?",
        options: ["Atlantic", "Indian", "Southern", "Pacific"],
        answer: "Pacific"
    },
    {
        question: "What is the capital of China?",
        options: ["Beijing", "Shanghai", "Guangzhou", "Hong Kong"],
        answer: "Beijing"
    },
    {
        question: "What is the square of 9?",
        options: ["27", "81", "64", "49"],
        answer: "81"
    },
    {
        question: "Which country is known as the 'Land of the Rising Sun'?",
        options: ["China", "Japan", "South Korea", "Thailand"],
        answer: "Japan"
    },
    {
        question: "What is the chemical symbol for gold?",
        options: ["Au", "Ag", "Fe", "Cu"],
        answer: "Au"
    },
    {
        question: "Who painted the Mona Lisa?",
        options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Michelangelo"],
        answer: "Leonardo da Vinci"
    },
    {
        question: "What is the smallest prime number?",
        options: ["Zero", "One", "Two", "Three"],
        answer: "Two"
    },
    {
        question: "Which of the following is a continent?",
        options: ["Mexico", "Africa", "Greenland", "New Zealand"],
        answer: "Africa"
    },
    {
        question: "Who is known as the 'Father of Computer Science'?",
        options: ["Bill Gates", "Alan Turing", "Steve Jobs", "Mark Zuckerberg"],
        answer: "Alan Turing"
    },
    {
        question: "What is the capital of Canada?",
        options: ["Toronto", "Ottawa", "Vancouver", "Montreal"],
        answer: "Ottawa"
    },
    {
        question: "Which gas do plants absorb during photosynthesis?",
        options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
        answer: "Carbon dioxide"
    },
    {
        question: "What is the main component of Earth's atmosphere?",
        options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Argon"],
        answer: "Nitrogen"
    },
    {
        question: "Who developed the theory of relativity?",
        options: ["Isaac Newton", "Galileo Galilei", "Albert Einstein", "Stephen Hawking"],
        answer: "Albert Einstein"
    }

]