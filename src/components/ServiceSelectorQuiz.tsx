import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  ChevronRight, 
  ChevronLeft, 
  RotateCcw,
  Target,
  TrendingUp,
  Users,
  DollarSign,
  Clock,
  Megaphone,
  BarChart3,
  Sparkles,
  CheckCircle2
} from "lucide-react";

interface Question {
  id: string;
  question: string;
  options: {
    label: string;
    value: string;
    icon: React.ComponentType<{ className?: string }>;
  }[];
}

interface ServiceRecommendation {
  step: number;
  title: string;
  services: string[];
  priority: "high" | "medium" | "low";
  reason: string;
}

const questions: Question[] = [
  {
    id: "stage",
    question: "What stage is your business at?",
    options: [
      { label: "Just starting out", value: "startup", icon: Sparkles },
      { label: "Growing & scaling", value: "growth", icon: TrendingUp },
      { label: "Established, optimizing", value: "established", icon: Target },
      { label: "Enterprise level", value: "enterprise", icon: BarChart3 },
    ],
  },
  {
    id: "goal",
    question: "What's your primary marketing goal?",
    options: [
      { label: "Build brand awareness", value: "awareness", icon: Megaphone },
      { label: "Generate more leads", value: "leads", icon: Users },
      { label: "Increase conversions", value: "conversions", icon: TrendingUp },
      { label: "Maximize revenue", value: "revenue", icon: DollarSign },
    ],
  },
  {
    id: "challenge",
    question: "What's your biggest marketing challenge?",
    options: [
      { label: "Don't know my audience", value: "audience", icon: Users },
      { label: "Low website traffic", value: "traffic", icon: BarChart3 },
      { label: "Poor conversion rates", value: "conversion", icon: Target },
      { label: "Limited time/resources", value: "time", icon: Clock },
    ],
  },
  {
    id: "budget",
    question: "What's your marketing budget priority?",
    options: [
      { label: "Organic growth focus", value: "organic", icon: TrendingUp },
      { label: "Paid advertising", value: "paid", icon: DollarSign },
      { label: "Balanced approach", value: "balanced", icon: Target },
      { label: "Full-service support", value: "fullservice", icon: Sparkles },
    ],
  },
];

function getRecommendations(answers: Record<string, string>): ServiceRecommendation[] {
  const recommendations: ServiceRecommendation[] = [];

  // Step 1 - Always recommended for new clients
  recommendations.push({
    step: 1,
    title: "Set Up Your Workspace",
    services: ["Business Description", "Product Offers", "Tone of Voice"],
    priority: "high",
    reason: "Foundation setup is essential for all marketing activities",
  });

  // Step 2 - Strategy based on stage and goal
  const strategyServices: string[] = [];
  if (answers.challenge === "audience" || answers.stage === "startup") {
    strategyServices.push("User Persona", "Customer Transformation");
  }
  if (answers.goal === "awareness" || answers.stage === "startup") {
    strategyServices.push("Positioning", "Brand Marketing");
  }
  if (answers.goal === "leads" || answers.goal === "conversions") {
    strategyServices.push("Marketing Copy", "User Acquisition");
  }
  if (answers.stage === "established" || answers.stage === "enterprise") {
    strategyServices.push("Marketing KPIs", "Offer Audit", "Product Portfolio");
  }
  
  if (strategyServices.length > 0) {
    recommendations.push({
      step: 2,
      title: "Get Your Marketing Strategy",
      services: [...new Set(strategyServices)],
      priority: answers.stage === "startup" ? "high" : "medium",
      reason: answers.stage === "startup" 
        ? "Critical for establishing your market position" 
        : "Optimize your strategic direction",
    });
  }

  // Step 3 - Market Analysis
  if (answers.challenge === "audience" || answers.goal === "awareness" || answers.stage !== "enterprise") {
    recommendations.push({
      step: 3,
      title: "Analyze Your Market",
      services: ["Market Analysis", "Competitor Finder", "Competitor Analyzer", "Customer Journey Map"],
      priority: answers.challenge === "audience" ? "high" : "medium",
      reason: "Understand your competitive landscape and customer behavior",
    });
  }

  // Step 4 - Conversion optimization
  if (answers.challenge === "conversion" || answers.goal === "conversions" || answers.goal === "revenue") {
    recommendations.push({
      step: 4,
      title: "Increase Your Conversion Rate",
      services: ["Landing Page Audit", "Landing Page Structure", "Pricing Strategies", "Email Sequence"],
      priority: "high",
      reason: "Direct impact on your bottom line",
    });
  } else if (answers.stage === "growth" || answers.stage === "established") {
    recommendations.push({
      step: 4,
      title: "Increase Your Conversion Rate",
      services: ["Landing Page Audit", "Pricing Page Audit"],
      priority: "medium",
      reason: "Optimize existing conversion funnels",
    });
  }

  // Step 5 - Traffic generation
  if (answers.challenge === "traffic" || answers.goal === "awareness" || answers.goal === "leads") {
    const trafficServices: string[] = [];
    if (answers.budget === "organic" || answers.budget === "balanced") {
      trafficServices.push("Keyword Research", "SEO Articles", "Social Media Posts");
    }
    if (answers.budget === "paid" || answers.budget === "balanced" || answers.budget === "fullservice") {
      trafficServices.push("Paid Ads");
    }
    
    recommendations.push({
      step: 5,
      title: "Get More Traffic",
      services: trafficServices.length > 0 ? trafficServices : ["SEO Articles", "Social Media Posts"],
      priority: answers.challenge === "traffic" ? "high" : "medium",
      reason: "Drive qualified visitors to your website",
    });
  }

  // Step 6 - Automation and efficiency
  if (answers.challenge === "time" || answers.budget === "fullservice" || answers.stage === "enterprise") {
    recommendations.push({
      step: 6,
      title: "Save Time on Marketing",
      services: ["Marketing Ideas", "Chat with AI Assistant", "Deep Research"],
      priority: answers.challenge === "time" ? "high" : "medium",
      reason: "Automate and streamline your marketing operations",
    });
  }

  return recommendations.sort((a, b) => {
    const priorityOrder = { high: 0, medium: 1, low: 2 };
    return priorityOrder[a.priority] - priorityOrder[b.priority];
  });
}

