import { RiLoader2Line } from "@remixicon/react"

export const LoadingSpinner =()=>{
    return( <div
        aria-label="Loading..."
        role="status"
        className="flex items-center justify-center h-full"
      >
        <RiLoader2Line size={14} className="animate-spin"/>
        </div>)
}