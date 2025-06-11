import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Award,
  Users,
  Globe,
  TrendingUp,
  Target,
  Lightbulb,
  Shield,
  Heart,
  ArrowRight,
} from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Lightbulb,
      title: "혁신",
      description: "끊임없는 기술 혁신으로 미래를 선도합니다",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Shield,
      title: "신뢰",
      description: "고객과의 약속을 지키며 신뢰를 구축합니다",
      color: "from-blue-500 to-indigo-500",
    },
    {
      icon: Heart,
      title: "상생",
      description: "모든 이해관계자와 함께 성장합니다",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: Target,
      title: "도전",
      description: "불가능을 가능으로 만드는 도전 정신",
      color: "from-green-500 to-emerald-500",
    },
  ];

  const achievements = [
    {
      icon: Award,
      title: "특허 및 인증",
      description: "100+ 특허 보유",
      stats: "100+",
    },
    {
      icon: Users,
      title: "전문 인력",
      description: "AI 전문가 팀",
      stats: "200+",
    },
    {
      icon: Globe,
      title: "글로벌 진출",
      description: "해외 진출 국가",
      stats: "10+",
    },
    {
      icon: TrendingUp,
      title: "성장률",
      description: "연평균 성장률",
      stats: "50%+",
    },
  ];

  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-br from-gray-50 to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-indigo-100 text-indigo-800 hover:bg-indigo-100">
            기업 정보
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            스마트 시대를 열어가는
            <br />
            <span className="text-indigo-600">라온피플</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            라온피플㈜는 AI기술(딥러닝 알고리즘)과 VISION기술(영상신호처리)을
            기반으로 AI VISION 통합 솔루션을 제공합니다.
          </p>
        </div>

        {/* Company Overview */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">
              AI 비전 기술의 혁신을 선도합니다
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              라온피플은 2009년 설립 이래로 인공지능과 컴퓨터 비전 기술을
              기반으로 다양한 산업 분야에서 혁신적인 솔루션을 제공해왔습니다.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              우리는 SMART FACTORY와 SMART LIFE 사업을 통해 산업용과 생활용 AI
              솔루션을 모두 아우르며, 전세계 고객들에게 최고 품질의 서비스를
              제공하고 있습니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="bg-indigo-600 hover:bg-indigo-700">
                회사소개서 다운로드
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                className="border-indigo-300 text-indigo-600 hover:bg-indigo-50"
              >
                채용 정보 보기
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h4 className="text-xl font-bold text-gray-900 mb-6">
                기업 정보
              </h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                  <span className="text-gray-600">설립년도</span>
                  <span className="font-semibold">2009년</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                  <span className="text-gray-600">대표이사</span>
                  <span className="font-semibold">이석중</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                  <span className="text-gray-600">본사 위치</span>
                  <span className="font-semibold">경기 과천시</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                  <span className="text-gray-600">상장구분</span>
                  <span className="font-semibold">코스닥</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">주요사업</span>
                  <span className="font-semibold">AI 비전 솔루션</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">핵심 가치</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              라온피플의 모든 구성원이 공유하는 핵심 가치와 철학입니다.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card
                key={index}
                className="group text-center p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <CardContent className="space-y-4">
                  <div
                    className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110`}
                  >
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">
                    {value.title}
                  </h4>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">주요 성과</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              라온피플이 걸어온 길과 이룬 성과들입니다.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110">
                  <achievement.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-3xl font-bold text-indigo-600 mb-2">
                  {achievement.stats}
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  {achievement.title}
                </h4>
                <p className="text-sm text-gray-600">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="mt-20 grid lg:grid-cols-2 gap-8">
          <Card className="p-8 bg-gradient-to-br from-blue-500 to-indigo-600 text-white border-0">
            <CardContent className="space-y-4">
              <h3 className="text-2xl font-bold">우리의 미션</h3>
              <p className="text-blue-100 leading-relaxed">
                AI 비전 기술을 통해 인류의 삶을 더욱 안전하고 편리하게 만들어,
                스마트한 미래 사회 구현에 기여합니다.
              </p>
            </CardContent>
          </Card>

          <Card className="p-8 bg-gradient-to-br from-purple-500 to-pink-600 text-white border-0">
            <CardContent className="space-y-4">
              <h3 className="text-2xl font-bold">우리의 비전</h3>
              <p className="text-purple-100 leading-relaxed">
                글로벌 AI 비전 기술 분야의 리더로서, 지속가능한 혁신을 통해 세계
                최고의 AI 솔루션 기업이 되겠습니다.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
