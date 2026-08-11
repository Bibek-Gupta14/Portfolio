"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface TypingAnimationProps {
  texts: string[]
  colors?: string[]
  cursorColors?: string[]
  typingSpeed?: number
  deletingSpeed?: number
  pauseDuration?: number
}

const defaultColors = [
  "text-cyan-600 dark:text-cyan-400",
  "text-purple-600 dark:text-purple-400",
  "text-emerald-600 dark:text-emerald-400",
  "text-amber-600 dark:text-amber-400",
  "text-pink-600 dark:text-pink-400",
  "text-blue-600 dark:text-blue-400",
]

const defaultCursorColors = [
  "bg-cyan-500 shadow-[0_0_10px_rgba(34,211,238,0.8)]",
  "bg-purple-500 shadow-[0_0_10px_rgba(192,132,252,0.8)]",
  "bg-emerald-500 shadow-[0_0_10px_rgba(52,211,153,0.8)]",
  "bg-amber-500 shadow-[0_0_10px_rgba(251,191,36,0.8)]",
  "bg-pink-500 shadow-[0_0_10px_rgba(244,114,182,0.8)]",
  "bg-blue-500 shadow-[0_0_10px_rgba(96,165,250,0.8)]",
]

export function TypingAnimation({
  texts,
  colors,
  cursorColors,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDuration = 2000,
}: TypingAnimationProps) {
  const [displayText, setDisplayText] = useState("")
  const [textIndex, setTextIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentText = texts[textIndex]

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentText.length) {
            setDisplayText(currentText.slice(0, displayText.length + 1))
          } else {
            setTimeout(() => setIsDeleting(true), pauseDuration)
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1))
          } else {
            setIsDeleting(false)
            setTextIndex((prev) => (prev + 1) % texts.length)
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed,
    )

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, textIndex, texts, typingSpeed, deletingSpeed, pauseDuration])

  const currentColorClass =
    (colors && colors[textIndex % colors.length]) ||
    defaultColors[textIndex % defaultColors.length]
  const currentCursorClass =
    (cursorColors && cursorColors[textIndex % cursorColors.length]) ||
    defaultCursorColors[textIndex % defaultCursorColors.length]

  return (
    <span
      className={cn(
        "inline-flex items-center font-bold transition-colors duration-500",
        currentColorClass,
      )}
    >
      {displayText}
      <span
        className={cn(
          "w-[3px] h-[1.2em] ml-1 animate-pulse rounded-full transition-all duration-500",
          currentCursorClass,
        )}
      />
    </span>
  )
}
