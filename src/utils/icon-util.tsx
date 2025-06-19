import React from 'react';
import {
    FaHtml5,
    FaCss3,
    FaJs,
    FaReact,
    FaNodeJs, // Using for Next.js (older cases)
    FaSass,   // Using for Tailwind
    FaAngular,
    FaJava,
    FaPython,
    FaDatabase, // Generic
    FaGit,
    FaLinux,
    FaTerminal,
    FaMailBulk, // Using for Postman
    FaFigma,
    FaUsers,
    FaCommentDots,
    FaCode,      // Using for Speech Recognition
    FaRobot,
    FaMicrophone,
    FaCogs
} from 'react-icons/fa';
import {
    SiTypescript,
    SiSpringboot,
    SiDocker,
    SiNextdotjs, // Specific Next.js icon
    SiVercel,
    SiSpring,
    SiHibernate,
    SiNpm,
    SiGithub,
    SiGooglesearchconsole, // Using for SEO
    SiDotnet
} from 'react-icons/si';

// Define the Map outside the function for performance (created once)
const iconMap = new Map<string, React.ReactElement>([
    // Frontend
    ['html', <FaHtml5 key="html" className="w-4 h-4" />],
    ['html5', <FaHtml5 key="html5" className="w-4 h-4" />],
    ['css', <FaCss3 key="css" className="w-4 h-4" />],
    ['css3', <FaCss3 key="css3" className="w-4 h-4" />],
    ['javascript', <FaJs key="javascript" className="w-4 h-4" />],
    ['js', <FaJs key="js" className="w-4 h-4" />],
    ['typescript', <SiTypescript key="typescript" className="w-4 h-4" />],
    ['react', <FaReact key="react" className="w-4 h-4" />],
    ['next js', <FaNodeJs key="nextjs" className="w-4 h-4" />],   // Legacy mapping? Consider changing to SiNextdotjs
    ['nextjs', <FaNodeJs key="nextjs" className="w-4 h-4" />],    // Legacy mapping? Consider changing to SiNextdotjs
    ['tailwindcss', <FaSass key="tailwindcss" className="w-4 h-4" />], // Using Sass for Tailwind
    ['angular', <FaAngular key="angular" className="w-4 h-4" />],

    // Backend
    // For C#
    ['java', <FaJava key="java" className="w-4 h-4" />],
    // ['c#', <S key="csharp" className="w-4 h-4" /> ],÷
    ['asp.net', <SiDotnet key="dotnet" className="w-4 h-4" />],
    ['asp.net', <SiDotnet key="dotnet" className="w-4 h-4" />],
    ['python', <FaPython key="python" className="w-4 h-4" />],
    ['django', <FaPython key="django" className="w-4 h-4" />], // No direct icon, using Python
    ['spring boot', <SiSpringboot key="springboot" className="w-4 h-4" />],
    ['spring data', <SiSpring key="springdata" className="w-4 h-4" />],
    ['apache poi', <FaDatabase key="apachepoi" className="w-4 h-4" />], // Apache POI
    ['maven', <FaCogs key="maven" className="w-4 h-4" />], // Maven

    // Databases
    ['sql', <FaDatabase key="sql" className="w-4 h-4" />], // Generic
    ['mysql', <FaDatabase key="mysql" className="w-4 h-4" />], // Generic
    ['sql server', <FaDatabase key="mysql" className="w-4 h-4" />], // Generic
    ['postgresql', <FaDatabase key="postgresql" className="w-4 h-4" />], // Generic

    // Tools & DevOps
    ['git', <FaGit key="git" className="w-4 h-4" />],
    ['jenkins', <FaTerminal key="jenkins" className="w-4 h-4" />], // Using Terminal as placeholder
    ['linux', <FaLinux key="linux" className="w-4 h-4" />],
    ['shell scripting', <FaTerminal key="shellscripting" className="w-4 h-4" />],
    ['terminal', <FaTerminal key="terminal" className="w-4 h-4" />],
    ['docker', <SiDocker key="docker" className="w-4 h-4" />],

    // IDEs & Software
    ['visual studio code', <FaCode key="vscode" className="w-4 h-4" />], // Generic
    ['visualstudiocode', <FaCode key="visualstudiocode" className="w-4 h-4" />], // Generic
    ['intellij idea', <FaCode key="intellijidea" className="w-4 h-4" />], // Generic
    ['intellijidea', <FaCode key="intellijidea" className="w-4 h-4" />], // Generic
    ['pycharm', <FaCode key="pycharm" className="w-4 h-4" />],   // Generic
    ['mysql workbench', <FaDatabase key="mysqlworkbench" className="w-4 h-4" />],
    ['database', <FaDatabase key="database" className="w-4 h-4" />], // Generic DB Tool
    ['sourcetree', <FaCode key="sourcetree" className="w-4 h-4" />], // Generic Tool
    ['postman', <FaMailBulk key="postman" className="w-4 h-4" />],
    ['figma', <FaFigma key="figma" className="w-4 h-4" />],

    // Soft Skills
    ['team collaboration', <FaUsers key="teamcollaboration" className="w-4 h-4" />],
    ['users', <FaUsers key="users" className="w-4 h-4" />],
    ['effective communication', <FaCommentDots key="effectivecommunication" className="w-4 h-4" />],
    ['message square', <FaCommentDots key="messagesquare" className="w-4 h-4" />],

    // New Skills
    ['next.js', <SiNextdotjs key="nextjs" className="w-4 h-4" />], // Specific Next.js icon
    ['seo', <SiGooglesearchconsole key="seo" className="w-4 h-4" />],
    ['vercel', <SiVercel key="vercel" className="w-4 h-4" />],
    ['hibernate', <SiHibernate key="hibernate" className="w-4 h-4" />],
    ['npm', <SiNpm key="npm" className="w-4 h-4" />],
    ['speech recognition', <FaMicrophone key="speechrecognition" className="w-4 h-4" />],
    ['natural language processing', <FaCommentDots key="naturallanguageprocessing" className="w-4 h-4" />], // Using Search as placeholder
    ['automation', <FaTerminal key="automation" className="w-4 h-4" />], // Using Terminal as placeholder
    ['web scraping', <FaRobot key="webscraping" className="w-4 h-4" />],
    ['github', <SiGithub key="github" className="w-4 h-4" />],
    ['beautiful soup', <FaPython key="beautifulsoup" className="w-4 h-4" />],
]);

export const findFaIcon = (skill: string): React.ReactElement | null => {
    // Convert skill to lowercase and look up in the map
    const icon = iconMap.get(skill.toLowerCase());
    // Return the icon if found, otherwise return null
    return icon ?? null;
};
