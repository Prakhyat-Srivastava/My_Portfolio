/* ============================================
   PORTFOLIO DATA - CENTRALIZED CONFIGURATION
   Prakhyat Nandan Srivastava - Data Analyst
   
   INSTRUCTIONS FOR UPDATING:
   1. To add a new project: Copy a project object and modify
   2. To add a new certification: Copy a cert object and modify
   3. To update experience: Modify the experience array
   4. To update education: Modify the education array
   5. To update skills/technologies: Modify the respective arrays
   
   All numbers update automatically throughout the site.
   ============================================ */

// ============================================
// PERSONAL INFO - Update this for global changes
// ============================================
const personalInfo = {
    name: "Prakhyat Nandan Srivastava",
    title: "Data Analyst",
    location: "Lucknow, India",
    email: "prakhyatsrivastava024@gmail.com",
    phone: "+91 8532978811",
    whatsapp: "+91 8532978811",
    linkedin: "https://linkedin.com/in/prakhyat-nandan-srivastava",
    github: "https://github.com/Prakhyat-Srivastava",
    resume: "assets/resume.pdf",
    bio: "Entry-level Data Analyst with practical training in SQL, Excel, Python, R, Power BI, and Tableau. Transforming complex data into actionable insights that drive business decisions."
};

// ============================================
// TYPEWRITER TEXTS - These cycle in hero section
// ============================================
const typewriterTexts = [
    "Data Analyst",
    "AI Enthusiast", 
    "Problem Solver",
    "Dashboard Developer",
    "ML Practitioner"
];

// ============================================
// TECHNICAL SKILLS - Data Analytics Professional Skills
// ============================================
const technicalSkillsData = [
    {
        id: 1,
        category: "Data Analytics",
        icon: "analytics",
        skills: [
            "Statistical Analysis",
            "Exploratory Data Analysis (EDA)",
            "Data Cleaning & Preprocessing",
            "Data Validation & Quality Assurance",
            "KPI Development & Reporting",
            "A/B Testing",
            "Regression Analysis",
            "Time Series Analysis",
            "Hypothesis Testing",
            "Correlation Analysis",
            "Feature Engineering",
            "Data Mining"
        ]
    },
    {
        id: 2,
        category: "Data Visualization",
        icon: "chart",
        skills: [
            "Dashboard Design",
            "Interactive Visualizations",
            "Report Automation",
            "Storytelling with Data",
            "DAX & Power Query",
            "Custom Visual Development"
        ]
    },
    {
        id: 3,
        category: "Programming & Scripting",
        icon: "code",
        skills: [
            "Python (Pandas, NumPy)",
            "SQL (Advanced Queries)",
            "R Programming",
            "Excel VBA",
            "Shell Scripting"
        ]
    },
    {
        id: 4,
        category: "Machine Learning",
        icon: "brain",
        skills: [
            "Supervised Learning",
            "Unsupervised Learning",
            "Model Evaluation",
            "Scikit-learn",
            "Predictive Modeling",
            "Classification & Clustering"
        ]
    }
];

// ============================================
// TECHNOLOGIES I USE - Professional Tools with Icons
// ============================================
const technologiesData = [
    {
        name: "Python",
        icon: "python",
        category: "Programming",
        proficiency: "Advanced"
    },
    {
        name: "SQL",
        icon: "sql",
        category: "Database",
        proficiency: "Advanced"
    },
    {
        name: "Excel",
        icon: "excel",
        category: "Analytics",
        proficiency: "Advanced"
    },
    {
        name: "Power BI",
        icon: "powerbi",
        category: "Visualization",
        proficiency: "Advanced"
    },
    {
        name: "Tableau",
        icon: "tableau",
        category: "Visualization",
        proficiency: "Intermediate"
    },
    {
        name: "AWS",
        icon: "aws",
        category: "Cloud",
        proficiency: "Intermediate"
    },
    {
        name: "Azure",
        icon: "azure",
        category: "Cloud",
        proficiency: "Intermediate"
    },
    {
        name: "R",
        icon: "r",
        category: "Programming",
        proficiency: "Intermediate"
    },
    {
        name: "Jupyter",
        icon: "jupyter",
        category: "Development",
        proficiency: "Advanced"
    },
    {
        name: "Git",
        icon: "git",
        category: "Development",
        proficiency: "Intermediate"
    },
    {
        name: "Pandas",
        icon: "pandas",
        category: "Library",
        proficiency: "Advanced"
    },
    {
        name: "NumPy",
        icon: "numpy",
        category: "Library",
        proficiency: "Advanced"
    }
];

