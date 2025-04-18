// MCQs data - Computer science, cybersecurity, and AI related questions
const mcqs = [
    { question: "Which of the following is a type of cyber attack that involves tricking users into revealing sensitive information?", options: ["DDoS", "Phishing", "Spoofing", "Brute Force"], answer: 1 },
    { question: "What does 'SQL' stand for in database technology?", options: ["Structured Query Language", "Simple Query Language", "Standard Query Logic", "System Query Language"], answer: 0 },
    { question: "Which encryption method uses the same key for both encryption and decryption?", options: ["Asymmetric encryption", "Symmetric encryption", "Hashing", "PKI"], answer: 1 },
    { question: "What is the primary function of a firewall in network security?", options: ["Detect malware", "Block unauthorized access", "Encrypt data", "Speed up connection"], answer: 1 },
    { question: "What type of AI focuses on making machines think and behave like humans?", options: ["Neural Networks", "Machine Learning", "Strong AI", "Weak AI"], answer: 2 },
    { question: "Which of the following is not one of the three main types of machine learning?", options: ["Supervised Learning", "Reinforcement Learning", "Unsupervised Learning", "Distributed Learning"], answer: 3 },
    { question: "What does HTTPS stand for?", options: ["Hyper Text Transfer Protocol Secure", "Hyper Text Transport Protocol Secure", "Hyper Text Transfer Program Secure", "High Transfer Text Protocol System"], answer: 0 },
    { question: "Which of the following is an example of a statically typed programming language?", options: ["Python", "JavaScript", "Java", "PHP"], answer: 2 },
    { question: "What is the time complexity of a binary search algorithm?", options: ["O(n)", "O(n²)", "O(log n)", "O(n log n)"], answer: 2 },
    { question: "Which data structure follows the Last In First Out (LIFO) principle?", options: ["Queue", "Stack", "Linked List", "Tree"], answer: 1 },
    { question: "What is Cross-Site Scripting (XSS)?", options: ["A virus that affects multiple websites", "A vulnerability allowing attackers to inject malicious scripts into web pages", "A method for sharing scripts between websites", "A technique for optimizing website loading"], answer: 1 },
    { question: "Which of the following authentication factors relies on something a user possesses?", options: ["Password", "Fingerprint", "Security token", "PIN"], answer: 2 },
    { question: "What is the purpose of a Virtual Private Network (VPN)?", options: ["Increase internet speed", "Create a secure connection over a public network", "Store large amounts of data", "Host multiple websites"], answer: 1 },
    { question: "What is the difference between HTTP and HTTPS?", options: ["HTTPS is faster", "HTTPS uses encryption", "HTTP is newer", "HTTP is more secure"], answer: 1 },
    { question: "Which algorithm is commonly used for secure password storage?", options: ["MD5", "SHA-256", "AES", "Bcrypt"], answer: 3 },
    { question: "What is the primary goal of Artificial Intelligence?", options: ["Create human-like robots", "Develop smart algorithms", "Create systems that can perform tasks that normally require human intelligence", "Speed up computer processing"], answer: 2 },
    { question: "What is the purpose of an Intrusion Detection System (IDS)?", options: ["Block unauthorized access", "Monitor network traffic for suspicious activity", "Encrypt sensitive data", "Speed up network performance"], answer: 1 },
    { question: "Which of the following is a common application of neural networks?", options: ["Database management", "Image recognition", "Network routing", "File compression"], answer: 1 },
    { question: "What is the role of the kernel in an operating system?", options: ["User interface", "Running applications", "Managing system resources", "Storing files"], answer: 2 },
    { question: "What is a man-in-the-middle attack?", options: ["A physical attack on server infrastructure", "An attack where communication between two parties is intercepted", "A social engineering technique", "A type of malware infection"], answer: 1 },
    { question: "What is a SQL injection attack?", options: ["A cyber attack aimed at databases", "A virus that affects SQL databases", "A method to optimize database queries", "A backup technique for databases"], answer: 0 },
    { question: "Which of the following best describes cloud computing?", options: ["A network of physical servers", "Delivering computing services over the internet", "A type of database", "A programming language"], answer: 1 },
    { question: "What is the purpose of a checksum?", options: ["Verify data integrity", "Compress data", "Encrypt data", "Speed up data access"], answer: 0 },
    { question: "Which of the following is NOT a common cybersecurity threat?", options: ["Phishing", "Malware", "Encryption", "Ransomware"], answer: 2 },
    { question: "What does IoT stand for?", options: ["Internet of Technology", "Internet of Things", "Infrastructure of Technology", "Integrated Online Technology"], answer: 1 },
    { question: "What is the purpose of a load balancer in a computer network?", options: ["Distribute network traffic", "Increase security", "Compress data", "Store backup data"], answer: 0 },
    { question: "What is the primary use of blockchain technology?", options: ["Artificial intelligence", "Network security", "Distributed ledger", "Cloud computing"], answer: 2 },
    { question: "Which of the following is a characteristic of good algorithm design?", options: ["High memory usage", "Complex implementation", "High efficiency", "Long execution time"], answer: 2 },
    { question: "What is a denial-of-service (DoS) attack?", options: ["A virus that deletes system files", "An attempt to make a system unavailable", "A technique to steal personal data", "A method to crack passwords"], answer: 1 },
    { question: "Which protocol is used for sending emails?", options: ["HTTP", "FTP", "SMTP", "SSH"], answer: 2 },
    { question: "What is the main challenge of Big Data?", options: ["Collection", "Storage", "Processing", "All of the above"], answer: 3 },
    { question: "What is multi-factor authentication?", options: ["Using multiple passwords", "Using multiple security questions", "Using two or more authentication methods", "Logging in from multiple devices"], answer: 2 },
    { question: "What is a hash function in cryptography?", options: ["A function that converts input data into a fixed-size string of bytes", "A method to encrypt data", "A technique to compress data", "A system to organize data"], answer: 0 },
    { question: "Which of the following best describes machine learning?", options: ["A specific programming language", "A field of AI that enables systems to learn from data", "A database management system", "A method to design hardware components"], answer: 1 },
    { question: "What is the primary function of a router in computer networks?", options: ["Connect multiple networks", "Prevent security breaches", "Store network data", "Increase network speed"], answer: 0 },
    { question: "What is the difference between a virus and a worm?", options: ["Worms are more harmful", "Viruses require human action to spread, worms self-replicate", "Viruses are newer than worms", "Worms affect only networks, not computers"], answer: 1 },
    { question: "What is a zero-day vulnerability?", options: ["A flaw discovered on the day of software release", "A security hole unknown to the vendor", "A vulnerability that cannot be fixed", "A flaw that takes zero days to exploit"], answer: 1 },
    { question: "Which of the following is NOT a common programming paradigm?", options: ["Object-oriented programming", "Functional programming", "Procedural programming", "Distributive programming"], answer: 3 },
    { question: "What does API stand for in software development?", options: ["Application Programming Interface", "Automated Program Interaction", "Application Process Integration", "Advanced Programming Implementation"], answer: 0 },
    { question: "What is the CAP theorem in distributed computing?", options: ["Consistency, Availability, Partition tolerance", "Computing, Algorithm, Programming", "Centralized, Advanced, Processing", "Concurrency, Automation, Performance"], answer: 0 },
    { question: "What is the main purpose of a compiler?", options: ["Run a program", "Convert source code to machine code", "Find errors in code", "Optimize code execution"], answer: 1 },
    { question: "Which of the following is a characteristic of deep learning?", options: ["It requires small datasets", "It uses multiple layers of neural networks", "It is easier to train than basic machine learning", "It does not require GPUs"], answer: 1 },
    { question: "What is a buffer overflow vulnerability?", options: ["When a program writes data beyond the boundaries of allocated memory", "When a computer runs out of memory", "When a buffer is filled too slowly", "When memory isn't properly allocated"], answer: 0 },
    { question: "What is the difference between HTTP and HTTPS protocols?", options: ["HTTPS is faster", "HTTPS uses SSL/TLS for encryption", "HTTP is newer", "HTTP is more secure"], answer: 1 },
    { question: "What is the primary purpose of a DNS server?", options: ["Store website data", "Translate domain names to IP addresses", "Filter malicious traffic", "Process database queries"], answer: 1 },
    { question: "Which of the following is a common use of data mining?", options: ["Extracting minerals from data centers", "Finding patterns in large datasets", "Creating digital currency", "Securing databases"], answer: 1 },
    { question: "What is the primary goal of DevOps practices?", options: ["Replace developers with automation", "Improve collaboration between development and operations teams", "Develop operations software", "Outsource IT operations"], answer: 1 },
    { question: "What is a sandbox in software security?", options: ["A testing environment isolated from the production network", "A game development platform", "A database management system", "A coding challenge platform"], answer: 0 }
];

