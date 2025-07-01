import { motion } from 'framer-motion';
import { Code, Database, LayoutDashboard, Briefcase } from 'lucide-react';
import { PieSkillChart } from '../ui/SkillCharts';
import { frontendSkills, backendSkills, otherSkills, COLORS } from '../data/SkillsData';
import CircleProgress from '../ui/CircleProgress';


export default function About() {
    return (
        <section id="about" className="py-20 px-4 bg-gray-100 dark:bg-gray-800">
            <div className="container mx-auto  px-4 sm:px-6 lg:px-8">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl font-bold text-center mb-12"
                >
                    About <span className="text-blue-600 dark:text-blue-400">Me</span>
                </motion.h2>

                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Who I Am Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="lg:w-1/2"
                    >
                        <h3 className="text-xl font-semibold mb-4">Who I Am</h3>
                        <p className="mb-6 dark:text-gray-300">
                            I'm a passionate full-stack developer with a strong foundation in both frontend and backend development.
                            I specialize in creating responsive, user-friendly web applications using modern technologies like React, Node.js, and MongoDB.
                        </p>
                        <p className="mb-6 dark:text-gray-300">
                            My journey in web development began with a curiosity about how websites work, and it has grown into a full-fledged passion for building
                            digital experiences that are both functional and beautiful.
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex items-center">
                                <Code className="mr-2 text-blue-600 dark:text-blue-400" />
                                <span>Full Stack Development</span>
                            </div>
                            <div className="flex items-center">
                                <Database className="mr-2 text-blue-600 dark:text-blue-400" />
                                <span>Database Design</span>
                            </div>
                            <div className="flex items-center">
                                <LayoutDashboard className="mr-2 text-blue-600 dark:text-blue-400" />
                                <span>UI/UX Design</span>
                            </div>
                            <div className="flex items-center">
                                <Briefcase className="mr-2 text-blue-600 dark:text-blue-400" />
                                <span>Problem Solving</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* My Skills Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="lg:w-1/2"
                    >
                        <h3 className="text-xl font-semibold mb-6">My Skills</h3>

                        {/* Frontend Skills - Now a "review kind of thing" with progress bars */}
                        <div className="mb-8">
                            <h4 className="font-medium mb-4">Frontend Skills</h4>
                            <div className="space-y-4"> {/* Adds space between skill items */}
                                {frontendSkills.map((skill, index) => (
                                    <div key={index} className="flex items-center">
                                        <span className="w-1/3 font-semibold text-gray-700 dark:text-gray-300">{skill.name}</span>
                                        <div className="w-2/3 bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.value}%` }} // Assuming skill.value is a percentage
                                                viewport={{ once: true }}
                                                transition={{ duration: 1, delay: 0.2 + index * 0.1 }} // Staggered animation
                                                className="bg-blue-500 h-2.5 rounded-full"
                                                style={{ maxWidth: '100%' }} // Ensure it doesn't overflow
                                            ></motion.div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Backend and Other Skills - Still Pie Charts */}
                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <h4 className="font-medium mb-4">Backend Skills</h4>
                                <div className="grid grid-cols-2 gap-4">
                                    {backendSkills.map((skill, index) => (
                                        <CircleProgress
                                            key={index}
                                            skill={skill.name}
                                            value={skill.value}
                                            color={COLORS[index % COLORS.length]}
                                        />
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h4 className="font-medium mb-4">Other Skills</h4>
                                <div className="grid grid-cols-2 gap-4">
                                    {otherSkills.map((skill, index) => (
                                        <CircleProgress
                                            key={index}
                                            skill={skill.name}
                                            value={skill.value}
                                            color={COLORS[index % COLORS.length]}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
