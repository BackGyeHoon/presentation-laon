import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Factory, Home, Brain, Eye, Cpu, Zap } from "lucide-react";

export default function Solutions() {
  const solutions = [
    {
      id: "smart-factory",
      title: "SMART FACTORY",
      subtitle: "스마트 팩토리 혁신",
      description:
        "기존의 룰 기반과 육안 검사로는 검출이 불가능한 불량들을 손쉽게 검출할 수 있게 해주는 딥러닝 비전 검사 소프트웨어입니다.",
      icon: Factory,
      color: "from-blue-500 to-cyan-500",
      features: [
        "AI 플랫폼/소프트웨어",
        "AI 머신비전 솔루션",
        "딥러닝 기반 불량 검출",
        "실시간 품질 관리",
      ],
      stats: { accuracy: "99.9%", speed: "1ms", industries: "10+" },
    },
    {
      id: "smart-life",
      title: "SMART LIFE",
      subtitle: "생활밀착형 AI 솔루션",
      description:
        "산업 분야에 적용한 AI 딥러닝을 생활 분야에서도 접목하여 안전하고 편리한 스마트 라이프를 만들어갑니다.",
      icon: Home,
      color: "from-purple-500 to-pink-500",
      features: [
        "AI 교통 솔루션",
        "AI 덴탈 솔루션",
        "AI 메디컬 솔루션",
        "AI 인식 솔루션",
        "AI 팜 솔루션",
      ],
      stats: { projects: "500+", satisfaction: "98%", coverage: "전국" },
    },
  ];

  return (
    <section id="solutions" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">
            솔루션 & 기술
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            세계 No.1 기술력으로
            <br />
            <span className="text-blue-600">미래를 혁신합니다</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            라온피플은 정밀하고 정확한 AI VISION 기술을 산업용과 비산업용 특성에
            맞춰 제공하고자 SMART FACTORY와 SMART LIFE 사업을 영위하고 있습니다.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <Card
              key={solution.id}
              className="group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              {/* Gradient Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${solution.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}
              ></div>

              <CardHeader className="relative z-10 pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${solution.color} flex items-center justify-center shadow-lg`}
                  >
                    <solution.icon className="w-8 h-8 text-white" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {index === 0 ? "INDUSTRIAL" : "LIFESTYLE"}
                  </Badge>
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                  {solution.title}
                </CardTitle>
                <p className="text-lg text-blue-600 font-medium">
                  {solution.subtitle}
                </p>
              </CardHeader>

              <CardContent className="relative z-10 space-y-6">
                <p className="text-gray-600 leading-relaxed">
                  {solution.description}
                </p>

                {/* Features */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900 flex items-center">
                    <Brain className="w-4 h-4 mr-2 text-blue-600" />
                    주요 기능
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {solution.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-100">
                  {Object.entries(solution.stats).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-xl font-bold text-blue-600">
                        {value}
                      </div>
                      <div className="text-xs text-gray-500 capitalize">
                        {key}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>

              {/* Hover Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-200 rounded-lg transition-all duration-300"></div>
            </Card>
          ))}
        </div>

        {/* Technology Highlights */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-12">
            핵심 기술
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Eye, title: "Computer Vision", desc: "고정밀 영상 분석" },
              { icon: Brain, title: "Deep Learning", desc: "딥러닝 알고리즘" },
              { icon: Cpu, title: "Edge Computing", desc: "실시간 처리" },
              { icon: Zap, title: "Real-time AI", desc: "초고속 추론" },
            ].map((tech, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110">
                  <tech.icon className="w-10 h-10 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  {tech.title}
                </h4>
                <p className="text-sm text-gray-600">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
