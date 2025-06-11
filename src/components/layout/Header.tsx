"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-lg border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-blue-600">라온피플</div>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-gray-700 hover:text-blue-600">
                  솔루션/기술
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 w-[400px]">
                    <div className="row-span-3">
                      <NavigationMenuLink href="#solutions">
                        <div className="mb-2 text-lg font-medium">
                          SMART FACTORY
                        </div>
                        <p className="text-sm text-gray-600">
                          AI 플랫폼/소프트웨어
                        </p>
                        <p className="text-sm text-gray-600">
                          AI 머신비전 솔루션
                        </p>
                      </NavigationMenuLink>
                    </div>
                    <div className="row-span-3">
                      <NavigationMenuLink href="#solutions">
                        <div className="mb-2 text-lg font-medium">
                          SMART LIFE
                        </div>
                        <p className="text-sm text-gray-600">
                          생활밀착형 AI 솔루션
                        </p>
                      </NavigationMenuLink>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#industries"
                  className="text-gray-700 hover:text-blue-600 px-4 py-2"
                >
                  적용산업
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#about"
                  className="text-gray-700 hover:text-blue-600 px-4 py-2"
                >
                  기업정보
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/ir"
                  className="text-gray-700 hover:text-blue-600 px-4 py-2"
                >
                  IR
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#contact"
                  className="text-gray-700 hover:text-blue-600 px-4 py-2"
                >
                  고객지원
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-gray-700">
              로그인
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700">문의하기</Button>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="#solutions"
              className="block px-3 py-2 text-gray-700 hover:text-blue-600"
            >
              솔루션/기술
            </Link>
            <Link
              href="#industries"
              className="block px-3 py-2 text-gray-700 hover:text-blue-600"
            >
              적용산업
            </Link>
            <Link
              href="#about"
              className="block px-3 py-2 text-gray-700 hover:text-blue-600"
            >
              기업정보
            </Link>
            <Link
              href="/ir"
              className="block px-3 py-2 text-gray-700 hover:text-blue-600"
            >
              IR
            </Link>
            <Link
              href="#contact"
              className="block px-3 py-2 text-gray-700 hover:text-blue-600"
            >
              고객지원
            </Link>
            <div className="flex flex-col space-y-2 px-3 pt-2">
              <Button variant="ghost" className="justify-start">
                로그인
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700 justify-start">
                문의하기
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