// ============================================
// AI TOOLS I USE - Productivity Enhancement
// ============================================
const aiToolsData = [
    {
        name: "ChatGPT",
        icon: "chatgpt",
        description: "Code review, debugging, and data analysis assistance",
        useCase: "Exploratory analysis & automation scripting"
    },
    {
        name: "Gemini",
        icon: "gemini",
        description: "Research and comprehensive data insights",
        useCase: "Research synthesis & trend analysis"
    },
    {
        name: "Claude",
        icon: "claude",
        description: "Complex problem solving and documentation",
        useCase: "Technical documentation & complex queries"
    },
    {
        name: "Cursor",
        icon: "cursor",
        description: "AI-powered code editor for efficient development",
        useCase: "Rapid prototyping & code optimization"
    },
    {
        name: "Kimi",
        icon: "kimi",
        description: "Long-context analysis and document processing",
        useCase: "Large dataset analysis & report generation"
    },
    {
        name: "Grok",
        icon: "grok",
        description: "Real-time insights and quick problem solving",
        useCase: "Quick insights & troubleshooting"
    }
];

// ============================================
// PROJECTS DATA - Add new projects here
// ============================================
const projectsData = [
    {
        id: 1,
        title: "Heart Disease Diagnostic Analysis",
        description: "Performed ETL on the UCI Heart Disease dataset and prepared data through missing-value checks, outlier handling, and categorical normalisation. Conducted univariate and bivariate EDA to study heart disease occurrence by age and gender.",
        image: "images/heart_disease.png",
        technologies: ["Python", "EDA", "Tableau", "Pandas", "NumPy"],
        githubLink: "https://github.com/Prakhyat-Srivastava/HeartDisease-Analysis",
        liveLink: null,
        featured: true
    },
    {
        id: 2,
        title: "Amazon Sales Dashboard",
        description: "Built an interactive Power BI dashboard to visualise multi-year sales performance, tracking total revenue, profit, and order counts over time. Implemented key filters and views including order-date slicer, item-type selector, and revenue by region.",
        image: "images/amazon_sales_analysis.png",
        technologies: ["Power BI", "DAX", "Data Visualization", "Dashboard Design"],
        githubLink: "https://github.com/Prakhyat-Srivastava/Amazon-Sales-Dashboard",
        liveLink: null,
        featured: true
    },
    {
        id: 3,
        title: "Employee Attrition Dashboard",
        description: "Created an HR analytics dashboard to explore employee attrition across gender, marital status, job role, work distance, years worked, and job satisfaction. Highlighted core KPIs enabling HR teams to spot patterns and support retention-focused decisions.",
        image: "images/employee_attrition.png",
        technologies: ["Power BI", "HR Analytics", "Data Visualization", "KPI Reporting"],
        githubLink: "https://github.com/Prakhyat-Srivastava/Employee-Attrition-Dashboard",
        liveLink: null,
        featured: true
    }
];

// ============================================
// CERTIFICATIONS DATA - Sorted by date (newest first)
// ============================================
const certificationsData = [
    {
        id: 1,
        name: "Certified Data Analyst (Python)",
        issuer: "AnalytixLabs",
        image: "images/analytixlabs_DA_python.png",
        date: "June 2025",
        credentialId: "ALB-DSP-16062025-4143",
        verifyUrl: null,
        featured: true
    },
    {
        id: 2,
        name: "Advanced Certification in Data Analytics",
        issuer: "EICT Academy IIT Guwahati",
        image: "images/IIT_DA.png",
        date: "June 2025",
        credentialId: "EICT/2425/038-OC/36/012",
        verifyUrl: null,
        featured: true
    },
    {
        id: 3,
        name: "Certified Data Analyst (Excel, SQL & Power BI)",
        issuer: "AnalytixLabs",
        image: "images/analytixlabs_DA.png",
        date: "March 2025",
        credentialId: "ALB-DVA-23032025-3839",
        verifyUrl: null,
        featured: true
    },
    {
        id: 4,
        name: "AWS Solutions Architect - Associate",
        issuer: "AWS (Amazon Web Services)",
        image: "images/aws_solutions_architect.png",
        date: "January 2024",
        credentialId: "3BCYKEEJQ141QP96",
        verifyUrl: "https://aws.amazon.com/verification",
        featured: true
    },
    {
        id: 5,
        name: "Excel Intermediate Level",
        issuer: "Great Learning Academy",
        image: "images/excel_intermediate.png",
        date: "October 2024",
        credentialId: "HLKAQTOI",
        verifyUrl: "https://www.mygreatlearning.com/certificate/HLKAQTOI",
        featured: false
    },
    {
        id: 6,
        name: "Accenture Data Analytics & Visualization",
        issuer: "Accenture (Forage)",
        image: "images/accenture_certificate.png",
        date: "April 2024",
        credentialId: "wmta5mF2TmdMtjZ2Z",
        verifyUrl: null,
        featured: false
    },
    {
        id: 7,
        name: "Tata Data Visualisation",
        issuer: "Tata (Forage)",
        image: "images/tata_certificate.png",
        date: "May 2024",
        credentialId: "2W62v9uo72ehXEos6",
        verifyUrl: null,
        featured: false
    },
    {
        id: 8,
        name: "AWS Certified Cloud Practitioner",
        issuer: "AWS (Amazon Web Services)",
        image: "images/aws_cloud_practitioner.png",
        date: "December 2023",
        credentialId: "LBV3BVHL52Q1Q137",
        verifyUrl: "https://aws.amazon.com/verification",
        featured: true
    },
    {
        id: 9,
        name: "Azure AI Fundamentals",
        issuer: "Microsoft",
        image: "images/azure_ai_fundamentals.png",
        date: "April 2023",
        credentialId: "6non-DwWu",
        verifyUrl: "https://verify.certiport.com",
        featured: true
    },
    {
        id: 10,
        name: "Applied Machine Learning in Python",
        issuer: "University of Michigan (Coursera)",
        image: "images/applied_machine_learning.png",
        date: "October 2021",
        credentialId: "VD8SB9BPW595",
        verifyUrl: "https://coursera.org/verify/VD8SB9BPW595",
        featured: true
    }
];

