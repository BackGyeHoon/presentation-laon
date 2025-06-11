import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  Sparkles,
  Shield,
  Zap,
  Bot,
  Cpu,
  Activity,
} from "lucide-react";

export default function Products() {
  const products = [
    {
      id: "hi-fenn",
      title: "HI FENN",
      subtitle: "에이전트로 완성되는 기업 맞춤 생성형 AI 플랫폼",
      description:
        "기업의 특성에 맞춘 맞춤형 생성형 AI 솔루션으로, 업무 효율성을 극대화하고 혁신적인 서비스를 제공합니다.",
      icon: Bot,
      color: "from-emerald-500 to-teal-500",
      badge: "GENERATIVE AI",
      features: ["맞춤형 AI 에이전트", "기업 전용 플랫폼", "자동화 솔루션"],
      isNew: true,
    },
    {
      id: "odin-ai",
      title: "OdinAi",
      subtitle: "세계최초! 생성형 AI 기반 영상 관제 솔루션",
      description:
        "세계 최초로 생성형 AI를 적용한 혁신적인 영상 관제 시스템으로, 실시간 모니터링과 지능적 분석을 제공합니다.",
      icon: Shield,
      color: "from-blue-500 to-indigo-500",
      badge: "WORLD FIRST",
      features: ["생성형 AI 기반", "실시간 영상 관제", "지능형 보안 시스템"],
      isNew: false,
    },
    {
      id: "navi-ai-pro",
      title: "NAVI AI PRO",
      subtitle: "저가형 CPU로 1ms 고속 추론",
      description:
        "저가형 CPU 환경에서도 1ms의 초고속 추론을 실현하는 혁신적인 AI 엔진으로, 비용 효율성과 성능을 동시에 만족합니다.",
      icon: Zap,
      color: "from-orange-500 to-red-500",
      badge: "HIGH PERFORMANCE",
      features: ["1ms 초고속 추론", "저가형 CPU 최적화", "고효율 AI 엔진"],
      isNew: false,
    },
    {
      id: "ez-planet",
      title: "EZ PLANET",
      subtitle: "원프로세스로 끝내는 MLOps 플랫폼",
      description:
        "복잡한 머신러닝 워크플로우를 하나의 플랫폼에서 완성하는 통합 MLOps 솔루션입니다.",
      icon: Cpu,
      color: "from-purple-500 to-pink-500",
      badge: "MLOPS",
      features: ["통합 ML 파이프라인", "자동화된 배포", "모델 관리 시스템"],
      isNew: false,
    },
    {
      id: "laon-swingcraft",
      title: "Laon Swingcraft",
      subtitle: "인공지능 골프 솔루션",
      description:
        "초급자부터 중상급자까지, 올바른 자세를 바탕으로 최고의 스윙을 완성할 수 있도록 도와주는 AI 골프 솔루션입니다.",
      icon: Activity,
      color: "from-green-500 to-emerald-500",
      badge: "SPORTS AI",
      features: ["스윙 분석", "실시간 피드백", "개인 맞춤 훈련"],
      isNew: false,
    },
    {
      id: "laon-sentinel",
      title: "Laon Sentinel",
      subtitle: "지능형 보안 관제 시스템",
      description:
        "AI 기반의 차세대 보안 관제 시스템으로, 예측 가능한 보안 위협을 사전에 차단합니다.",
      icon: Shield,
      color: "from-slate-500 to-gray-600",
      badge: "SECURITY",
      features: ["예측형 보안", "AI 위협 탐지", "실시간 대응"],
      isNew: false,
    },
  ];

  return (
    <section id="products" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-100">
            제품 라인업
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            혁신적인 AI 제품으로
            <br />
            <span className="text-purple-600">미래를 만들어갑니다</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            라온피플의 최첨단 AI 기술이 담긴 제품들을 만나보세요. 각 제품은
            특화된 영역에서 최고의 성능을 제공합니다.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card
              key={product.id}
              className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 bg-white"
            >
              {/* New Badge */}
              {product.isNew && (
                <div className="absolute top-4 right-4 z-20">
                  <Badge className="bg-red-500 text-white text-xs px-2 py-1">
                    <Sparkles className="w-3 h-3 mr-1" />
                    NEW
                  </Badge>
                </div>
              )}

              {/* Gradient Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              ></div>

              <CardHeader className="relative z-10 pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${product.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110`}
                  >
                    <product.icon className="w-7 h-7 text-white" />
                  </div>
                  <Badge variant="outline" className="text-xs border-gray-300">
                    {product.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors duration-300 mb-2">
                  {product.title}
                </CardTitle>
                <p className="text-sm text-gray-600 font-medium leading-relaxed">
                  {product.subtitle}
                </p>
              </CardHeader>

              <CardContent className="relative z-10 space-y-4">
                <p className="text-gray-600 text-sm leading-relaxed">
                  {product.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  {product.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <div
                        className={`w-1.5 h-1.5 bg-gradient-to-r ${product.color} rounded-full mr-3`}
                      ></div>
                      {feature}
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="pt-4">
                  <Button
                    variant="outline"
                    className="w-full group/btn border-gray-300 hover:border-purple-300 hover:bg-purple-50 transition-all duration-300"
                  >
                    자세히 보기
                    <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </Button>
                </div>
              </CardContent>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-purple-200 rounded-lg transition-all duration-300"></div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              맞춤형 솔루션이 필요하신가요?
            </h3>
            <p className="text-gray-600 mb-6">
              귀하의 비즈니스에 최적화된 AI 솔루션을 제안해드립니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-purple-600 hover:bg-purple-700 px-8">
                상담 신청하기
              </Button>
              <Button
                variant="outline"
                className="border-purple-300 text-purple-600 hover:bg-purple-50"
              >
                제품 데모 보기
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