// Global variables
let currentQuestionIndex = 0;
let userAnswers = [];
let timeLeft = 90 * 60; // 1 hour 30 minutes in seconds
let timer;
let userName = "";
let userEmail = "";
let userAge = "";
let userCity = "";
let userFavoriteSubject = "";
let countdownEnded = false;

// Set the countdown date (5 days from now)
const countdownDate = new Date();
countdownDate.setDate(countdownDate.getDate() + 5);

// Store user data and test progress in localStorage
let userData = JSON.parse(localStorage.getItem('userData')) || null;
let testProgress = JSON.parse(localStorage.getItem('testProgress')) || null;
let currentQuestion = parseInt(localStorage.getItem('currentQuestion')) || 0;
let userAnswers = JSON.parse(localStorage.getItem('userAnswers')) || {};
let testStartTime = localStorage.getItem('testStartTime') || null;
let remainingTime = localStorage.getItem('remainingTime') || 5400; // 90 minutes in seconds

// Security measures
let securityViolations = 0;
let isFullscreen = false;
let lastActiveTime = Date.now();

// Constants
const TOTAL_QUESTIONS = 150;
const MAX_SECURITY_VIOLATIONS = 3;

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    // Check if user has already registered
    if (userData) {
        document.getElementById('popup').classList.add('hidden');
        initializeTest();
    }

    // Handle registration form
    document.getElementById('userForm').addEventListener('submit', handleRegistration);

    // Security event listeners
    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('blur', handleWindowBlur);
    document.addEventListener('keydown', handleKeyPress);
    setInterval(checkUserActivity, 1000);
});

