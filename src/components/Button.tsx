import React from "react"
import { cn } from "@/lib/utils"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
}

export function Button({ className, children, variant = 'primary', ...props }: ButtonProps) {
  const variants = {
    primary: "bg-apple-blue hover:bg-blue-600 text-white",
    secondary: "bg-gray-200 hover:bg-gray-300 text-gray-800"
  }

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold transition-all transform hover:scale-105",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
