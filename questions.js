const allQuestions = [
    // Operating Systems
    {
        question: "What does CPU stand for?",
        options: ["Central Processing Unit", "Computer Personal Unit", "Central Program Utility", "Computer Processing Utility"],
        correct: 0
    },
    {
        question: "What is the primary purpose of an operating system?",
        options: ["To provide a user interface", "To manage hardware and software resources", "To run applications", "To store data"],
        correct: 1
    },
    {
        question: "Which of these is not a type of operating system?",
        options: ["Batch OS", "Network OS", "Gaming OS", "Real-time OS"],
        correct: 2
    },
    {
        question: "What is virtual memory in operating systems?",
        options: ["RAM memory", "Hard disk space used as RAM", "Cache memory", "ROM memory"],
        correct: 1
    },
    {
        question: "What is a kernel in an operating system?",
        options: ["A type of shell", "Core component of OS", "User interface", "File system"],
        correct: 1
    },

    // Programming and Software Development
    {
        question: "Which programming language is known as the 'mother of all programming languages'?",
        options: ["Python", "Java", "Assembly", "FORTRAN"],
        correct: 2
    },
    {
        question: "What is an API?",
        options: ["Application Programming Interface", "Advanced Programming Integration", "Automated Program Interface", "Application Program Integration"],
        correct: 0
    },
    {
        question: "What is the difference between HTML and HTML5?",
        options: ["No difference", "HTML5 supports video and audio", "HTML5 is older", "HTML has more features"],
        correct: 1
    },
    {
        question: "What is Git used for?",
        options: ["Web browsing", "Version control", "Video editing", "Database management"],
        correct: 1
    },
    {
        question: "What is a compiler?",
        options: ["Code editor", "Program that converts code to machine language", "Debugging tool", "Testing framework"],
        correct: 1
    },

    // Web Technologies
    {
        question: "What does HTML stand for?",
        options: ["Hyper Text Markup Language", "High Tech Modern Language", "Hyper Transfer Markup Language", "High Text Machine Language"],
        correct: 0
    },
    {
        question: "Which of these is not a JavaScript framework?",
        options: ["Angular", "Django", "Vue", "React"],
        correct: 1
    },
    {
        question: "What is CSS used for?",
        options: ["Server scripting", "Database management", "Styling web pages", "Network security"],
        correct: 2
    },
    {
        question: "What is the latest version of HTML?",
        options: ["HTML4", "HTML5", "HTML6", "HTML7"],
        correct: 1
    },
    {
        question: "What is responsive web design?",
        options: ["Fast loading websites", "Websites that adapt to screen size", "Interactive websites", "Secure websites"],
        correct: 1
    },

    // Networking
    {
        question: "What is the purpose of DNS in networking?",
        options: ["To secure websites", "To store websites", "To convert domain names to IP addresses", "To compress data"],
        correct: 2
    },
    {
        question: "What is a firewall?",
        options: ["Antivirus software", "Network security system", "Web browser", "File compression tool"],
        correct: 1
    },
    {
        question: "What is HTTP?",
        options: ["Web browser", "Programming language", "Transfer protocol", "Operating system"],
        correct: 2
    },
    {
        question: "What is a router?",
        options: ["Network device for directing data", "Storage device", "Processing unit", "Input device"],
        correct: 0
    },
    {
        question: "What is bandwidth?",
        options: ["Network speed", "Data capacity", "Cable type", "IP address"],
        correct: 1
    },

    // Data Structures and Algorithms
    {
        question: "Which data structure uses LIFO?",
        options: ["Queue", "Stack", "Array", "Tree"],
        correct: 1
    },
    {
        question: "What is a binary search tree?",
        options: ["Linear data structure", "Hierarchical data structure", "File system", "Network topology"],
        correct: 1
    },
    {
        question: "What is the time complexity of binary search?",
        options: ["O(n)", "O(log n)", "O(n²)", "O(1)"],
        correct: 1
    },
    {
        question: "What is recursion?",
        options: ["Loop structure", "Function calling itself", "Data type", "Variable declaration"],
        correct: 1
    },
    {
        question: "What is a linked list?",
        options: ["Array type", "Sequential collection", "Tree structure", "Graph type"],
        correct: 1
    },

    // Computer Hardware
    {
        question: "What is the main function of RAM?",
        options: ["Permanent storage", "Processing data", "Temporary storage", "Cooling system"],
        correct: 2
    },
    {
        question: "What is a GPU?",
        options: ["Storage unit", "Graphics processor", "Network device", "Input device"],
        correct: 1
    },
    {
        question: "What is an SSD?",
        options: ["Solid State Drive", "System Software Drive", "Super Speed Drive", "System State Drive"],
        correct: 0
    },
    {
        question: "What is overclocking?",
        options: ["Time management", "Increasing component speed", "Power saving", "Memory cleaning"],
        correct: 1
    },
    {
        question: "What is a motherboard?",
        options: ["Power supply", "Main circuit board", "Storage device", "Processing unit"],
        correct: 1
    },

    // Cybersecurity
    {
        question: "What is encryption?",
        options: ["Data compression", "Data conversion", "Data protection", "Data transmission"],
        correct: 2
    },
    {
        question: "What is a VPN?",
        options: ["Virtual Private Network", "Visual Processing Node", "Variable Program Network", "Virtual Program Node"],
        correct: 0
    },
    {
        question: "What is malware?",
        options: ["Hardware tool", "Malicious software", "Network protocol", "Operating system"],
        correct: 1
    },
    {
        question: "What is phishing?",
        options: ["Network scanning", "Data backup", "Social engineering attack", "Password encryption"],
        correct: 2
    },
    {
        question: "What is two-factor authentication?",
        options: ["Double password", "Two-step verification", "Backup system", "Encryption method"],
        correct: 1
    },

    // Database
    {
        question: "What is SQL?",
        options: ["Structured Query Language", "Simple Query Language", "System Query Language", "Standard Query Logic"],
        correct: 0
    },
    {
        question: "What is a primary key?",
        options: ["Password", "Unique identifier", "Foreign key", "Index"],
        correct: 1
    },
    {
        question: "What is DBMS?",
        options: ["Database Memory System", "Database Management System", "Data Backup Management System", "Data Binary Management System"],
        correct: 1
    },
    {
        question: "What is normalization in databases?",
        options: ["Data compression", "Data organization", "Data encryption", "Data backup"],
        correct: 1
    },
    {
        question: "What is a JOIN in SQL?",
        options: ["Data splitting", "Data combining", "Data sorting", "Data filtering"],
        correct: 1
    },

    // Cloud Computing
    {
        question: "What is cloud computing?",
        options: ["Internet-based computing", "Weather forecasting", "Network security", "Data encryption"],
        correct: 0
    },
    {
        question: "What is SaaS?",
        options: ["Security as a Service", "Software as a Service", "Storage as a Service", "System as a Service"],
        correct: 1
    },
    {
        question: "What is AWS?",
        options: ["Amazon Web Services", "Advanced Web System", "Automated Web Service", "Advanced Web Security"],
        correct: 0
    },
    {
        question: "What is serverless computing?",
        options: ["No computers", "No internet", "Cloud execution model", "Offline computing"],
        correct: 2
    },
    {
        question: "What is cloud storage?",
        options: ["Local storage", "Remote storage service", "Memory card", "Hard drive"],
        correct: 1
    },

    // Mobile Development
    {
        question: "What is Android?",
        options: ["Web browser", "Mobile OS", "Application", "Programming language"],
        correct: 1
    },
    {
        question: "What is iOS?",
        options: ["Internet OS", "Apple's mobile OS", "Web service", "Android version"],
        correct: 1
    },
    {
        question: "What is React Native?",
        options: ["Web framework", "Mobile development framework", "Database", "Operating system"],
        correct: 1
    },
    {
        question: "What is an APK?",
        options: ["Android Package Kit", "Apple Program Kit", "Application Protocol Kit", "Advanced Program Kit"],
        correct: 0
    },
    {
        question: "What is mobile-first design?",
        options: ["Desktop priority", "Mobile priority design", "Tablet design", "Print design"],
        correct: 1
    },

    // Artificial Intelligence
    {
        question: "What is machine learning?",
        options: ["Robot manufacturing", "Computer repair", "AI subset for pattern learning", "Computer programming"],
        correct: 2
    },
    {
        question: "What is deep learning?",
        options: ["Advanced studying", "Neural network learning", "Memory technique", "Data storage"],
        correct: 1
    },
    {
        question: "What is NLP?",
        options: ["New Learning Process", "Natural Language Processing", "Network Layer Protocol", "Neural Link Processing"],
        correct: 1
    },
    {
        question: "What is computer vision?",
        options: ["Monitor type", "AI image understanding", "Graphics card", "Screen resolution"],
        correct: 1
    },
    {
        question: "What is TensorFlow?",
        options: ["Tensor calculator", "Machine learning framework", "Database system", "Operating system"],
        correct: 1
    },

    // Internet of Things (IoT)
    {
        question: "What is IoT?",
        options: ["Internet of Things", "Internet of Types", "Internet of Tools", "Internet of Time"],
        correct: 0
    },
    {
        question: "What is a smart home?",
        options: ["Expensive house", "Automated home system", "Security system", "Solar powered house"],
        correct: 1
    },
    {
        question: "What is MQTT?",
        options: ["Mobile protocol", "IoT messaging protocol", "Security protocol", "Web protocol"],
        correct: 1
    },
    {
        question: "What is an IoT sensor?",
        options: ["Mobile app", "Data collection device", "Website", "Software program"],
        correct: 1
    },
    {
        question: "What is edge computing?",
        options: ["Web browsing", "Local data processing", "Cloud storage", "Social media"],
        correct: 1
    },

    // Software Testing
    {
        question: "What is unit testing?",
        options: ["Complete system test", "Individual component test", "User interface test", "Security test"],
        correct: 1
    },
    {
        question: "What is debugging?",
        options: ["Adding features", "Finding and fixing errors", "Creating backups", "Writing documentation"],
        correct: 1
    },
    {
        question: "What is regression testing?",
        options: ["Initial testing", "Retesting after changes", "Performance testing", "Security testing"],
        correct: 1
    },
    {
        question: "What is QA?",
        options: ["Quick Analysis", "Quality Assurance", "Quantum Application", "Query Analysis"],
        correct: 1
    },
    {
        question: "What is a test case?",
        options: ["Bug report", "Test conditions", "Test result", "Test tool"],
        correct: 1
    },

    // DevOps
    {
        question: "What is DevOps?",
        options: ["Development operations", "Development and operations integration", "Device operations", "Development options"],
        correct: 1
    },
    {
        question: "What is CI/CD?",
        options: ["Code integration", "Continuous integration/delivery", "Computer interface", "Code implementation"],
        correct: 1
    },
    {
        question: "What is Docker?",
        options: ["Web browser", "Containerization platform", "Operating system", "Programming language"],
        correct: 1
    },
    {
        question: "What is Kubernetes?",
        options: ["Database", "Container orchestration", "Programming language", "Web server"],
        correct: 1
    },
    {
        question: "What is Jenkins?",
        options: ["Database", "Automation server", "Web server", "Operating system"],
        correct: 1
    },

    // Emerging Technologies
    {
        question: "What is blockchain?",
        options: ["Cryptocurrency", "Distributed ledger technology", "Password system", "Cloud storage"],
        correct: 1
    },
    {
        question: "What is 5G?",
        options: ["Mobile network generation", "Computer processor", "Storage device", "Software version"],
        correct: 0
    },
    {
        question: "What is quantum computing?",
        options: ["Fast computing", "Quantum mechanics-based computing", "Cloud computing", "Mobile computing"],
        correct: 1
    },
    {
        question: "What is augmented reality?",
        options: ["Virtual world", "Enhanced real world", "Video game", "3D printing"],
        correct: 1
    },
    {
        question: "What is edge AI?",
        options: ["Cloud computing", "Local AI processing", "Gaming technology", "Web technology"],
        correct: 1
    },

    // Digital Ethics and Privacy
    {
        question: "What is GDPR?",
        options: ["Gaming protocol", "Data protection regulation", "Graphics driver", "Web standard"],
        correct: 1
    },
    {
        question: "What is data privacy?",
        options: ["Data encryption", "Information protection rights", "Password security", "Network security"],
        correct: 1
    },
    {
        question: "What is digital footprint?",
        options: ["Computer memory", "Online activity trace", "File size", "Download speed"],
        correct: 1
    },
    {
        question: "What is cyberbullying?",
        options: ["Computer virus", "Online harassment", "Network attack", "Software bug"],
        correct: 1
    },
    {
        question: "What is net neutrality?",
        options: ["Internet speed", "Internet traffic equality", "Web security", "Browser setting"],
        correct: 1
    },

    // Computer Graphics
    {
        question: "What is RGB?",
        options: ["Computer brand", "Color model", "File format", "Programming language"],
        correct: 1
    },
    {
        question: "What is rendering?",
        options: ["Image creation process", "File compression", "Data transfer", "Code compilation"],
        correct: 0
    },
    {
        question: "What is ray tracing?",
        options: ["Network tracking", "Light simulation technique", "File scanning", "Code analysis"],
        correct: 1
    },
    {
        question: "What is anti-aliasing?",
        options: ["Security feature", "Edge smoothing technique", "Virus protection", "Data compression"],
        correct: 1
    },
    {
        question: "What is a pixel?",
        options: ["Color type", "Picture element", "File format", "Screen type"],
        correct: 1
    }
];

// Function to get random questions
function getRandomQuestions(count) {
    const shuffled = [...allQuestions].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

// Export both the questions array and the function
window.questions = allQuestions;
window.getRandomQuestions = getRandomQuestions;