// Handle user registration
function handleRegistration(e) {
    e.preventDefault();
    userData = {
        name: document.getElementById('name').value,
        age: document.getElementById('age').value,
        city: document.getElementById('city').value,
        favoriteSubject: document.getElementById('favoriteSubject').value,
        registrationTime: new Date().toISOString()
    };
    localStorage.setItem('userData', JSON.stringify(userData));
    document.getElementById('popup').classList.add('hidden');
    initializeTest();
}

// Initialize or resume test
function initializeTest() {
    if (!testStartTime) {
        testStartTime = Date.now();
        localStorage.setItem('testStartTime', testStartTime);
    }

    document.getElementById('mcqSection').classList.remove('hidden');
    loadQuestions();
    updateTimer();
    setInterval(updateTimer, 1000);
    requestFullscreen();
}

// Security Functions
function handleVisibilityChange() {
    if (document.hidden) {
        recordSecurityViolation('Tab switched or minimized');
    }
}

function handleWindowBlur() {
    recordSecurityViolation('Window lost focus');
}

function handleKeyPress(e) {
    // Prevent common shortcut keys
    if ((e.ctrlKey || e.metaKey) && 
        (e.key === 'c' || e.key === 'v' || e.key === 'u' || e.key === 'p')) {
        e.preventDefault();
        recordSecurityViolation('Attempted to use restricted keyboard shortcut');
    }
}

function checkUserActivity() {
    const currentTime = Date.now();
    if (currentTime - lastActiveTime > 30000) { // 30 seconds
        recordSecurityViolation('User inactivity detected');
    }
    lastActiveTime = currentTime;
}

function recordSecurityViolation(reason) {
    securityViolations++;
    console.warn(`Security violation (${securityViolations}/${MAX_SECURITY_VIOLATIONS}): ${reason}`);
    
    if (securityViolations >= MAX_SECURITY_VIOLATIONS) {
        alert('Multiple security violations detected. This incident will be reported.');
        // You can add additional consequences here
    }
}

function requestFullscreen() {
    const element = document.documentElement;
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
    }
    isFullscreen = true;
}

