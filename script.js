// Global variables
let currentUser = null;
let currentQuestion = 0;
let score = 0;
let timer = null;
let selectedQuestions = [];
let timeSpent = 0;
let correctAnswers = 0;
let totalQuestions = 10;
let canAnswer = true;

// Utility functions
function updateUserInterface(user) {
    const playerNameInput = document.getElementById('player-name');
    const viewLeaderboardBtn = document.getElementById('view-leaderboard');
    
    if (user) {
        // User is signed in
        if (playerNameInput) {
            playerNameInput.value = user.name;
            playerNameInput.disabled = true;
            playerNameInput.placeholder = 'Signed in as ' + user.name;
        }
        
        if (viewLeaderboardBtn) {
            viewLeaderboardBtn.disabled = false;
            viewLeaderboardBtn.classList.remove('disabled');
        }
    } else {
        // User is signed out
        if (playerNameInput) {
            playerNameInput.value = '';
            playerNameInput.disabled = false;
            playerNameInput.placeholder = 'Enter your name';
        }
        
        if (viewLeaderboardBtn) {
            viewLeaderboardBtn.disabled = true;
            viewLeaderboardBtn.classList.add('disabled');
        }
    }
}

// Timer functions
function startTimer() {
    if (timer) clearInterval(timer);
    timer = setInterval(updateTimer, 1000);
}

function updateTimer() {
    timeSpent++;
    const timeDisplay = document.getElementById('time-display');
    if (timeDisplay) {
        const minutes = Math.floor(timeSpent / 60);
        const seconds = timeSpent % 60;
        timeDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
}

function stopTimer() {
    if (timer) {
        clearInterval(timer);
        timer = null;
    }
}

// Quiz functions
function startQuiz() {
    try {
        const playerName = document.getElementById('player-name').value.trim();
        if (!playerName) {
            alert('Please enter your name to start the quiz');
            return;
        }
        
        currentUser = { name: playerName };
        
        // Reset quiz state
        score = 0;
        timeSpent = 0;
        correctAnswers = 0;
        currentQuestion = 0;
        selectedQuestions = [];
        
        // Get random questions
        selectedQuestions = window.getRandomQuestions(10);
        if (!selectedQuestions || selectedQuestions.length === 0) {
            throw new Error('No questions available');
        }
        
        // Reset score display
        const scoreDisplay = document.getElementById('score');
        if (scoreDisplay) {
            scoreDisplay.textContent = '0';
        }
        
        // Reset timer
        const timeDisplay = document.getElementById('time-display');
        if (timeDisplay) {
            timeDisplay.textContent = '00:00';
        }
        
        // Reset progress bar
        const progressFill = document.getElementById('progress-fill');
        if (progressFill) {
            progressFill.style.width = '0%';
        }
        
        // Start timer
        startTimer();
        
        // Show first question
        showQuestion();
        
        // Switch to quiz screen
        switchScreen('quiz-screen');
        
        // Update player name display
        const playerNameDisplay = document.getElementById('player-name-display');
        if (playerNameDisplay) {
            playerNameDisplay.textContent = playerName;
        }
    } catch (error) {
        console.error('Error starting quiz:', error);
        alert('Error starting quiz. Please try again.');
    }
}

function showQuestion() {
    const questionEl = document.getElementById('question');
    const optionsEl = document.getElementById('options');
    const currentQuestionEl = document.getElementById('current-question');
    const nextBtn = document.getElementById('next-btn');
    
    if (!questionEl || !optionsEl || currentQuestion >= selectedQuestions.length) return;
    
    // Reset state
    canAnswer = true;
    if (nextBtn) {
        nextBtn.classList.remove('show');
    }
    
    // Update question counter
    if (currentQuestionEl) {
        currentQuestionEl.textContent = currentQuestion + 1;
    }
    
    const question = selectedQuestions[currentQuestion];
    questionEl.textContent = question.question;
    
    // Clear previous options
    optionsEl.innerHTML = '';
    
    // Create new option buttons
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option-btn';
        button.textContent = option;
        button.onclick = () => checkAnswer(index);
        optionsEl.appendChild(button);
    });
    
    // Update progress bar
    const progressFill = document.getElementById('progress-fill');
    if (progressFill) {
        const progress = ((currentQuestion + 1) / totalQuestions) * 100;
        progressFill.style.width = `${progress}%`;
    }
}

function checkAnswer(selectedIndex) {
    if (!canAnswer) return;
    
    const question = selectedQuestions[currentQuestion];
    const correct = selectedIndex === question.correct;
    const options = document.querySelectorAll('.option-btn');
    const nextBtn = document.getElementById('next-btn');
    
    // Prevent further answers
    canAnswer = false;
    
    // Update score
    if (correct) {
        score += 10;
        correctAnswers++;
        document.getElementById('score').textContent = score;
    } else {
        score = Math.max(0, score - 2);
        document.getElementById('score').textContent = score;
    }
    
    // Show correct and incorrect answers
    options.forEach((option, index) => {
        if (index === question.correct) {
            option.classList.add('correct');
        } else if (index === selectedIndex) {
            option.classList.add('incorrect');
        }
        option.disabled = true;
    });
    
    // Show next button
    if (nextBtn) {
        nextBtn.classList.add('show');
        nextBtn.onclick = () => {
            currentQuestion++;
            if (currentQuestion < selectedQuestions.length) {
                showQuestion();
            } else {
                endQuiz();
            }
        };
    }
}

