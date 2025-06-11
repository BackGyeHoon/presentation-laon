import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  FileText,
  Download,
  ExternalLink,
} from "lucide-react";

export default function Contact() {
  const contactInfo = [
    {
      icon: Phone,
      title: "전화 문의",
      content: "1899-3058",
      description: "평일 09:00 - 18:00",
      color: "from-blue-500 to-indigo-500",
    },
    {
      icon: Mail,
      title: "이메일 문의",
      content: "sales@laonpeople.com",
      description: "24시간 접수 가능",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: MapPin,
      title: "본사 위치",
      content: "경기 과천시 과천대로7나길 60",
      description: "과천어반허브 C동 5층/6층",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Clock,
      title: "운영 시간",
      content: "평일 09:00 - 18:00",
      description: "주말 및 공휴일 휴무",
      color: "from-purple-500 to-pink-500",
    },
  ];

  const supportServices = [
    {
      icon: MessageSquare,
      title: "제품 문의",
      description: "제품 상담 및 견적 문의",
      action: "문의하기",
    },
    {
      icon: FileText,
      title: "기술 지원",
      description: "기술 지원 및 문제 해결",
      action: "지원 요청",
    },
    {
      icon: Download,
      title: "자료 다운로드",
      description: "제품 브로셔 및 기술 문서",
      action: "다운로드",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-orange-100 text-orange-800 hover:bg-orange-100">
            고객 지원
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            언제든지
            <br />
            <span className="text-orange-600">문의해 주세요</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            라온피플의 제품 및 구매 문의, 기술 지원을 받을 수 있습니다. 전문가가
            신속하고 정확한 답변을 드립니다.
          </p>
        </div>

        {/* Contact Information Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <Card
              key={index}
              className="group text-center border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <CardContent className="p-6 space-y-4">
                <div
                  className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${info.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110`}
                >
                  <info.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">
                  {info.title}
                </h3>
                <p className="text-gray-900 font-semibold">{info.content}</p>
                <p className="text-sm text-gray-600">{info.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Support Services */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              고객 지원 서비스
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              다양한 채널을 통해 고객님께 최상의 서비스를 제공합니다.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {supportServices.map((service, index) => (
              <Card
                key={index}
                className="group text-center border-0 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <CardHeader className="pb-4">
                  <div className="w-14 h-14 mx-auto mb-4 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110">
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">{service.description}</p>
                  <Button
                    variant="outline"
                    className="w-full border-orange-300 text-orange-600 hover:bg-orange-50"
                  >
                    {service.action}
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Quick Contact Form */}
        <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl p-8 md:p-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                빠른 문의
              </h3>
              <p className="text-gray-600">
                간단한 정보를 남겨주시면 빠른 시일 내에 연락드리겠습니다.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      이름 *
                    </label>
                    <input
                      type="text"
                      placeholder="성함을 입력해 주세요"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      회사명
                    </label>
                    <input
                      type="text"
                      placeholder="회사명을 입력해 주세요"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      연락처 *
                    </label>
                    <input
                      type="tel"
                      placeholder="연락처를 입력해 주세요"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      이메일 *
                    </label>
                    <input
                      type="email"
                      placeholder="이메일을 입력해 주세요"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    문의 내용 *
                  </label>
                  <textarea
                    rows={8}
                    placeholder="문의하실 내용을 자세히 작성해 주세요"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 resize-none"
                  />
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <input type="checkbox" id="privacy" className="mt-1" />
                    <label htmlFor="privacy" className="text-sm text-gray-600">
                      개인정보 수집 및 이용에 동의합니다. (필수)
                    </label>
                  </div>

                  <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 text-lg font-semibold">
                    문의 보내기
                    <Send className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map and Additional Info */}
        <div className="mt-16 grid lg:grid-cols-2 gap-8">
          <Card className="border-0 shadow-lg overflow-hidden">
            <CardContent className="p-0">
              <div className="bg-gray-200 h-64 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-500">지도 영역</p>
                  <p className="text-sm text-gray-400">
                    실제 구현 시 Google Maps 또는 네이버 지도 연동
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl">찾아오시는 길</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">주소</h4>
                <p className="text-gray-600">
                  경기도 과천시 과천대로7나길 60
                  <br />
                  과천어반허브 C동 5층/6층 (13840)
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">대중교통</h4>
                <p className="text-gray-600">
                  지하철 4호선 과천역 2번 출구
                  <br />
                  도보 5분 거리
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">주차 안내</h4>
                <p className="text-gray-600">
                  건물 내 주차장 이용 가능
                  <br />
                  방문 전 사전 연락 필수
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
