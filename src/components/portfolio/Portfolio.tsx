"use client"

import { Badge } from "../../components/ui/badge"
import { Button } from "../../components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card"
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
  Menu,
  X,
} from "lucide-react"
import { useEffect, useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Points, PointMaterial, Float, Sphere, MeshDistortMaterial, Environment } from "@react-three/drei"
import type * as THREE from "three"
import { usePortfolioStore } from "../../store/portfolio-store"

// Floating particles component with mobile optimization
function FloatingParticles() {
  const ref = useRef<THREE.Points>(null)
  // Reduce particles on mobile for better performance
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768
  const particlesCount = isMobile ? 1000 : 2000

  const positions = new Float32Array(particlesCount * 3)
  for (let i = 0; i < particlesCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 20
    positions[i * 3 + 1] = (Math.random() - 0.5) * 20
    positions[i * 3 + 2] = (Math.random() - 0.5) * 20
  }

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.05
      ref.current.rotation.y = state.clock.elapsedTime * 0.075
    }
  })

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial transparent color="#00d4ff" size={0.015} sizeAttenuation={true} depthWrite={false} opacity={0.6} />
    </Points>
  )
}

// Floating geometric shapes
function FloatingShapes() {
  return (
    <>
      <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
        <Sphere args={[0.5, 32, 32]} position={[-4, 2, -2]}>
          <MeshDistortMaterial color="#00d4ff" transparent opacity={0.1} distort={0.3} speed={2} />
        </Sphere>
      </Float>

      <Float speed={2} rotationIntensity={1.5} floatIntensity={1.5}>
        <Sphere args={[0.3, 32, 32]} position={[4, -2, -1]}>
          <MeshDistortMaterial color="#10b981" transparent opacity={0.15} distort={0.4} speed={1.5} />
        </Sphere>
      </Float>

      <Float speed={1.8} rotationIntensity={0.8} floatIntensity={2.5}>
        <Sphere args={[0.4, 32, 32]} position={[2, 3, -3]}>
          <MeshDistortMaterial color="#8b5cf6" transparent opacity={0.12} distort={0.2} speed={3} />
        </Sphere>
      </Float>
    </>
  )
}

// 3D Background Scene
function Scene() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={0.5} color="#00d4ff" />
      <pointLight position={[-10, -10, -10]} intensity={0.3} color="#10b981" />

      <FloatingParticles />
      <FloatingShapes />

      <Environment preset="night" />
    </>
  )
}

