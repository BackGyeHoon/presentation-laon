import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Cpu,
  Smartphone,
  Car,
  Truck,
  Factory,
  Pill,
  Stethoscope,
  Navigation,
  Utensils,
  Bot,
  Zap,
  Monitor,
  Wrench,
  Building,
} from "lucide-react";

export default function Industries() {
  const industries = [
    {
      id: "electronics",
      title: "전자부품",
      description: "정밀한 전자부품의 품질 검사와 불량 검출",
      icon: Cpu,
      color: "from-blue-500 to-indigo-600",
      stats: "99.8% 정확도",
    },
    {
      id: "pcb",
      title: "PCB",
      description:
        "육안검사보다 빠르게 그리고 견고하게 양/불량품을 걸러내어 생산성을 높입니다",
      icon: Zap,
      color: "from-green-500 to-emerald-600",
      stats: "50% 검사 시간 단축",
    },
    {
      id: "mobile",
      title: "모바일",
      description: "스마트폰 카메라 렌즈와 모듈을 완벽하게 검사합니다",
      icon: Smartphone,
      color: "from-purple-500 to-pink-600",
      stats: "100만대+ 검사",
    },
    {
      id: "automotive",
      title: "자동차",
      description:
        "초기 공정부터 최종 조립까지의 모든 불량 요소를 파악해 정밀하고 완성도 높은 제조를 돕습니다",
      icon: Car,
      color: "from-red-500 to-orange-600",
      stats: "전 공정 적용",
    },
    {
      id: "logistics",
      title: "물류",
      description:
        "제품 라벨과 배송 정보 등 정확하고 빠른 인식을 통해 배송 이력 관리 및 물류 혁신이 가능합니다",
      icon: Truck,
      color: "from-amber-500 to-yellow-600",
      stats: "실시간 추적",
    },
    {
      id: "manufacturing",
      title: "소재금속",
      description:
        "다양한 소재 및 금속별 세밀한 데이터 분석을 통해 완제품의 품질을 추구합니다",
      icon: Wrench,
      color: "from-gray-500 to-slate-600",
      stats: "미세 결함 검출",
    },
    {
      id: "fnb",
      title: "F&B",
      description:
        "이물질뿐만 아니라 상품의 청결도, 적량 및 훼손까지 빠르고 정확하게 파악하여 생산성을 높입니다",
      icon: Utensils,
      color: "from-lime-500 to-green-600",
      stats: "식품 안전 보장",
    },
    {
      id: "pharmaceutical",
      title: "제약",
      description:
        "생산 제품에 대한 정확한 외관검사/분류 및 생산이력 관리가 가능합니다",
      icon: Pill,
      color: "from-teal-500 to-cyan-600",
      stats: "GMP 준수",
    },
    {
      id: "robotics",
      title: "로보틱스",
      description:
        "단순한 로봇에 비전 솔루션을 제공함으로서 로봇의 Intelligence를 높일 수 있습니다",
      icon: Bot,
      color: "from-violet-500 to-purple-600",
      stats: "AI 로봇 구현",
    },
    {
      id: "semiconductor",
      title: "반도체",
      description: "반도체 제조 공정의 정밀 검사와 품질 관리",
      icon: Monitor,
      color: "from-indigo-500 to-blue-600",
      stats: "나노 레벨 검사",
    },
    {
      id: "display",
      title: "디스플레이",
      description: "디스플레이 패널의 결함 검출과 품질 검사",
      icon: Monitor,
      color: "from-pink-500 to-rose-600",
      stats: "픽셀 단위 검사",
    },
    {
      id: "medical",
      title: "의료/바이오/헬스케어",
      description:
        "Big Data 분석과 시각 인공지능의 결합을 통해 의료산업을 위한 독보적인 솔루션을 제공합니다",
      icon: Stethoscope,
      color: "from-emerald-500 to-teal-600",
      stats: "FDA 승인",
    },
    {
      id: "transportation",
      title: "교통",
      description: "지능형 교통 시스템과 스마트 모빌리티 솔루션",
      icon: Navigation,
      color: "from-orange-500 to-red-600",
      stats: "스마트 시티",
    },
    {
      id: "construction",
      title: "건설",
      description: "건설 현장의 안전 관리와 품질 검사",
      icon: Building,
      color: "from-stone-500 to-gray-600",
      stats: "안전 사고 0건",
    },
  ];

  return (
    <section id="industries" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-100">
            적용 산업
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            다양한 산업에서
            <br />
            <span className="text-green-600">독보적인 위치</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            라온피플은 인공지능 머신비전 영역에서 그동안 쌓아온 경험과 실력으로
            각 산업의 요건에 맞는 최적의 솔루션을 제공합니다.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {industries.map((industry) => (
            <Card
              key={industry.id}
              className="group relative overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white"
            >
              {/* Gradient Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              ></div>

              <CardContent className="relative z-10 p-6">
                <div className="text-center space-y-4">
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${industry.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110`}
                  >
                    <industry.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-green-600 transition-colors duration-300">
                    {industry.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {industry.description}
                  </p>

                  {/* Stats */}
                  <div className="pt-2">
                    <Badge
                      variant="secondary"
                      className="text-xs bg-gray-100 text-gray-700"
                    >
                      {industry.stats}
                    </Badge>
                  </div>
                </div>
              </CardContent>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-green-200 rounded-lg transition-all duration-300"></div>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-green-50 to-blue-50 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              업계를 선도하는 성과
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              다양한 산업 분야에서 검증된 라온피플의 AI 비전 기술
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">15+</div>
              <div className="text-gray-600 font-medium">적용 산업</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">1000+</div>
              <div className="text-gray-600 font-medium">프로젝트</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">
                99.9%
              </div>
              <div className="text-gray-600 font-medium">정확도</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">
                24/7
              </div>
              <div className="text-gray-600 font-medium">기술 지원</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
