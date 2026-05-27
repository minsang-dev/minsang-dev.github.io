"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, MapPin, GraduationCap, Mail, Github } from "lucide-react"
import Image from "next/image"

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">

          {/* Left Column: Profile Image & Quick Info */}
          <div className="md:col-span-5 lg:col-span-4 flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-700 view-trigger">
            <div className="relative aspect-square overflow-hidden rounded-2xl border-2 border-primary/20 shadow-2xl rotate-3 hover:rotate-0 transition-all duration-500">
              {/* Profile image path - ensure it works on GitHub Pages */}
              <Image
                src="profile.jpg"
                alt="Profile"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                priority
              />
            </div>

            <Card className="p-6 bg-card border-slate-200 dark:border-slate-800">
              <h3 className="text-2xl font-bold mb-1 text-center">김민상</h3>
              <p className="text-primary text-center font-medium mb-6">Backend Engineer</p>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                  <div className="h-8 w-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <span className="text-sm">Seoul, South Korea</span>
                </div>
                <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                  <div className="h-8 w-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0">
                    <Mail className="h-4 w-4" />
                  </div>
                  <a href="mailto:minsang1233@gmail.com" className="text-sm hover:text-primary transition-colors">
                    minsang1233@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                  <div className="h-8 w-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0">
                    <Github className="h-4 w-4" />
                  </div>
                  <a href="https://github.com/minsang-dev" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-primary transition-colors">
                    github.com/minsang-dev
                  </a>
                </div>
              </div>
            </Card>
          </div>

          {/* Right Column: Bio & Education */}
          <div className="md:col-span-7 lg:col-span-8 space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200 view-trigger">

            <div>
              <div className="flex items-center gap-3 mb-6">
                <h2 className="text-3xl font-bold text-foreground">About Me</h2>
                <div className="h-1.5 flex-1 bg-gradient-to-r from-primary/50 to-transparent rounded-full" />
              </div>

              <div className="prose dark:prose-invert max-w-none text-slate-600 dark:text-slate-400 leading-relaxed space-y-4">
                <p>
                  안녕하세요, 기술의 본질에 대해 끊임없이 <strong className="text-foreground">물음표를 던지며 성장하는</strong> 백엔드 및 인프라 개발자 김민상입니다.
                </p>
                <p>
                  단순히 기능이 동작하는 결과물보다 <span className="bg-primary/10 text-primary px-1 rounded">안정적인 서버 아키텍처</span>와 <span className="bg-primary/10 text-primary px-1 rounded">데이터 무결성</span>을 최우선으로 고려합니다.
                  속도보다 품질을 타협하지 않으며, 대규모 트래픽과 시스템 확장성을 다각도로 고민해 장애에 강건한(Robust) 시스템을 설계하는 과정에서 큰 성취감을 느낍니다.
                </p>
                <p>
                  또한, 복잡한 서버 트러블슈팅 과정을 꼼꼼히 <strong className="text-foreground">문서화하는 습관</strong>을 통해 팀의 시행착오를 줄이는 데 기여합니다.
                  확실한 기술적 근거로 소통하고 피드백을 적극 수용하는 <span className="bg-primary/10 text-primary px-1 rounded">건강한 커뮤니케이션</span>으로, 팀과 함께 신뢰받는 백엔드 시스템을 만들어가겠습니다.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-primary" />
                Education
              </h3>

              <div className="space-y-4">
                {/* Education Item 1 */}
                <div className="group relative pl-8 border-l-2 border-slate-200 dark:border-slate-800 hover:border-primary transition-colors">
                  <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-background border-2 border-slate-400 group-hover:border-primary transition-colors" />
                  <div className="mb-1 flex flex-wrap items-center gap-2">
                    <h4 className="font-bold text-lg">Samsung Software Academy for Youth (SSAFY)</h4>
                    <Badge variant="secondary" className="text-xs">Java 전공</Badge>
                  </div>
                  <p className="text-sm text-slate-500 mb-2 flex items-center gap-1">
                    <CalendarDays className="h-3 w-3" /> 2025.07 - 2026.06
                  </p>
                  <p className="text-slate-600 dark:text-slate-400">
                    현재 진행 중
                  </p>
                </div>

                {/* Education Item 1.5 */}
                <div className="group relative pl-8 border-l-2 border-slate-200 dark:border-slate-800 hover:border-primary transition-colors">
                  <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-background border-2 border-slate-400 group-hover:border-primary transition-colors" />
                  <div className="mb-1 flex flex-wrap items-center gap-2">
                    <h4 className="font-bold text-lg">내일배움캠프 백엔드(Java/Spring) 7기</h4>
                    <Badge variant="secondary" className="text-xs">수료</Badge>
                  </div>
                  <p className="text-sm text-slate-500 mb-2 flex items-center gap-1">
                    <CalendarDays className="h-3 w-3" /> 2024.09 - 2025.02
                  </p>
                  <p className="text-slate-600 dark:text-slate-400">
                    스파르타 주식회사 (960 Hours 집중 교육)
                  </p>
                </div>

                {/* Education Item 2 */}
                <div className="group relative pl-8 border-l-2 border-slate-200 dark:border-slate-800 hover:border-primary transition-colors">
                  <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-background border-2 border-slate-400 group-hover:border-primary transition-colors" />
                  <div className="mb-1 flex flex-wrap items-center gap-2">
                    <h4 className="font-bold text-lg">전남대학교</h4>
                    <Badge variant="secondary" className="text-xs"></Badge>
                  </div>
                  <p className="text-sm text-slate-500 mb-2 flex items-center gap-1">
                    <CalendarDays className="h-3 w-3" /> 2020.03 - 2024.02
                  </p>
                  <p className="text-slate-600 dark:text-slate-400">
                    컴퓨터 공학 전반을 학습하며 정보 보안 및 네트워크 분야를 중점적으로 학습 (학점 4.23/4.5)
                  </p>
                </div>

                {/* Education Item 3 */}
                <div className="group relative pl-8 border-l-2 border-slate-200 dark:border-slate-800 hover:border-primary transition-colors">
                  <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-background border-2 border-slate-400 group-hover:border-primary transition-colors" />
                  <div className="mb-1 flex flex-wrap items-center gap-2">
                    <h4 className="font-bold text-lg">문정여자고등학교</h4>
                    <Badge variant="secondary" className="text-xs">이과 (자연계열)</Badge>
                  </div>
                  <p className="text-sm text-slate-500 mb-2 flex items-center gap-1">
                    <CalendarDays className="h-3 w-3" /> 2016.03 - 2019.02
                  </p>
                  <p className="text-slate-600 dark:text-slate-400">
                    성실한 학교 생활
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