export default function Portfolio() {
  const { activeSection, mousePosition, isMobileMenuOpen, setActiveSection, setMousePosition, setMobileMenuOpen } =
    usePortfolioStore()

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [setMousePosition])

  // Close mobile menu when section changes
  const handleSectionChange = (section: string) => {
    setActiveSection(section)
    setMobileMenuOpen(false)
  }

  const skills = {
    languages: ["Java", "Python", "C/C++", "Go", "SQL", "NoSQL", "JavaScript", "TypeScript", "HTML/CSS"],
    frameworks: [
      "Spring",
      "Spring Boot",
      "JUnit",
      "Angular",
      "Vue",
      "React",
      "Flask",
      "Material-UI",
      "FastAPI",
      "TailwindCSS",
    ],
    tools: [
      "Git",
      "Docker",
      "Google Cloud Platform",
      "AWS",
      "VS Code",
      "Visual Studio",
      "GoLand",
      "IntelliJ",
      "Eclipse",
    ],
    libraries: ["highlight.js", "chart.js", "pandas", "NumPy", "Matplotlib"],
  }

  const experience = [
    {
      title: "Mid Level Java Developer",
      company: "Myanmar Software Integrated Solutions Ltd.",
      period: "December 2024 – Present",
      location: "Remote",
      type: "Current",
      achievements: [
        "Developed a Financial and Accounting System using the Mifos X Framework with Angular 16, Java Spring Boot, Spring Batch, oAuth, Kafka, MySQL Database, Pentaho reporting tool.",
        "Developed Multi threading cron jobs with Spring Batch and Quartz",
        "Deployed on AWS Lightsail and used GitLab for version control.",
      ],
    },
    {
      title: "Junior Programmer",
      company: "DIR-ACE Technology Ltd.",
      period: "April 2023 – December 2024",
      location: "Yangon, MM",
      type: "Previous",
      achievements: [
        "Developed GUI desktop applications using Core Java, Java Swing, and Oracle Database.",
        "Created REST APIs using Java, MyBatis, and Oracle Database.",
        "Developed shell scripts using Linux and Tera Term and used GitHub, GitBucket and SourceTree for version control",
        "Wrote detailed design documentation and conducted function investigations using Microsoft Excel and Sakura IDE.",
      ],
    },
    {
      title: "On-the-job Training",
      company: "DIR-ACE Technology Ltd.",
      period: "November 2022 – March 2023",
      location: "Yangon, MM",
      type: "Training",
      achievements: [
        "Gained hands-on experience with Gorm, Gin, and PostgreSQL.",
        "Acquired foundational skills in Linux, Red Hat 7, and Shell Scripting.",
        "Learned Spring Boot and collaborated in a team of three to develop the 'Work From Home System' using Java Spring Boot, Spring Security, Thymeleaf, MySQL and Git for version control.",
        "Developed directory management system using Virtual Basic Excel (VBA).",
      ],
    },
  ]

  const projects = [
    {
      title: "Theinngu Data Center",
      tech: "Java, Spring Boot, Gradle, Vue, Shadcn, Git",
      period: "June 2025 – Present",
      status: "Active",
      description: [
        "Developed a full-stack web application using Spring Boot and Vue with TypeScript, featuring complete yogi management and enrollment functionalities",
        "Deployed the application on AWS EC2 and set up a CI/CD pipeline using GitHub Actions",
        "Implemented Spring Batch to enable parallel processing for export APIs",
        "Collaborated effectively with team members, utilizing GitHub Flow as the branching strategy",
      ],
    },
    {
      title: "Productivity Suite",
      tech: "Java, Spring Boot, Spring Cache, Quartz, PostgreSQL, Docker",
      period: "May 2025 – June 2025",
      status: "Completed",
      description: [
        "Developed the backend API application using with Spring Boot serving a REST API with React",
        "Implemented Spring Security with JWT for role-based access control and authorization.",
        "Visualized GitHub data to show collaboration",
        "Used Spring Cache Caffeine for asynchronous tasks",
      ],
    },
  ]

  const education = [
    {
      institution: "University of Greenwich",
      degree: "Bachelor of Science, BS, Computing",
      period: "Dec. 2024 – May 2026",
      location: "London, UK",
      status: "Current",
    },
    {
      institution: "Dagon University",
      degree: "Second Year of English",
      period: "April. 2024 – Nov 2024",
      location: "Yangon, MM",
      status: "Completed",
    },
    {
      institution: "IPA",
      degree: "Fundamental Information Technology Engineer Examination",
      period: "Oct. 2022 – April 2024",
      location: "Tokyo, JP",
      status: "Certified",
    },
  ]

  const stats = [
    { label: "Years Experience", value: "2+", icon: Target },
    { label: "Projects Completed", value: "10+", icon: Star },
    { label: "Technologies", value: "25+", icon: Zap },
    { label: "Coffee Consumed", value: "∞", icon: Coffee },
  ]

  const navigationItems = [
    { id: "about", label: "About", icon: Briefcase },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "projects", label: "Projects", icon: Code },
    { id: "education", label: "Education", icon: GraduationCap },
    { id: "skills", label: "Skills", icon: Terminal },
  ]

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Three.js Background */}
      <div className="fixed inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }} style={{ background: "transparent" }}>
          <Scene />
        </Canvas>
      </div>

      {/* Enhanced Glassmorphism Background Effects */}
      <div className="absolute inset-0 overflow-hidden z-10">
        {/* Dynamic gradient orbs */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-cyan-500/20 to-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-emerald-500/15 to-teal-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-gradient-to-br from-purple-500/10 to-pink-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>

        {/* Interactive mouse follower with enhanced glassmorphism */}
        <div
          className="absolute w-96 h-96 bg-gradient-radial from-cyan-500/10 via-blue-500/5 to-transparent rounded-full blur-2xl pointer-events-none transition-all duration-700 ease-out hidden md:block"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
            background: `radial-gradient(circle, rgba(6,182,212,0.15) 0%, rgba(59,130,246,0.08) 40%, transparent 70%)`,
          }}
        ></div>

        {/* Enhanced tech grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:60px_60px] opacity-30"></div>

        {/* Diagonal lines for extra tech feel */}
        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(-45deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:80px_80px] opacity-20"></div>
      </div>

      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 backdrop-blur-2xl bg-gray-900/80 border-b border-white/10 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-xl rounded-lg flex items-center justify-center border border-white/20 overflow-hidden">
              <img
                src="https://i.pinimg.com/736x/48/06/7f/48067f233fdfc65f3c73dd166af75e39.jpg"
                alt="Thant Htoo Aung Profile"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-white font-bold text-sm">Thant Htoo Aung</h2>
              <p className="text-gray-400 text-xs">Java Developer</p>
            </div>
          </div>
          <Button
            size="sm"
            variant="ghost"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white hover:bg-white/10"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 backdrop-blur-3xl bg-gray-900/95">
          <div className="pt-20 p-6">
            {/* Mobile Profile Section */}
            <Card className="backdrop-blur-2xl bg-white/5 border border-white/10 text-white shadow-2xl mb-6">
              <CardContent className="p-6 text-center">
                <div className="relative mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-xl rounded-xl mx-auto flex items-center justify-center shadow-xl border border-white/20 overflow-hidden">
                    <img
                      src="https://i.pinimg.com/736x/48/06/7f/48067f233fdfc65f3c73dd166af75e39.jpg"
                      alt="Thant Htoo Aung Profile"
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-500 rounded-full border-2 border-gray-800 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
                  </div>
                </div>
                <h2 className="text-lg font-bold mb-1 text-white">Thant Htoo Aung</h2>
                <p className="text-gray-300 text-sm mb-4 font-medium">Mid Level Java Developer</p>

                {/* Mobile Social Links */}
                <div className="flex gap-3 justify-center mb-4">
                  <Button
                    size="sm"
                    className="bg-blue-600/30 hover:bg-blue-600/50 text-white border border-blue-500/30 backdrop-blur-xl"
                    onClick={() => window.open("https://www.linkedin.com/in/thant-htoo-aung-", "_blank")}
                  >
                    <Linkedin className="w-4 h-4" />
                  </Button>
                  <Button
                    size="sm"
                    className="bg-gray-700/30 hover:bg-gray-700/50 text-white border border-gray-600/30 backdrop-blur-xl"
                    onClick={() => window.open("https://github.com/thanthtooaung-coding", "_blank")}
                  >
                    <Github className="w-4 h-4" />
                  </Button>
                </div>

                {/* Mobile Download CV Button */}
                <Button className="w-full bg-gradient-to-r from-cyan-600/50 to-blue-600/50 hover:from-cyan-600/70 hover:to-blue-600/70 text-white shadow-lg border border-cyan-500/30 backdrop-blur-xl">
                  <Download className="w-4 h-4 mr-2" />
                  Download CV
                </Button>
              </CardContent>
            </Card>

            {/* Mobile Navigation */}
            <nav className="space-y-2">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleSectionChange(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-4 rounded-lg transition-all font-medium text-lg ${
                    activeSection === item.id
                      ? "bg-gradient-to-r from-cyan-600/30 to-blue-600/30 text-white border border-cyan-500/30 shadow-lg backdrop-blur-xl"
                      : "text-gray-300 hover:bg-white/10 hover:text-white backdrop-blur-sm"
                  }`}
                >
                  <item.icon
                    className={`w-6 h-6 transition-colors duration-300 ${
                      activeSection === item.id ? "text-cyan-400" : ""
                    }`}
                  />
                  <span>{item.label}</span>
                  {activeSection === item.id && (
                    <div className="ml-auto w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                  )}
                </button>
              ))}
            </nav>
          </div>
        </div>
      )}

      <div className="relative z-20 flex min-h-screen">
        {/* Desktop Sidebar - Hidden on Mobile */}
        <div className="hidden lg:block w-80 p-6 backdrop-blur-3xl bg-gray-900/30 border-r border-white/10 shadow-2xl">
          <div className="space-y-6">
            {/* Enhanced Profile Section */}
            <Card className="backdrop-blur-2xl bg-white/5 border border-white/10 text-white shadow-2xl hover:bg-white/10 transition-all duration-500 group">
              <CardContent className="p-6 text-center">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-xl rounded-xl mx-auto flex items-center justify-center shadow-xl border border-white/20 group-hover:scale-105 transition-transform duration-300 overflow-hidden">
                    <img
                      src="https://i.pinimg.com/736x/48/06/7f/48067f233fdfc65f3c73dd166af75e39.jpg"
                      alt="Thant Htoo Aung Profile"
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-emerald-500 rounded-full border-2 border-gray-800 flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  </div>
                </div>
                <h2 className="text-xl font-bold mb-1 text-white">Thant Htoo Aung</h2>
                <p className="text-gray-300 text-sm mb-4 font-medium">Mid Level Java Developer</p>

                {/* Enhanced Contact Info */}
                <div className="space-y-3 text-sm mb-6">
                  <div className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors p-2 rounded-lg hover:bg-white/5 backdrop-blur-sm">
                    <Phone className="w-4 h-4 text-cyan-400" />
                    <span>+66-943-066-860</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors p-2 rounded-lg hover:bg-white/5 backdrop-blur-sm">
                    <Mail className="w-4 h-4 text-cyan-400" />
                    <span className="text-xs">thanthtoo1285@gmail.com</span>
                  </div>
                </div>

                {/* Enhanced Social Links */}
                <div className="flex gap-3 mb-4">
                  <Button
                    size="sm"
                    className="bg-blue-600/30 hover:bg-blue-600/50 text-white border border-blue-500/30 backdrop-blur-xl hover:scale-105 transition-all duration-300 cursor-pointer"
                    onClick={() => window.open("https://www.linkedin.com/in/thant-htoo-aung-", "_blank")}
                  >
                    <Linkedin className="w-4 h-4" />
                  </Button>
                  <Button
                    size="sm"
                    className="bg-gray-700/30 hover:bg-gray-700/50 text-white border border-gray-600/30 backdrop-blur-xl hover:scale-105 transition-all duration-300 cursor-pointer"
                    onClick={() => window.open("https://github.com/thanthtooaung-coding", "_blank")}
                  >
                    <Github className="w-4 h-4" />
                  </Button>
                </div>

                {/* Enhanced Download CV Button */}
                <Button className="w-full bg-gradient-to-r from-cyan-600/50 to-blue-600/50 hover:from-cyan-600/70 hover:to-blue-600/70 text-white shadow-lg border border-cyan-500/30 backdrop-blur-xl hover:scale-105 transition-all duration-300">
                  <Download className="w-4 h-4 mr-2" />
                  Download CV
                </Button>
              </CardContent>
            </Card>

            {/* Enhanced Stats Cards */}
            <div className="grid grid-cols-2 gap-3">
              {stats.slice(0, 2).map((stat, index) => (
                <Card
                  key={index}
                  className="backdrop-blur-2xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all duration-500 group hover:scale-105"
                >
                  <CardContent className="p-4 text-center">
                    <stat.icon className="w-5 h-5 text-cyan-400 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                    <div className="text-lg font-bold text-white">{stat.value}</div>
                    <div className="text-xs text-gray-300">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Enhanced Navigation */}
            <nav className="space-y-2">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all font-medium duration-300 hover:scale-105 ${
                    activeSection === item.id
                      ? "bg-gradient-to-r from-cyan-600/30 to-blue-600/30 text-white border border-cyan-500/30 shadow-lg backdrop-blur-xl"
                      : "text-gray-300 hover:bg-white/10 hover:text-white backdrop-blur-sm"
                  }`}
                >
                  <item.icon
                    className={`w-5 h-5 transition-colors duration-300 ${
                      activeSection === item.id ? "text-cyan-400" : ""
                    }`}
                  />
                  <span>{item.label}</span>
                  {activeSection === item.id && (
                    <div className="ml-auto w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                  )}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Enhanced Main Content */}
        <div className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto pt-20 lg:pt-8">
          <div className="max-w-5xl mx-auto space-y-6 lg:space-y-8">
            {/* About Section */}
            {activeSection === "about" && (
              <div className="space-y-6 lg:space-y-8 animate-in fade-in duration-500">
                {/* Enhanced Hero Card */}
                <Card className="backdrop-blur-2xl bg-white/5 border border-white/10 text-white shadow-2xl hover:bg-white/10 transition-all duration-500 group">
                  <CardContent className="p-6 lg:p-8">
                    <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
                      <div className="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-xl rounded-xl flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform duration-300 overflow-hidden">
                        <img
                          src="https://i.pinimg.com/736x/48/06/7f/48067f233fdfc65f3c73dd166af75e39.jpg"
                          alt="Thant Htoo Aung Profile"
                          className="w-full h-full object-cover rounded-xl"
                        />
                      </div>
                      <div className="text-center sm:text-left">
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-1">About Me</h1>
                        <p className="text-gray-300 text-base lg:text-lg">Full Stack Developer & Problem Solver</p>
                      </div>
                    </div>

                    <div className="space-y-4 text-gray-300 leading-relaxed text-base lg:text-lg">
                      <p>
                        I'm a passionate <span className="text-white font-semibold">Mid Level Java Developer</span> with
                        extensive experience in full-stack development, specializing in Java Spring Boot, Angular,
                        Vue.js, and cloud technologies. Currently pursuing my Bachelor's degree in Computing at the{" "}
                        <span className="text-cyan-400 font-semibold">University of Greenwich</span> while working
                        remotely for Myanmar Software Integrated Solutions Ltd.
                      </p>
                      <p>
                        My expertise spans across developing{" "}
                        <span className="text-emerald-400 font-semibold">financial systems</span>, REST APIs, and modern
                        web applications with a strong focus on scalable architecture and clean code practices. I'm
                        experienced in <span className="text-blue-400 font-semibold">AWS deployment</span>, CI/CD
                        pipelines, and collaborative development using Git workflows.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Enhanced Stats Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                  {stats.map((stat, index) => (
                    <Card
                      key={index}
                      className="backdrop-blur-2xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all duration-500 group hover:scale-105"
                    >
                      <CardContent className="p-4 lg:p-6 text-center">
                        <stat.icon className="w-6 h-6 lg:w-8 lg:h-8 text-cyan-400 mx-auto mb-2 lg:mb-3 group-hover:scale-110 transition-transform duration-300" />
                        <div className="text-xl lg:text-2xl font-bold text-white mb-1">{stat.value}</div>
                        <div className="text-xs lg:text-sm text-gray-300">{stat.label}</div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Enhanced Info Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
                  <Card className="backdrop-blur-2xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all duration-500 group hover:scale-105">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <MapPin className="w-5 h-5 lg:w-6 lg:h-6 text-emerald-400 group-hover:scale-110 transition-transform duration-300" />
                        <span className="font-semibold text-white text-base lg:text-lg">Location & Availability</span>
                      </div>
                      <div className="space-y-3 text-gray-300 text-sm lg:text-base">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                          <span>Remote / Bangkok, Thailand</span>
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

                  <Card className="backdrop-blur-2xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all duration-500 group hover:scale-105">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <Activity className="w-5 h-5 lg:w-6 lg:h-6 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                        <span className="font-semibold text-white text-base lg:text-lg">Current Focus</span>
                      </div>
                      <div className="space-y-3 text-gray-300 text-sm lg:text-base">
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
            {activeSection === "experience" && (
              <div className="space-y-6 lg:space-y-8 animate-in fade-in duration-500">
                <div className="flex items-center gap-4 mb-6 lg:mb-8">
                  <div className="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-xl rounded-xl flex items-center justify-center border border-white/20">
                    <Briefcase className="w-6 h-6 lg:w-7 lg:h-7 text-cyan-400" />
                  </div>
                  <div>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-1">Experience</h2>
                    <p className="text-gray-300 text-base lg:text-lg">Professional journey and achievements</p>
                  </div>
                </div>

                {experience.map((exp, index) => (
                  <Card
                    key={index}
                    className="backdrop-blur-2xl bg-white/5 border border-white/10 text-white shadow-xl hover:bg-white/10 transition-all duration-500 group hover:scale-105"
                  >
                    <CardHeader className="pb-4">
                      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4">
                        <div className="flex-1">
                          <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-3">
                            <CardTitle className="text-xl lg:text-2xl text-white">{exp.title}</CardTitle>
                            {exp.type === "Current" && (
                              <Badge className="bg-emerald-600/50 text-white border border-emerald-500/30 backdrop-blur-xl w-fit">
                                <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
                                Current
                              </Badge>
                            )}
                          </div>
                          <p className="text-gray-300 font-semibold text-base lg:text-lg mb-2">{exp.company}</p>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-cyan-400" />
                            <p className="text-gray-300 text-sm lg:text-base">{exp.location}</p>
                          </div>
                        </div>
                        <Badge
                          variant="secondary"
                          className="bg-white/10 text-gray-300 border border-white/20 px-3 lg:px-4 py-2 backdrop-blur-xl text-xs lg:text-sm w-fit"
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
                            className="text-gray-300 flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors backdrop-blur-sm text-sm lg:text-base"
                          >
                            <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="leading-relaxed">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            {/* Projects Section */}
            {activeSection === "projects" && (
              <div className="space-y-6 lg:space-y-8 animate-in fade-in duration-500">
                <div className="flex items-center gap-4 mb-6 lg:mb-8">
                  <div className="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-xl rounded-xl flex items-center justify-center border border-white/20">
                    <Code className="w-6 h-6 lg:w-7 lg:h-7 text-cyan-400" />
                  </div>
                  <div>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-1">Projects</h2>
                    <p className="text-gray-300 text-base lg:text-lg">Featured work and contributions</p>
                  </div>
                </div>

                {projects.map((project, index) => (
                  <Card
                    key={index}
                    className="backdrop-blur-2xl bg-white/5 border border-white/10 text-white shadow-xl hover:bg-white/10 transition-all duration-500 group hover:scale-105"
                  >
                    <CardHeader className="pb-4">
                      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4">
                        <div className="flex-1">
                          <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-3">
                            <CardTitle className="text-xl lg:text-2xl text-white flex items-center gap-2">
                              {project.title}
                              <ExternalLink className="w-4 h-4 lg:w-5 lg:h-5 text-cyan-400 hover:text-cyan-300 cursor-pointer transition-colors group-hover:scale-110" />
                            </CardTitle>
                            <Badge
                              className={
                                project.status === "Active"
                                  ? "bg-emerald-600/50 text-white border border-emerald-500/30 backdrop-blur-xl w-fit"
                                  : "bg-blue-600/50 text-white border border-blue-500/30 backdrop-blur-xl w-fit"
                              }
                            >
                              {project.status === "Active" && (
                                <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
                              )}
                              {project.status}
                            </Badge>
                          </div>
                          <div className="flex flex-wrap gap-2 mb-3">
                            {project.tech.split(", ").map((tech, i) => (
                              <Badge
                                key={i}
                                variant="outline"
                                className="bg-white/5 text-gray-300 border-white/20 hover:bg-white/10 transition-colors backdrop-blur-sm text-xs"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <Badge
                          variant="secondary"
                          className="bg-white/10 text-gray-300 border border-white/20 px-3 lg:px-4 py-2 backdrop-blur-xl text-xs lg:text-sm w-fit"
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
                            className="text-gray-300 flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors backdrop-blur-sm text-sm lg:text-base"
                          >
                            <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="leading-relaxed">{desc}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button
                          size="sm"
                          className="bg-gradient-to-r from-cyan-600/50 to-blue-600/50 hover:from-cyan-600/70 hover:to-blue-600/70 text-white border border-cyan-500/30 backdrop-blur-xl hover:scale-105 transition-all duration-300"
                        >
                          <Eye className="w-4 h-4 mr-2" />
                          View Project
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="bg-white/5 text-gray-300 border-white/20 hover:bg-white/10 hover:text-white backdrop-blur-xl hover:scale-105 transition-all duration-300"
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
            {activeSection === "education" && (
              <div className="space-y-6 lg:space-y-8 animate-in fade-in duration-500">
                <div className="flex items-center gap-4 mb-6 lg:mb-8">
                  <div className="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-xl rounded-xl flex items-center justify-center border border-white/20">
                    <GraduationCap className="w-6 h-6 lg:w-7 lg:h-7 text-cyan-400" />
                  </div>
                  <div>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-1">Education</h2>
                    <p className="text-gray-300 text-base lg:text-lg">Academic background and certifications</p>
                  </div>
                </div>

                {education.map((edu, index) => (
                  <Card
                    key={index}
                    className="backdrop-blur-2xl bg-white/5 border border-white/10 text-white shadow-xl hover:bg-white/10 transition-all duration-500 group hover:scale-105"
                  >
                    <CardContent className="p-6 lg:p-8">
                      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4">
                        <div className="flex-1">
                          <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-3">
                            <h3 className="text-xl lg:text-2xl font-bold text-white">{edu.institution}</h3>
                            <Badge
                              className={
                                edu.status === "Current"
                                  ? "bg-emerald-600/50 text-white border border-emerald-500/30 backdrop-blur-xl w-fit"
                                  : edu.status === "Certified"
                                    ? "bg-amber-600/50 text-white border border-amber-500/30 backdrop-blur-xl w-fit"
                                    : "bg-blue-600/50 text-white border border-blue-500/30 backdrop-blur-xl w-fit"
                              }
                            >
                              {edu.status === "Current" && (
                                <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
                              )}
                              {edu.status}
                            </Badge>
                          </div>
                          <p className="text-gray-300 font-semibold text-base lg:text-lg mb-2">{edu.degree}</p>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-cyan-400" />
                            <p className="text-gray-300 text-sm lg:text-base">{edu.location}</p>
                          </div>
                        </div>
                        <Badge
                          variant="secondary"
                          className="bg-white/10 text-gray-300 border border-white/20 px-3 lg:px-4 py-2 backdrop-blur-xl text-xs lg:text-sm w-fit"
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
            {activeSection === "skills" && (
              <div className="space-y-6 lg:space-y-8 animate-in fade-in duration-500">
                <div className="flex items-center gap-4 mb-6 lg:mb-8">
                  <div className="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-xl rounded-xl flex items-center justify-center border border-white/20">
                    <Terminal className="w-6 h-6 lg:w-7 lg:h-7 text-cyan-400" />
                  </div>
                  <div>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-1">Technical Skills</h2>
                    <p className="text-gray-300 text-base lg:text-lg">Technologies and tools I work with</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                  {Object.entries(skills).map(([category, skillList]) => (
                    <Card
                      key={category}
                      className="backdrop-blur-2xl bg-white/5 border border-white/10 text-white shadow-xl hover:bg-white/10 transition-all duration-500 group hover:scale-105"
                    >
                      <CardHeader className="pb-4">
                        <CardTitle className="text-lg lg:text-xl capitalize flex items-center gap-3">
                          {category === "languages" && (
                            <Code className="w-5 h-5 lg:w-6 lg:h-6 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                          )}
                          {category === "frameworks" && (
                            <Globe className="w-5 h-5 lg:w-6 lg:h-6 text-emerald-400 group-hover:scale-110 transition-transform duration-300" />
                          )}
                          {category === "tools" && (
                            <Server className="w-5 h-5 lg:w-6 lg:h-6 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                          )}
                          {category === "libraries" && (
                            <Database className="w-5 h-5 lg:w-6 lg:h-6 text-orange-400 group-hover:scale-110 transition-transform duration-300" />
                          )}
                          <span className="text-white font-semibold">{category}</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2 lg:gap-3">
                          {skillList.map((skill, index) => (
                            <Badge
                              key={index}
                              variant="secondary"
                              className="bg-white/5 text-gray-300 border border-white/20 hover:bg-white/10 hover:text-white transition-all cursor-pointer px-2 lg:px-3 py-1 backdrop-blur-sm hover:scale-105 duration-300 text-xs lg:text-sm"
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
  )
}
