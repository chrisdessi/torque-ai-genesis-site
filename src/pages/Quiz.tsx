import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";


const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      question: "What's your primary business goal?",
      options: [
        { text: "Generate more leads and customers", value: "leads" },
        { text: "Build a professional website", value: "website" },
        { text: "Improve online reputation", value: "reputation" },
        { text: "Increase local visibility", value: "local" }
      ]
    },
    {
      question: "What's your biggest marketing challenge?",
      options: [
        { text: "Managing customer relationships", value: "crm" },
        { text: "Email marketing campaigns", value: "email" },
        { text: "Advertising ROI", value: "ads" },
        { text: "Tracking performance", value: "analytics" }
      ]
    },
    {
      question: "How do you currently handle customer data?",
      options: [
        { text: "Spreadsheets or manual tracking", value: "crm" },
        { text: "Basic contact lists", value: "email" },
        { text: "No organized system", value: "intelligence" },
        { text: "Multiple disconnected tools", value: "analytics" }
      ]
    },
    {
      question: "What's most important for your business growth?",
      options: [
        { text: "Converting website visitors", value: "website" },
        { text: "Automating repetitive tasks", value: "intelligence" },
        { text: "Better ad targeting", value: "ads" },
        { text: "Local search visibility", value: "local" }
      ]
    }
  ];

  const aiAgentRecommendations = {
    website: {
      title: "Website AI",
      description: "Perfect for building professional websites that convert visitors into customers",
      features: ["Drag & Drop Builder", "Mobile Responsive", "SEO Optimized"]
    },
    crm: {
      title: "CRM AI",
      description: "Ideal for managing leads and customers with intelligent automation", 
      features: ["Contact Management", "Pipeline Tracking", "Automated Follow-ups"]
    },
    email: {
      title: "Email AI",
      description: "Best for creating targeted email campaigns that drive results",
      features: ["Email Builder", "List Segmentation", "A/B Testing"]
    },
    ads: {
      title: "Ads AI",
      description: "Maximize ROI with AI-powered advertising campaigns",
      features: ["Google Ads", "Facebook Ads", "Campaign Optimization"]
    },
    reputation: {
      title: "Reputation AI", 
      description: "Monitor and manage your online reputation across platforms",
      features: ["Review Monitoring", "Response Management", "Rating Improvement"]
    },
    local: {
      title: "Local AI",
      description: "Ensure consistent business information across all directories",
      features: ["Directory Management", "Citation Building", "Local SEO"]
    },
    analytics: {
      title: "Analytics AI",
      description: "Data-driven insights to optimize your marketing performance",
      features: ["Performance Tracking", "ROI Analysis", "Custom Reports"]
    },
    intelligence: {
      title: "Intelligence AI",
      description: "AI-powered recommendations to accelerate your growth", 
      features: ["Predictive Analytics", "Growth Recommendations", "Market Insights"]
    }
  };

  const handleAnswer = (value: string) => {
    const newAnswers = [...answers, value];
    setAnswers(newAnswers);
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const getRecommendation = () => {
    if (answers.length === 0) {
      return aiAgentRecommendations.website; // Default fallback
    }
    
    const answerCounts = answers.reduce((acc, answer) => {
      acc[answer] = (acc[answer] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
    
    const entries = Object.entries(answerCounts);
    if (entries.length === 0) {
      return aiAgentRecommendations.website; // Default fallback
    }
    
    const topAnswer = entries.sort(([,a], [,b]) => b - a)[0][0];
    return aiAgentRecommendations[topAnswer as keyof typeof aiAgentRecommendations] || aiAgentRecommendations.website;
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
  };

  const progressPercentage = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          {!showResult ? (
            <>
              {/* Progress Bar */}
              <div className="mb-12">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm font-medium text-gray-600">
                    Question {currentQuestion + 1} of {questions.length}
                  </span>
                  <span className="text-sm font-medium text-gray-600">
                    {Math.round(progressPercentage)}% Complete
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-black h-2 rounded-full transition-all duration-300"
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                </div>
              </div>

              {/* Question */}
              <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
                  {questions[currentQuestion].question}
                </h1>
              </div>

              {/* Answer Options */}
              <div className="space-y-4 mb-12">
                {questions[currentQuestion].options.map((option, index) => (
                  <Card 
                    key={index}
                    className="p-6 cursor-pointer border-2 border-gray-200 hover:border-black transition-all duration-300 hover:shadow-lg"
                    onClick={() => handleAnswer(option.value)}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-medium">{option.text}</span>
                      <ArrowRight className="w-5 h-5 text-gray-400" />
                    </div>
                  </Card>
                ))}
              </div>

              {/* Back Button */}
              {currentQuestion > 0 && (
                <div className="text-center">
                  <Button 
                    variant="outline"
                    onClick={() => setCurrentQuestion(currentQuestion - 1)}
                    className="border-2 border-gray-300 text-black hover:bg-gray-100"
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Previous Question
                  </Button>
                </div>
              )}
            </>
          ) : (
            /* Quiz Result */
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-black mb-8">
                Your Perfect AI Agent
              </h1>
              
              <Card className="p-12 border-2 border-black mb-12">
                <h2 className="text-3xl font-black mb-6 text-black">
                  {getRecommendation().title}
                </h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  {getRecommendation().description}
                </p>
                <div className="space-y-3">
                  {getRecommendation().features.map((feature, index) => (
                    <div key={index} className="flex items-center justify-center">
                      <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                      <span className="text-lg">{feature}</span>
                    </div>
                  ))}
                </div>
              </Card>

              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <a href="https://torqueapp.ai/ai-agents/">
                    <Button size="lg" className="bg-black text-white hover:bg-gray-800 font-semibold px-12 py-6 text-lg">
                      Explore All AI Agents
                      <ArrowRight className="ml-3 w-5 h-5" />
                    </Button>
                  </a>
                  <a href="https://calendar.app.google/rAZmF5kNNCsfMyBf7" target="_blank" rel="noopener noreferrer">
                    <Button size="lg" variant="outline" className="border-2 border-gray-300 text-black hover:bg-gray-100 font-semibold px-12 py-6 text-lg">
                      Schedule Consultation
                    </Button>
                  </a>
                </div>
                
                <Button 
                  variant="outline"
                  onClick={resetQuiz}
                  className="border border-gray-300 text-gray-600 hover:bg-gray-50"
                >
                  Retake Quiz
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Newsletter and Pricing Side by Side */}
      <section className="bg-background py-20">
        <div className="section-padding max-w-7xl mx-auto">
          <div className="max-w-2xl mx-auto">
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Join Chris's Newsletter
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Get exclusive insights, strategies, and stories delivered directly to your inbox
              </p>
              <div className="w-full mx-auto">
                <iframe 
                  src="https://embeds.beehiiv.com/ed4d369b-b9a6-4dfc-9698-32ed638ae5f9?slim=true" 
                  data-test-id="beehiiv-embed" 
                  height="52" 
                  frameBorder="0" 
                  scrolling="no"
                  style={{ margin: 0, borderRadius: '0px', backgroundColor: 'transparent' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Quiz;