import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import {
  Youtube,
  Facebook,
  Globe,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
} from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { title: "솔루션/기술", href: "#solutions" },
    { title: "적용산업", href: "#industries" },
    { title: "기업정보", href: "#about" },
    { title: "IR", href: "/ir" },
    { title: "고객지원", href: "#contact" },
  ];

  const solutions = [
    { title: "SMART FACTORY", href: "#solutions" },
    { title: "SMART LIFE", href: "#solutions" },
    { title: "AI 플랫폼/소프트웨어", href: "#solutions" },
    { title: "AI 머신비전 솔루션", href: "#solutions" },
  ];

  const products = [
    { title: "HI FENN", href: "#products" },
    { title: "OdinAi", href: "#products" },
    { title: "NAVI AI PRO", href: "#products" },
    { title: "EZ PLANET", href: "#products" },
    { title: "Laon Swingcraft", href: "#products" },
  ];

  const company = [
    { title: "회사소개", href: "#about" },
    { title: "연혁", href: "/history" },
    { title: "파트너/고객사", href: "/partners" },
    { title: "특허, 인증 및 수상", href: "/achievements" },
    { title: "채용안내", href: "/careers" },
  ];

  const support = [
    { title: "제품문의", href: "#contact" },
    { title: "기술지원", href: "/support" },
    { title: "다운로드", href: "/downloads" },
    { title: "공지사항", href: "/news" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-blue-400 mb-4">
                라온피플
              </h3>
              <p className="text-gray-300 leading-relaxed">
                AI기술(딥러닝 알고리즘)과 VISION기술(영상신호처리)을 기반으로 AI
                VISION 통합 솔루션을 제공하는 혁신적인 기업입니다.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-blue-400" />
                <span className="text-gray-300">1899-3058</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-blue-400" />
                <span className="text-gray-300">sales@laonpeople.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-blue-400 mt-0.5" />
                <span className="text-gray-300">
                  경기 과천시 과천대로7나길 60
                  <br />
                  과천어반허브 C동 5층/6층 (13840)
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-white hover:bg-gray-800"
              >
                <Youtube className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-white hover:bg-gray-800"
              >
                <Facebook className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-white hover:bg-gray-800"
              >
                <Globe className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">빠른 메뉴</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center group"
                  >
                    {link.title}
                    <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">솔루션</h4>
            <ul className="space-y-3">
              {solutions.map((solution, index) => (
                <li key={index}>
                  <Link
                    href={solution.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center group"
                  >
                    {solution.title}
                    <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">제품</h4>
            <ul className="space-y-3">
              {products.map((product, index) => (
                <li key={index}>
                  <Link
                    href={product.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center group"
                  >
                    {product.title}
                    <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">고객지원</h4>
            <ul className="space-y-3">
              {support.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center group"
                  >
                    {item.title}
                    <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <Separator className="bg-gray-700" />

      {/* Bottom Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-gray-400">
            <span>라온피플(주) 대표이사 : 이석중</span>
            <span className="hidden md:inline">|</span>
            <span>사업자등록번호 : 000-00-00000</span>
            <span className="hidden md:inline">|</span>
            <span>통신판매업신고번호 : 제0000-경기과천-0000호</span>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-400">KOSDAQ 상장법인</span>
            <div className="bg-blue-600 text-white px-3 py-1 rounded text-xs font-semibold">
              KOSDAQ
            </div>
          </div>
        </div>

        <div className="mt-4 flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
          <div className="text-sm text-gray-500">
            COPYRIGHT © LAON PEOPLE INC. ALL RIGHTS RESERVED.
          </div>

          <div className="flex space-x-6 text-sm">
            <Link
              href="/privacy"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              개인정보처리방침
            </Link>
            <Link
              href="/terms"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              이용약관
            </Link>
            <Link
              href="/sitemap"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              사이트맵
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
