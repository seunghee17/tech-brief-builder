export function downloadMarkdown(title: string, markdown: string): void {
  const blob = new Blob([markdown], { type: 'text/markdown;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')

  link.href = url
  link.download = `${toFileName(title)}.md`
  link.click()

  URL.revokeObjectURL(url)
}

function toFileName(value: string): string {
  return value.trim().replace(/[^\w가-힣-]+/g, '-').replace(/-+/g, '-')
}
