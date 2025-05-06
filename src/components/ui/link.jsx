import { Link as RouterLink } from "react-router-dom"
import { cn } from "../../lib/utils"

const Link = ({ 
  to, 
  children, 
  className,
  variant = "default",
  ...props 
}) => {
  const baseStyles = "transition-colors hover:text-foreground/80"
  
  const variants = {
    default: "text-foreground",
    muted: "text-muted-foreground hover:text-primary",
  }

  return (
    <RouterLink
      to={to}
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </RouterLink>
  )
}

export { Link } 