const ServiceSelectorQuiz = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (questionId: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
    
    if (currentStep < questions.length - 1) {
      setTimeout(() => setCurrentStep((prev) => prev + 1), 300);
    } else {
      setTimeout(() => setShowResults(true), 300);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setAnswers({});
    setShowResults(false);
  };

  const recommendations = showResults ? getRecommendations(answers) : [];
  const progress = ((currentStep + 1) / questions.length) * 100;

  const priorityColors = {
    high: "from-primary to-emerald-500",
    medium: "from-blue-500 to-indigo-500",
    low: "from-gray-400 to-gray-500",
  };

  const priorityLabels = {
    high: "Highly Recommended",
    medium: "Recommended",
    low: "Optional",
  };

  return (
    <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 lg:p-10">
      <AnimatePresence mode="wait">
        {!showResults ? (
          <motion.div
            key="quiz"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-muted-foreground">
                  Question {currentStep + 1} of {questions.length}
                </span>
                <span className="text-sm font-semibold text-primary">
                  {Math.round(progress)}%
                </span>
              </div>
              <div className="h-2 bg-secondary rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary to-emerald-500"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>

            {/* Question */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl sm:text-2xl font-lexend font-bold text-foreground mb-6">
                  {questions[currentStep].question}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {questions[currentStep].options.map((option) => {
                    const isSelected = answers[questions[currentStep].id] === option.value;
                    return (
                      <motion.button
                        key={option.value}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleAnswer(questions[currentStep].id, option.value)}
                        className={`flex items-center gap-4 p-4 sm:p-5 rounded-xl border-2 transition-all duration-200 text-left ${
                          isSelected
                            ? "border-primary bg-primary/10"
                            : "border-border hover:border-primary/50 bg-background"
                        }`}
                      >
                        <div
                          className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                            isSelected
                              ? "bg-primary text-primary-foreground"
                              : "bg-secondary text-muted-foreground"
                          }`}
                        >
                          <option.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                        </div>
                        <span className={`font-medium text-sm sm:text-base ${isSelected ? "text-foreground" : "text-foreground"}`}>
                          {option.label}
                        </span>
                        {isSelected && (
                          <CheckCircle2 className="w-5 h-5 text-primary ml-auto" />
                        )}
                      </motion.button>
                    );
                  })}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex justify-between mt-8">
              <Button
                variant="ghost"
                onClick={handleBack}
                disabled={currentStep === 0}
                className="gap-2"
              >
                <ChevronLeft className="w-4 h-4" />
                Back
              </Button>
              <Button variant="ghost" onClick={handleReset} className="gap-2">
                <RotateCcw className="w-4 h-4" />
                Start Over
              </Button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="results"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-lexend font-bold text-foreground mb-2">
                Your Personalized Recommendations
              </h3>
              <p className="text-muted-foreground">
                Based on your answers, here are the services that will help you most
              </p>
            </div>

            <div className="space-y-4 sm:space-y-6">
              {recommendations.map((rec, index) => (
                <motion.div
                  key={rec.step}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-background border border-border rounded-xl p-5 sm:p-6"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${priorityColors[rec.priority]} flex items-center justify-center`}>
                        <span className="text-white font-bold text-sm">{rec.step}</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{rec.title}</h4>
                        <p className="text-xs text-muted-foreground">{rec.reason}</p>
                      </div>
                    </div>
                    <span className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${priorityColors[rec.priority]} text-white self-start sm:self-center`}>
                      {priorityLabels[rec.priority]}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {rec.services.map((service) => (
                      <span
                        key={service}
                        className="px-3 py-1.5 bg-secondary text-secondary-foreground rounded-lg text-sm font-medium"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={handleReset} variant="outline" className="gap-2">
                <RotateCcw className="w-4 h-4" />
                Retake Quiz
              </Button>
              <Button 
                className="gap-2 bg-gradient-to-r from-primary to-emerald-500 hover:from-primary/90 hover:to-emerald-500/90"
                onClick={() => {
                  const contactSection = document.querySelector('#contact-form');
                  contactSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Get Started
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ServiceSelectorQuiz;
