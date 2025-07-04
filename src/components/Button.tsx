import React from "react"
import { cn } from "@/lib/utils"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'default' | 'sm' | 'lg'
}

export function Button({ 
  className, 
  children, 
  variant = 'primary', 
  size = 'default',
  ...props 
}: ButtonProps) {
  const variants = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white",
    secondary: "bg-gray-200 hover:bg-gray-300 text-gray-800",
    outline: "border border-gray-300 bg-white hover:bg-gray-100 text-gray-800"
  }
  
  const sizes = {
    default: "px-6 py-3",
    sm: "px-4 py-2 text-sm",
    lg: "px-8 py-4 text-lg"
  }

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-full font-semibold transition-all transform hover:scale-105",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
