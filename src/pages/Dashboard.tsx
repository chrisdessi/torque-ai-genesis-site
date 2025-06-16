
import { Button } from "@/components/ui/button";
import { 
  BarChart3, 
  Globe, 
  Users, 
  Mail, 
  Megaphone, 
  Star, 
  MapPin, 
  TrendingUp,
  Plus,
  Bell,
  Settings,
  User
} from "lucide-react";
import { useState } from "react";

const Dashboard = () => {
  const [activeModule, setActiveModule] = useState("overview");

  const sidebarItems = [
    { id: "overview", label: "Overview", icon: BarChart3 },
    { id: "websites", label: "Websites", icon: Globe },
    { id: "crm", label: "CRM", icon: Users },
    { id: "email", label: "Email Marketing", icon: Mail },
    { id: "ads", label: "Digital Ads", icon: Megaphone },
    { id: "reputation", label: "Reputation", icon: Star },
    { id: "listings", label: "Local Listings", icon: MapPin },
    { id: "analytics", label: "Analytics", icon: BarChart3 },
    { id: "intelligence", label: "Intelligence", icon: TrendingUp },
  ];

  const statsCards = [
    { title: "Website Traffic", value: "24,567", change: "+12.5%", positive: true },
    { title: "New Leads", value: "148", change: "+8.2%", positive: true },
    { title: "Email Opens", value: "2,456", change: "+15.3%", positive: true },
    { title: "Ad Spend", value: "$1,234", change: "-5.1%", positive: false },
    { title: "Reviews", value: "4.8", change: "+0.2", positive: true },
    { title: "Conversions", value: "89", change: "+22.1%", positive: true },
  ];

  const quickActions = [
    { label: "New Page", action: "page" },
    { label: "New Campaign", action: "campaign" },
    { label: "New Ad", action: "ad" },
    { label: "New Email", action: "email" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 fixed h-full">
        <div className="p-6 border-b border-gray-200">
          <h1 className="text-2xl font-bold">
            TORQUE<span className="text-gray-600">AI</span>
          </h1>
        </div>
        
        <nav className="p-4">
          {sidebarItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveModule(item.id)}
              className={`w-full flex items-center px-4 py-3 rounded-lg mb-2 text-left transition-colors ${
                activeModule === item.id 
                  ? "bg-black text-white" 
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <item.icon className="w-5 h-5 mr-3" />
              {item.label}
            </button>
          ))}
        </nav>
        
        <div className="absolute bottom-4 left-4 right-4">
          <Button variant="outline" className="w-full">
            <Settings className="w-4 h-4 mr-2" />
            Settings
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-64">
        {/* Top Bar */}
        <header className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold">Dashboard</h1>
              <p className="text-gray-600">Welcome back! Here's what's happening with your business.</p>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex space-x-2">
                {quickActions.map((action, index) => (
                  <Button key={index} size="sm" variant="outline">
                    <Plus className="w-4 h-4 mr-1" />
                    {action.label}
                  </Button>
                ))}
              </div>
              
              <Button variant="ghost" size="icon">
                <Bell className="w-5 h-5" />
              </Button>
              
              <Button variant="ghost" size="icon">
                <User className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </header>

        {/* Stats Grid */}
        <main className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {statsCards.map((stat, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-sm font-medium text-gray-600">{stat.title}</h3>
                  <span className={`text-sm font-semibold ${
                    stat.positive ? "text-green-600" : "text-red-600"
                  }`}>
                    {stat.change}
                  </span>
                </div>
                <div className="text-3xl font-bold text-black">{stat.value}</div>
              </div>
            ))}
          </div>

          {/* Activity Feed */}
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h2 className="text-xl font-bold mb-6">Recent Activity</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between py-3 border-b border-gray-100">
                <div>
                  <p className="font-medium">New lead from website contact form</p>
                  <p className="text-sm text-gray-600">2 minutes ago</p>
                </div>
                <Button size="sm">View</Button>
              </div>
              
              <div className="flex items-center justify-between py-3 border-b border-gray-100">
                <div>
                  <p className="font-medium">Email campaign "Spring Sale" sent successfully</p>
                  <p className="text-sm text-gray-600">1 hour ago</p>
                </div>
                <Button size="sm">View</Button>
              </div>
              
              <div className="flex items-center justify-between py-3 border-b border-gray-100">
                <div>
                  <p className="font-medium">New 5-star review received</p>
                  <p className="text-sm text-gray-600">3 hours ago</p>
                </div>
                <Button size="sm">View</Button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
