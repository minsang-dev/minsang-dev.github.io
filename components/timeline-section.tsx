"use client"

import { Badge } from "@/components/ui/badge"
import {
    GraduationCap,
    Award,
    Rocket,
    Briefcase,
} from "lucide-react"

// All items merged and sorted by date descending
const TIMELINE_ITEMS = [
    {
        date: "2026.03.09 ~ 03.27",
        title: "DONTTAz",
        description: "소비 루틴 분석 AI 기반 맞춤형 예산 할당 및 잉여 자금 강제 격리 핀테크 서비스\n 비동기 보상 트랜잭션을 통한 결제 데이터 정합성 문제 해결.",
        side: "left" as const,
        type: "project" as const,
    },
    {
        date: "2026.01 ~ 02",
        title: "SHOPPY",
        description: "비대면 화상 공유 및 정밀한 N분의 1 정산 플랫폼.\nWebRTC 인프라 및 CI/CD 파이프라인 구축.",
        side: "left" as const,
        type: "project" as const,
    },
    {
        date: "2025.12",
        title: "ZIP-CHACK",
        description: "원룸 리뷰 및 AI 상권 분석을 제공하는 부동산 플랫폼.\nWebSocket 실시간 채팅 및 통신 상태 동기화 구현.",
        side: "left" as const,
        type: "project" as const,
    },
    {
        date: "2025.07",
        title: "SSAFY 14기 입과",
        description: "Java 전공 트랙 (진행 중)",
        side: "right" as const,
        type: "education" as const,
    },

    {
        date: "2024.04 ~ 10",
        title: "RE:VIBE",
        description: "한정판 스니커즈 리셀 플랫폼.\n대규모 트래픽 대비 분산락 등 서버 최적화 진행.",
        side: "left" as const,
        type: "project" as const,
    },
    {
        date: "2024.02",
        title: "전남대학교 졸업",
        description: "",
        side: "right" as const,
        type: "education" as const,
    },
]

const TYPE_CONFIG = {
    project: {
        icon: Rocket,
        color: "bg-blue-500",
        ring: "ring-blue-500/20",
        border: "border-blue-200 dark:border-blue-800",
        bg: "bg-blue-50 dark:bg-blue-950/30",
    },
    education: {
        icon: GraduationCap,
        color: "bg-emerald-500",
        ring: "ring-emerald-500/20",
        border: "border-emerald-200 dark:border-emerald-800",
        bg: "bg-emerald-50 dark:bg-emerald-950/30",
    },
    certification: {
        icon: Award,
        color: "bg-amber-500",
        ring: "ring-amber-500/20",
        border: "border-amber-200 dark:border-amber-800",
        bg: "bg-amber-50 dark:bg-amber-950/30",
    },
    career: {
        icon: Briefcase,
        color: "bg-purple-500",
        ring: "ring-purple-500/20",
        border: "border-purple-200 dark:border-purple-800",
        bg: "bg-purple-50 dark:bg-purple-950/30",
    },
}

export default function TimelineSection() {
    return (
        <section id="timeline" className="py-24 px-4 bg-background">
            <div className="max-w-5xl mx-auto">
                <div className="mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700 view-trigger">
                    <h2 className="text-4xl font-bold mb-3 text-foreground">타임라인</h2>
                    <p className="text-slate-600 dark:text-slate-400 text-lg mb-4">
                        성장 과정과 주요 이정표를 시간순으로 정리했습니다.
                    </p>
                    <div className="h-1.5 w-20 bg-gradient-to-r from-primary to-primary/50 rounded-full" />
                </div>

                {/* Column Labels */}
                <div className="hidden md:flex justify-between mb-8 px-4">
                    <div className="w-[calc(50%-20px)] text-right">
                        <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300 border-0">
                            <Rocket className="w-3 h-3 mr-1" /> Projects
                        </Badge>
                    </div>
                    <div className="w-10" />
                    <div className="w-[calc(50%-20px)] text-left">
                        <Badge className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300 border-0">
                            <GraduationCap className="w-3 h-3 mr-1" /> Education
                        </Badge>
                    </div>
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Center Line - Desktop */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-primary/50 via-slate-300 dark:via-slate-700 to-transparent" />

                    {/* Center Line - Mobile (left side) */}
                    <div className="md:hidden absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-slate-300 dark:via-slate-700 to-transparent" />

                    <div className="space-y-8 md:space-y-10">
                        {TIMELINE_ITEMS.map((item, index) => {
                            const config = TYPE_CONFIG[item.type]
                            const Icon = config.icon
                            const isLeft = item.side === "left"

                            return (
                                <div
                                    key={index}
                                    className="relative animate-in fade-in duration-500 view-trigger"
                                    style={{ animationDelay: `${index * 80}ms` }}
                                >
                                    {/* Desktop Layout */}
                                    <div className="hidden md:flex items-start">
                                        {/* Left Content */}
                                        <div className="w-[calc(50%-20px)] pr-6">
                                            {isLeft && (
                                                <div className={`p-4 rounded-xl border ${config.border} ${config.bg} text-right transition-all hover:shadow-md`}>
                                                    <p className="text-xs font-mono text-muted-foreground mb-1">{item.date}</p>
                                                    <h3 className="text-base font-bold text-foreground">{item.title}</h3>
                                                    <p className="text-sm text-muted-foreground mt-1 whitespace-pre-line">{item.description}</p>
                                                </div>
                                            )}
                                        </div>

                                        {/* Center Dot */}
                                        <div className="w-10 flex justify-center shrink-0">
                                            <div className={`w-8 h-8 rounded-full ${config.color} flex items-center justify-center shadow-md ring-4 ring-background`}>
                                                <Icon className="h-3.5 w-3.5 text-white" />
                                            </div>
                                        </div>

                                        {/* Right Content */}
                                        <div className="w-[calc(50%-20px)] pl-6">
                                            {!isLeft && (
                                                <div className={`p-4 rounded-xl border ${config.border} ${config.bg} text-left transition-all hover:shadow-md`}>
                                                    <p className="text-xs font-mono text-muted-foreground mb-1">{item.date}</p>
                                                    <h3 className="text-base font-bold text-foreground">{item.title}</h3>
                                                    <p className="text-sm text-muted-foreground mt-1 whitespace-pre-line">{item.description}</p>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Mobile Layout - Always left-aligned */}
                                    <div className="md:hidden relative pl-12">
                                        <div className={`absolute left-[9px] top-2 w-7 h-7 rounded-full ${config.color} flex items-center justify-center shadow-md ring-3 ring-background`}>
                                            <Icon className="h-3 w-3 text-white" />
                                        </div>
                                        <div className={`p-4 rounded-xl border ${config.border} ${config.bg} transition-all`}>
                                            <p className="text-xs font-mono text-muted-foreground mb-1">{item.date}</p>
                                            <h3 className="text-base font-bold text-foreground">{item.title}</h3>
                                            <p className="text-sm text-muted-foreground mt-1 whitespace-pre-line">{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}
