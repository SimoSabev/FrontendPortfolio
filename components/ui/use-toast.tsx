export const toast = ({ title, description }: { title: string; description: string }) => {
    // In a real implementation, this would use a toast library or context
    console.log(`Toast: ${title} - ${description}`)

    // Create a temporary toast element
    const toastElement = document.createElement("div")
    toastElement.className = "fixed top-4 right-4 bg-background border rounded-md shadow-md p-4 max-w-md z-50"
    toastElement.innerHTML = `
    <div class="font-semibold">${title}</div>
    <div class="text-muted-foreground">${description}</div>
  `
    document.body.appendChild(toastElement)

    // Remove after 3 seconds
    setTimeout(() => {
        toastElement.classList.add("opacity-0", "transition-opacity", "duration-300")
        setTimeout(() => {
            document.body.removeChild(toastElement)
        }, 300)
    }, 3000)
}
