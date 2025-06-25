"use client"

import type React from "react"
import { createContext, useContext, useEffect, useState } from "react"

type Language = "en" | "bg"

type LanguageProviderProps = {
    children: React.ReactNode
    defaultLanguage?: Language
}

type LanguageProviderState = {
    language: Language
    setLanguage: (language: Language) => void
    t: (key: string) => string
}

const translations = {
    en: {
        // Navbar
        "nav.about": "About",
        "nav.skills": "Skills",
        "nav.education": "Education",
        "nav.projects": "Projects",
        "nav.contact": "Contact",
        "nav.resume": "Resume",
        "nav.name": "SIMEON SABEV",

        // Hero
        "hero.available": "Available for new opportunities",
        "hero.role": "Front End Developer",
        "hero.description":
            "I'm a professional front-end developer with over two years of experience crafting beautiful, responsive, and highly functional web applications. I specialize in modern technologies and user-centered design.",
        "hero.viewWork": "View My Work",
        "hero.getInTouch": "Get In Touch",
        "name.1": "SIMEON",
        "name.2": "SABEV",

        // About
        "about.title": "About Me",
        "about.subtitle": "Crafting digital experiences with passion and precision",
        "about.journey": "Professional Journey",
        "about.description1":
            "I'm a professional front-end developer with over two years of experience in the industry. I specialize in building beautiful, clean, and highly functional websites and applications, whether through custom code or platforms.",
        "about.description2":
            "My focus is on creating user-friendly, responsive, and visually appealing websites that provide exceptional user experiences across all devices and platforms.",
        "about.precision.title": "Precision & Quality",
        "about.precision.desc": "Every pixel matters. I focus on creating pixel-perfect designs with attention to detail.",
        "about.innovation.title": "Innovation",
        "about.innovation.desc": "Always exploring new technologies and methodologies to deliver cutting-edge solutions.",
        "about.passion.title": "Passion-Driven",
        "about.passion.desc": "Genuinely passionate about creating exceptional user experiences that make a difference.",

        // Skills
        "skills.title": "Skills & Expertise",
        "skills.subtitle": "A comprehensive toolkit for modern web development",
        "skills.core": "Core Skills",
        "skills.professional": "Professional Skills",
        "skills.additional": "Additional Competencies",
        "skills.frontend": "Frontend Development",
        "skills.uiux": "UI/UX Design",
        "skills.responsive": "Responsive Design",
        "skills.performance": "Performance Optimization",
        "skills.seo": "Google SEO",
        "skills.communication": "Team Communication",
        "skills.problemSolving": "Problem Solving",
        "skills.projectManagement": "Project Management",
        "skills.fastBuilding": "Fast and accurate website building",
        "skills.customerService": "Customer serving skills",
        "skills.multipleProjects": "Ability to work in multiple projects",
        "skills.analytical": "Analytical & problem solving skills",

        // Education
        "education.title": "Education",
        "education.subtitle": "Building a strong foundation for technological excellence",
        "education.school": 'ITPG "Academic Blagovest Sendov" city Varna',
        "education.level": "Senior High School",
        "education.period": "2022 - Present",
        "education.location": "Sofia, Bulgaria",
        "education.description":
            "Currently pursuing senior high school education with a focus on technology and programming, building a strong foundation for a career in web development and software engineering.",

        // Projects
        "projects.title": "Featured Projects",
        "projects.subtitle": "A showcase of my recent work and creative solutions",
        "projects.featured": "Featured",
        "projects.visit": "Visit",
        "projects.aikido.desc":
            "Professional martial arts website featuring class schedules, instructor profiles, and member portal with modern design and seamless user experience.",
        "projects.ilios.desc":
            "Elegant interior design showcase with portfolio gallery, client management system, and booking functionality for premium decoration services.",
        "projects.azion.desc":
            "Modern business platform with responsive design, SEO optimization, and performance-focused architecture for enhanced user engagement.",
        "projects.yacht.desc":
            "Luxury yacht services website featuring high-end design, booking system, and gallery showcase for premium maritime experiences.",

        // Contact
        "contact.title": "Let's Connect",
        "contact.subtitle": "Ready to bring your ideas to life? Let's discuss your next project",
        "contact.phone": "Phone",
        "contact.email": "Email",
        "contact.phoneDesc": "Available Mon-Fri, 9AM-6PM",
        "contact.emailDesc": "I'll respond within 24 hours",
        "contact.callNow": "Call Now",
        "contact.sendEmail": "Send Email",
        "contact.readyTitle": "Ready to Start Your Project?",
        "contact.readyDesc":
            "I'm always excited to work on new projects and help bring innovative ideas to life. Let's discuss how we can create something amazing together.",
        "contact.startConversation": "Start a Conversation",

        // Footer
        "footer.rights": "All rights reserved",
    },
    bg: {
        // Navbar
        "nav.about": "За мен",
        "nav.skills": "Умения",
        "nav.education": "Образование",
        "nav.projects": "Проекти",
        "nav.contact": "Контакт",
        "nav.resume": "Резюме",
        "nav.name": "СИМЕОН СЪБЕВ",

        // Hero
        "hero.available": "Достъпен за нови възможности",
        "hero.role": "Front End Разработчик",
        "hero.description":
            "Аз съм професионален front-end разработчик с над две години опит в създаването на красиви, отзивчиви и високофункционални уеб приложения. Специализирам в модерни технологии и дизайн, центриран върху потребителя.",
        "hero.viewWork": "Виж работата ми",
        "hero.getInTouch": "Свържи се с мен",
        "name.1": "СИМЕОН",
        "name.2": "СЪБЕВ",

        // About
        "about.title": "За мен",
        "about.subtitle": "Създавам дигитални преживявания със страст и прецизност",
        "about.journey": "Професионален път",
        "about.description1":
            "Аз съм професионален front-end разработчик с над две години опит в индустрията. Специализирам в изграждането на красиви, чисти и високофункционални уебсайтове и приложения, било чрез персонализиран код или платформи.",
        "about.description2":
            "Фокусът ми е върху създаването на удобни за потребителя, отзивчиви и визуално привлекателни уебсайтове, които предоставят изключителни потребителски преживявания на всички устройства и платформи.",
        "about.precision.title": "Прецизност и качество",
        "about.precision.desc":
            "Всеки пиксел има значение. Фокусирам се върху създаването на перфектни дизайни с внимание към детайлите.",
        "about.innovation.title": "Иновация",
        "about.innovation.desc": "Винаги изследвам нови технологии и методологии за доставяне на авангардни решения.",
        "about.passion.title": "Движен от страст",
        "about.passion.desc":
            "Истински страстен към създаването на изключителни потребителски преживявания, които правят разлика.",

        // Skills
        "skills.title": "Умения и експертиза",
        "skills.subtitle": "Цялостен инструментариум за модерна уеб разработка",
        "skills.core": "Основни умения",
        "skills.professional": "Професионални умения",
        "skills.additional": "Допълнителни компетентности",
        "skills.frontend": "Frontend разработка",
        "skills.uiux": "UI/UX дизайн",
        "skills.responsive": "Отзивчив дизайн",
        "skills.performance": "Оптимизация на производителността",
        "skills.seo": "Google SEO",
        "skills.communication": "Екипна комуникация",
        "skills.problemSolving": "Решаване на проблеми",
        "skills.projectManagement": "Управление на проекти",
        "skills.fastBuilding": "Бързо и точно изграждане на уебсайтове",
        "skills.customerService": "Умения за обслужване на клиенти",
        "skills.multipleProjects": "Способност за работа по множество проекти",
        "skills.analytical": "Аналитични умения и решаване на проблеми",

        // Education
        "education.title": "Образование",
        "education.subtitle": "Изграждане на солидна основа за технологично превъзходство",
        "education.school": 'ПГКМКС "Академик Благовест Сендов" гр.Варна',
        "education.level": "Професионална гимназия",
        "education.period": "2022 - настоящ момент",
        "education.location": "София, България",
        "education.description":
            "В момента следвам средно образование с фокус върху технологиите и програмирането, изграждайки солидна основа за кариера в уеб разработката и софтуерното инженерство.",

        // Projects
        "projects.title": "Избрани проекти",
        "projects.subtitle": "Витрина на моята скорошна работа и творчески решения",
        "projects.featured": "Избран",
        "projects.visit": "Посети",
        "projects.aikido.desc":
            "Професионален уебсайт за бойни изкуства с разписания на часове, профили на инструктори и портал за членове с модерен дизайн и безпроблемно потребителско изживяване.",
        "projects.ilios.desc":
            "Елегантна витрина за интериорен дизайн с портфолио галерия, система за управление на клиенти и функционалност за резервации за премиум декоративни услуги.",
        "projects.azion.desc":
            "Модерна бизнес платформа с отзивчив дизайн, SEO оптимизация и архитектура, фокусирана върху производителността за подобрено потребителско ангажиране.",
        "projects.yacht.desc":
            "Уебсайт за луксозни яхтени услуги с висок клас дизайн, система за резервации и галерия витрина за премиум морски преживявания.",

        // Contact
        "contact.title": "Нека се свържем",
        "contact.subtitle": "Готов да въплътиш идеите си в живот? Нека обсъдим следващия ти проект",
        "contact.phone": "Телефон",
        "contact.email": "Имейл",
        "contact.phoneDesc": "Достъпен пон-пет, 9:00-18:00",
        "contact.emailDesc": "Ще отговоря в рамките на 24 часа",
        "contact.callNow": "Обади се сега",
        "contact.sendEmail": "Изпрати имейл",
        "contact.readyTitle": "Готов да започнеш проекта си?",
        "contact.readyDesc":
            "Винаги съм развълнуван да работя по нови проекти и да помагам за въплъщаването на иновативни идеи в живот. Нека обсъдим как можем да създадем нещо невероятно заедно.",
        "contact.startConversation": "Започни разговор",

        // Footer
        "footer.rights": "Всички права запазени",
    },
}

const initialState: LanguageProviderState = {
    language: "en",
    setLanguage: () => null,
    t: () => "",
}

const LanguageProviderContext = createContext<LanguageProviderState>(initialState)

export function LanguageProvider({ children, defaultLanguage = "en" }: LanguageProviderProps) {
    const [language, setLanguage] = useState<Language>(defaultLanguage)

    useEffect(() => {
        const savedLanguage = localStorage.getItem("language") as Language
        if (savedLanguage && (savedLanguage === "en" || savedLanguage === "bg")) {
            setLanguage(savedLanguage)
        }
    }, [])

    const handleSetLanguage = (newLanguage: Language) => {
        setLanguage(newLanguage)
        localStorage.setItem("language", newLanguage)
    }

    const t = (key: string): string => {
        const translation = translations[language] as Record<string, string>
        return translation[key] || key
    }

    const value = {
        language,
        setLanguage: handleSetLanguage,
        t,
    }

    return <LanguageProviderContext.Provider value={value}>{children}</LanguageProviderContext.Provider>
}

export const useLanguage = () => {
    const context = useContext(LanguageProviderContext)
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider")
    }
    return context
}
