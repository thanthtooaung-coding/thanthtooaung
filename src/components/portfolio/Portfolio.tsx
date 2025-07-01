import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Code,
  Database,
  ExternalLink,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Server,
  User,
  Briefcase,
  Globe,
  Download,
  Eye,
  Star,
  Zap,
  Target,
  Coffee,
  Terminal,
  Activity,
} from 'lucide-react';
import { useEffect } from 'react';
import { usePortfolioStore } from '@/store/portfolio-store';

export default function Component() {
  const { activeSection, mousePosition, setActiveSection, setMousePosition } =
    usePortfolioStore();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [setMousePosition]);

  const skills = {
    languages: [
      'Java',
      'Python',
      'C/C++',
      'Go',
      'SQL',
      'NoSQL',
      'JavaScript',
      'TypeScript',
      'HTML/CSS',
    ],
    frameworks: [
      'Spring',
      'Spring Boot',
      'JUnit',
      'Angular',
      'Vue',
      'React',
      'Flask',
      'Material-UI',
      'FastAPI',
      'TailwindCSS',
    ],
    tools: [
      'Git',
      'Docker',
      'Google Cloud Platform',
      'AWS',
      'VS Code',
      'Visual Studio',
      'GoLand',
      'IntelliJ',
      'Eclipse',
    ],
    libraries: ['highlight.js', 'chart.js', 'pandas', 'NumPy', 'Matplotlib'],
  };

  const experience = [
    {
      title: 'Mid Level Java Developer',
      company: 'Myanmar Software Integrated Solutions Ltd.',
      period: 'December 2024 – Present',
      location: 'Remote',
      type: 'Current',
      achievements: [
        'Developed a Financial and Accounting System using the Mifos X Framework with Angular 16, Java Spring Boot, Spring Batch, oAuth, Kafka, MySQL Database, Pentaho reporting tool.',
        'Developed Multi threading cron jobs with Spring Batch and Quartz',
        'Deployed on AWS Lightsail and used GitLab for version control.',
      ],
    },
    {
      title: 'Junior Programmer',
      company: 'DIR-ACE Technology Ltd.',
      period: 'April 2023 – December 2024',
      location: 'Yangon, MM',
      type: 'Previous',
      achievements: [
        'Developed GUI desktop applications using Core Java, Java Swing, and Oracle Database.',
        'Created REST APIs using Java, MyBatis, and Oracle Database.',
        'Developed shell scripts using Linux and Tera Term and used GitHub, GitBucket and SourceTree for version control',
        'Wrote detailed design documentation and conducted function investigations using Microsoft Excel and Sakura IDE.',
      ],
    },
    {
      title: 'On-the-job Training',
      company: 'DIR-ACE Technology Ltd.',
      period: 'November 2022 – March 2023',
      location: 'Yangon, MM',
      type: 'Training',
      achievements: [
        'Gained hands-on experience with Gorm, Gin, and PostgreSQL.',
        'Acquired foundational skills in Linux, Red Hat 7, and Shell Scripting.',
        "Learned Spring Boot and collaborated in a team of three to develop the 'Work From Home System' using Java Spring Boot, Spring Security, Thymeleaf, MySQL and Git for version control.",
        'Developed directory management system using Virtual Basic Excel (VBA).',
      ],
    },
  ];

  const projects = [
    {
      title: 'Theinngu Data Center',
      tech: 'Java, Spring Boot, Gradle, Vue, Shadcn, Git',
      period: 'June 2025 – Present',
      status: 'Active',
      description: [
        'Developed a full-stack web application using Spring Boot and Vue with TypeScript, featuring complete yogi management and enrollment functionalities',
        'Deployed the application on AWS EC2 and set up a CI/CD pipeline using GitHub Actions',
        'Implemented Spring Batch to enable parallel processing for export APIs',
        'Collaborated effectively with team members, utilizing GitHub Flow as the branching strategy',
      ],
    },
    {
      title: 'Productivity Suite',
      tech: 'Java, Spring Boot, Spring Cache, Quartz, PostgreSQL, Docker',
      period: 'May 2025 – June 2025',
      status: 'Completed',
      description: [
        'Developed the backend API application using with Spring Boot serving a REST API with React',
        'Implemented Spring Security with JWT for role-based access control and authorization.',
        'Visualized GitHub data to show collaboration',
        'Used Spring Cache Caffeine for asynchronous tasks',
      ],
    },
  ];

  const education = [
    {
      institution: 'University of Greenwich',
      degree: 'Bachelor of Science, BS, Computing',
      period: 'Dec. 2024 – May 2026',
      location: 'London, UK',
      status: 'Current',
    },
    {
      institution: 'Dagon University',
      degree: 'Second Year of English',
      period: 'April. 2024 – Nov 2024',
      location: 'Yangon, MM',
      status: 'Completed',
    },
    {
      institution: 'IPA',
      degree: 'Fundamental Information Technology Engineer Examination',
      period: 'Oct. 2022 – April 2024',
      location: 'Tokyo, JP',
      status: 'Certified',
    },
  ];

  const stats = [
    { label: 'Years Experience', value: '2+', icon: Target },
    { label: 'Projects Completed', value: '10+', icon: Star },
    { label: 'Technologies', value: '25+', icon: Zap },
    { label: 'Coffee Consumed', value: '∞', icon: Coffee },
  ];

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Modern Dark Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle tech-inspired gradients */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-cyan-500/10 to-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-emerald-500/8 to-teal-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-gradient-to-br from-slate-500/5 to-gray-500/5 rounded-full blur-3xl"></div>

        {/* Subtle mouse follower */}
        <div
          className="absolute w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none transition-all duration-1000 ease-out"
          style={{
            left: mousePosition.x - 128,
            top: mousePosition.y - 128,
          }}
        ></div>

        {/* Tech grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <div className="relative z-10 flex min-h-screen">
        {/* Modern Sidebar */}
        <div className="w-80 p-6 backdrop-blur-2xl bg-gray-900/80 border-r border-gray-700/50">
          <div className="space-y-6">
            {/* Professional Profile Section */}
            <Card className="backdrop-blur-xl bg-gray-800/60 border border-gray-700/50 text-white shadow-2xl">
              <CardContent className="p-6 text-center">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl mx-auto flex items-center justify-center shadow-xl border border-gray-600/50">
                    <User className="w-10 h-10 text-cyan-400" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-emerald-500 rounded-full border-2 border-gray-800 flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  </div>
                </div>
                <h2 className="text-xl font-bold mb-1 text-white">
                  Thant Htoo Aung
                </h2>
                <p className="text-gray-400 text-sm mb-4 font-medium">
                  Mid Level Java Developer
                </p>

                {/* Contact Info */}
                <div className="space-y-3 text-sm mb-6">
                  <div className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors p-2 rounded-lg hover:bg-gray-700/30">
                    <Phone className="w-4 h-4 text-cyan-400" />
                    <span>+66-943-066-860</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors p-2 rounded-lg hover:bg-gray-700/30">
                    <Mail className="w-4 h-4 text-cyan-400" />
                    <span className="text-xs">thanthtoo1285@gmail.com</span>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex gap-3 mb-4">
                  <Button
                    size="sm"
                    className="bg-blue-600/80 hover:bg-blue-600 text-white border border-blue-500/50"
                  >
                    <Linkedin className="w-4 h-4" />
                  </Button>
                  <Button
                    size="sm"
                    className="bg-gray-700/80 hover:bg-gray-700 text-white border border-gray-600/50"
                  >
                    <Github className="w-4 h-4" />
                  </Button>
                </div>

                {/* Download CV Button */}
                <Button className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white shadow-lg border border-cyan-500/30">
                  <Download className="w-4 h-4 mr-2" />
                  Download CV
                </Button>
              </CardContent>
            </Card>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-3">
              {stats.slice(0, 2).map((stat, index) => (
                <Card
                  key={index}
                  className="backdrop-blur-xl bg-gray-800/60 border border-gray-700/50 text-white hover:bg-gray-800/80 transition-all"
                >
                  <CardContent className="p-4 text-center">
                    <stat.icon className="w-5 h-5 text-cyan-400 mx-auto mb-2" />
                    <div className="text-lg font-bold text-white">
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-400">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Modern Navigation */}
            <nav className="space-y-2">
              {[
                { id: 'about', label: 'About', icon: User },
                { id: 'experience', label: 'Experience', icon: Briefcase },
                { id: 'projects', label: 'Projects', icon: Code },
                { id: 'education', label: 'Education', icon: GraduationCap },
                { id: 'skills', label: 'Skills', icon: Terminal },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all font-medium ${
                    activeSection === item.id
                      ? 'bg-gradient-to-r from-cyan-600/20 to-blue-600/20 text-white border border-cyan-500/30 shadow-lg'
                      : 'text-gray-400 hover:bg-gray-800/50 hover:text-white'
                  }`}
                >
                  <item.icon
                    className={`w-5 h-5 ${
                      activeSection === item.id ? 'text-cyan-400' : ''
                    }`}
                  />
                  <span>{item.label}</span>
                  {activeSection === item.id && (
                    <div className="ml-auto w-2 h-2 bg-cyan-400 rounded-full"></div>
                  )}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Modern Main Content */}
        <div className="flex-1 p-8 overflow-y-auto">
          <div className="max-w-5xl mx-auto space-y-8">
            {/* About Section */}
            {activeSection === 'about' && (
              <div className="space-y-8 animate-in fade-in duration-500">
                {/* Hero Card */}
                <Card className="backdrop-blur-xl bg-gray-800/60 border border-gray-700/50 text-white shadow-2xl">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl flex items-center justify-center border border-gray-600/50">
                        <User className="w-7 h-7 text-cyan-400" />
                      </div>
                      <div>
                        <h1 className="text-4xl font-bold text-white mb-1">
                          About Me
                        </h1>
                        <p className="text-gray-400 text-lg">
                          Full Stack Developer & Problem Solver
                        </p>
                      </div>
                    </div>

                    <div className="space-y-4 text-gray-300 leading-relaxed text-lg">
                      <p>
                        I'm a passionate{' '}
                        <span className="text-white font-semibold">
                          Mid Level Java Developer
                        </span>{' '}
                        with extensive experience in full-stack development,
                        specializing in Java Spring Boot, Angular, Vue.js, and
                        cloud technologies. Currently pursuing my Bachelor's
                        degree in Computing at the{' '}
                        <span className="text-cyan-400 font-semibold">
                          University of Greenwich
                        </span>{' '}
                        while working remotely for Myanmar Software Integrated
                        Solutions Ltd.
                      </p>
                      <p>
                        My expertise spans across developing{' '}
                        <span className="text-emerald-400 font-semibold">
                          financial systems
                        </span>
                        , REST APIs, and modern web applications with a strong
                        focus on scalable architecture and clean code practices.
                        I'm experienced in{' '}
                        <span className="text-blue-400 font-semibold">
                          AWS deployment
                        </span>
                        , CI/CD pipelines, and collaborative development using
                        Git workflows.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {stats.map((stat, index) => (
                    <Card
                      key={index}
                      className="backdrop-blur-xl bg-gray-800/60 border border-gray-700/50 text-white hover:bg-gray-800/80 transition-all group"
                    >
                      <CardContent className="p-6 text-center">
                        <stat.icon className="w-8 h-8 text-cyan-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                        <div className="text-2xl font-bold text-white mb-1">
                          {stat.value}
                        </div>
                        <div className="text-sm text-gray-400">
                          {stat.label}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Info Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="backdrop-blur-xl bg-gray-800/60 border border-gray-700/50 text-white hover:bg-gray-800/80 transition-all">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <MapPin className="w-6 h-6 text-emerald-400" />
                        <span className="font-semibold text-white text-lg">
                          Location & Availability
                        </span>
                      </div>
                      <div className="space-y-3 text-gray-300">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                          <span>Remote / London, UK</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                          <span>Available for new opportunities</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span>Open to international projects</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="backdrop-blur-xl bg-gray-800/60 border border-gray-700/50 text-white hover:bg-gray-800/80 transition-all">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <Activity className="w-6 h-6 text-cyan-400" />
                        <span className="font-semibold text-white text-lg">
                          Current Focus
                        </span>
                      </div>
                      <div className="space-y-3 text-gray-300">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                          <span>Full-stack development</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                          <span>Cloud architecture (AWS)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                          <span>Modern web technologies</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}

            {/* Experience Section */}
            {activeSection === 'experience' && (
              <div className="space-y-8 animate-in fade-in duration-500">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl flex items-center justify-center border border-gray-600/50">
                    <Briefcase className="w-7 h-7 text-cyan-400" />
                  </div>
                  <div>
                    <h2 className="text-4xl font-bold text-white mb-1">
                      Experience
                    </h2>
                    <p className="text-gray-400 text-lg">
                      Professional journey and achievements
                    </p>
                  </div>
                </div>

                {experience.map((exp, index) => (
                  <Card
                    key={index}
                    className="backdrop-blur-xl bg-gray-800/60 border border-gray-700/50 text-white shadow-xl hover:bg-gray-800/80 transition-all"
                  >
                    <CardHeader className="pb-4">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <CardTitle className="text-2xl text-white">
                              {exp.title}
                            </CardTitle>
                            {exp.type === 'Current' && (
                              <Badge className="bg-emerald-600/80 text-white border border-emerald-500/50">
                                <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
                                Current
                              </Badge>
                            )}
                          </div>
                          <p className="text-gray-300 font-semibold text-lg mb-2">
                            {exp.company}
                          </p>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-cyan-400" />
                            <p className="text-gray-400">{exp.location}</p>
                          </div>
                        </div>
                        <Badge
                          variant="secondary"
                          className="bg-gray-700/80 text-gray-300 border border-gray-600/50 px-4 py-2"
                        >
                          {exp.period}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {exp.achievements.map((achievement, i) => (
                          <li
                            key={i}
                            className="text-gray-300 flex items-start gap-3 p-3 rounded-lg hover:bg-gray-700/30 transition-colors"
                          >
                            <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="leading-relaxed">
                              {achievement}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            {/* Projects Section */}
            {activeSection === 'projects' && (
              <div className="space-y-8 animate-in fade-in duration-500">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl flex items-center justify-center border border-gray-600/50">
                    <Code className="w-7 h-7 text-cyan-400" />
                  </div>
                  <div>
                    <h2 className="text-4xl font-bold text-white mb-1">
                      Projects
                    </h2>
                    <p className="text-gray-400 text-lg">
                      Featured work and contributions
                    </p>
                  </div>
                </div>

                {projects.map((project, index) => (
                  <Card
                    key={index}
                    className="backdrop-blur-xl bg-gray-800/60 border border-gray-700/50 text-white shadow-xl hover:bg-gray-800/80 transition-all"
                  >
                    <CardHeader className="pb-4">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <CardTitle className="text-2xl text-white flex items-center gap-2">
                              {project.title}
                              <ExternalLink className="w-5 h-5 text-cyan-400 hover:text-cyan-300 cursor-pointer transition-colors" />
                            </CardTitle>
                            <Badge
                              className={
                                project.status === 'Active'
                                  ? 'bg-emerald-600/80 text-white border border-emerald-500/50'
                                  : 'bg-blue-600/80 text-white border border-blue-500/50'
                              }
                            >
                              {project.status === 'Active' && (
                                <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
                              )}
                              {project.status}
                            </Badge>
                          </div>
                          <div className="flex flex-wrap gap-2 mb-3">
                            {project.tech.split(', ').map((tech, i) => (
                              <Badge
                                key={i}
                                variant="outline"
                                className="bg-gray-700/50 text-gray-300 border-gray-600/50 hover:bg-gray-700 transition-colors"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <Badge
                          variant="secondary"
                          className="bg-gray-700/80 text-gray-300 border border-gray-600/50 px-4 py-2"
                        >
                          {project.period}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 mb-6">
                        {project.description.map((desc, i) => (
                          <li
                            key={i}
                            className="text-gray-300 flex items-start gap-3 p-3 rounded-lg hover:bg-gray-700/30 transition-colors"
                          >
                            <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="leading-relaxed">{desc}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex gap-3">
                        <Button
                          size="sm"
                          className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white border border-cyan-500/30"
                        >
                          <Eye className="w-4 h-4 mr-2" />
                          View Project
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="bg-gray-700/50 text-gray-300 border-gray-600/50 hover:bg-gray-700 hover:text-white"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          Source Code
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            {/* Education Section */}
            {activeSection === 'education' && (
              <div className="space-y-8 animate-in fade-in duration-500">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl flex items-center justify-center border border-gray-600/50">
                    <GraduationCap className="w-7 h-7 text-cyan-400" />
                  </div>
                  <div>
                    <h2 className="text-4xl font-bold text-white mb-1">
                      Education
                    </h2>
                    <p className="text-gray-400 text-lg">
                      Academic background and certifications
                    </p>
                  </div>
                </div>

                {education.map((edu, index) => (
                  <Card
                    key={index}
                    className="backdrop-blur-xl bg-gray-800/60 border border-gray-700/50 text-white shadow-xl hover:bg-gray-800/80 transition-all"
                  >
                    <CardContent className="p-8">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <h3 className="text-2xl font-bold text-white">
                              {edu.institution}
                            </h3>
                            <Badge
                              className={
                                edu.status === 'Current'
                                  ? 'bg-emerald-600/80 text-white border border-emerald-500/50'
                                  : edu.status === 'Certified'
                                  ? 'bg-amber-600/80 text-white border border-amber-500/50'
                                  : 'bg-blue-600/80 text-white border border-blue-500/50'
                              }
                            >
                              {edu.status === 'Current' && (
                                <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
                              )}
                              {edu.status}
                            </Badge>
                          </div>
                          <p className="text-gray-300 font-semibold text-lg mb-2">
                            {edu.degree}
                          </p>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-cyan-400" />
                            <p className="text-gray-400">{edu.location}</p>
                          </div>
                        </div>
                        <Badge
                          variant="secondary"
                          className="bg-gray-700/80 text-gray-300 border border-gray-600/50 px-4 py-2"
                        >
                          {edu.period}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            {/* Skills Section */}
            {activeSection === 'skills' && (
              <div className="space-y-8 animate-in fade-in duration-500">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl flex items-center justify-center border border-gray-600/50">
                    <Terminal className="w-7 h-7 text-cyan-400" />
                  </div>
                  <div>
                    <h2 className="text-4xl font-bold text-white mb-1">
                      Technical Skills
                    </h2>
                    <p className="text-gray-400 text-lg">
                      Technologies and tools I work with
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {Object.entries(skills).map(([category, skillList]) => (
                    <Card
                      key={category}
                      className="backdrop-blur-xl bg-gray-800/60 border border-gray-700/50 text-white shadow-xl hover:bg-gray-800/80 transition-all"
                    >
                      <CardHeader className="pb-4">
                        <CardTitle className="text-xl capitalize flex items-center gap-3">
                          {category === 'languages' && (
                            <Code className="w-6 h-6 text-cyan-400" />
                          )}
                          {category === 'frameworks' && (
                            <Globe className="w-6 h-6 text-emerald-400" />
                          )}
                          {category === 'tools' && (
                            <Server className="w-6 h-6 text-blue-400" />
                          )}
                          {category === 'libraries' && (
                            <Database className="w-6 h-6 text-orange-400" />
                          )}
                          <span className="text-white font-semibold">
                            {category}
                          </span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-3">
                          {skillList.map((skill, index) => (
                            <Badge
                              key={index}
                              variant="secondary"
                              className="bg-gray-700/60 text-gray-300 border border-gray-600/50 hover:bg-gray-700 hover:text-white transition-all cursor-pointer px-3 py-1"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
