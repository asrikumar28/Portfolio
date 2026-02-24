import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary"> Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">
                            Solutions-Focused Software Engineer
                        </h3>

                        <p className="text-muted-foreground">
                            I’m a Software Engineering graduate from Western University
                            currently working at Ninepoint Partners, where I help maintain
                            and modernize a large-scale .NET platform supporting 2,000+
                            financial advisors. My work focuses on building reliable
                            APIs, improving system performance, integrating enterprise tools,
                            and ensuring secure cloud deployments in Azure.
                        </p>

                        <p className="text-muted-foreground">
                            Beyond enterprise systems, I built a full-stack MERN fitness
                            application that delivers personalized workout recommendations
                            and AI-powered training plans. I enjoy building products that
                            combine technical depth with real-world usability and measurable
                            user impact.
                        </p>

                        <p className="text-muted-foreground">
                            With a background in membership sales, I understand how to
                            communicate technical ideas clearly and align solutions with
                            user needs. Whether in code or everyday life, I’m naturally
                            drawn to identifying inefficiencies and designing smarter,
                            practical systems that improve how people work and live.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                Get In Touch
                            </a>

                            <a
                                href="projects/ASG - WNP.pdf" target="_blank"
                                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                            >
                                Download CV
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Enterprise Engineering</h4>
                                    <p className="text-muted-foreground">
                                        Building and optimizing .NET APIs, resolving production
                                        issues, improving SQL performance, and deploying secure
                                        applications using Azure and CI/CD pipelines.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <User className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Full-Stack Product Development</h4>
                                    <p className="text-muted-foreground">
                                        Designing and deploying MERN applications with AI
                                        integrations, focusing on user engagement, scalability,
                                        and clean cross-platform performance.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className="h-6 w-6 text-primary" />
                                </div>

                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Commercial & Client Awareness</h4>
                                    <p className="text-muted-foreground">
                                        Combining technical execution with sales experience to
                                        understand user pain points, communicate clearly, and
                                        deliver solutions that drive measurable business impact.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};