// Timer Functions
function updateTimer() {
    if (remainingTime <= 0) {
        submitTest();
        return;
    }

    remainingTime--;
    localStorage.setItem('remainingTime', remainingTime);

    const hours = Math.floor(remainingTime / 3600);
    const minutes = Math.floor((remainingTime % 3600) / 60);
    const seconds = remainingTime % 60;
    
    document.getElementById('timer').textContent = 
        `Time Left: ${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// Question Navigation
function nextQuestion() {
    if (currentQuestion < TOTAL_QUESTIONS - 1) {
        currentQuestion++;
        localStorage.setItem('currentQuestion', currentQuestion);
        loadQuestions();
    }
}

function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        localStorage.setItem('currentQuestion', currentQuestion);
        loadQuestions();
    }
}

// Save answer and update progress
function saveAnswer(questionId, answer) {
    userAnswers[questionId] = answer;
    localStorage.setItem('userAnswers', JSON.stringify(userAnswers));
    updateProgressBar();
}

function updateProgressBar() {
    const progress = (Object.keys(userAnswers).length / TOTAL_QUESTIONS) * 100;
    document.getElementById('progressBar').style.width = `${progress}%`;
}

// Submit test and show results
function submitTest() {
    // Calculate results
    const score = calculateScore();
    const results = {
        userData: userData,
        score: score,
        completionTime: new Date().toISOString(),
        securityViolations: securityViolations
    };
    
    localStorage.setItem('testResults', JSON.stringify(results));
    showResults(results);
}

function showResults(results) {
    document.getElementById('mcqSection').classList.add('hidden');
    document.getElementById('resultsSection').classList.remove('hidden');
    
    document.getElementById('candidateName').textContent = results.userData.name;
    document.getElementById('candidateScore').textContent = `${results.score}%`;
    document.getElementById('certificateDate').textContent = new Date().toLocaleDateString();
    
    if (results.score >= 60) {
        document.getElementById('certificateContainer').classList.remove('hidden');
    }
}

// Prevent right-click
document.addEventListener('contextmenu', (e) => e.preventDefault());

// Prevent copy-paste
document.addEventListener('copy', (e) => e.preventDefault());
document.addEventListener('paste', (e) => e.preventDefault());

// Handle page refresh/unload
window.addEventListener('beforeunload', (e) => {
    if (!testProgress?.completed) {
        e.preventDefault();
        e.returnValue = '';
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const userForm = document.getElementById('userForm');
    const popup = document.getElementById('popup');
    const mcqSection = document.getElementById('mcqSection');
    const resultsSection = document.getElementById('resultsSection');
    const timerElement = document.getElementById('timer');
    const progressBar = document.getElementById('progressBar');
    const questionIndicators = document.getElementById('questionIndicators');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const submitBtn = document.getElementById('submitBtn');

    // Initialize question indicators
    function initializeQuestionIndicators() {
        const indicatorsHTML = mcqs.map((_, index) => {
            return `<div class="question-indicator" data-index="${index}" onclick="jumpToQuestion(${index})">${index + 1}</div>`;
        }).join('');
        
        questionIndicators.innerHTML = indicatorsHTML;
        
        // Add click event to question indicators
        document.querySelectorAll('.question-indicator').forEach(indicator => {
            indicator.addEventListener('click', function() {
                const index = parseInt(this.getAttribute('data-index'));
                jumpToQuestion(index);
            });
        });
    }

    // Timer function
    function startTimer() {
        timer = setInterval(() => {
            if (timeLeft <= 0) {
                clearInterval(timer);
                submitTest();
            } else {
                timeLeft--;
                const hours = Math.floor(timeLeft / 3600);
                const minutes = Math.floor((timeLeft % 3600) / 60);
                const seconds = timeLeft % 60;
                timerElement.textContent = `Time Left: ${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
            }
        }, 1000);
    }

    // Display question
    function displayQuestion(index) {
        const mcqContainer = document.getElementById('mcqs');
        const currentQuestion = mcqs[index];
        
        // Create options HTML
        const optionsHTML = currentQuestion.options.map((option, optIndex) => {
            const isSelected = userAnswers[index] === optIndex;
            return `
                <div class="option-item ${isSelected ? 'selected' : ''}" onclick="selectOption(${index}, ${optIndex})">
                    <input type="radio" name="option" id="option${optIndex}" class="option-radio" ${isSelected ? 'checked' : ''}>
                    <label for="option${optIndex}">${option}</label>
                </div>
            `;
        }).join('');
        
        // Create question HTML
        mcqContainer.innerHTML = `
            <div class="question-header">
                <div class="question-number">Question ${index + 1} of ${mcqs.length}</div>
                <div class="question-text">${currentQuestion.question}</div>
            </div>
            <div class="options-container">
                ${optionsHTML}
            </div>
        `;
        
        // Add click event to options
        document.querySelectorAll('.option-item').forEach((option, optIndex) => {
            option.addEventListener('click', function() {
                selectOption(index, optIndex);
            });
        });
        
        // Update UI elements
        updateQuestionIndicators();
        updateNavigationButtons();
    }

    // Select an option
    window.selectOption = function(questionIndex, optionIndex) {
        userAnswers[questionIndex] = optionIndex;
        updateQuestionIndicators();
        displayQuestion(questionIndex);
    };

    // Navigation functions
    window.prevQuestion = function() {
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            displayQuestion(currentQuestionIndex);
            updateProgressBar();
        }
    };

    window.nextQuestion = function() {
        if (currentQuestionIndex < mcqs.length - 1) {
            currentQuestionIndex++;
            displayQuestion(currentQuestionIndex);
            updateProgressBar();
        } else {
            // Show submit button if on last question
            submitBtn.classList.remove('hidden');
            nextBtn.classList.add('hidden');
        }
    };

    window.jumpToQuestion = function(index) {
        currentQuestionIndex = index;
        displayQuestion(currentQuestionIndex);
        updateProgressBar();
        updateNavigationButtons();
    };

    // Update progress bar
    function updateProgressBar() {
        const progress = ((currentQuestionIndex + 1) / mcqs.length) * 100;
        progressBar.style.width = `${progress}%`;
    }

    // Update question indicators
    function updateQuestionIndicators() {
        document.querySelectorAll('.question-indicator').forEach((indicator, index) => {
            // Remove all classes first
            indicator.classList.remove('active', 'answered');
            
            // Add appropriate classes
            if (index === currentQuestionIndex) {
                indicator.classList.add('active');
            }
            if (userAnswers[index] !== undefined) {
                indicator.classList.add('answered');
            }
        });
    }

    // Update navigation buttons
    function updateNavigationButtons() {
        prevBtn.disabled = currentQuestionIndex === 0;
        
        if (currentQuestionIndex === mcqs.length - 1) {
            nextBtn.classList.add('hidden');
            submitBtn.classList.remove('hidden');
        } else {
            nextBtn.classList.remove('hidden');
            submitBtn.classList.add('hidden');
        }
    }

    // Submit test
    window.submitTest = function() {
        clearInterval(timer);
        calculateResults();
    };

    // Calculate results
    function calculateResults() {
        let correctAnswers = 0;
        let wrongAnswers = 0;
        let unansweredQuestions = 0;
        
        mcqs.forEach((mcq, index) => {
            if (userAnswers[index] === undefined) {
                unansweredQuestions++;
            } else if (userAnswers[index] === mcq.answer) {
                correctAnswers++;
            } else {
                wrongAnswers++;
            }
        });
        
        const score = Math.round((correctAnswers / mcqs.length) * 100);
        
        // Display results
        mcqSection.classList.add('hidden');
        resultsSection.classList.remove('hidden');
        
        document.getElementById('resultsSummary').innerHTML = `
            <h2>Test Completed!</h2>
            <div class="results-item">
                <span>Candidate Name:</span>
                <span>${userName}</span>
            </div>
            <div class="results-item">
                <span>Email:</span>
                <span>${userEmail}</span>
            </div>
            <div class="results-item">
                <span>Age:</span>
                <span>${userAge}</span>
            </div>
            <div class="results-item">
                <span>City:</span>
                <span>${userCity}</span>
            </div>
            <div class="results-item">
                <span>Favorite Subject:</span>
                <span>${userFavoriteSubject}</span>
            </div>
            <div class="results-item">
                <span>Total Questions:</span>
                <span>${mcqs.length}</span>
            </div>
            <div class="results-item">
                <span>Correct Answers:</span>
                <span>${correctAnswers}</span>
            </div>
            <div class="results-item">
                <span>Wrong Answers:</span>
                <span>${wrongAnswers}</span>
            </div>
            <div class="results-item">
                <span>Unanswered Questions:</span>
                <span>${unansweredQuestions}</span>
            </div>
            <div class="result-score">Final Score: ${score}%</div>
        `;
        
        // Show certificate if score is good
        if (score >= 40) {
            showCertificate(userName, score);
        }
    }

    // Show certificate
    function showCertificate(name, score) {
        const certificateContainer = document.getElementById('certificateContainer');
        certificateContainer.classList.remove('hidden');
        
        document.getElementById('candidateName').textContent = name;
        document.getElementById('candidateScore').textContent = `${score}%`;
        
        const today = new Date();
        document.getElementById('certificateDate').textContent = today.toDateString();
    }
}); 