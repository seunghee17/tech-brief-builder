import type { SelectHTMLAttributes } from 'react'

type SelectOption = {
  label: string
  value: string
}

type SelectProps = {
  options: SelectOption[]
} & SelectHTMLAttributes<HTMLSelectElement>

export function Select({ options, ...props }: SelectProps) {
  return (
    <select className="field" {...props}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  )
}
