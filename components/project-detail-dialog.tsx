"use client"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, X, ChevronDown } from "lucide-react"
import Image from "next/image"
import { TroubleshootingLog } from "./troubleshooting-dialog"

// Project 타입 정의
export interface Project {
  id: number
  title: string
  period: string
  role: string
  techStack: string[]
  situation: string
  task: string
  action: string
  result: string
  image?: string
  architecture?: string
  troubleshooting?: TroubleshootingLog
  link?: string
  award?: string
  // 새로 추가되는 필드 (참고 사이트 형식)
  intro?: string
  teamComposition?: string
  contributions?: string[]
  keyFeatures?: string[]
  techSelection?: { name: string; reason: string }[]
  devIssues?: { issue: string; solution: string }[]
  retrospective?: string
}

interface ProjectDetailDialogProps {
  project: Project
  children: React.ReactNode
}

export function ProjectDetailDialog({ project, children }: ProjectDetailDialogProps) {
  // 기존 데이터에서 폴백 로직
  const introText = project.intro || project.situation
  const retrospectiveText = project.retrospective || project.result

  // troubleshooting 데이터에서 devIssues 자동 변환
  const devIssues: { issue: string; solution: string }[] = project.devIssues || []
  const hasTroubleshooting = project.troubleshooting && project.troubleshooting.sections.length > 0
  const hasDevIssues = devIssues.length > 0

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="!max-w-none w-[100vw] h-[100vh] sm:w-[98vw] sm:h-[96vh] p-0 flex flex-col gap-0 overflow-hidden border-0 sm:border sm:rounded-lg rounded-none">
        {/* 닫기 버튼 (고정) */}
        <DialogHeader className="sr-only">
          <DialogTitle>{project.title}</DialogTitle>
          <DialogDescription>{project.period} · {project.role}</DialogDescription>
        </DialogHeader>

        {/* 스크롤 가능한 전체 콘텐츠 */}
        <div className="flex-1 overflow-y-auto">
          {/* ──────────────────────────────────────── */}
          {/* 1. 히어로 배너 섹션 */}
          {/* ──────────────────────────────────────── */}
          <div className="relative w-full min-h-[60vh] flex flex-col items-center justify-center bg-gradient-to-b from-slate-800 via-slate-900 to-background dark:from-slate-900 dark:via-slate-950 dark:to-background">
            {/* 프로젝트 이미지 */}
            {(project.architecture || project.image) && (
              <div className="relative w-full max-w-3xl mx-auto px-6 pt-12 pb-4">
                <div className="rounded-xl overflow-hidden shadow-2xl border border-white/10">
                  <Image
                    src={project.architecture || project.image!}
                    alt={project.title}
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            )}

            {/* 수상 배지 */}
            {project.award && (
              <div className="mt-3">
                <Badge className="bg-amber-100/95 text-amber-800 dark:bg-amber-900/90 dark:text-amber-200 border-amber-300 dark:border-amber-700 gap-1 shadow-md text-sm px-3 py-1">
                  🏆 {project.award}
                </Badge>
              </div>
            )}

            {/* 스크롤 안내 */}
            <div className="mt-auto pb-8 pt-6 flex flex-col items-center gap-2 text-slate-400 dark:text-slate-500">
              <span className="text-sm tracking-wide">스크롤을 내리면 프로젝트 정보를 볼 수 있습니다.</span>
              <ChevronDown className="w-5 h-5 animate-bounce" />
            </div>
          </div>

          {/* ──────────────────────────────────────── */}
          {/* 2. 콘텐츠 영역 */}
          {/* ──────────────────────────────────────── */}
          <div className="max-w-3xl mx-auto px-6 sm:px-10 py-12 space-y-0">

            {/* 프로젝트 타이틀 */}
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 leading-tight">
              {project.title.split(' - ')[0].split(' – ')[0]}
            </h2>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline mb-6"
              >
                <ExternalLink className="w-4 h-4" />
                프로젝트 링크
              </a>
            )}

            <hr className="border-border my-8" />

            {/* ── INTRO. ── */}
            <section className="py-2">
              <div className="bg-muted/50 dark:bg-muted/30 rounded-xl p-6 sm:p-8 border border-border/50">
                <h3 className="text-primary font-bold text-lg mb-4 tracking-wide">INTRO.</h3>
                <p className="text-base leading-relaxed text-foreground/90 whitespace-pre-line">
                  {introText}
                </p>
              </div>
            </section>

            <hr className="border-border my-8" />

            {/* ── ⏱ 개발 기간 ── */}
            <section className="py-2">
              <h3 className="text-lg font-bold text-primary flex items-center gap-2 mb-3">
                ⏱ 개발 기간
              </h3>
              <p className="text-foreground/80 pl-1 border-l-2 border-primary/30 ml-1 py-1 px-4">
                {project.period}
              </p>
            </section>

            <hr className="border-border my-8" />

            {/* ── 👥 구성원 ── */}
            <section className="py-2">
              <h3 className="text-lg font-bold text-primary flex items-center gap-2 mb-3">
                👥 구성원
              </h3>
              <p className="text-foreground/80 pl-1 border-l-2 border-primary/30 ml-1 py-1 px-4">
                {project.teamComposition || project.role}
              </p>
            </section>

            <hr className="border-border my-8" />

            {/* ── 🎯 기여 ── */}
            <section className="py-2">
              <h3 className="text-lg font-bold text-primary flex items-center gap-2 mb-3">
                🎯 기여
              </h3>
              <div className="flex flex-wrap gap-2 ml-1">
                {project.contributions ? (
                  project.contributions.map((c) => (
                    <Badge
                      key={c}
                      variant="outline"
                      className="text-sm px-3 py-1.5 bg-background hover:bg-muted transition-colors"
                    >
                      {c}
                    </Badge>
                  ))
                ) : (
                  <Badge
                    variant="outline"
                    className="text-sm px-3 py-1.5 bg-background"
                  >
                    {project.role}
                  </Badge>
                )}
              </div>
            </section>

            <hr className="border-border my-8" />

            {/* ── 🛠 사용된 기술 스택 ── */}
            <section className="py-2">
              <h3 className="text-lg font-bold text-primary flex items-center gap-2 mb-4">
                🛠 사용된 기술 스택
              </h3>
              <div className="flex flex-wrap gap-2 ml-1">
                {project.techStack.map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="text-sm px-3 py-1.5"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </section>

            <hr className="border-border my-8" />

            {/* ── 📌 주요 기능 ── */}
            <section className="py-2">
              <h3 className="text-lg font-bold text-primary flex items-center gap-2 mb-4">
                📌 주요 기능
              </h3>
              <ul className="space-y-3 ml-1">
                {(project.keyFeatures || project.task.split('\n').filter(Boolean)).map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-foreground/90">
                    <span className="text-primary mt-1.5 text-xs">●</span>
                    <span className="text-base leading-relaxed">{feature.replace(/^\d+\.\s*/, '')}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* ── 🔎 기술 선정 (optional) ── */}
            {project.techSelection && project.techSelection.length > 0 && (
              <>
                <hr className="border-border my-8" />
                <section className="py-2">
                  <h3 className="text-lg font-bold text-primary flex items-center gap-2 mb-4">
                    🔎 기술 선정
                  </h3>
                  <ul className="space-y-4 ml-1">
                    {project.techSelection.map((ts, i) => (
                      <li key={i} className="text-foreground/90">
                        <span className="flex items-start gap-3">
                          <span className="text-primary mt-1.5 text-xs">●</span>
                          <span className="text-base leading-relaxed">
                            <strong>{ts.name}:</strong> {ts.reason}
                          </span>
                        </span>
                      </li>
                    ))}
                  </ul>
                </section>
              </>
            )}

            <hr className="border-border my-8" />

            {/* ── 🧩 개발 이슈 ── */}
            <section className="py-2">
              <h3 className="text-lg font-bold text-primary flex items-center gap-2 mb-4">
                🧩 개발 이슈
              </h3>

              {hasDevIssues ? (
                <ul className="space-y-6 ml-1">
                  {devIssues.map((item, i) => (
                    <li key={i} className="space-y-2">
                      <div className="flex items-start gap-3 text-foreground/90">
                        <span className="text-primary mt-1.5 text-xs">●</span>
                        <div className="text-base leading-relaxed space-y-2">
                          <p>
                            <span className="text-red-500 dark:text-red-400 font-bold">이슈:</span>{" "}
                            {item.issue}
                          </p>
                          <p className="pl-0">
                            <span className="text-emerald-600 dark:text-emerald-400 font-bold">해결:</span>{" "}
                            {item.solution}
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : hasTroubleshooting ? (
                /* 기존 troubleshooting 데이터를 스크롤 형식으로 표시 */
                <div className="space-y-6 ml-1">
                  {project.troubleshooting!.sections.map((section, i) => (
                    <div key={i} className="space-y-2">
                      <h4 className="font-semibold text-foreground text-base">{section.title}</h4>
                      <div className="text-sm leading-relaxed text-foreground/85 pl-4 border-l-2 border-border">
                        {section.content}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                /* action 데이터에서 폴백 */
                <ul className="space-y-3 ml-1">
                  {project.action.split('\n').filter(Boolean).map((line, i) => (
                    <li key={i} className="flex items-start gap-3 text-foreground/90">
                      <span className="text-primary mt-1.5 text-xs">●</span>
                      <span className="text-base leading-relaxed">{line.replace(/^\d+\.\s*/, '')}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>

            <hr className="border-border my-8" />

            {/* ── 💭 개발 후 느낀점 ── */}
            <section className="py-2 pb-16">
              <h3 className="text-lg font-bold text-primary flex items-center gap-2 mb-4">
                💭 개발 후 느낀점
              </h3>
              <p className="text-base leading-relaxed text-foreground/90 ml-1 whitespace-pre-line">
                {retrospectiveText}
              </p>
            </section>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
