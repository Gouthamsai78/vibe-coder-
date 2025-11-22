import { Code2, Zap, Lock, Sparkles, ArrowRight, Mail, Github } from 'lucide-react';

interface LandingPageProps {
    onGetStarted: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onGetStarted }) => {
    return (
        <div className="min-h-screen bg-[#0f0f0f] text-white">
            {/* Hero Section */}
            <section className="relative overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10" />
                <div className="absolute inset-0">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse delay-700" />
                </div>

                <div className="relative max-w-7xl mx-auto px-6 py-24 sm:py-32">
                    {/* Logo */}
                    <div className="flex items-center gap-3 mb-8">
                        <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
                            <Code2 className="h-7 w-7 text-white" />
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                                AI Coder
                            </h1>
                            <p className="text-xs text-gray-500">by Goutham Sai</p>
                        </div>
                    </div>

                    {/* Hero Content */}
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-block px-4 py-2 rounded-full bg-blue-600/10 border border-blue-600/20 text-blue-400 text-sm font-medium mb-6">
                                🚀 AI-Powered Code Generation
                            </div>

                            <h2 className="text-5xl sm:text-6xl font-bold mb-6 leading-tight">
                                Transform Ideas into{' '}
                                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                                    Beautiful Code
                                </span>
                            </h2>

                            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                                Describe what you want to build in plain English, and watch AI Coder generate
                                production-ready HTML, CSS, and JavaScript in real-time.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <button
                                    onClick={onGetStarted}
                                    className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-semibold text-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 flex items-center justify-center gap-2"
                                >
                                    Get Started Free
                                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                </button>

                                <a
                                    href="https://github.com/Gouthamsai78/vibe-coder-"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-8 py-4 bg-white/5 border border-white/10 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2"
                                >
                                    <Github className="h-5 w-5" />
                                    View on GitHub
                                </a>
                            </div>

                            <div className="mt-8 flex items-center gap-6 text-sm text-gray-500">
                                <div className="flex items-center gap-2">
                                    <div className="h-2 w-2 rounded-full bg-green-500" />
                                    No signup required
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="h-2 w-2 rounded-full bg-blue-500" />
                                    100% Free and open source
                                </div>
                            </div>
                        </div>

                        {/* Hero Visual */}
                        <div className="relative">
                            <div className="glass rounded-2xl p-6 shadow-2xl">
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="h-3 w-3 rounded-full bg-red-500" />
                                    <div className="h-3 w-3 rounded-full bg-yellow-500" />
                                    <div className="h-3 w-3 rounded-full bg-green-500" />
                                </div>
                                <div className="bg-black/50 rounded-lg p-4 font-mono text-sm">
                                    <div className="text-gray-400">// Ask AI Coder</div>
                                    <div className="text-blue-400 mt-2">&gt; Create a landing page</div>
                                    <div className="text-gray-400 mt-2">// AI generates...</div>
                                    <div className="text-green-400 mt-2 animate-pulse">✓ Beautiful HTML</div>
                                    <div className="text-purple-400 mt-1 animate-pulse delay-100">✓ Responsive CSS</div>
                                    <div className="text-pink-400 mt-1 animate-pulse delay-200">✓ Interactive JS</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-24 bg-gradient-to-b from-transparent to-black/30">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">Why Choose AI Coder?</h2>
                        <p className="text-xl text-gray-400">Powerful features that make coding effortless</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="glass rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                            <div className="h-12 w-12 rounded-lg bg-blue-600/20 flex items-center justify-center mb-4">
                                <Zap className="h-6 w-6 text-blue-400" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Real-time Streaming</h3>
                            <p className="text-gray-400">Watch your code being generated in real-time with instant preview</p>
                        </div>

                        <div className="glass rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                            <div className="h-12 w-12 rounded-lg bg-purple-600/20 flex items-center justify-center mb-4">
                                <Lock className="h-6 w-6 text-purple-400" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Bring Your Own Key</h3>
                            <p className="text-gray-400">Use your own OpenRouter API key - your data stays private</p>
                        </div>

                        <div className="glass rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                            <div className="h-12 w-12 rounded-lg bg-pink-600/20 flex items-center justify-center mb-4">
                                <Sparkles className="h-6 w-6 text-pink-400" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Modern Design</h3>
                            <p className="text-gray-400">Generates beautiful, production-ready code with modern aesthetics</p>
                        </div>

                        <div className="glass rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                            <div className="h-12 w-12 rounded-lg bg-green-600/20 flex items-center justify-center mb-4">
                                <Code2 className="h-6 w-6 text-green-400" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Single-File Output</h3>
                            <p className="text-gray-400">Complete HTML with inline CSS and JavaScript - ready to deploy</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">How It Works</h2>
                        <p className="text-xl text-gray-400">Get started in three simple steps</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-purple-600 text-2xl font-bold mb-4">
                                1
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Get Your API Key</h3>
                            <p className="text-gray-400">
                                Sign up at <a href="https://openrouter.ai" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">OpenRouter.ai</a> and
                                get your free API key. No credit card required for free tier.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-pink-600 text-2xl font-bold mb-4">
                                2
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Describe Your Idea</h3>
                            <p className="text-gray-400">
                                Tell AI Coder what you want to build in plain English - landing page, dashboard, portfolio, anything!
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-pink-600 to-red-600 text-2xl font-bold mb-4">
                                3
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Download & Deploy</h3>
                            <p className="text-gray-400">
                                Watch the magic happen in real-time, then download your production-ready HTML file and deploy anywhere.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* AI Model Info */}
            <section className="py-24 bg-gradient-to-b from-transparent to-blue-900/10">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="glass rounded-2xl p-8 border border-blue-600/20">
                        <div className="flex items-start gap-4 mb-6">
                            <div className="h-12 w-12 rounded-lg bg-blue-600/20 flex items-center justify-center shrink-0">
                                <Sparkles className="h-6 w-6 text-blue-400" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold mb-2">Powered by Advanced AI</h2>
                                <p className="text-gray-400">
                                    AI Coder uses <span className="text-blue-400 font-semibold">z-ai/glm-4.5-air:free</span> via OpenRouter,
                                    a fast and efficient AI model optimized for code generation with streaming support.
                                </p>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4 mt-6">
                            <div className="bg-white/5 rounded-lg p-4">
                                <div className="text-sm text-gray-500 mb-1">Model Provider</div>
                                <div className="font-semibold">OpenRouter AI</div>
                            </div>
                            <div className="bg-white/5 rounded-lg p-4">
                                <div className="text-sm text-gray-500 mb-1">Model</div>
                                <div className="font-semibold">GLM-4.5-Air (Free Tier)</div>
                            </div>
                            <div className="bg-white/5 rounded-lg p-4">
                                <div className="text-sm text-gray-500 mb-1">Pricing Model</div>
                                <div className="font-semibold">Bring Your Own Key (BYOK)</div>
                            </div>
                            <div className="bg-white/5 rounded-lg p-4">
                                <div className="text-sm text-gray-500 mb-1">Streaming</div>
                                <div className="font-semibold text-green-400">✓ Real-time</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-24">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
                    <p className="text-xl text-gray-400 mb-8">
                        Have questions or feedback? I'd love to hear from you!
                    </p>

                    <div className="glass rounded-xl p-8 inline-block">
                        <div className="flex items-center gap-4 justify-center">
                            <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                                <Mail className="h-6 w-6" />
                            </div>
                            <div className="text-left">
                                <div className="text-sm text-gray-500">Email</div>
                                <a
                                    href="mailto:gouthamsai480@gmail.com"
                                    className="text-lg font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                                >
                                    gouthamsai480@gmail.com
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 flex justify-center gap-4">
                        <a
                            href="https://github.com/Gouthamsai78/vibe-coder-"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="h-12 w-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all"
                        >
                            <Github className="h-5 w-5" />
                        </a>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-white/10 py-8">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="flex items-center gap-3">
                            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                                <Code2 className="h-5 w-5" />
                            </div>
                            <div>
                                <div className="font-semibold">AI Coder</div>
                                <div className="text-xs text-gray-500">by Goutham Sai</div>
                            </div>
                        </div>

                        <div className="text-sm text-gray-500">
                            Made with ❤️ by <strong className="text-white">AI Coder</strong> by Goutham Sai
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;
