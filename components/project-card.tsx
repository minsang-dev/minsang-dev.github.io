"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Trophy } from "lucide-react"
import Image from "next/image"
import { ProjectDetailDialog, Project } from "./project-detail-dialog"

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <ProjectDetailDialog project={project}>
      <Card className="group cursor-pointer overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg flex flex-col h-full bg-card">
        {/* Project Thumbnail */}
        {project.image && (
          <div className="relative w-full h-48 sm:h-56 overflow-hidden border-b border-border bg-slate-50 dark:bg-slate-900/50">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-contain transition-transform duration-500 group-hover:scale-105"
            />
            {/* Award Badge */}
            {project.award && (
              <div className="absolute top-3 left-3 z-20">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 shadow-lg shadow-amber-500/40 border border-amber-200/50 text-amber-950 font-bold text-xs backdrop-blur-md">
                  <Trophy className="w-3.5 h-3.5 fill-amber-700 text-amber-800" />
                  <span>{project.award}</span>
                </div>
              </div>
            )}
            {/* Custom Badge */}
            {project.badge && (
              <div className="absolute top-3 right-3 z-20">
                <div className="px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 shadow-lg shadow-blue-500/40 border border-blue-400/50 text-white font-bold text-xs backdrop-blur-md">
                  <span>{project.badge}</span>
                </div>
              </div>
            )}
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white font-medium px-4 py-2 border border-white/50 rounded-full backdrop-blur-sm">
                자세히 보기
              </span>
            </div>
          </div>
        )}

        {/* Content */}
        <div className="p-6 flex flex-col flex-1">
          <div className="mb-4">
            <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <div className="flex items-center flex-wrap gap-2 text-sm text-muted-foreground">
              <Badge variant="outline" className="whitespace-nowrap">
                {project.role}
              </Badge>
              <span className="text-xs">•</span>
              <span className="text-xs">{project.period}</span>
            </div>
          </div>

          {/* Tech Stack - Limit to first 5 or show all if short */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.techStack.slice(0, 5).map((tech) => (
              <Badge key={tech} variant="secondary" className="text-xs bg-muted/50 group-hover:bg-muted transition-colors">
                {tech}
              </Badge>
            ))}
            {project.techStack.length > 5 && (
              <Badge variant="secondary" className="text-xs bg-muted/50">
                +{project.techStack.length - 5}
              </Badge>
            )}
          </div>

          {/* Bottom Action Area */}
          <div className="mt-auto pt-4 border-t border-border/50 flex items-center justify-between text-sm text-muted-foreground group-hover:text-primary transition-colors">
            <span>Click to explore</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </Card>
    </ProjectDetailDialog>
  )
}
