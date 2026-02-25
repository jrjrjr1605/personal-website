import { AppSidebar } from "@/components/app-sidebar"
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import profile from "@/assets/my_picture.jpg"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { AnimatedSection } from "@/components/animated-section"

export default function App() {
  return (
    <SidebarProvider>
      <div className="min-h-screen w-full bg-background text-foreground">
        <AppSidebar />

        <SidebarInset>
          <header className="flex h-14 items-center gap-2 border-b px-4">
            <SidebarTrigger />
            <span className="font-semibold">My Website</span>
          </header>

          <main className="p-6">
            <h1 id="introduction" className="text-3xl font-bold text-center mb-10">
              Introduction
            </h1>

            <div className="flex flex-col md:flex-row items-center md:items-start gap-12 max-w-5xl mx-auto">
              
              {/* Image */}
              <div className="md:w-1/3">
                <img
                  src={profile}
                  alt="Profile Picture"
                  className="w-full h-full object-cover rounded-2xl shadow-xl"
                />
              </div>

              {/* Right - Expanding Text */}
              <div className="flex-1">
                <p className="text-muted-foreground leading-relaxed text-lg text-center md:text-left">
                  <p>I’m a Computer Science graduate driven by curiosity and a love for solving challenging problems. I enjoy working at the intersection of logic and creativity — building systems, writing efficient code, and continuously improving the way things work.</p><br />
                  <p>My technical interests include software engineering and cybersecurity. I enjoy understanding how systems function under the hood and how they can be optimized or secured. I have experience working with Python, Java, JavaScript, and scripting tools such as Bash and PowerShell, and I’m always expanding my technical toolkit.</p><br />
                  <p>I’m someone who enjoys using my brain — whether it’s designing solutions, debugging complex issues, or learning new technologies independently. I hold myself to high standards, value accountability, and strive to be someone teammates can rely on.</p>
                </p>
              </div>

            </div>
            
            {/* ================= Education Section ================= */}
            <AnimatedSection className="mt-20 max-w-5xl mx-auto">
              <h2 id="education" className="text-3xl font-bold text-center mb-12">
                Education
              </h2>

              <div className="space-y-8">

                {/* Row 1 */}
                <div className="p-6 rounded-2xl border shadow-sm hover:shadow-md transition">
                  <h3 className="text-xl font-semibold">
                    Bachelor of Computer Science (Cyber Security)
                  </h3>
                  <p className="text-muted-foreground">
                    University of Wollongong - SIM • July 2023 – December 2025
                  </p>
                  <p className="mt-2 text-muted-foreground">
                    • Weighted Average Mark (WAM): 81.5 <br />
                    • Vice-President of SIM Table Tennis Club (2024-2025) <br />
                    • SIM Student Ambassador <br />
                    • Summer Exchange Program at University of Wollongong, Australia (2024)
                  </p>
                </div>

                {/* Row 2 */}
                <div className="p-6 rounded-2xl border shadow-sm hover:shadow-md transition">
                  <h3 className="text-xl font-semibold">
                    Diploma in Accountancy
                  </h3>
                  <p className="text-muted-foreground">
                    Singapore Polytechnic • April 2019 - May 2022
                  </p>
                  <p className="mt-2 text-muted-foreground">
                    • Class Treasurer <br />
                    • Member of SP Table Tennis Club
                  </p>
                </div>

                {/* Row 3 */}
                <div className="p-6 rounded-2xl border shadow-sm hover:shadow-md transition">
                  <h3 className="text-xl font-semibold">
                    GCSE O Level
                  </h3>
                  <p className="text-muted-foreground">
                    Junyuan Secondary School • January 2015 - December 2018
                  </p>
                  <p className="mt-2 text-muted-foreground">
                    • Class Monitor <br />
                    • Member of Choir Club
                  </p>
                </div>

              </div>
            </AnimatedSection>

            {/* ================= Work Experience Section (Popup) ================= */}
            <AnimatedSection className="mt-20 max-w-5xl mx-auto">
              <h2 id="work-experience" className="text-3xl font-bold text-center mb-12">
                Work Experience (Click on each role to find out more!)
              </h2>

              <div className="grid gap-6">

                {/* Experience 1 */}
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="w-full text-left rounded-2xl border p-6 shadow-sm hover:shadow-md transition">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                        <div>
                          <h3 className="text-xl font-semibold">
                            Security / Intern
                          </h3>
                          <p className="text-muted-foreground">
                            Wush.co Ltd • Singapore
                          </p>
                        </div>

                        <p className="text-sm text-muted-foreground">
                          Feb 2025 – May 2025
                        </p>
                      </div>
                    </button>
                  </DialogTrigger>

                  <DialogContent className="max-w-2xl">
                    <DialogHeader>
                      <DialogTitle>Security / Intern</DialogTitle>
                      <p className="text-sm text-muted-foreground">
                        Wush.co Ltd • Singapore • Feb 2025 – May 2025
                      </p>
                    </DialogHeader>

                    <div className="space-y-4">
                      <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                        <li>
                          Conducted web application security testing aligned with OWASP Top 10 and produced clear, actionable reports.
                        </li>
                        <li>
                          Built small automation scripts (Python/Bash) to speed up enumeration and improve repeatability.
                        </li>
                        <li>
                          Worked with engineers to validate remediation and performed retesting to confirm fixes.
                        </li>
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">Web Security</Badge>
                        <Badge variant="secondary">Burp Suite</Badge>
                        <Badge variant="secondary">Python</Badge>
                        <Badge variant="secondary">Bash</Badge>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>

                {/* Experience 2 */}
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="w-full text-left rounded-2xl border p-6 shadow-sm hover:shadow-md transition">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                        <div>
                          <h3 className="text-xl font-semibold">
                            IT / Intern
                          </h3>
                          <p className="text-muted-foreground">
                            SRS Cybernetics Ltd • Singapore
                          </p>
                        </div>

                        <p className="text-sm text-muted-foreground">
                          May 2022 – Apr 2023
                        </p>
                      </div>
                    </button>
                  </DialogTrigger>

                  <DialogContent className="max-w-2xl">
                    <DialogHeader>
                      <DialogTitle>IT / Intern</DialogTitle>
                      <p className="text-sm text-muted-foreground">
                        SRS Cybernetics Ltd • Singapore • May 2022 – Apr 2023
                      </p>
                    </DialogHeader>

                    <div className="space-y-4">
                      <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                        <li>
                          Understand security architecture and implemented SIEM solutions to monitor and analyze security events across the organization.
                        </li>
                        <li>
                          Assisted with backend development of in-house employee e-namecard system using Python and MySQL.
                        </li>
                        <li>
                          Gained hands-on experience in vulnerability assessment methodologies and security reporting
                        </li>
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">Web Backend Development</Badge>
                        <Badge variant="secondary">MySQL</Badge>
                        <Badge variant="secondary">Vulnerability Assessment</Badge>
                        <Badge variant="secondary">Crowdstrike SIEM</Badge>
                        <Badge variant="secondary">Security Architecture</Badge>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>

                {/* Experience 4 */}
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="w-full text-left rounded-2xl border p-6 shadow-sm hover:shadow-md transition">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                        <div>
                          <h3 className="text-xl font-semibold">
                            Tax / Intern
                          </h3>
                          <p className="text-muted-foreground">
                            RSM Tax Ltd • Singapore
                          </p>
                        </div>

                        <p className="text-sm text-muted-foreground">
                          September 2021 – Feb 2022
                        </p>
                      </div>
                    </button>
                  </DialogTrigger>

                  <DialogContent className="max-w-2xl">
                    <DialogHeader>
                      <DialogTitle>Tax / Intern</DialogTitle>
                      <p className="text-sm text-muted-foreground">
                        RSM Tax Ltd • Singapore • September 2021 – Feb 2022
                      </p>
                    </DialogHeader>

                    <div className="space-y-4">
                      <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                        <li>Assisted in preparing tax returns for small and medium-sized enterprises.</li>
                        <li>Checked and verified tax documents for accuracy and completeness.</li>
                        <li>Liased with relevant stakeholders to streamline tax filing processes.</li>
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">Tax Preparation</Badge>
                        <Badge variant="secondary">Document Verification</Badge>
                        <Badge variant="secondary">Stakeholder Communication</Badge>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>

              </div>
            </AnimatedSection>

            {/* ================= Projects Section ================= */}
            <AnimatedSection className="mt-20 max-w-5xl mx-auto">
              <h2 id="projects" className="text-3xl font-bold text-center mb-12">
                Projects
              </h2>

              <div className="grid gap-8">

                {/* Project 1 */}
                <div className="rounded-2xl border p-6 shadow-sm hover:shadow-md transition">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <h3 className="text-xl font-semibold">
                      Final Year Project: Student Project Smart Allocation System
                    </h3>

                    <a
                      href="https://github.com/SvechaPVL/Ascent"
                      target="_blank"
                      className="text-sm underline text-muted-foreground hover:text-foreground transition"
                    >
                      View on GitHub →
                    </a>
                  </div>

                  <ul className="mt-4 space-y-2 text-muted-foreground list-disc pl-5">
                    <li>
                      Designed and implemented an optimized project allocation
                      algorithm using Mixed Integer Linear Programming (MILP) to
                      ensure fair and efficient student-project matching

                    </li>
                    <li>
                      Conducted functional and usability testing for the web
                      application to validate system performance and reliability
                    </li>
                  </ul>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="px-3 py-1 text-sm rounded-full border">Algorithms & Data Structures</span>
                    <span className="px-3 py-1 text-sm rounded-full border">MILP</span>
                    <span className="px-3 py-1 text-sm rounded-full border">OpenAI API</span>
                  </div>
                </div>

                {/* Project 2 */}
                <div className="rounded-2xl border p-6 shadow-sm hover:shadow-md transition">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <h3 className="text-xl font-semibold">
                      Mini School Project / Volunteer Assignment System
                    </h3>

                    <a
                      href="https://github.com/jrjrjr1605/314-Project"
                      target="_blank"
                      className="text-sm underline text-muted-foreground hover:text-foreground transition"
                    >
                      View on GitHub →
                    </a>
                  </div>

                  <ul className="mt-4 space-y-2 text-muted-foreground list-disc pl-5">
                    <li>
                      Developed both frontend and backend components of a web
                      application using React (Vite.js) and FastAPI
                    </li>
                    <li>
                      Integrated APIs and handled data flow between client and
                      server to ensure smooth application functionality
                    </li>
                    <li>
                      Adopted use of Agile-Scrum methodologies for project management and team collaboration
                    </li>
                  </ul>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="px-3 py-1 text-sm rounded-full border">ReactTS</span>
                    <span className="px-3 py-1 text-sm rounded-full border">FastAPI</span>
                    <span className="px-3 py-1 text-sm rounded-full border">PostgreSQL</span>
                    <span className="px-3 py-1 text-sm rounded-full border">Agile-Scrum</span>
                  </div>
                </div>

                {/* Project 3 */}
                <div className="rounded-2xl border p-6 shadow-sm hover:shadow-md transition">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <h3 className="text-xl font-semibold">
                      Penetration Testing Project
                    </h3>
                  </div>

                  <ul className="mt-4 space-y-2 text-muted-foreground list-disc pl-5">
                    <li>
                      Performed security testing on a web application to identify
                      potential vulnerabilities and security breaches
                    </li>
                    <li>
                      Produced a detailed vulnerability assessment report,
                      including findings, impact analysis, and mitigation
                      recommendations
                    </li>
                  </ul>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="px-3 py-1 text-sm rounded-full border">Burp Suite</span>
                    <span className="px-3 py-1 text-sm rounded-full border">Web Application Testing</span>
                    <span className="px-3 py-1 text-sm rounded-full border">Vulnerability Assessment</span>
                  </div>
                </div>

                {/* Project 4 */}
                <div className="rounded-2xl border p-6 shadow-sm hover:shadow-md transition">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <h3 className="text-xl font-semibold">
                      Employee e-Name Card Web Application
                    </h3>
                  </div>

                  <ul className="mt-4 space-y-2 text-muted-foreground list-disc pl-5">
                    <li>
                      Assisted in backend development and database design for an
                      employee digital e-name card system
                    </li>
                    <li>
                      Supported API development and data management to
                      enhance system scalability and maintainability
                    </li>
                  </ul>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="px-3 py-1 text-sm rounded-full border">Django</span>
                    <span className="px-3 py-1 text-sm rounded-full border">Python</span>
                    <span className="px-3 py-1 text-sm rounded-full border">MySQL</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* ================= Certifications Section ================= */}
            <AnimatedSection className="mt-20 max-w-5xl mx-auto">
            <h2 id="certifications" className="text-3xl font-bold text-center mb-12">
              Certifications
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

              {/* Certification 1 */}
              <div className="rounded-2xl border p-6 shadow-sm hover:shadow-md transition text-center">
                <div className="text-sm uppercase tracking-wide text-muted-foreground">
                  Offensive Security
                </div>

                <h3 className="text-lg font-semibold mt-2">
                  OSCP (Offensive Security Certified Professional)
                </h3>

                <div className="mt-3">
                  <span className="px-3 py-1 text-xs rounded-full bg-yellow-100 text-yellow-700">
                    In Progress
                  </span>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">
                  Focused on penetration testing, privilege escalation,
                  enumeration, and exploit development.
                </p>
              </div>

              {/* Certification 2 */}
              <div className="rounded-2xl border p-6 shadow-sm hover:shadow-md transition text-center">
                <div className="text-sm uppercase tracking-wide text-muted-foreground">
                  TryHackMe
                </div>

                <h3 className="text-lg font-semibold mt-2 p-3">
                  Web Application Pentesting
                </h3>

                <div className="mt-3">
                  <span className="px-3 py-1 text-xs rounded-full bg-green-100 text-green-700">
                    Certified
                  </span>
                </div>

                <p className="mt-4 text-sm text-muted-foreground">
                  Demonstrated understanding of web application security concepts,
                  including OWASP Top 10 vulnerabilities and exploitation techniques.
                </p>
              </div>

              {/* Certification 3 */}
              <div className="rounded-2xl border p-6 shadow-sm hover:shadow-md transition text-center">
                <div className="text-sm uppercase tracking-wide text-muted-foreground">
                  Udemy
                </div>

                <h3 className="text-lg font-semibold mt-2">
                  C Programming Bootcamp - The Complete C Language Course
                </h3>

                <div className="mt-3">
                  <span className="px-3 py-1 text-xs rounded-full bg-green-100 text-green-700">
                    Certified
                  </span>
                </div>

                <p className="mt-4 text-sm text-muted-foreground">
                  Covered C programming fundamentals, memory management, and
                  low-level programming concepts.
                </p>
              </div>

              {/* Certification 4 */}
              <div className="rounded-2xl border p-6 shadow-sm hover:shadow-md transition text-center">
                <div className="text-sm uppercase tracking-wide text-muted-foreground">
                  TryHackMe
                </div>

                <h3 className="text-lg font-semibold mt-2">
                  Jr Penetration Tester Learning Path
                </h3>

                <div className="mt-3">
                  <span className="px-3 py-1 text-xs rounded-full bg-green-100 text-green-700">
                    Certified
                  </span>
                </div>

                <p className="mt-4 text-sm text-muted-foreground">
                  Regularly practice offensive security challenges
                  and vulnerability exploitation labs.
                </p>
              </div>

              {/* Certification 5 */}
              <div className="rounded-2xl border p-6 shadow-sm hover:shadow-md transition text-center">
                <div className="text-sm uppercase tracking-wide text-muted-foreground">
                  Linkedin
                </div>

                <h3 className="text-lg font-semibold mt-2 p-4">
                   Linux: Bash Shell and Scripts
                </h3>

                <div className="mt-3">
                  <span className="px-3 py-1 text-xs rounded-full bg-green-100 text-green-700">
                    Certified
                  </span>
                </div>

                <p className="mt-4 text-sm text-muted-foreground">
                  Gained proficiency in Linux command line, shell scripting, and automation techniques.
                </p>
              </div>

              {/* Certification 6 */}
              <div className="rounded-2xl border p-6 shadow-sm hover:shadow-md transition text-center">
                <div className="text-sm uppercase tracking-wide text-muted-foreground">
                  Linkedin
                </div>

                <h3 className="text-lg font-semibold mt-2">
                  Coding for Visual Learners: Learning Javascript from Scratch
                </h3>

                <div className="mt-3">
                  <span className="px-3 py-1 text-xs rounded-full bg-green-100 text-green-700">
                    Certified
                  </span>
                </div>

                <p className="mt-4 text-sm text-muted-foreground">
                  Gained proficiency in JavaScript fundamentals, DOM manipulation, and visual programming concepts.
                </p>
              </div>

              {/* Certification 7 */}
              <div className="rounded-2xl border p-6 shadow-sm hover:shadow-md transition text-center">
                <div className="text-sm uppercase tracking-wide text-muted-foreground">
                  Microsoft
                </div>

                <h3 className="text-lg font-semibold mt-2">
                  SC-900 - Microsoft Security, Compliance, and Identity Fundamentals
                </h3>

                <div className="mt-3">
                  <span className="px-3 py-1 text-xs rounded-full bg-green-100 text-green-700">
                    Certified
                  </span>
                </div>

                <p className="mt-4 text-sm text-muted-foreground">
                  Gained proficiency in Microsoft security, compliance, and identity fundamentals.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* ================= Contact Section ================= */}
          <AnimatedSection className="mt-20 mb-20 max-w-4xl mx-auto text-center">
            <h2 id="contact" className="text-3xl font-bold mb-6">
              Get In Touch
            </h2>

            <p className="text-muted-foreground text-lg mb-10">
              Feel free to reach out to me!
            </p>

            <div className="grid sm:grid-cols-3 gap-6">

              {/* Email */}
              <div className="rounded-2xl border p-6 shadow-sm hover:shadow-md transition">
                <h3 className="font-semibold text-lg">Email</h3>
                <a
                  href="mailto:yourname@email.com"
                  className="text-muted-foreground hover:text-foreground transition"
                >
                  ooijingru@gmail.com
                </a>
              </div>

              {/* LinkedIn */}
              <div className="rounded-2xl border p-6 shadow-sm hover:shadow-md transition">
                <h3 className="font-semibold text-lg">LinkedIn</h3>
                <a
                  href="https://www.linkedin.com/in/ooi-jing-ru-760a181aa/"
                  target="_blank"
                  className="text-muted-foreground hover:text-foreground transition"
                >
                  https://www.linkedin.com/in/ooi-jing-ru-760a181aa/
                </a>
              </div>

              {/* GitHub */}
              <div className="rounded-2xl border p-6 shadow-sm hover:shadow-md transition">
                <h3 className="font-semibold text-lg">GitHub</h3>
                <a
                  href="https://github.com/jrjrjr1605"
                  target="_blank"
                  className="text-muted-foreground hover:text-foreground transition"
                >
                  github.com/jrjrjr1605
                </a>
              </div>

            </div>
          </AnimatedSection>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}