function endQuiz() {
    // Stop timer and get final time
    stopTimer();
    const finalTime = document.getElementById('time-display').textContent;
    const totalQuestions = selectedQuestions.length;
    const accuracy = Math.round((correctAnswers / totalQuestions) * 100);
    
    // Update result screen
    document.getElementById('final-score-value').textContent = score;
    document.getElementById('final-time').textContent = finalTime;
    document.getElementById('accuracy-value').textContent = `${accuracy}%`;
    
    // Save score
    saveScore(score, timeSpent, accuracy);
    
    // Switch to result screen
    switchScreen('result-screen');
}

// Save score to leaderboard
function saveScore(score, time, accuracy) {
    try {
        const leaderboardData = JSON.parse(localStorage.getItem('leaderboard') || '[]');
        
        // Add new score
        leaderboardData.push({
            name: currentUser.name,
            score: score,
            time: time,
            accuracy: accuracy,
            date: new Date().toISOString()
        });
        
        // Sort by score (descending) and limit to top 100
        leaderboardData.sort((a, b) => b.score - a.score);
        if (leaderboardData.length > 100) {
            leaderboardData.length = 100;
        }
        
        // Save to localStorage
        localStorage.setItem('leaderboard', JSON.stringify(leaderboardData));
    } catch (error) {
        console.error('Error saving score:', error);
    }
}

// Load leaderboard
function loadLeaderboard(filter = 'all') {
    try {
        const leaderboardData = JSON.parse(localStorage.getItem('leaderboard') || '[]');
        const leaderboardBody = document.querySelector('.leaderboard-table tbody');
        if (!leaderboardBody) return;
        
        // Clear existing entries
        leaderboardBody.innerHTML = '';
        
        // Filter data
        let filteredData = [...leaderboardData];
        if (filter === 'weekly') {
            const weekAgo = new Date();
            weekAgo.setDate(weekAgo.getDate() - 7);
            filteredData = leaderboardData.filter(entry => new Date(entry.date) > weekAgo);
        }
        
        // Sort by score
        filteredData.sort((a, b) => b.score - a.score);
        
        // Add entries
        filteredData.forEach((entry, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${index + 1}</td>
                <td>${entry.name}</td>
                <td>${entry.score}</td>
                <td>${Math.round(entry.accuracy)}%</td>
                <td>${Math.floor(entry.time / 60)}:${(entry.time % 60).toString().padStart(2, '0')}</td>
            `;
            leaderboardBody.appendChild(row);
        });
    } catch (error) {
        console.error('Error loading leaderboard:', error);
    }
}

// Add some sample data for testing
function addSampleData() {
    const sampleData = [
        { name: "John", score: 95, time: 180, accuracy: 90, date: new Date().toISOString() },
        { name: "Alice", score: 88, time: 200, accuracy: 85, date: new Date().toISOString() },
        { name: "Bob", score: 82, time: 220, accuracy: 80, date: new Date().toISOString() }
    ];
    
    localStorage.setItem('leaderboard', JSON.stringify(sampleData));
}

// Utility functions
function switchScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // Add sample data if leaderboard is empty
    if (!localStorage.getItem('leaderboard')) {
        addSampleData();
    }
    
    // Start Quiz button
    const startQuizBtn = document.getElementById('start-quiz');
    if (startQuizBtn) {
        startQuizBtn.addEventListener('click', () => {
            const playerName = document.getElementById('player-name');
            if (!playerName) return;
            
            const name = playerName.value.trim();
            if (name) {
                const playerNameDisplay = document.getElementById('player-name-display');
                if (playerNameDisplay) {
                    playerNameDisplay.textContent = name;
                }
                startQuiz();
            } else {
                alert('Please enter your name to start the quiz');
            }
        });
    }
    
    // View Leaderboard button
    const viewLeaderboardBtn = document.getElementById('view-leaderboard');
    if (viewLeaderboardBtn) {
        viewLeaderboardBtn.addEventListener('click', () => {
            loadLeaderboard('all');
            switchScreen('leaderboard-screen');
        });
    }
    
    // Back to Menu button
    const backToMenuBtn = document.getElementById('back-to-menu');
    if (backToMenuBtn) {
        backToMenuBtn.addEventListener('click', () => {
            switchScreen('welcome-screen');
        });
    }
    
    // Play Again button
    const playAgainBtn = document.getElementById('play-again');
    if (playAgainBtn) {
        playAgainBtn.addEventListener('click', () => {
            switchScreen('welcome-screen');
        });
    }
    
    // Leaderboard filter buttons
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            e.target.classList.add('active');
            // Load leaderboard with selected filter
            const filter = e.target.dataset.filter;
            loadLeaderboard(filter);
        });
    });
});
