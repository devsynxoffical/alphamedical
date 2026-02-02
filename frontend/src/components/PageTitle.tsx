import { useEffect } from 'react'

interface PageTitleProps {
  title: string
  description?: string
}

const PageTitle: React.FC<PageTitleProps> = ({ title, description }) => {
  useEffect(() => {
    document.title = title

    if (description) {
      const metaDescription = document.querySelector('meta[name="description"]')
      if (metaDescription) {
        metaDescription.setAttribute('content', description)
      } else {
        const meta = document.createElement('meta')
        meta.name = 'description'
        meta.content = description
        document.head.appendChild(meta)
      }
    }
  }, [title, description])

  return null
}

export default PageTitle