// ============================================
// EXPERIENCE DATA - Update work experience here
// ============================================
const experienceData = [
    {
        id: 1,
        role: "Data Analytics Trainee",
        company: "AnalytixLabs",
        duration: "Jan 2025 – Dec 2025",
        location: "Gurugram, India",
        type: "Training",
        description: "Completed hands-on training in Excel, SQL, Power BI, Tableau, and Python through case-based assignments and dashboard tasks. Practised data transformation and validation workflows; built KPI summaries and BI visuals using DAX measures.",
        skills: ["Excel", "SQL", "Power BI", "Tableau", "Python", "DAX"]
    },
    {
        id: 2,
        role: "Data Analytics Intern",
        company: "Internship Studio",
        duration: "Apr 2024 – May 2024",
        location: "Remote",
        type: "Internship",
        description: "Cleaned datasets and prepared analysis-ready outputs for reporting and dashboarding. Presented insights using clear visuals and concise summaries for non-technical stakeholders.",
        skills: ["Data Cleaning", "Data Visualization", "Reporting", "Stakeholder Communication"]
    }
];

// ============================================
// EDUCATION DATA - Update education here
// ============================================
const educationData = [
    {
        id: 1,
        degree: "Integrated M.Tech (CSE), Artificial Intelligence",
        school: "Vellore Institute of Technology, Bhopal",
        year: "September 2025",
        cgpa: "8.61/10",
        showCgpa: true
    },
    {
        id: 2,
        degree: "Class XII, CBSE",
        school: "Doon Global School, Dehradun",
        year: "2020",
        cgpa: "75.33%",
        showCgpa: false
    },
    {
        id: 3,
        degree: "Class X, CBSE",
        school: "St. Clare's Sr. Sec. School, Agra",
        year: "2018",
        cgpa: "63.00%",
        showCgpa: false
    }
];

// ============================================
// RESEARCH DATA - Update publication here
// ============================================
const researchData = {
    title: "Optimized Machine Learning Framework for Sentiment Analysis for Amazon Product Reviews",
    journal: "Journal of Electrical Systems, Vol. 20, No. 11s (2024), pp. 3070-3079",
    doi: "10.52783/jes.8003",
    link: "https://journal.esrgroups.org/jes/article/view/8003/5450",
    indexed: "Scopus Indexed",
    abstract: "This research presents an optimized machine learning framework for sentiment analysis of Amazon product reviews. The study explores various machine learning algorithms and preprocessing techniques to improve classification accuracy and provide actionable insights from customer feedback data."
};

// ============================================
// STATS DATA - Auto-calculated from other data
// ============================================
const statsData = {
    certifications: certificationsData.length,
    projects: projectsData.length,
    awsCerts: certificationsData.filter(c => c.issuer.includes("AWS")).length,
    technologies: technologiesData.length,
    aiTools: aiToolsData.length,
    since: "2020"
};

// Export data (for module systems if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        personalInfo,
        typewriterTexts,
        technicalSkillsData,
        technologiesData,
        aiToolsData,
        projectsData,
        certificationsData,
        experienceData,
        educationData,
        researchData,
        statsData
    };
}
