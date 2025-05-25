import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: {
          DEFAULT: "hsl(var(--input))",
          hover: "hsl(var(--input-hover))",
          disabled: "hsl(var(--input-disabled))",
        },
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          hover: "hsl(var(--primary-hover))",
          active: "hsl(var(--primary-active))",
          disabled: "hsl(var(--primary-disabled))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
          hover: "hsl(var(--secondary-hover))",
          active: "hsl(var(--secondary-active))",
          disabled: "hsl(var(--secondary-disabled))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
          hover: "hsl(var(--card-hover))",
          active: "hsl(var(--card-active))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        // Navigation states
        nav: {
          DEFAULT: "hsl(var(--foreground))",
          hover: "hsl(var(--nav-hover))",
          active: "hsl(var(--nav-active))",
          selected: "hsl(var(--nav-selected))",
        },
        // Link states
        link: {
          DEFAULT: "hsl(var(--foreground))",
          hover: "hsl(var(--link-hover))",
          active: "hsl(var(--link-active))",
        },
        // Status colors
        success: {
          DEFAULT: "hsl(var(--success))",
          foreground: "hsl(0 0% 98%)", // White text on success background
        },
        warning: {
          DEFAULT: "hsl(var(--warning))",
          foreground: "hsl(0 0% 98%)", // White text on warning background
        },
        info: {
          DEFAULT: "hsl(var(--info))",
          foreground: "hsl(0 0% 98%)", // White text on info background
        },
        error: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        // Chart colors
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      fontFamily: {
        sans: ["SF Pro Display", "system-ui", "sans-serif"],
        display: ["SF Pro Display", "system-ui", "sans-serif"],
        mono: ["SF Mono", "monospace"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xs: "calc(var(--radius) - 8px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "fade-in": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-out": {
          "0%": {
            opacity: "1",
            transform: "translateY(0)",
          },
          "100%": {
            opacity: "0",
            transform: "translateY(10px)",
          },
        },
        "scale-in": {
          "0%": {
            transform: "scale(0.98)",
            opacity: "0",
          },
          "100%": {
            transform: "scale(1)",
            opacity: "1",
          },
        },
        "scale-out": {
          from: {
            transform: "scale(1)",
            opacity: "1",
          },
          to: {
            transform: "scale(0.98)",
            opacity: "0",
          },
        },
        "slide-in-right": {
          "0%": {
            transform: "translateX(30px)",
            opacity: "0",
          },
          "100%": {
            transform: "translateX(0)",
            opacity: "1",
          },
        },
        "slide-in-left": {
          "0%": {
            transform: "translateX(-30px)",
            opacity: "0",
          },
          "100%": {
            transform: "translateX(0)",
            opacity: "1",
          },
        },
        "slide-in-top": {
          "0%": {
            transform: "translateY(-30px)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
        "slide-in-bottom": {
          "0%": {
            transform: "translateY(30px)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
        "pulse-slow": {
          "0%, 100%": {
            opacity: "1",
          },
          "50%": {
            opacity: "0.8",
          },
        },
        "spin-slow": {
          "0%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        float: {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-10px)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.6s ease-out",
        "fade-out": "fade-out 0.6s ease-out",
        "scale-in": "scale-in 0.4s ease-out",
        "scale-out": "scale-out 0.4s ease-out",
        "slide-in-right": "slide-in-right 0.6s ease-out",
        "slide-in-left": "slide-in-left 0.6s ease-out",
        "slide-in-top": "slide-in-top 0.6s ease-out",
        "slide-in-bottom": "slide-in-bottom 0.6s ease-out",
        "pulse-slow": "pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "spin-slow": "spin-slow 9s linear infinite",
        float: "float 5s ease-in-out infinite",
      },
      transitionDuration: {
        "400": "400ms",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-subtle":
          "linear-gradient(to right, #e0e0e0, #f5f5f5, #e0e0e0)",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        subtle: "0 5px 15px rgba(0, 0, 0, 0.05)",
        elevated: "0 10px 30px rgba(0, 0, 0, 0.08)",
        "inner-light": "inset 0 2px 4px 0 rgba(255, 255, 255, 0.05)",
        glass: "0 8px 32px 0 rgba(31, 38, 135, 0.07)",
        outline: "0 0 2px 1px rgba(0,0, 0, .05)",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
export default config;
